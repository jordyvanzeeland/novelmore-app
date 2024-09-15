import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { withRouter } from "../components/withRouter";
import { fetchApi } from "../Functions";

const Challenge = (props) => {
    const [challenge, setChallenge] = useState([]);
    const [books, setBooks] = useState([]);

    const getChallenge = async() => {
        const data = await fetchApi("GET", `/challenge/${props.router.params.id}`);
        setChallenge(data);
    }

    const getBooksOfChallenge = async() => {
        const data = await fetchApi("GET", `/challenge/${props.router.params.id}/books`);
        setBooks(data);
    }

    useEffect(() => {
        getChallenge();
        getBooksOfChallenge();
    }, [])

    return(
        <React.Fragment>
            <Header />
            <div className="container">
            <h3>{challenge.name}</h3>

            {books.map((book, i) => {
                return(<div key={i}>{book.name}</div>)
            })}
            
            </div>
        </React.Fragment>
    );
}

export default withRouter(Challenge);