import makeTeamDb from './team-db';
import { makeDb } from '../../utils/knex/knex-wrapper';

const teamDb = makeTeamDb({makeDb});

export type TeamDbType = ReturnType<typeof makeTeamDb>;
export default teamDb;