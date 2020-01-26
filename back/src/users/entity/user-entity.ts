export interface UserType {
    username: string
}

export default function buildMakeUser() {
    return function makeUser( user: UserType ) {

        if (!user.username) {
            throw "Nombre es obligatorio"
        }

        return {
            ...user
        }
    } 
}