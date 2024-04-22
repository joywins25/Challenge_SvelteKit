/** @type {import('./$types').PageLoad} */
export const load = async ({ locals: { supabase } }) => {
	const userFetch = await supabase.auth.getUser();

	console.log('my_supa_auth_ssr_bendavis/src/routes/+page.server.js :: load() begins...');

	return {
		user: userFetch.data.user
	};
};
