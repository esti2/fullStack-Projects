class AutoCompleteTrie {
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

    }


    //pravite
    _getRemainingTree(prefix, node) {

    }

    _allWordsHelper(prefix, node, allWords) {

    }



}