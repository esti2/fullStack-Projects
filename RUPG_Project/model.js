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
    }


};




//console.log('model loaded');