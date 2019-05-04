import React from "react";
import "./Search.css";
import JumbotronR from "../Jumbotron/jumbotron";
import SearchBox from "../SearchBox/SearchBox";
import API from "../../utils/API"

class Search extends React.Component {

    state = {
        books: []
    }

    getTheBooks = (query) => {
        API.getBooks(query).then(books => console.log(books))
    }


    render() {


        return (
            <>
                <JumbotronR />
                <SearchBox />
                <div className="booksContainer">
                <button onClick = {()=>{
                    this.getTheBooks("origins")
                }}></button>
                    <h1>Hi</h1>
                </div>
            </>
        )
    }
}

export default Search;