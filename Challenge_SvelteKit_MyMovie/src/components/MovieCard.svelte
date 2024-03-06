<script>
    export let movie;
</script>


<div class="movie-card">
    <!-- https://api.themoviedb.org/3/movie/movie_id -->
    <a href={'/movie/' + movie.id}>
        <img src="{'https://image.tmdb.org/t/p/w500' + movie.poster_path}" alt={movie.title}/>    
    </a>
    <div class="description">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
    </div>
</div>

<style>
    /* 
    ExA005_MovieApp_Ref002.'height: 30vh;' + 'object-fit: cover;' + 'display: flex;'
    */
    img{
        width: 100%;
        height: 30vh;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }
    h2{
        font-size: 1.2rem;
        margin-top: 0.5rem;
    }
    .description{
        height: 8vh;
    }
    p{
        font-size: 1rem;
    }
    .movie-card{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem;
    }
</style>