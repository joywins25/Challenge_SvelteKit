<!--  
    file created at URL : https://youtu.be/wWRhX_Hzyf8?si=FbNZJ8FHihpNlmV6&t=4142 
-->

<script>
    import "../../../styles.css";
</script>


<section>
	<aside>
		<nav>
			<ul>
				<li>
					<a href="/about/team">The Team</a>
				</li>
				<li>
					<a href="/about/story">Our Story</a>
				</li>
				<li>
					<a href="/about/commitment">Our Commitment</a>
				</li>
			</ul>
		</nav>
	</aside>

	<div class="main">
		<slot />
	</div>
</section>


<style>
	section {
		display: flex;
		gap: 2rem;
	}

	.main {
		flex: 1;
	}
</style>
