import { model } from "./model.js"
import { view } from "./view.js"


async function init() {
    const users = await model.getUsers();
    view.showMainUser(users);
    const quotes = await model.getQuotesKanye();
    view.showQuoteKanye(quotes);
}

init()