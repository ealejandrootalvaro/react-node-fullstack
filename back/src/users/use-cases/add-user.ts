import { UsersDbType } from '../data-access';
import { MakeUserType, UserType } from '../entity'

export interface MakeUserProps {
    usersDb: UsersDbType,
    makeUser: MakeUserType
}

export interface AddUserProps {
    user: UserType
}

export default function makeAddUser( { usersDb, makeUser } : MakeUserProps ) {
    console.log(usersDb);
    return function addUser({ user } : AddUserProps) {
        const userEntity = makeUser(user);
        console.log("userEntity", userEntity);
        return usersDb.insert(userEntity);
    }
}