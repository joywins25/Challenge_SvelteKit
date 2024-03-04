import { MOVIE_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }){


    try {
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`);

        const data = await res.json();
        console.log('data.results : ', data.results);

        if (res.ok) {
            console.log('okay...');
            return {
                props: { popular: data.results },
            };
        } else {
            console.log('error...');
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error here, potentially by displaying an error message to the user
    }        
}
