// 기본형식 : 
// export const load = async () => {
//     const title = "갤럭시 S23";
//     return {
//         title
//     };
// }

// export const load = async () => {
//     const res = await fetch("http://localhost:4000/products");
//     const products = await res.json();
//     return {
//         products
//     };
// }

// URL : https://kit.svelte.dev/docs/load#making-fetch-requests | Loading data • Docs • SvelteKit
// SvelteKit 이 제공하는 fetch 함수 사용하기 : 
// export const load = async (loadEvent) => {
//     const {fetch} = loadEvent;
//     const res = await fetch("http://localhost:4000/products");
//     const products = await res.json();

//     return {
//         products
//     };
// }

export async function load({ fetch, params }) {
    console.log("UniversalLoad 함수는 양쪽 모두에서 실행됨...");
    const res = await fetch("http://localhost:4000/products");
    const products = await res.json();
    return { products };
}
