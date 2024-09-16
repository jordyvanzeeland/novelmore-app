import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { withRouter } from "../components/withRouter";
import { fetchApi } from "../Functions";
import Sidebar from "../components/Sidebar";

const Challenges = () => {
    const [challenges, setChallenges] = useState([]);
    const [finished, setFinished] = useState([]);
    const navigate = useNavigate();

    const getChallenges = async () => {
        const data = await fetchApi("GET", "/challenges");
        setChallenges(data);
    }

    const getFinishedChallenges = async () => {
        const data = await fetchApi("GET", "/challenges/finished");
        setFinished(data);
    }

    useEffect(() => {
        getChallenges();
        getFinishedChallenges();
    }, [])

    return(
        <React.Fragment>
            <Header />
            <Sidebar />
            <div className="content">
                <div className="container-fluid">
                    <h3>Actieve challenges (1)</h3>
                    <table className="table resonsive nowrap" width="100%">
                        <thead>
                            <tr>
                                <th>Challenge</th>
                                <th>Jaar</th>
                                <th>Boeken</th>
                            </tr>
                        </thead>
                        <tbody>
                            {challenges.map((challenge, i) => {
                                return(
                                    <tr key={i}>
                                        <td onClick={() => navigate(`/challenge/${challenge.id}`)}>{challenge.name}</td>
                                        <td>{challenge.year}</td>
                                        <td>{challenge.books}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    

                    <h3>Behaalde challenges (1)</h3>
                    <table className="table resonsive nowrap" width="100%">
                        <thead>
                            <tr>
                                <th>Challenge</th>
                                <th>Jaar</th>
                                <th>Boeken</th>
                            </tr>
                        </thead>
                        <tbody>
                            {finished.map((challenge, i) => {
                                return(
                                    <tr key={i}>
                                        <td onClick={() => navigate(`/challenge/${challenge.id}`)}>{challenge.name}</td>
                                        <td>{challenge.year}</td>
                                        <td>{challenge.books}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Challenges);