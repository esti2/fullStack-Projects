import { AutoCompleteTrie } from "./model.js";
const trie = new AutoCompleteTrie("");

let button = document.getElementById("button");
let text = document.getElementById("text");

let complete = document.getElementById("complete");

button.addEventListener("click", () => {
    if (text.value == "")
        showResult("X Cannot add empty word")
    else
        if (trie.addWord(text.value))
            showResult(`V Added ${text.value} to dictionary`)
});

complete.addEventListener("input", () => {
    let myArr = trie.predictWords(complete.value)
    let suggestions = document.getElementById("suggestions");
    if (!(myArr[0].startsWith("X")))
        for (let index = 0; index < myArr.length; index++) {
            const li = document.createElement('li');
            li.textContent = myArr[index];
            suggestions.appendChild(li);
        }
    myArr.length = 0;

})


function showResult(message) {
    let result = document.getElementById("result");
    if (message.startsWith("X")) {
        result.classList.remove('success');
        result.classList.add('fail');
    }
    else if (message.startsWith("V")) {
        result.classList.remove('fail');
        result.classList.add('success');
    }
    result.value = message;
}