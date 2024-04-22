// import { createClient } from "@supabase/auth-helpers-sveltekit"
import { createClient } from '@supabase/supabase-js'

import {
	PUBLIC_SUPABASE_ANON_KEY,
	PUBLIC_SUPABASE_URL,
} from "$env/static/public"

// console.log('PUBLIC_SUPABASE_ANON_KEY : ', PUBLIC_SUPABASE_ANON_KEY);
// console.log('PUBLIC_SUPABASE_URL : ', PUBLIC_SUPABASE_URL);

export const supabaseClient = createClient(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY,
)
