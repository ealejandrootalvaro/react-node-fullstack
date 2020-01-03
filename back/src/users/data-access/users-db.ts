const TABLE_NAME = 'users';

import { makeDbType } from '../../utils/knex/knex-wrapper';
import { UserType } from '../entity/user-entity'

export interface MakeUsersDbProps {
    makeDb: () => makeDbType
}

export type MakeUsersDbType = typeof makeUsersDb;

export default function makeUsersDb( { makeDb } : MakeUsersDbProps ) {

    return {
        findAll,
        insert
    }

    async function findAll() {
        const db = makeDb();
        const users = await db(TABLE_NAME).select('*');
        return users;
    }

    async function insert({ username }: UserType) {
        const db = makeDb();
        console.log("inser", username);
        await db(TABLE_NAME).insert( {username} );
    }

}