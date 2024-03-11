<script>
    // URL : https://kit.svelte.dev/docs/modules#$app-stores | Modules • Docs • SvelteKit
    import { getStores, navigating, page, updated } from '$app/stores';
</script>

<h1>{$page.error.message}</h1>

<h3>Status : {$page.status}</h3>
