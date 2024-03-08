<script lang="ts">
	import '../../styles.css';
</script>

<main>
	<slot />
</main>

<nav>
	<a href="/">Return to Website</a>
</nav>

<style>
	main {
		border: 10px solid rebeccapurple;
		padding: 2rem;
		margin: 1rem;
	}

	nav {
		text-align: left;
		margin: 1rem;
	}
</style>
