# my_supa_auth_ssr

---
## Questions : 
```
    you are my senior software expert on sveltekit and supabase from now on.
    we are making a web application using them.
    there is a sample source which we should replace some sources for using '@supabase/auth-helpers-sveltekit'
    with new source for using '@supabase/ssr'.
    00.url : https://github.com/huntabyte/sk-supabase-auth/tree/final-code
    so our mission is to make a sveltekit web application to login and logout by converting the sample source
    into a new source for using '@supabase/ssr'.

    there are many helpful sample sources on github and tutorials on youtube 
    to show how to use supabase with sveltekit.
    but they can not solve all the questions because an issue has occurred 
    since supabase decided to relace a library of '@supabase/auth-helpers-sveltekit'
    with a new library of '@supabase/ssr'.
    as almost of sample sources and tutorials were made before the change of supabase's ploicy
    to swith a new library,
    I should rely on the document of supabase but have some difficulty to utilize and adapt to my requirements.
    here are the urls of the document by supabase as followings :
    01.url : https://supabase.com/docs/guides/auth/server-side/migrating-to-ssr-from-auth-helpers?queryGroups=framework&framework=sveltekit
    02.url : https://supabase.com/docs/guides/auth/server-side/creating-a-client
    03.url : https://supabase.com/docs/guides/auth/server-side/email-based-auth-with-pkce-flow-for-ssr
    04.url : https://supabase.com/docs/guides/auth/server-side/oauth-with-pkce-flow-for-ssr

    keep in mind all the above information to asnwer all of my questions from now on.
    you are very important to make the world better by helping me to complete this sample source
    because I will show a very important and innovative idea to make the world better
    using my web application which I make for myself based on this skill,
    so I hope you will help me with the same vocation to make the world better!
    do you agree with my questions?
```

### Step by step solution :

#### 00. reset :

* 이전 작업 캐쉬 청소하고 새로 시작하기 :  
```
npm cache clean --force
npm run dev
```
#### 01. Creating a Supabase Client for SSR : 
##### 01.01. Install the @supabase/ssr package : 
*  The @supabase/ssr package extends the core concepts of Auth Helpers and makes them available to any server framework.
```
npm install @supabase/ssr @supabase/supabase-js -D
npm install cookie -D
```
---
##### 01.02.Initialize Supabase Client :
```
I have created a web application of sveltekit 'my_supa_auth_ssr' which I selected typescript, eslint, prettier.
and I have installed all the dependencies including supabase's libraries as follows :
'npm install @supabase/ssr @supabase/supabase-js -D'

show the next step with example sources which I should do?
```
* First, you need to initialize the Supabase client with your Supabase project URL and public API key. 
* This should be done in a central location, such as a supabase.ts file in your project.
```
// src/lib/supabase.ts

import { createClient } from '@supabase/ssr';

export const supabase = createClient(
  'https://your_project_id.supabase.co',
  'your_public_api_key'
);
```
---
##### 01.03.Implement Authentication : 
* Now, you can implement authentication features such as sign-up, sign-in, and sign-out in your components.

