import { UsersDbType } from "../data-access";

import { ErrorHandler } from '../../helpers/error';

interface Props {
    usersDb: UsersDbType
}

export default function makeCheckCredentials( { usersDb } : Props ) {

    return async function checkCredentials(username: string) {
        const user = await usersDb.getByUserName({username});

        if (!user || !user.length) {
            throw new ErrorHandler(400, "Usuario No encontrado");
        }

    }

}