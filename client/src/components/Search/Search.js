import React from "react";
import "./Search.css";
import JumbotronR from "../Jumbotron/jumbotron";
import SearchBox from "../SearchBox/SearchBox";
import getBooks from "../../utils/API";
import BookShelf from "../BookShelf/BookShelf";
import Axios from "axios";

class Search extends React.Component {

    state = {
        books: []
    }

    getTheBooks = async query => {
        const returnBooks = await getBooks(query).then(books => books.data.items)
        this.setState({ books: returnBooks })
        console.log('Data from the API:', this.state.books)
    }

    clicked = (data) => {
        Axios.post("/api/data", data).then((data) => { console.log(data) })
    }


    render() {


        return (
            <>
                <JumbotronR />
                <SearchBox getTheBooks={this.getTheBooks} />
                <BookShelf books={this.state.books} clicked={this.clicked} />
            </>
        )
    }
}

export default Search;