<script lang="ts">
	const UNKNOWN_IMAGE_URL = 'https://bobsburgers-api.herokuapp.com/images/character';

	export let name = '';
	export let image = UNKNOWN_IMAGE_URL;
	export let gender = '';
	export let hairColor = '';
	export let occupation = '';
	export let firstEpisode = '';
	export let voicedBy = '';
</script>


<article>
    <header><i>Bob's Burgers</i> character</header>
    <figure class="image">
        <img src="{image}" alt="{name}" loading="lazy" />
    </figure>
    <section>
        <h1>{name}</h1>
        <dl>
            <dt>Genter</dt>
            <!-- my-thisdot-app.006 :  `{gender ?? ''}`, the nullish coalescing operator. -->
            <dd>{gender ?? ''}</dd>
            <dt>Hair</dt>
            <dd>{hairColor ?? ''}</dd>
            <dt>Occupation</dt>
            <dd>{occupation ?? ''}</dd>
        </dl>
    </section>
    <section>
        <h3>Behind the scenes</h3>
        <dl>
            <dt>First Episode</dt>
            <dd>{firstEpisode ?? ''}</dd>
            <dt>Voiced By</dt>
            <dd>{voicedBy ?? ''}</dd>
        </dl>
    </section>
</article>

<style>
    article {
        widows: 800px;
        max-width: 80%;
        border: 2px solid forestgreen;
        border-radius: 0.7rem;
        box-shadow: 4px 4px 5px #555;
        margin: 3rem auto;
        padding: 2px;
    }
    section {
        padding-bottom: 1rem;
    }
    header, h1, h3 {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        color: white;
        background: forestgreen;
        padding: 0.5rem;
    }

    header {
        border-radius: 0.5em 0.5em 0 0;
    }
    h1, h3 {
        margin-bottom: 1rem;
    }
    figure{
        display: block;
        height: 255px;
        text-align: center;
        padding: 0.5rem 0;
        margin: auto;
    }
    img{
        display: block;
        height: 100%;
        width: 100%;
        object-fit: contain;
        margin: auto;
    }
    dl{
        display: grid;
        grid-template-columns: minmax(min-content, 40%) auto;
        marg: 0;
    }
    dt{
        grid-column-start: 1;
        padding: 0.5rem;
        text-align: center;
        font-weight: bold;
        marg: 0;
    }
    dd{
        grid-column-start: 2;
        padding: 0.2rem;
        margin: auto;
    }
</style>