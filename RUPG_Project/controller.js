import { model } from "./model.js"
import { view } from "./view.js"


async function init() {
    const [users, quotes, pokemon, baconIpsum] = await Promise.all([
        model.getUsers(),
        model.getQuotesKanye(),
        model.getPokemon(),
        model.getBaconIpsum()
    ]);

    view.showMainUser(users);
    view.showQuoteKanye(quotes);
    view.showPokemon(pokemon);
    view.showAbout(baconIpsum);
    // view.init(init);

    return { users, quotes, pokemon, baconIpsum };

}

const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", init);

init()




