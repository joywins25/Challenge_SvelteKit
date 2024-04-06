<script>
    import { page } from '$app/stores';
    console.log('path : ', $page.url);
    let isLoggedIn = true;

    let tmp_active = false;

    // _rnd_04_05_Navbar Mobile Challenge_001
    let _rnd_04_05_isOpen = false;
    function _rnd_04_05_toggleMenu(){
        _rnd_04_05_isOpen = !_rnd_04_05_isOpen;
        console.log(_rnd_04_05_isOpen);
    }
</script>


<header class="header container-fluid">
    <a href="/" class="header-brand" >Joywins</a>
    <button on:click={_rnd_04_05_toggleMenu} class="outline">_rnd_04_05_Navbar Mobile Challenge_001</button>
    {#if _rnd_04_05_isOpen}
    <!-- <div class:show={_rnd_04_05_isOpen}> -->
    <h3>{_rnd_04_05_isOpen}</h3>
    <!-- </div> -->
    {/if}
    <nav class="nav">
        <ul>
            {#if isLoggedIn}
                <li>
                    <a href="/" class:secondary={$page.url.pathname === '/'}>Home</a>
                </li>
                <li>
                    <a href="/add" class:secondary={$page.url.pathname === '/add'}>Add Book</a>
                </li>
                <li>
                    <a href="/profile" class:secondary={$page.url.pathname === '/profile'}>Profile</a>
                </li>
                <li>
                    <a href="/about" class:secondary={$page.url.pathname === '/about'}>About</a>
                </li>
                <li>
                    <a href="/logout" class:secondary={$page.url.pathname === '/logout'}>Logout</a>
                </li>
            {:else}
                <li>
                    <a href="/" class:secondary={$page.url.pathname === '/'}>Home</a>
                </li>
                <li>
                    <a href="/about" class:secondary={$page.url.pathname === '/about'}>About</a>
                </li>

                <li>
                    <a href="/login" class:secondary={$page.url.pathname === '/login'}>Login</a>
                </li>
                <li>
                    <a href="/signup" class:secondary={$page.url.pathname === '/signup'}>Sign Up</a>
                </li>
            {/if}
        </ul>

    </nav>
</header>



<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #fcfcfc;
	}

	.header-brand {
		font-size: 1.5rem;
		text-decoration: none;
		color: #025728;
	}

	.nav {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.nav-link {
		display: block;
		padding: 1rem;
		text-decoration: none;
		color: #333;
	}

	.nav-active {
		background-color: #eee;
	}

	/* 화면 너비가 768px 이하면 메뉴가 스마트폰처럼 바닥으로 깔림 */
    @media (max-width: 768px) {
		.nav {
			position: absolute;
            justify-content: center;
            align-items: center;            
			top: 100%;
			left: 0;
			width: 100%;
			background-color: #000000;
			transition: transform 0.3s ease-in-out;
			transform: translateY(-100%);
		}
	}
</style>
