import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const Login = () =>{

    const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	async function handlerSubmit(e)  {
		e.preventDefault()
		let logged = await actions.login(email, password)
		if (logged){
			navigate('/')
		} else{
			setEmail("");
			setPassword("");
		}
		
	};

    return (
        <div className="container">
			<div>
				<h1 className="text-center mt-5">Log in</h1>
				<form onSubmit={handlerSubmit}>
					
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							value={email}
							className="form-control"
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							value={password}
							className="form-control"
							placeholder="Enter password"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					
					<button type="submit" className="btn btn-primary form-control">
						Submit
					</button>

				</form>
			</div>
		</div>

    )
}








// import React from "react";
// import "../../styles/home.css";

// export const Login = () => {

// 	return (
// 		<div className="mt-5 pt-5 text-light">
//             <form>
//                 <div className="mb-3 ">
//                     <label for="exampleInputEmail1" className="form-label">Email address</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//                 </div>
//                 <div className="mb-3">
//                     <label for="exampleInputPassword1" className="form-label">Password</label>
//                     <input type="password" className="form-control" id="exampleInputPassword1"/>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//         );

// };