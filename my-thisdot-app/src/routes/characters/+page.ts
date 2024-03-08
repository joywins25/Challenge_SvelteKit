type Character = {
	id: number;
	name: string;
	image: string;
	occupation: string;
};


const API_URL = 'https://svelte.fun/api/bobs-burgers';

export const load = async ({ fetch }) => {
	const response = await fetch(`${API_URL}/characters`);
	const characters: Character[] = await response.json();

	return {
		characters
		// characters: response.json() as Promise<Character[]>
	};
};