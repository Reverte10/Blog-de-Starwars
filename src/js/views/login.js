import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {

const [email, setEmail] = useState ("")
const [password, setPassword] = useState ("")
const [store, actions] = useContext (Context)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    actions.login()
    setEmail("")
    setPassword ("")
  };

  return (
    <div className="mt-5 pt-5 text-light">
            <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
  );
};








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