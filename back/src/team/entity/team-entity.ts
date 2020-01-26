export interface TeamType {
    name: string
}

export default function buildMakeTeam() {
    
    return function makeTeam( team: TeamType ) {
    
        if (!team.name) {
            throw "Name is required"
        }

        return {
            ...team
        }

    }
}