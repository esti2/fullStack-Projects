export const model = {
    async getUsers() {

        const user = await fetch('https://randomuser.me/api/?results=8');
        if (!user.ok)
            throw new Error("user not found");

        const dataUser = await user.json();
        const result = dataUser.results;
        return result;
    }

}

