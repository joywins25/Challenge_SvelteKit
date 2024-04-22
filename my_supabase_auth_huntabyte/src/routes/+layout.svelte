<script lang="ts">
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase';
	import { invalidateAll } from '$app/navigation';

	// import { invalidateAll } from '$app/navigation';
	// import { supabaseClient } from '$lib/supabase';
	// import { onMount } from 'svelte';
	// import '../app.postcss';

	onMount(() => {
        /*
        supabaseClient.auth.onAuthStateChange() : 
            (method) GoTrueClient.onAuthStateChange(callback: (event: AuthChangeEvent, session: Session | null) => void | Promise<void>): {
                data: {
                    subscription: Subscription;
                };
            }
    
            Receive a notification every time an auth event happens.
    
            @param callback — A callback function to be invoked when an auth event happens.
        */
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			console.log('Auth state change detected');

            /*
                invalidateAll() : 
                (alias) function invalidateAll(): Promise<void> import invalidateAll

                causes all 'load' functions belonging to the currently active page to re-run.
                returns a 'promise' that resolves when the page is subsequently updated.
            */
			invalidateAll();
		});

		return () => {
            // unsubscribe() 해서 memory leak 방지합니다.
			subscription.unsubscribe(); 
		};
	});

</script>

<h3>따뜻하게 대하되 응원하기 위해 의심하고 가장 강한 비판은 대안을 제시하는 것이다!!!</h3>

<slot />
