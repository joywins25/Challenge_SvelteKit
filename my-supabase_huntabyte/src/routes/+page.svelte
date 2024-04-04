<script>
let newArr = [1, 2, 3, 4, 5].map(function(v, i, o){ 
    console.log('v : ', v);
    console.log('i : ', i);
    console.log('o : ', o);
    return v*2; 
});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
