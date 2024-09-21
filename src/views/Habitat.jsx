import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { withRouter } from "../components/withRouter";
import { fetchApi } from "../Functions";
import Sidebar from "../components/Sidebar";
import Calendar from "../components/Calendar";

const Habitat = () => {
    const [layout, setLayout] = useState('');
    
    return(
        <React.Fragment>
            <Header />
            <Sidebar />
            <div className="content">
                <div className="container-fluid">
                    <h3>Habitat</h3>
                    <button onClick={() => setLayout('week')}>Week</button>
                    <button onClick={() => setLayout('month')}>Maand</button>
                    <Calendar layout={layout ? layout : 'week'} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Habitat);