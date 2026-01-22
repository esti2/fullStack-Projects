const ui = require(`./ui`);
const model = require(`./model`);

const trie = new model.AutoCompleteTrie('');

function handleChoice(choice) {
    if (choice.startsWith("add")) {
        const word = choice.slice(4).trim();
        trie.addWord(word);
        console.log(`✓ Added word: ${word}`);
    }
    else if (choice.startsWith("find")) {
        const word = choice.slice(5).trim();
        if (trie.findWord(word))
            console.log(`✓ ${word} exists in dictionary`);
        else
            console.log(`✓ ${word} not found in dictionary`);

    }
    else if (choice === "exit") {
        return;
    }
}




function run() {

    ui.displayMenu();
    let choice = "";
    while (choice != "exit") {
        choice = ui.getMenuChoice();
        handleChoice(choice);
    }


}

run();

