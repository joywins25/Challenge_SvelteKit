<script>
	import PopularMovies from '../components/PopularMovies.svelte';

	export let data;
	// console.log('data.props.popular : ', popular);
	const popular = data.props.popular;
	console.log('popular : ', popular);
</script>

<h1>Welcome to SvelteKit go...</h1>

<section>
	<!-- 속성명과 변수명이 같으면 {popular} 로 됩니다. -->
    <PopularMovies {popular} />
</section>