import makeUsersDb from './users-db';
import { makeDb } from '../../utils/knex/knex-wrapper';

const usersDb = makeUsersDb({makeDb});

export default usersDb;