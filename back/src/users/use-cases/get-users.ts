import { UsersDbType } from '../data-access';

interface MakeGetUsersProps {
    usersDb: UsersDbType
}

export default function makeGetUsers( { usersDb } : MakeGetUsersProps ) {
    return async function getUsers() {
        const users = await usersDb.findAll();
        return users;
    }
}