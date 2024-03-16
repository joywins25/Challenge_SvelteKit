<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<!-- Header -->
<header class="container">
	<hgroup>
		<h1>Pico</h1>
		<p>A pure HTML example, without dependencies.</p>
	</hgroup>
	<nav>
		<ul>
			<li>
				<details class="dropdown">
					<summary role="button" class="secondary">Theme</summary>
					<ul>
						<li><a href="#" data-theme-switcher="auto">Auto</a></li>
						<li><a href="#" data-theme-switcher="light">Light</a></li>
						<li><a href="#" data-theme-switcher="dark">Dark</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</nav>
</header>
<!-- ./ Header -->

<main class="container">
	<h1>Tracks</h1>
    <!-- <pre>
        <code>{JSON.stringify(data.tracks, null, 2)}</code>
    </pre> -->
	<div class="grid">
		<div>Track</div>
		<div>Artist</div>
		<div>Album</div>
		<div>Genre</div>
	</div>
	{#each data.tracks as track}
		<div class="grid">
			<div>{track.trackName}</div>
			<div>{track.artistName}</div>
			<div><a href={`/album/${track.albumId}`}>{track.albumTitle}</a></div>
			<div>{track.genre}</div>
		</div>
	{/each}
    <hr>
	<!-- <pre>
        <code>{JSON.stringify(data.comments, null, 2)}</code>
    </pre> -->
	<div class="grid">
		<div>Content</div>
		<div>Date</div>
		<div>Header</div>
		<div>OrgName</div>
	</div>
	{#each data.comments as comment}
		<div class="grid">
			<div>{comment.content}</div>
			<div>{comment.date}</div>
			<div>{comment.header}</div>
			<div>{comment.orgname}</div>
		</div>
	{/each}
    <hr>
    
	<!-- <pre>
        <code>{JSON.stringify(data.answer, null, 2)}</code>
    </pre> -->
	<div class="grid">
		<div>ID</div>
		<div>Content</div>
		<div>User ID</div>
		<div>Question ID</div>
	</div>
	{#each data.answers as answer}
		<div class="grid">
			<div>{answer.id}</div>
			<div>{answer.content}</div>
			<div>{answer.user_id}</div>
			<div>{answer.question_id}</div>
		</div>
	{/each}
    <hr>    
</main>
