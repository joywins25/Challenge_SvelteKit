// place files you want to import through the `$lib` alias in this folder.
import Database from 'better-sqlite3';
import { DB_DEV_COMMENTS_PATH } from '$env/static/private';
import type {
	Comment
} from './types';


// my_sqlite3-app.001 : production deploy 시 주의 사항.
const db = new Database(DB_DEV_COMMENTS_PATH, { verbose: console.log });


export function getInitialTracks_tbl_comments(limit=50): Comment[]{
	const sql = `
        select  t.span_u_cbox_contents_a as content 
                , t.span_u_cbox_date as date
                , t.div_u_cbox_orgsource_a as orgsource
                , t.div_u_cbox_orgsource_image_img as imgsource
                , t.strong_u_cbox_orgsource_header as header
                , t.span_u_cbox_orgsource_name as orgname     
            from tbl_comments t
            limit $limit
        `;
	const stmnt = db.prepare(sql);
	const rows = stmnt.all({limit});
	return rows as Comment[];
}
