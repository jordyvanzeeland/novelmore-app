import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <NavLink to={'/'} exact="true">
                    <li><i className="fas fa-bars-progress"></i> Challenges</li>
                </NavLink>

                <NavLink to={'/books'} exact="true">
                    <li><i className="fas fa-book"></i> Habitat</li>
                </NavLink>

                <NavLink to={'/books'} exact="true">
                    <li><i className="fas fa-chart-line"></i> Analytics</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Sidebar;