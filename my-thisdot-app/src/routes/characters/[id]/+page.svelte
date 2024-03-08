<script lang="ts">
    // import Character from '../../../lib/components/Character.svelte';
    import Character from '$lib/components/Character.svelte';
	export let data;

	// my-thisdot-app.004 :  `data?.characters`, Optional Chaining in SvelteKit.
	$: character = data?.character;
</script>

<!-- my-thisdot-app.Keyword.001 :  <svelte:head> -->
<svelte:head>
	<title>{character.name}</title>
</svelte:head>

<a href="/">Home</a>
<a href="/characters">Characters</a>

<Character {...character} />
