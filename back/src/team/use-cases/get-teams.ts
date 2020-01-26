import { TeamDbType } from '../data-access'

export interface makeGetTeamsProps {
    teamDb: TeamDbType
}

export default function makeGetTeams({teamDb} : makeGetTeamsProps) {
    return async function getTeams() {
        const teams = await teamDb.findAll();
        return teams;
    }
}
