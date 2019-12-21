export default function makeAddUser( { usersDb, makeUser } ) {
    return function addUser({ user }) {
        const userEntity = makeUser(user);
        const db = usersDb();
        return db.insert(user);
    }
}