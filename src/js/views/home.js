import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles"
import { Context } from "../store/appContext"

export const Home = () => {

	const { store, actions } = useContext(Context);
	async function redireccion(){
		let logged = await actions.getProfile();
		if(!logged) {
			navigate("/login")
		}
	} 


	useEffect(() => {
		actions.getCharacters(),
		actions.getPlanets(),
		actions.getVehicles(),
		redireccion()
	}, []);

	return (
		<div className="mt-5">
			<Characters />
			<Planets />
			<Vehicles />
		</div>
	);

	};