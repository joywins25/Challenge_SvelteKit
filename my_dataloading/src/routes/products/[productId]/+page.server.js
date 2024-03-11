import { error, redirect } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {

    console.log("[productId]\+page.server.js :: serverLoadEvent 함수 실행됨...");

    const { fetch, params, url, route } = serverLoadEvent;
    console.log("params : ", params);
    console.log("url : ", url);
    console.log("route : ", route);

    const { productId } = params;

    if (productId == 4){
        throw redirect (307, "/products");
    } else if (productId > 4) {
        throw error(404, "Sorry, Your requested Product is not found!");
    }

    const res = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await res.json();

    return {
        product
    };
}