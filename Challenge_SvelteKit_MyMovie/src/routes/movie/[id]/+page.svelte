<script>
export let data;
console.log('>> data : ', data);
</script>

<h1>Movie Detail</h1>

<div class="movie-details">
    <!-- 
        미해결과제 : * ExA005_MovieApp_Failed001.an error 500, strict-origin-when-cross-origin :          
    -->
    <div class="txt-container">
        {#if data.props.data && data.props.data.title}
            <h2>{data.props.data.title}</h2>
            <!-- You can also display other movie details here -->
            <img src={"https://media.themoviedb.org/t/p/w780/" + data.props.data.backdrop_path} alt={data.props.data.title}>
            <h3>{data.props.data.title}</h3>
        {:else}
            <p>Loading...</p>
        {/if}
    </div>
</div>