<script>
	import Nav from '$lib/components/Nav.svelte';
	import messageStore from '$lib/stores/messages.store.js';
    import { onMount } from 'svelte';

    onMount(()=>{
        setTimeout(()=>{
            messageStore.showSuccess('성공입니다');
            // messageStore.showError('처리에 실패했습니다')
        }, 3000);
    })

    function close_article(){
        console.log('close_article');
        messageStore.hide();
    }

	export let data;
</script>


<Nav/>


<main class="container">
    <div class="wrapper">
        {#if $messageStore.show}
            <!-- HTML Snippets :: 10 - Message Store :: Alert HTML -->
            <article class:article_error={$messageStore.type === 'error'}
                     class:article_success={$messageStore.type === 'success'}>
                <header class:header_error={$messageStore.type === 'error'}
                        class:header_success={$messageStore.type === 'success'}>
                    <strong>{$messageStore.type}:</strong>
                </header>
                <div>
                    {$messageStore.message} 
                </div>
                <button type="button" on:click={close_article} class="article_close_button">Close</button>
            </article>
        {/if}

        <slot />
    </div>
</main>

<style>
    .wrapper {
        padding-top: 20px;
    }
    article {
        display: flex;
        flex-direction: column;
        justify-content: center; /* Vertically center the content */
        align-items: center; /* Horizontally center the content */    
    }

    .header_error {
        color: yellow;
        background-color: red;
    }
    .article_error {
        background-color: red;
    }
    .header_success {
        color: yellow;
        background-color: green;
    }
    .article_success {
        background-color: green;
    }
    .header_hide {
        color: yellow;
        background-color: blue;
    }
    .article_hide {
        background-color: blue;
    }

    .article_close_button {
        height: 80%; 
    }
</style>
