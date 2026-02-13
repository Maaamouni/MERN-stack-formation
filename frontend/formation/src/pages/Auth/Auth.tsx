import { useState } from 'react';
import "./Auth.css"

function Auth() {
    const [mode, setMode] = useState("signin"); // signin or lgoin
    return (
        <div>
            <h1>Authnetication Page</h1>
            
            <div id="container">
                <button type="button" onClick={() => setMode("signin")}>Sign in</button>
                <button type="button" onClick={() => setMode("login")}>Log in</button>
            </div>
            
            {mode == "signin" && (
                <form id="sign-in-container">
                    
                    <label>Username :</label>
                    <input type="text" name="username"/>
                    
                    <label>FirstName :</label>
                    <input type="text" name="firstname"/>
                    
                    <label>LastName: </label>
                    <input type="text" name="lastname"/>
                    
                    <label>Email: </label>
                    <input type="email" name="email"/>

                    <label>Password :</label>
                    <input type="password" name="password"/>
                    
                    <button type="submit">Create Account</button>
                </form>
            )}
            
            {mode == "login" && (
                <form id="login-container">

                    <label>Email: </label>
                    <input type="email" name="email"/>
                    
                    <label>Password :</label>
                    <input type="password" name="password"/>

                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    )
}

export default Auth;