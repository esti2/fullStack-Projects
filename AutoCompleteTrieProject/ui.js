const prompt = require('prompt-sync')();



function displayMenu() {
    console.log(`add <word> - Add a word to the dictionary`);
    console.log(`find <word> - Check if word exists`);
    console.log(`complete <prefix> - Show all completions for prefix`);
    console.log(`help - Show commands`);
    console.log(`exit - Quit the application`);
}

function getMenuChoice() {
    const input = prompt('choose option ').trim();

    if (input.startsWith("add") || input.startsWith("find") || input.startsWith("complete") || input === "help" || input === "exit")
        return input;
    else
        return null;
}


function showErrorMessage(message) {
    console.log(message);
}


module.exports = {
    displayMenu,
    getMenuChoice,
    showErrorMessage
}