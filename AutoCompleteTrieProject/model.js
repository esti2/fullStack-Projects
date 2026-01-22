class AutoCompleteTrie {
    constructor(value, endOfWord = false) {
        this.value = value;
        this.children = {};
        this.endOfWord = endOfWord;
    }
    //let allWords = [];

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
            return "not give prefix";

        // for (let index = 0; index < prefix.length; index++) {
        //     const char = prefix[index];
        //     if (!current.children[char])
        //         return allWords;
        //     else

        this._getRemainingTree(prefix, current);

        // current = current.children[char];


        if (index === prefix.length - 1 && current.endOfWord === true)
            return true;
    }






    //pravite
    _getRemainingTree(prefix, node) {

        for (let index = 0; index < prefix.length; index++) {
            const char = prefix[index];
            if (!node.children[char])
                return;
            else if (index === prefix.length - 1) {
                node = node.children[char];
                this._allWordsHelper(prefix, node, []);
            }
            else
                //if (node.children[char] === char)
                node = node.children[char];
        }

    }

    _allWordsHelper(prefix, node, allWords) {
        // myArr = [];
        //let word = "";

        node = node.children[char];
        if (!node.endOfWord)
            return allWords += this._allWordsHelper(prefix, node, allWords);
        else
            return allWords;

    }



}

module.exports = {
    AutoCompleteTrie
}