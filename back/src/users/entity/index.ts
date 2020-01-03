import buildMakeUser, {UserType} from './user-entity';

const makeUser = buildMakeUser();

export type MakeUserType = ReturnType<typeof buildMakeUser>

export {UserType};

export default makeUser;