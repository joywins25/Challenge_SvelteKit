<script lang="ts">
	import type { PageData } from './$types';

	export let data;
	// export let data: PageData;

	// my-thisdot-app.004 :  `data?.characters`, Optional Chaining in SvelteKit.
	$: characters = data?.characters;
</script>

<!-- my-thisdot-app.Keyword.001 :  <svelte:head> -->
<svelte:head>
	<title>Characters</title>
</svelte:head>

<a href="/">Home</a>

<h1>Characters</h1>

<ul>
	{#each data.characters as { name, id, image, occupation }}
		<li>
			<a href={`/characters/${id}`} class="picture">
				<img src={image} alt={name} />
			</a>
			<div>
				<a href={`/characters/${id}`}><b>{name}</b></a>
				<p class="occupation">{occupation ? occupation : 'Unknown'}</p>
			</div>
		</li>
	{/each}
</ul>

<style>
	h1 {
		color: forestgreen;
	}
	li {
		display: flex;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	a {
		text-decoration: none;
	}

	.picture {
		display: flex;
		height: 100px;
		width: 100px;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

    /* my-thisdot-app.005 :  `object-fit: contain;` */
	.occupation {
		color: grey;
	}
</style>
