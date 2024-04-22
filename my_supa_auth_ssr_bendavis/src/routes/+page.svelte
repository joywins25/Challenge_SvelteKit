<script>
	import { invalidateAll } from '$app/navigation';

	// const { data } = $props();    
    export let data;
    console.log('data : ', data);

	// $effect(() => {
	// 	console.log('user.email : ', data.session?.user.email);
	// });
	$: {
		console.log('user.email : ', data.session?.user.email);
	}

	async function signInWithEmail() {
		const res = await data.supabase.auth.signInWithOtp({
			email: 'joywins25@gmail.com',
			options: {
				// set this to false if you do not want the user to be automatically signed up
				shouldCreateUser: true,
				emailRedirectTo: 'http://localhost:5173/auth/callback'
			}
		});
	}

	async function signInWithGithub() {
		const { user, error } = await data.supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: 'http://localhost:5173/auth/callback'
			}
		});
		// added.s.
		if (error) {
			console.error(error);
			return;
		}

		if (user) {
			// Fetch the authenticated user from the server to ensure the user is valid
			const { data: authenticatedUser, error } = await data.supabase.auth.getUser();

			if (error) {
				console.error(error);
				return;
			}

			if (authenticatedUser) {
				console.log('authenticatedUser.email : ', authenticatedUser.email);
			}
		}
		// added.e.
	}

	async function signOut() {
		await data.supabase.auth.signOut();
        console.log('signout...');

		invalidateAll();
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => signInWithEmail()}>TESTING SIGN IN EMAIL</button>
<button on:click={() => signInWithGithub()}>TESTING GITHUB</button>
<button on:click={() => signOut()}>SIGN OUT</button>

{#if data.user}
	<h2>Welcome {data.user.email}</h2>
{/if}


<h1>Welcome to SvelteKit</h1>

<h2>my_supa_auth_ssr_bendavis (non ts) : 5176</h2>
<h3>★ They're Making Supabase Better... - YouTube | Ben Davis</h3>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
