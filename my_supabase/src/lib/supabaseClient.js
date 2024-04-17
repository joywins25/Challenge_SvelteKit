import { createClient } from '@supabase/supabase-js'

import { SUPABASE_URL, SUPABASE_KEY } from '$env/static/private';


console.log('SUPABASE_URL', SUPABASE_URL)
console.log('SUPABASE_KEY', SUPABASE_KEY)
    
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)    


export async function signInWithGithub() {
    const { data, error } = await supabase
                            .auth
                            .signInWithOAuth({
                                provider: "github",
                                options: {
                                  redirectTo: "http://localhost:5175",
                                },
                              });
                       

    if (error) {
        console.error(error);
    } else {
        console.log('signed in with Github!');
    }

  }
