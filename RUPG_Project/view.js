export const view = {
    showMainUser(user) {
        let userMain = document.getElementById("userMain");
        userMain.innerHTML = user[0].name.first + " " + user[0].name.last;
        let img = document.getElementById("img");
        img.src = user[0].picture.thumbnail;
        let cityState = document.getElementById("cityState");
        cityState.innerHTML = user[0].location.city + " " + user[0].location.state;
        let friends = document.getElementById("friends");
        const friendsName = user.map(u => u.name.first + u.name.last);
        friends.innerHTML = "<h3>Friends</h3><div>" + friendsName.join("</div><br>");
    },

    showQuoteKanye(quoteRandom) {
        let quote = document.getElementById("quotes");
        quote.innerHTML = quoteRandom;
    },

    showPokemon(pokemon) {
        let pokemonRandom = document.getElementById("pokemon");
        pokemonRandom.innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        let img = document.getElementById("pokemonImg");
        img.src = pokemon.sprites.front_default;
    },

    showAbout(baconIpsum) {
        let about = document.getElementById("about");
        about.innerHTML = baconIpsum;
    },

    save(snapshot) {
        localStorage.setItem("savedUserPage", JSON.stringify(snapshot));
        alert("User page saved!");
    },

    load() {
        let data = localStorage.getItem("savedUserPage");
        let snapshot = JSON.parse(data);
        console.log(snapshot);
        this.showMainUser(snapshot.users);
        console.log(snapshot.about);
        this.showAbout(snapshot.baconIpsum);
        this.showPokemon(snapshot.pokemon);
        this.showQuoteKanye(snapshot.quotes);
        alert("User page loaded!");
    }
};
