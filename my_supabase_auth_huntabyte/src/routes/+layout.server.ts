// import type { LayoutServerLoad } from "./$types";
// import { supabaseClient } from '$lib/supabase';
// import { getServerSession } from "@supabase/auth-helpers-sveltekit"

// export const load:LayoutServerLoad = async () => {
//     const session = await supabaseClient.auth.getSession();
//     console.log('session : ', session);
//     return {
//         // session: await getServerSession(event)
//         session
//     }
// }

import { getServerSession } from "@supabase/auth-helpers-sveltekit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
	console.log("Ran layout load")
	return {
		session: await getServerSession(event),
	}
}
