const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			peoples: [],
			detalle: [],

			inf: [],
			favoritos: [],
			people1: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			getPlanets: async () => {
				const store = getStore();
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(error => console.log("error", error));
			},
			getPeoples: async () => {
				const store = getStore();
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => {
						setStore({ peoples: data.results });
						//	getInfPeoples1(data.results.uid);
					})

					.catch(error => console.log("error", error));
			},

			getInfPeoples: async id => {
				const store = getStore();

				fetch("https://www.swapi.tech/api/people/" + id)
					.then(response => response.json())
					.then(data => {
						//	setStore({ detalle: data.result });
						setStore({ detalle: data.result.properties });
					})
					.catch(result => console.log("error", result));

				console.log(store.detalle);
			},

			getInfPlanets: id => {
				const store = getStore();
				console.log(id);
				fetch("www.swapi.tech/api/planets/" + id)
					.then(response => response.json())
					.then(result => {
						// setStore({ detalle: result });
						setStore({ detalle: data.result.properties });
						//setStore({ favoritos: data.result.properties });
					})
					.catch(error => console.log("error", error));
			},

			Favorite: (id, name, url) => {
				const store = getStore();
				let demo;

				if (store.favoritos.length <= 0) {
					setStore({ favoritos: [{ id: id, name: name, url: url }] });
				} else {
					setStore({ favoritos: [...store.favoritos, { id: id, name: name, url: url }] });
				}
				console.log(store.favoritos);
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
