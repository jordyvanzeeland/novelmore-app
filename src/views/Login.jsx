import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        return fetch(`http://localhost:8000/api/auth/login?email=${username}&password=${password}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(res => {
            localStorage.setItem('token', res.access_token);
            window.location.reload();
        })
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>

                        <div className="card-body">
                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-end">E-mailadres</label>

                                    <div className="col-md-6">
                                        <input id="email" type="email" className="form-control" name="email" required autoComplete="email" autoFocus onChange={(event) => setUsername(event.target.value)} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Wachtwoord</label>

                                    <div className="col-md-6">
                                        <input id="password" type="password" className="form-control" name="password" required autoComplete="current-password" onChange={(event) => setPassword(event.target.value)} />
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="col-md-8 offset-md-4">
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