const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: []
		},
		actions: {
			loadPeople: async () => {
				try {
					const resp = await fetch(getStore().url + '/people');
					if (!resp.ok) throw new Error("Error loading characters");
					const data = await resp.json();
					console.log(data);
					setStore({ people: data.results });
				} catch (error) {
					console.error(error);
				} 
			},
			loadPerson: async (uid) => {
				try {
					const resp = await fetch(getStore().url + '/people/' + uid); 
					if (!resp.ok) throw new Error("Error loading character");
					const data = await resp.json();
					console.log(data);
					setStore({ person: data.result });
				} catch (error) {
					console.error(error);
				} 
			} 
		} 
	}; 
};

export default getState;
