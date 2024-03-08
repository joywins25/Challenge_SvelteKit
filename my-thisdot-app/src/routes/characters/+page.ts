type Character = {
	id: number;
	name: string;
	image: string;
	occupation: string;
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

export const load = async ({ fetch }) => {
	const response = await fetch(`${API_URL}/characters`);
	const characters: Character[] = await response.json();

	return {
		characters
		// characters: response.json() as Promise<Character[]>
	};
};