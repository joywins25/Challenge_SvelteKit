<script lang="ts">
import type { PageData } from './$types';
export let data: PageData;
</script>

<h1 class="is-size-1">Tracks</h1>

<pre>
    <code>{JSON.stringify(data.tracks, null, 2)}</code>
    <!-- <code>{JSON.stringify(data.comments, null, 2)}</code> -->
    <!-- <code>{JSON.stringify(data.answer, null, 2)}</code> -->
</pre>
