<script>
    import Nav from '$lib/components/Nav.svelte';
	import { page } from '$app/stores';

	export let data;
</script>

<Nav/>

<h4>Path: {$page.url.pathname}</h4>

<main class="container">
    <slot />
</main>


<style>
	.active {
		color: salmon;
	}
</style>
