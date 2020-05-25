import makeGetUsers from './get-users';
import makeAddUser from './add-user';
import makeCheckCredentials from './check-credentials';
import usersDb from '../data-access';
import makeUser from '../entity';

export const getUsers = makeGetUsers({ usersDb });
export const addUser = makeAddUser({ usersDb, makeUser });
export const checkCredentials = makeCheckCredentials({ usersDb });
