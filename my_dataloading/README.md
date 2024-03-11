# Memo
## 요약 SvelteKit(스벨트킷) 튜토리얼 - 20 - Loading Data :  
### JSON-SERVER : 
* URL : https://www.npmjs.com/package/json-server | >> SvelteKit(스벨트킷) 튜토리얼 Part.2 - YouTube | 코딩셀러 - Build and Sell | json-server - npm
* Challenge_SvelteKit_MyProject\my_dataloading\mydb.json 파일 생성하기.
* Challenge_SvelteKit_MyProject\my_dataloading\package.json 파일에  "serve-json": "json-server --watch mydb.json --port 4000" 설정 추가하기.
* npm run serve-json 실행하고 http://localhost:4000/ 페이지 실행 확인하기.
* URL : https://kit.svelte.dev/docs/load#making-fetch-requests | Loading data • Docs • SvelteKit

## 요약 SvelteKit(스벨트킷) 튜토리얼 - 22 - Universal Load Function : 
### a html link vs ( url at web browser 입력 후 페이지 이동 or F5 새로고침 ) : 
* a html link 를 클릭하면 클라이언트에서만 console 실행됨.
    + Universal Load 함수가 실행되지 않습니다.
    + Server Load 함수가 실행되지 않습니다.
* url at web browser 를 입력하고 페이지 이동하면 클라이언트, 서버 양쪽 모두에서 실행됨.
    + Universal Load 함수가 실행됩니다.
    + Server Load 함수가 실행됩니다.

## 요약 SvelteKit(스벨트킷) 튜토리얼 - 23 - Server Load Function : 
* Server Load 함수 : DB, 외부 API 등 외부에 노출되면 안되는 작업에 사용합니다.

## 요약 SvelteKit(스벨트킷) 튜토리얼 - 25 - error & redirect : 
* '$'기호를 사용하면 store 에 접근할 수 있습니다.
    + URL : https://kit.svelte.dev/docs/modules#$app-stores | Modules • Docs • SvelteKit


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
