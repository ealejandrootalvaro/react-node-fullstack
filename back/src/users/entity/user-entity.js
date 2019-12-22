export default function buildMakeUser() {
    return function makeUser( user ) {
        return {
            ...user
        }
    } 
}