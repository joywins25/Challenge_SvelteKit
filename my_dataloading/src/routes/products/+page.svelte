<script>
    export let data; // data prop    
    const products = data.products;
    console.log('product : ', products);
</script>

<h1>제품리스트</h1>
<!-- npm json-server 사용 -->
{#each products as product}
    <p>Title : {product.title}</p>
    <p>Price : {product.price}</p>
    <p>Description : {product.description}</p>
    <hr>
{/each}