import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			peoples: [],
			favoritos: [],
			token: [],
			login: false,
			img: [
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F9%2F9b%2FLuke_Skywalker.png&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nIit7LTOy8Vo_41ETzKmTgHaJQ%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XHmOOLBf_WcjvG6p4A1ehAHaHa%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.t7k_5nz0mvgM-pR02OL-KwHaD4%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fam21.akamaized.net%2Ftms%2Fcnt%2Fuploads%2F2018%2F06%2Fleia-organa-star-wars-1200x669.png&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hCxSrZLZVa-_Bq8Yn9prAgHaIJ%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.darthsanddroids.net%2Fcast%2FBeruWhitesun.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ZM-M0RhFw9y7k_LEJqsxyAHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HTA5QsVXvGo77qtWulenygHaHa%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nGR30Zsf8eyLg2F4hWaqXwHaKl%26pid%3DApi&f=1"
			],

			imgP: [
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.6OHmW5ttXzKnOeduoFjAYgHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ffz9Oq2Um_D3HlCWgr2HfwHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FHQVPLdwp3myb1n2zHR4JAHaDt%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YCP5bT5pJYGxa6-03YCidgHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tVIFB2C94uil1ltH9-7OdwHaEa%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdata1.origin.com%2Fcontent%2Fdam%2Foriginx%2Fweb%2Fapp%2Fgames%2Fbastion%2FScreenshots%2FSWBF_dlc_screenhi_930x524_en_US_bespin_cloud2_v1.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.F_nszvk-Do00ys_7OKQelwHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LxShcxHcgjmIB5H7zwBSYwHaDT%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.PJy4hhu4W9xPCbqNGr-3dQHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fv8LAz8ZQFMuWDLLMH8bNAHaDJ%26pid%3DApi&f=1"
			],

			descripPers: [
				"Luke Skywalker es una clase de redentor o elegido, conocedor intuitivo de la Fuerza, cuyo papel se acrecienta como poderoso maestro capaz de rehacer la Orden Jedi, y ser uno de los h??roes de guerra m??s importantes de la Rep??blica. Es considerado el ??ltimo caballero Jedi y uno de los m??s poderosos de todos los tiempos.",
				"Es un personaje ficticio del universo de la Guerra de las Galaxias. Se trata de un androide, dise??ado para el servicio de los humanos para llevar a cabo dichas tareas, para lo que domina seis millones de formas de comunicaci??n. El personaje aparece en los nueve episodios de la saga.",
				"R2-D2, un robot del tipo R2, perteneci?? a las fuerzas de defensa en Naboo sirvi?? al Rey Veruna durante su t??rmino. Este droide siempre estuvo alojado en la Nave Real de Naboo, al igual que otros cong??neres con la simple funci??n de reparar cualquier parte de la nave y asistir como navegantes.",
				"Anakin Skywalker nace en el planeta Tatooine, siendo hijo de Shmi Skywalker y de padre desconocido. Tanto Anakin como su madre son esclavos de Watto, un alien??gena chatarrero. El joven destaca pronto como inventor y h??bil piloto y la fuerza es detectada en ??l muy pronto.",
				"La Princesa Leia Organa de Alderaan (nacida como Leia Skywalker y m??s tarde llamada Leia Organa) es un personaje de ficci??n de la saga Star Wars. Es hija de la senadora Padm?? Amidala y del Caballero Jedi Anakin Skywalker, hermana melliza de Luke Skywalker y esposa de Han Solo.",
				"Era un granjero de humedad humano del planeta desertico Tatooine. Era el hijo de Aika y Cliegg Lars, y se convirti?? en el hermanastro del Caballero Jedi Anakin Skywalker cuando Cliegg se volvi?? a casar con Shmi Skywalker, una antigua esclava.",
				"Era una mujer humana de Tatooine. Estaba casada con Owen Lars y cri?? a Luke Skywalker despu??s de la ca??da de la Rep??blica Gal??ctica.",
				"R5-D4 pertenec??a a los Jawas de Tatooine que capturaron a R2-D2 y C-3PO cuando estos se perdieron en el desierto tras escapar de la Tantive IV con los planes de la Estrella de la Muerte, y as?? comerciar con ellos.",
				"Creci?? en Tatooine con Luke Skywalker y comparti?? los sue??os de su amigo de escapar del aburrido mundo del desierto. Despu??s de graduarse de la Academia Imperial, desert?? del servicio del Imperio para unirse a la Rebeli??n. ??l y Luke se reunieron en la base Rebelde de Yavin 4 y volaron juntos contra la Estrella de la Muerte.",
				"Obi-Wan Kenobi, un legendario Maestro Jedi, era un hombre noble y talentoso en los caminos de la Fuerza. Entren?? a Anakin Skywalker, sirvi?? como general en el Ej??rcito de la Rep??blica durante las Guerras Clon y gui?? a Luke Skywalker como mentor."
			],

			descripPlane: [
				"Planeta des??rtico circunvolucional escasamente habitado ubicado en los Territorios del Borde Exterior de la galaxia. Servio como el planeta natal de los influyentes Anakin y Luke Skywalker, que le dar??an forma a la historia gal??ctica.",
				"Planeta terrestre cubierto de monta??as. Durante las ??ltimas d??cadas de la Rep??blica Gal??ctica, fue gobernado por la Reina Breha Organa y representado en el Senado Gal??ctico por su marido, el Senador Bail Organa.",
				"La cuarta luna en ??rbita del gigante gaseoso Yavin Prime, cubierta de junglas. En alg??n momento durante la Guerra Civil Gal??ctica, alberg?? la base principal de la Alianza Para Restaurar la Rep??blica, un grupo de luchadores de la resistencia que se opon??an a la tiran??a del Imperio Gal??ctico.",
				"Un helado y remoto planeta que fue el sexto planeta del sistema estelar del mismo nombre. En particular, alberg?? la Base Eco, sede temporal de la Alianza para Restaurar la Rep??blica, hasta que el Imperio Gal??ctico localiz?? a los rebeldes, iniciando una gran confrontaci??n conocida como la Batalla de Hoth.",
				"Planeta en el sistema Dagobah, y uno de los lugares m??s puros de la galaxia dentro de la Fuerza. Un mundo lejano lleno de pantanos y bosques, sirvi?? como refugio para el Gran Maestro Jedi Yoda durante su exilio tras la destrucci??n de la Orden Jedi. Fue all?? donde Luke Skywalker recibi?? un entrenamiento del Maestro Jedi Yoda.",
				"Un inmenso gigante gaseoso ubicado en las proximidades del sistema Anoat, un sector desolado de la galaxia. Bespin ten??a varias lunas, y su masa gaseosa conten??a un estrato delgado de atm??sfera habitable.",
				"Tambi??n conocido como la Luna Boscosa de Endor o la Luna Santuario, era una peque??a luna boscosa que orbitaba el planeta del Borde Exterior de su mismo nombre y era el mundo naral de las especies inteligentes Ewoks y de Yuzzums.",
				"Planeta abundante en el Borde Medio, cerca de la frontera de los Territorios del Borde Exterior. Fue el hogar de la especie gungan y de una poblaci??n de humanos conocida como los Naboo.",
				"Tambi??n conocido como Centro Imperial durante el reinado del Imperio Gal??ctico, fue una ecumen??polis un planeta cubierto de ciudad, colectivamente conocida como Ciudad Gal??ctica en el sistema Coruscant de los Mundos del N??cleo. Aunque era asunto de debate entre los historiadores, en general se cre??a que Coruscant era el planeta natal original de la humanidad.",
				"Planeta acu??tico ubicado en un sistema estelar extragal??ctico que se encontraba al sur de la galaxia sat??lite Laberinto Rishi y m??s all?? de la galaxia conocida. Estaba habitado por los kaminoanos, una raza de seres altos y esbeltos que eran considerados como una especie misteriosa con tendencia al hermetismo."
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			//carga en el array de planets lo que se obtenga en el fetch
			getPlanets: async () => {
				const store = getStore();
				fetch("https://3000-coffee-chimpanzee-8w6w3ksl.ws-us04.gitpod.io/planet")
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(error => console.log("error", error));
			},

			//carga en el array de people lo que se obtenga en el fetch
			getPeoples: async () => {
				const store = getStore();
				fetch("https://3000-coffee-chimpanzee-8w6w3ksl.ws-us04.gitpod.io/person")
					.then(response => response.json())
					.then(data => {
						setStore({ peoples: data.results });
						//	getInfPeoples1(data.results.uid);
					})

					.catch(error => console.log("error", error));
			},

			//Agregar a un array de favoritos cuando el usuario le de click al coraz??n
			Favorite: (id, name, url) => {
				const store = getStore();
				//forma para agregar en el array de favoritos

				setStore({ favoritos: [...store.favoritos, { id: id, name: name, url: url }] });
			},

			//Funcion para eliminar los favoritos en el navbar
			Delete: i => {
				//get the store
				const store = getStore();
				//elimina el valor de acuerdo al index que se le envie
				store.favoritos.splice(i, 1);

				//sobre escribe el nuevo valor
				setStore({ favoritos: store.favoritos });
			},

			/*getInfPeoples: async id => {
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
            },*/

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
