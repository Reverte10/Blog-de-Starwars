import axios from "axios"

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			characters: [],
			infoCharacters:[],
			planets:[],
			infoPlanets:[],
			vehicles:[],
			infoVehicles:[],
			favoritos:[],
			token:"",
			log: false,
		


			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			// changeLog: () => {setStore({log:true})
		
			// 				setStore({favoritos:[]})},

			logout: () => {
				localStorage.removeItem("token")
				setStore({log:false})

				return false
			},

			login: async (dataEmail,dataPassword) => {

				try {

					let data = await axios.post('https://shiny-rotary-phone-rjrg54j449v2w544-3001.app.github.dev//api/login',{

						email:dataEmail,

						password:dataPassword

					})

					console.log(data);

					localStorage.setItem("token",data.data.access_token)

					setStore({token:data.data.access_token})
					setStore({log:false})

					return true;

				} catch (error) {

					console.log(error);

					return false;

				}
			},

			getProfile: async () => {

				let token =localStorage.getItem("token")

				try {

					let data = await axios.get('https://shiny-rotary-phone-rjrg54j449v2w544-3001.app.github.dev//api/profile',{

						headers:{
							"Authorization": `Bearer ${token}`,						
						}

					})

					console.log(data);

					// localStorage.setItem("token",data.data.access_token)

					// setStore({token:data.data.access_token})
					setStore({log:true})

					return true;

				} catch (error) {

					console.log(error);
					setStore({log:false})


					return false;

				}
			},

			validToken: async () => {

				let token = localStorage.getItem("token")

				try {

					//codigo exitoso

					let data = await axios.get('https://shiny-rotary-phone-rjrg54j449v2w544-3001.app.github.dev//api/validate',{

						headers:{

							"Authorization": `Bearer ${token}`,

						}

					})

					console.log(data);

					return true;

				} catch (error) {

					//manejar los errrores

					console.log(error);

					return false;

				}

			},

			addFavorito: (favs) => {
				setStore({ favoritos: favs })
			},

			removeFav: (e,el) => {
				e.stopPropagation()
				const updatedItems =(getStore().favoritos.indexOf(el) !=-1)?
				getStore().favoritos.filter((item) => item != el)
				:null

				setStore({favoritos:updatedItems})

			  },
			
			  //CHARACTERS

			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: "GET"
				})
				.then(res => res.json())
				.then(data => setStore({ characters: data.results}))
		
				.catch(err => console.error(err))
				},

			getInfoCharacters: (uid) => {
				fetch("https://www.swapi.tech/api/people/"+uid, {
					method: "GET"
				})
				.then(res => res.json())
				.then(data => setStore({ infoCharacters: data.result.properties}))
		
				.catch(err => console.error(err))
				},

				//PLANETS

			getPlanets: () => {
			fetch("https://www.swapi.tech/api/planets/", {
				method: "GET"
			})
			.then(res => res.json())
			.then(data => setStore({ planets: data.results}))
	
			.catch(err => console.error(err))
			},

		getInfoPlanets: (uid) => {
			fetch("https://www.swapi.tech/api/planets/"+uid, {
				method: "GET"
			})
			.then(res => res.json())
			.then(data => setStore({ infoPlanets: data.result.properties}))
	
			.catch(err => console.error(err))
			},

			//VEHICLES

		getVehicles: () => {
			fetch("https://www.swapi.tech/api/vehicles/", {
				method: "GET"
			})
			.then(res => res.json())
			.then(data => setStore({ vehicles: data.results}))
			.catch(err => console.error(err))
			},

		getInfoVehicles: (uid) => {
			fetch("https://www.swapi.tech/api/vehicles/"+uid, {
				method: "GET"
			})
			.then(res => res.json())
			.then(data => setStore({ infoVehicles: data.result.properties}))
	
			.catch(err => console.error(err))
			},


			// Use getActions to call a function within a fuction
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