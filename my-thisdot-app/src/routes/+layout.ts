/*
file created at URL : https://youtu.be/wWRhX_Hzyf8?si=2y7t9aSNLoS8tahc&t=4510
load data from layout
여기서 생성된 데이터는 자식들도 모두 사용할 수 있는 것 같습니다.
Challenge_SvelteKit_MyProject\my-thisdot-app\src\routes\characters\[id]\+page.ts 파일을 지워도 됩니다.
*/

type DetailedCharacter = {
	id: number;
	name: string;
	image: string;
	gender: string;
	hairColor: string;
	occupation: string;
	firstEpisode: string;
	voicedBy: string;
	url: string;
	wikiUrl: string;
	relatives: { name: string; }[];
};

// const characters: Character[] = [
// 	{
// 		"id": 1,
// 		"name": "\"Dottie Minerva\"",
// 		"image": "//svelte.fun/bobs-burgers/images/1.jpg",
// 		"occupation": "Student at Wagstaff School"
// 	},
// 	{
// 		"id": 2,
// 		"name": "Mabel \"Abby\" Haddington",
// 		"image": "//svelte.fun/bobs-burgers/images/2.jpg",
// 		"occupation": "Student at Wagstaff School"
// 	},
// ]


/* 
URL : https://github.com/thisdot/sveltekit-workshop/blob/api/src/routes/api/bobs-burgers/characters/characters.json | >>> Introduction to SvelteKit | FREE 5 HOUR SVELTE WORKSHOP 2023 | Lessons + Coding Exercises - YouTube | This Dot Media | api branch | src/routes/api/bobs-burgers/characters/characters.json  
*/
const API_URL = 'https://svelte.fun/api/bobs-burgers';

export const load = async ({ fetch, params }) => {
	const { id } = params;
	const response = await fetch(`${API_URL}/characters/${id}`);
	const character: DetailedCharacter  = await response.json();

	return {
		character
		// characters: response.json() as Promise<Character[]>
	};
};