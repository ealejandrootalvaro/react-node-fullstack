import makeGetUsers from './get-users';
import usersDb from '../data-access';

export const getUsers = makeGetUsers({ usersDb });
