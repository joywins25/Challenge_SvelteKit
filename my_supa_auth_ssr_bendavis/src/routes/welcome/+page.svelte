<!-- /*
$props()

	The $props() function is a new feature in SvelteKit 1.0 that allows you to access the props that were passed to a component. 
	It is similar to the props object in Svelte, but it is more convenient to use because you don't have to explicitly declare the props that you want to access.
	
	Here is an example of how to use the $props() function:
-------------------------------------------------------------------
	<script lang="ts">
	const { data } = $props();

	console.log(data);
	</script>
-------------------------------------------------------------------	
	In this example, the data object is passed to the component as a prop. 
	The $props() function allows us to access the data object without having to explicitly declare it in the script block.
-------------------------------------------------------------------
*/ -->

<!-- /*
$effect()

	The $effect() function is another new feature in SvelteKit 1.0 that allows you to perform side effects in a component. 
	Side effects are actions that can affect the state of the application, such as making an API request or setting a timer.

	Here is an example of how to use the $effect() function:
-------------------------------------------------------------------
	<script lang="ts">
	$effect(() => {
		console.log('This is a side effect');
	});
	</script>
-------------------------------------------------------------------		
	In this example, the $effect() function is used to log a message to the console. 
	The $effect() function is called after the component has been mounted, and it is called again whenever the component's state changes.
-------------------------------------------------------------------
*/ -->
<script>
	// Get the data prop from the component's props
	const data = props.data;
	// const { data } = $props();
	// // console.log('my_supa_auth_ssr_bendavis\src\routes\welcome\+page.svelte :: data : ', data);

	// Perform a side effect to get the current user's session
	$:data.supabase.auth.getSession().then((res) => {
		console.log(res);
	});
	// $effect(() => {
	// 	data.supabase.auth.getSession().then((res) => {
	// 		console.log(res);
	// 	});
	// });
</script>

<h2>welcome to site</h2>
<a href="/">home</a>

{#if data.user}
	<div>WELCOME: {data.user.email}</div>
{/if}
