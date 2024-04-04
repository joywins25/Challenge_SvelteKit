<script>
	export let data;
</script>

<ul>
	{#each data.countries as country (country.id)}
		<li>{country.name}</li>
	{/each}
</ul>

<h1>Hi, JoyWins^_____^!!!</h1>
