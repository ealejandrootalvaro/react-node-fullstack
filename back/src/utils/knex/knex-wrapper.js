import knex from 'knex';

import connection from '../../../database/connection';

export function makeDb() {
    return knex(connection);
}