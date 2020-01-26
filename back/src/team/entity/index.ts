import buildMakeTeam, { TeamType } from './team-entity';

const makeTeam = buildMakeTeam();

export {TeamType}
export type MakeTeamType = ReturnType<typeof buildMakeTeam>;
export default makeTeam;


