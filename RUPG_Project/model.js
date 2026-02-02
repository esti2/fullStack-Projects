export const model = {
    async getUsers() {

        const user = await fetch('https://randomuser.me/api/?results=8');
        if (!user.ok)
            throw new Error("user not found");

        const dataUser = await user.json();
        const result = dataUser.results;
        return result;
    },

    async getQuotesKanye() {
        const kanye = await fetch('https://api.kanye.rest/');
        if (!kanye.ok)
            throw new Error("kanye not found");

        const dataKanye = await kanye.json();
        const result = dataKanye.quote;
        return result;
    },

    async getPokemon() {
        const randomNumber = Math.floor(Math.random() * (1025)) + 1;
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`);
        if (!pokemon.ok)
            throw new Error("pokemon not found");

        const dataPokemon = await pokemon.json();
        const result = dataPokemon;
        return result;
    },

    async getBaconIpsum() {
        const baconIpsum = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
        if (!baconIpsum.ok)
            throw new Error("BaconIpsum not found");

        const dataBaconIpsum = await baconIpsum.json();
        const result = dataBaconIpsum;
        return result;
    },






};




//console.log('model loaded');