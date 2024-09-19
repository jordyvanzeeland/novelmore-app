import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchApi } from "../Functions";

const Header = () => {

    const [currentUser, setCurrentUser] = useState([]);

    const getAuthenticatedUser = async () => {
        const me = await fetchApi("POST", "/auth/me");
        setCurrentUser(me);
    }

    useEffect(() => {
        getAuthenticatedUser();
    }, [])

    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="/logo.png" className="header-logo" /> <span>Novelmore</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="header-right">
                <ul>
                    <li className="streak-icon"><i className="fa-solid fa-fire"></i> 0</li>
                    <li><i className="fa-solid fa-circle-user"></i> {currentUser.name}</li>
                </ul>
            </div>
            </nav>
    )
}

export default Header;