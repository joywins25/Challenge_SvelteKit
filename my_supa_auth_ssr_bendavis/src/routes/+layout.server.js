// import type { LayoutServerLoad } from './$types';

// export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
export const load = async ({ locals: { getSession } }) => {
	return {
		session: await getSession()
	};
};

/*
	같은 처리를 아래와 같이 다르게 표현할 수 있는 것 같습니다.

	export async function load({ fetch, params }) {
		console.log("UniversalLoad 함수는 양쪽 모두에서 실행됨...");
		const res = await fetch("http://localhost:4000/products");
		const products = await res.json();
		return { products };
	}
	-----------------------------------------------------------------------

	export const load = async (serverLoadEvent) => {
		const res = await fetch("http://localhost:4000/products");
		const products = await res.json();
		return { products };
	}
*/