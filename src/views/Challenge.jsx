import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { withRouter } from "../components/withRouter";
import { fetchApi } from "../Functions";
import Sidebar from "../components/Sidebar";

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

    const insertBookToChallenge = async (event) => {
        event.preventDefault();
        
        const data = await fetchApi("POST", `/challenge/${props.router.params.id}/book/insert`, JSON.stringify({
            "book": event.target.book.value, "author": event.target.author.value
        }));

        event.target.reset();

        getChallenge();
        getBooksOfChallenge();
    }

    const deleteBookFromChallenge = async(bookid) => {
        const data = await fetchApi("DELETE", `/challenge/${props.router.params.id}/book/${bookid}/delete`);
        getChallenge();
        getBooksOfChallenge();
    }

    useEffect(() => {
        getChallenge();
        getBooksOfChallenge();
    }, [])

    return(
        <React.Fragment>
            <Header />
            <Sidebar />
            <div className="content">
                <div className="container-fluid">
                    <h3>{challenge.name}</h3>

                    {books.map((book, i) => {
                        return(<div key={i}>{book.name} - <button onClick={() => deleteBookFromChallenge(book.id)}>Delete</button></div>)
                    })}
                </div>

                <div className="add-book">
                    <form method="POST" onSubmit={(event) => insertBookToChallenge(event)}>
                    <input type="text" name="book" id="book" className="form-control" placeholder="Boek" />
                    <input type="text" name="author" id="author" className="form-control" placeholder="Schrijver" />
                    <button>Toevoegen</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Challenge);