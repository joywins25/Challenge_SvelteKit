// place files you want to import through the `$lib` alias in this folder.
import Database from 'better-sqlite3';
import { DB_DEV_MYAPI_PATH } from '$env/static/private';
import type {
	Answer
} from './types';


// my_sqlite3-app.001 : production deploy 시 주의 사항.
const db = new Database(DB_DEV_MYAPI_PATH, { verbose: console.log });


export function getInitialTracks_answer(limit=50): Answer[] {
	const sql = `
        select t.id as id
                , t.content as content
                , t.create_date as create_date
                , t.question_id as question_id
                , t.user_id as user_id
                , t.modify_date as modify_date
            from answer t
            limit $limit
        `;
	const stmnt = db.prepare(sql);
	const rows = stmnt.all({limit});
	return rows as Answer[];
}
