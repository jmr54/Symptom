import React, { useState } from "react";
import httpClient from "../Axios";
import '../App.css'

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
  
    const logInUser = async () => {
        console.log(email, password);
    
        try {
          const resp = await httpClient.post("//localhost:5000/login", {
            email,
            password,
          });
    
          window.location.href = "/profile";
        } catch (error) {
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        }
      };
    
      return (
        <div>
          <h1>Log Into Your Account</h1>
          <form       >
            <div>
              <label>Email: </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id=""
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id=""
              />
            </div>
            <button type="button" onClick={() => logInUser()}>
              Submit
            </button>
          </form>
        </div>
      );
    };
export default Login