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


    return { users, quotes, pokemon, baconIpsum };



}
init()




