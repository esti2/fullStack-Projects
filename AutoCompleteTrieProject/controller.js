const ui = require(`./ui`);
const model = require(`./model`);

const trie = new model.AutoCompleteTrie('');

function handleChoice(choice) {
    if (choice.startsWith("add")) {
        const word = choice.slice(4).trim();
        trie.addWord(word);
        return `✓ Added word: ${word}`;
    }
    else if (choice.startsWith("find")) {
        const word = choice.slice(5).trim();
        if (trie.findWord(word))
            return `✓ ${word} exists in dictionary`;
        else
            return `✓ ${word} not found in dictionary`;

    }
    else if (choice.startsWith("complete")) {
        const word = choice.slice(9).trim();
        const myArr = trie.predictWords(word);
        if (Array.isArray(myArr) && myArr.length > 0)
            return `Suggestions for '${word}': ${myArr}`;
        else
            return `✓ ${word} not found in trie`;
    }
    else if (choice === "exit") {
        return;
    }
}




function run() {

    ui.displayMenu();
    let choice = "";
    let response = "";
    while (choice !== "exit") {
        choice = ui.getMenuChoice();
        if (!choice) {
            ui.showErrorMessage("Invalid input. Please try again.");
            continue;
        }
        response = handleChoice(choice);
        if (response)
            ui.showErrorMessage(response);
    }
}

run();

