import { makeDbType } from '../../utils/knex/knex-wrapper';
import { TeamType } from '../entity';

export interface MakeTeamDbProps {
    makeDb: () => makeDbType
}

export type MakeTeamDbType = typeof makeTeamDb;

const TABLE = "team";

export default function makeTeamDb({ makeDb }: MakeTeamDbProps) {

    return {
        findAll,
        insert
    }

    async function findAll() {
        const db = makeDb();
        const teams = await db(TABLE).select('*');
        return teams;
    }

    async function insert({ name }: TeamType) {
        const db = makeDb();
        await db(TABLE).insert({name});
    }

}