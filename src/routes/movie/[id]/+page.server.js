// URL : https://developer.themoviedb.org/reference/movie-details

import { MOVIE_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function load({fetch, params}){

    console.log('params.id : ', params.id);

    try {
        const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US&api_key=${MOVIE_API_KEY}`;
        console.log('url : ', url);

        const res = await fetch(url);        
        const data = await res.json();
        console.log('data : ', data);

        if (res.ok) {
            console.log('okay...');
            return {
                props: { data },
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
