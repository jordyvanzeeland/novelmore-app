import React, { useState } from 'react';
import moment from "moment";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async() => {
        const functions = await import("../Functions");
        const data = await functions.fetchApi("POST", `/auth/login?email=${username}&password=${password}`);

        if(data && data.access_token){
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('token_issued', moment().format("YYYY-MM-DD HH:mm:ss"));
            localStorage.setItem('token_expired', moment().add(1, 'hours').format("YYYY-MM-DD HH:mm:ss"));
            window.location.reload();
        }
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="login">
                    <img src="/logo.png" className="logo" />
                    <h1>Novelmore</h1>
                        <div className="card-body">
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <input id="email" type="email" placeholder="E-mailadres" className="form-control" name="email" required autoComplete="email" autoFocus onChange={(event) => setUsername(event.target.value)} />
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <input id="password" type="password" placeholder="Wachtwoord" className="form-control" name="password" required autoComplete="current-password" onChange={(event) => setPassword(event.target.value)} />
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="col-md-12">
                                        <button type="submit" name="submit" className="btn btn-primary" onClick={() => login()}>
                                            Inloggen
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;