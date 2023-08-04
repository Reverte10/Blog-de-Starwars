import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import logoStarwars from "../../img/Star-Wars-Logo-5.png";


export const Navbar = (props) => {

	const { store, actions } = useContext(Context);
	const favoritesMap = store.favorites;

	return (
<div className= "pb-5">
		<nav className="navbar navbar-light bg-secondary fixed-top mb-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="p-1 ms-5" style={{ height: "60px", }} src={logoStarwars} />
				</span>
			</Link>

			<div className="d-flex mt-4">
				<div className= "pt-2 me-4">
				<Link to="/login">
				<span className="navbar-brand h1">
					<p> Login </p>
				</span>
			</Link>
				</div>
					<div className="dropdown me-5 ms-auto">
						<button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<span className="ms-3 btn-danger text-ligth"> {favoritesMap.length > 0 ? favoritesMap.length : ""}</span>
						</button>
						<ul className="dropdown-menu bg-danger">
						{favoritesMap.map((item, i) => (
								<li key={i} className="dropdown-item d-flex justify-content-between bg-danger">
									{item}
									<span onClick={() => actions.deleteFavorite(item)}>
									<i className="fa-solid fa-trash "></i>
									</span>
								</li>
							))}
						</ul>
					</div>
				
			</div>
		</nav>
</div>

	);
};