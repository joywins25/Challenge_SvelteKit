export const load = async (serverLoadEvent) => {
    console.log("serverLoadEvent 함수 실행됨...");
    const {fetch} = serverLoadEvent;
    const res = await fetch("http://localhost:4000/products");
    const products = await res.json();

    return {
        products
    };
}