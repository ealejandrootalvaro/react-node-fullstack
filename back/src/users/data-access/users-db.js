const TABLE_NAME = 'users';

export default function makeUsersDb( { makeDb } ) {

    return {
        findAll,
        insert
    }

    async function findAll() {
        const db = makeDb();
        const users = await db(TABLE_NAME).select('*');
        return users;
    }

    async function insert({ username }) {
        const db = makeDb();
        console.log("inser", username);
        await db(TABLE_NAME).insert( {username} );
    }

}