export default function makeUsersDb( { makeDb } ) {

    return {
        findAll
    }

    async function findAll() {
        const db = makeDb();
        const users = await db('users').select('*');
        return users;
    }

}