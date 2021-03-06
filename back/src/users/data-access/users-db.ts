import { makeDbType } from '../../utils/knex/knex-wrapper';
import { UserType } from '../entity/user-entity'

const TABLE_NAME = 'users';

export interface MakeUsersDbProps {
    makeDb: () => makeDbType
}

export type MakeUsersDbType = typeof makeUsersDb;

export default function makeUsersDb( { makeDb } : MakeUsersDbProps ) {

    return {
        findAll,
        insert,
        getByUserName
    }

    async function findAll() {
        const db = makeDb();
        const users = await db(TABLE_NAME).select('*');
        return users;
    }

    async function insert({ username }: UserType) {
        const db = makeDb();
        await db(TABLE_NAME).insert( {username} );
    }

    async function getByUserName({ username }: UserType) {
        const db = makeDb();
        const user = await db(TABLE_NAME).select('*').where("username", username);
        return user; 
    }

}