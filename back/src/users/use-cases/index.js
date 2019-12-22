import makeGetUsers from './get-users';
import makeAddUser from './add-user';
import usersDb from '../data-access';
import makeUser from '../entity';

export const getUsers = makeGetUsers({ usersDb });
export const addUser = makeAddUser({ usersDb, makeUser });
