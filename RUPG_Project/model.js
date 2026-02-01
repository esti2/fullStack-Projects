
async function getUsers() {

    const user = await fetch('https://randomuser.me/api/?results=10');
    if (!user.ok)
        throw new Error("user not found");

    const dataUser = await user.json();

    console.log(dataUser.picture);

}

getUsers();