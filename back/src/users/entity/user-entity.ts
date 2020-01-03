export interface UserType {
    username: string
}

export default function buildMakeUser() {
    return function makeUser( user: UserType ) {
        return {
            ...user
        }
    } 
}