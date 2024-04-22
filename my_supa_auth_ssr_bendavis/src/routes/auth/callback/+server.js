/*
https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=sveltekit&queryGroups=environment&environment=api-route#creating-a-client

*/
import { redirect } from '@sveltejs/kit';

export const GET = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;

    /*
    'code' 파라미터는 OAuth 결과 정상적인 반환값으로 보면 됩니다.
    The code parameter in the await supabase.auth.exchangeCodeForSession(code); is the authorization code that is returned by the OAuth provider after the user has successfully authenticated. 
    This code can then be exchanged for a session token, which can be used to authenticate the user on the server.
    */
	// const code = url.searchParams.get('code') as string;
	const code = url.searchParams.get('code');

	const user = await supabase.auth.getUser();

	console.log('user', user.data.user);

	const session = await supabase.auth.getSession();

	console.log('session', session.data.session);

	console.log(code);

	if (code) {
        /*
        supabase.auth.exchangeCodeForSession(code) 메서드는
        OAuth 의 정상적인 반환값인 code 파라미터를 입력받고 
        session token 으로 교환하는 것으로 이해하면 됩니다.
        The supabase.auth.exchangeCodeForSession(code) method is used to exchange an authorization code for a session token. This method is typically used after the user has successfully authenticated with an OAuth provider and has been redirected back to the application. The authorization code is then passed to the exchangeCodeForSession method, which exchanges it for a session token. The session token can then be used to authenticate the user on the server.
        ---------------------------------------------------------------

        'the setHeaders method of the redirect function.'를 이용하면 session 값을 전달할 수 있습니다.

        The exchangeCodeForSession method returns a session object, which contains the session token and other information about the user's session. 
        To pass the session to the /welcome page, you can use the setHeaders method of the redirect function.

        This will set a cookie named session with the value of the session token. 
        The cookie will be sent with every request to the /welcome page, and the server can use the cookie to authenticate the user.        
        ---------------------------------------------------------------
        const { code } = req.query;

        const { error, session } = await supabase.auth.exchangeCodeForSession(code);

        if (!error) {
            throw redirect(303, '/welcome', {
                headers: {
                'set-cookie': `session=${session.access_token}; Path=/; HttpOnly`
                }
            });
        }

        if (error) {
        // Handle error.
        }

        // Use the session token to authenticate the user on the server.
        ---------------------------------------------------------------

        ★ 반드시 안전한 페이지에서만 session cookie 를 설정해야 합니다.
        Note that you should only set the session cookie on secure pages. 
        If you are using HTTPS, you can set the secure flag on the cookie to prevent it from being sent over insecure connections.

        Here is an example of how to set the secure flag on the cookie:
        ---------------------------------------------------------------
        const { error, session } = await supabase.auth.exchangeCodeForSession(code);

        if (!error) {
            throw redirect(303, '/welcome', {
                headers: {
                'set-cookie': `session=${session.access_token}; Path=/; HttpOnly; Secure`
                }
            });
        }
        ---------------------------------------------------------------
        */
		const { error } = await supabase.auth.exchangeCodeForSession(code);
        /*
        정상적으로 실행되면 error 값은 null 이므로 if(!error) 조건문이 실행됩니다.
         If the exchange is successful, the error variable will be null. 
         If the exchange is unsuccessful, the error variable will contain an error message.
        */
		if (!error) {
			throw redirect(303, '/welcome');
		}
	}

	// return the user to an error page with instructions
	throw redirect(303, '/auth/auth-code-error');
};
