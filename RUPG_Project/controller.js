import { model } from "./model.js"
import { view } from "./view.js"

let currentData = {
    users: null,
    quotes: null,
    pokemon: null,
    baconIpsum: null
};

async function init() {
    const [users, quotes, pokemon, baconIpsum] = await Promise.all([
        model.getUsers(),
        model.getQuotesKanye(),
        model.getPokemon(),
        model.getBaconIpsum()
    ]);

    currentData.users = users;
    currentData.quotes = quotes;
    currentData.pokemon = pokemon;
    currentData.baconIpsum = baconIpsum;

    view.showMainUser(users);
    view.showQuoteKanye(quotes);
    view.showPokemon(pokemon);
    view.showAbout(baconIpsum);

    return { users, quotes, pokemon, baconIpsum };
}

function save() {
    view.save(currentData);
}

function load() {
    console.log("gffedh");
    view.load(currentData);
}

const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", init);

const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", save);

const loadBtn = document.getElementById("load");
loadBtn.addEventListener("click", load);

init()




