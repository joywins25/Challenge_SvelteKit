<script>
	import Nav from '$lib/components/Nav.svelte';
	import messageStore from '$lib/stores/messages.store.js';
    import { onMount } from 'svelte';

    onMount(()=>{
        setTimeout(()=>{
            messageStore.showSuccess('성공입니다');
            // messageStore.showError('처리에 실패했습니다')
            console.log('messageStore.type : ', $messageStore.type);
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
            <article class:article_error={$messageStore.type.toLowerCase() === 'error'}
                     class:article_success={$messageStore.type.toLowerCase() === 'success'}>
                <header class:header_error={$messageStore.type.toLowerCase() === 'error'}
                        class:header_success={$messageStore.type.toLowerCase() === 'success'}>
                    <strong>처리 결과 : {$messageStore.type.toLowerCase() === 'error' ? '오류 발생' : '작업 성공'}</strong>
                </header>
                <div class="article_message">
                    {$messageStore.message} 
                </div>
                <button type="button" on:click={close_article} class="article_close_button">Close</button>
            </article>
        {/if}

        <slot />
    </div>
</main>


<style>
    article {
        display: flex;
        flex-direction: column;
        justify-content: center; /* Vertically center the content */
        align-items: center; /* Horizontally center the content */    
    } 

    .wrapper {
        padding-top: 20px;
    }
    header.header_error {
        color: yellow;
        background-color: red;
    }
    article.article_error {
        background-color: red;
    }
    header.header_success {
        color: yellow;
        background-color: green;
    }
    article.article_success {
        background-color: green;
    }

    .article_message {
        margin-bottom: 30px;
        color: white;
    }

    .article_close_button {
        height: 80%; 
    }
</style>
