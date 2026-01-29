export class AutoCompleteTrie {
    constructor(value, endOfWord = false) {
        this.value = value;
        this.children = {};
        this.endOfWord = endOfWord;
    }


    addWord(word) {
        let current = this;
        for (let index = 0; index < word.length; index++) {
            const char = word[index];
            if (!current.children[char]) {
                current.children[char] = new AutoCompleteTrie(char);
            }
            current = current.children[char];

            if (index === word.length - 1) {
                current.endOfWord = true;
                return true;
            }

        }
    }

    findWord(word) {
        let current = this;
        if (word.length === 0)
            return "not give word";

        for (let index = 0; index < word.length; index++) {
            const char = word[index];
            if (!current.children[char])
                return false;
            else
                current = current.children[char];

            if (index === word.length - 1 && current.endOfWord === true)
                return true;
        }
        return false;
    }



    predictWords(prefix) {
        let current = this;

        if (prefix.length === 0)
            return "X not give prefix";

        let node = this._getRemainingTree(prefix, current);
        if (node) {
            return this._allWordsHelper(prefix, node, [])
        }
        else
            return "X There are no words beginning with ";
    }

    //pravite
    _getRemainingTree(prefix, node) {
        for (let index = 0; index < prefix.length; index++) {
            const char = prefix[index];
            if (!node.children[char])
                return null;

            else {
                node = node.children[char]
            }
        }
        return node;
    }


    _allWordsHelper(prefix, node, allWords) {

        if (node.endOfWord) {
            allWords.push(prefix);
        }
        for (const char in node.children) {
            const childNode = node.children[char];
            this._allWordsHelper(prefix + char, childNode, allWords);
        }
        return allWords;
    }
}



