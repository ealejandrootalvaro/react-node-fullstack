import makeGetTeams from './get-teams';
import makeAddTeam from './add-team';
import makeTeam from '../entity';
import teamDb from '../data-access';

export const getTeams = makeGetTeams({teamDb});
export const addTeam = makeAddTeam({ teamDb, makeTeam });