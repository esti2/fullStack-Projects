import { model } from "./model.js"
import { view } from "./view.js"


async function init() {
    const users = await model.getUsers();
    view.showMainUser(users);
    const quotes = await model.getQuotesKanye();
    view.showQuoteKanye(quotes);
    //const pokemon = await model.getPokemon();
    //view.showPokemon(pokemon);
    const baconIpsum = await model.getBaconIpsum();
    view.showAbout(baconIpsum);


}

init()