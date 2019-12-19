export default function makeLogin(signToken) {
    return function login({username}) {
        const token = { name: username }
        return signToken(token);
    }
}