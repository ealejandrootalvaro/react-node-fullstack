export default function makeAddUser( { usersDb, makeUser } ) {
    console.log(usersDb);
    return function addUser({ user }) {
        const userEntity = makeUser(user);
        console.log("userEntity", userEntity);
        return usersDb.insert(userEntity);
    }
}