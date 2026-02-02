export const view = {
    showMainUser(user) {

        let userMain = document.getElementById("userMain");
        userMain.innerHTML = user[0].name.first + " " + user[0].name.last;
        let img = document.getElementById("img");
        img.src = user[0].picture.thumbnail;
        let cityState = document.getElementById("cityState");
        cityState.innerHTML = user[0].location.city + " " + user[0].location.state;
        let friends = document.getElementById("friends");
        const friendsName = user.map(u => u.name.first + u.name.last + "<br>");
        // const friendsNameFix = friendsName.replace(",", "");
        friends.innerHTML = "Friends" + friendsName;


    },


    showQuoteKanye(quoteRandom) {
        let quote = document.getElementById("quotes");
        quote.innerHTML = quoteRandom;
    },

    showPokemon(pokemon) {
        let pokemonRandom = document.getElementById("pokemon");
        pokemonRandom.innerHTML = pokemon.name;
        let img = document.getElementById("pokemonImg");

        img.src = pokemon.sprites.front_default;
    },


    showAbout(baconIpsum) {
        let about = document.getElementById("about");
        about.innerHTML = baconIpsum;
    }

};
