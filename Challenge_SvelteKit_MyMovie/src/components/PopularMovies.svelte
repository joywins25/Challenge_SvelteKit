<script>
    import MovieCard from "./MovieCard.svelte";
    export let popular;
    console.log('popular[0] : ', popular[0]);
</script>

<h2>Popular Movies</h2>
<div class="popular-movies">
    {#each popular as movie}
        <MovieCard {movie}/>
    {/each}
</div>

<style>
    h2{
        padding: 0 1rem;
    }
    .popular-movies{
        display: grid;
        /* 
        grid-template-columns : 
        Grid 컨테이너의 트랙(행 또는 열) 중 열 (column) 트랙 내의 아이템들의 크기를 지정하는 속성입니다.
        기본적인 진행 방향은 왼쪽 → 오른쪽 입니다.

        repeat(반복할횟수, minmax(최소크기, 최대크기)) : 동일하게 반복되는 크기를 한줄로 처리합니다.

        grid-column-gap : 좌우여백을 조절합니다.
         */
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }
</style>
