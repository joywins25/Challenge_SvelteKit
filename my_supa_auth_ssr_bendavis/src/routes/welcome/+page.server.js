/*
	locals 변수에 'my_supa_auth_ssr_bendavis\src\hooks.server.js'에서 받은 supabase 변수를 담고있기 때문에 getUser() 를 사용할 수 있다고 이해하면 됩니다.
	Q. is this correct explanation that the method 'getUser()' is available because the variable of 'locals' has the attribute of 'supabase' which derived from the value of 'event.locals.supabase' at 'my_supa_auth_ssr_bendavis\src\hooks.server.js'?
	-------------------------------------------------------------------
	A. Yes, that is correct. 
	The locals object is a special object that is passed to all server-side routes and endpoints. 
	The locals object contains a number of properties, including supabase, which is an instance of the Supabase client.
	
	The supabase instance is created in the hooks.server.js file, and it is passed to the locals object in the handle function. 
	The handle function is a special function that is called before every server-side route or endpoint is executed.
	
	Here is the relevant code from the hooks.server.js file:
	-------------------------------------------------------------------
	import { createRequestHandler } from '@remix-run/server-runtime';
	import { SupabaseClient } from '@supabase/supabase-js';

	const supabase = new SupabaseClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

	export const handle = async (event) => {
	const requestHandler = createRequestHandler({
		build: require('./build').default,
		mode: process.env.NODE_ENV,
		getLoadContext: (context) => ({
		supabase,
		}),
	});

	return requestHandler(event);
	};
	-------------------------------------------------------------------
*/
export const load = async ({ locals }) => {
	const user = await locals.supabase.auth.getUser();

	return { user: user.data.user };
};
