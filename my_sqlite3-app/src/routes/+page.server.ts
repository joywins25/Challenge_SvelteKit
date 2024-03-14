import { getInitialTracks } from '$lib/server/db';
import { getInitialTracks_tbl_comments } from '$lib/server/db_comments';
import { getInitialTracks_answer } from '$lib/server/db_myapi';

import type { PageServerLoad } from './$types';

export const load = (({ locals }) => {
	const tracks = getInitialTracks();
	const comments = getInitialTracks_tbl_comments();
	const answer = getInitialTracks_answer();

	return {
		tracks,
        comments,
        answer
	};
}) satisfies PageServerLoad;
