// URL :  https://github.com/PacktPublishing/Master-Svelte-Framework---The-Complete-Course/blob/main/Section%203/intro-site-5-server-load-functions-with-env-variables/src/routes/stock/%5Bstock%5D/%2Bpage.server.js

// URL : https://polygon.io/docs/stocks/get_v2_aggs_ticker__stocksticker__range__multiplier___timespan___from___to

import { API_KEY } from '$env/static/private';
import { PUBLIC_API_KEY } from '$env/static/public';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	/*
	load() 은 server-side function 이므로 브라우저 개발자 도구엔 출력되지 않습니다.
		The load() function is a server-side function that is called before the page is rendered on the client. 
		This means that the console.log() statements in the load() function are executed before the browser window is even open, so they are not visible in the browser console.

		클라이언트 개발자도구 console 에 출력시키기 위해서는 client-side 에 있는
		js 파일이나 svelte 콤포넌트에 console.log() 를 코딩하면 됩니다.

		특수한 방법이긴 하지만, server-side 함수인 load() 함수에서 console.log() 를
		브라우저 개발자도구 console 에서 확인하는 방법은 크롬브라우저 확장프로그램을 설치하고
		설정을 해주는 경우엔 가능할 수 있습니다.
			Another way to see the outputs of the console.log() statements in the browser console is to use a browser extension that allows you to debug server-side code. 
			There are a number of different extensions available, but one popular one is the Chrome DevTools Extensions - React Developer Tools extension.

				Once you have installed the extension, you can enable server-side debugging by going to the Chrome DevTools > Settings > Experiments tab and enabling the "Enable server-side debugging" checkbox. 
				You can then use the browser console to debug your server-side code.			
	*/
	

    const url = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`
    // const url = `https://api.polygon.io/v2/aggs/ticker/${params.stock}/range/1/day/2023-01-09/2023-01-09?apiKey=${API_KEY}`
    console.log('load'); // 터미널에만 출력됩니다.

    try {
        const response = await fetch(url);
        const json = await response.json();

        if (json.status === 'ERROR') {
            throw error(500, 'My Error Message : There was an error');
        }

        return json;
    } catch (e) {
        throw error(500, 'My Error Message : There was an error');
    }
}