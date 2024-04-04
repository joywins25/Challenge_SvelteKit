import { supabase, signInWithGithub } from "$lib/supabaseClient";

export async function load() {

  const user = signInWithGithub()

  if (!user) {
    return {
      status: 302,
      redirect: '/signin'
    };
  }else{
    console.log('user : ', user);
  }  

  // Get all countries from the database.
  const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? [],    
  };

}
