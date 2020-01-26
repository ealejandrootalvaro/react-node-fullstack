import { TeamDbType } from '../data-access'
import { MakeTeamType, TeamType } from '../entity'

export interface makeAddTeamProps {
    teamDb: TeamDbType,
    makeTeam: MakeTeamType
}

export interface addTeamProps {
    team: TeamType
}

export default function makeAddTeam({teamDb, makeTeam} : makeAddTeamProps) {
    return function addTeam({team} : addTeamProps) {
        const teamEntity = makeTeam(team);
        teamDb.insert(teamEntity);
    }
}
