import React from "react";
import "./Search.css";
import JumbotronR from "../Jumbotron/jumbotron";
import SearchBox from "../SearchBox/SearchBox";
import getBooks from "../../utils/API";
import BookShelf from "../BookShelf/BookShelf";
// import { Container, Row, Col } from 'reactstrap';


class Search extends React.Component {

    state = {
        books: []
    }

    getTheBooks = async query => {
        const returnBooks = await getBooks(query).then(books => books.data.items)
        this.setState({ books: returnBooks })
        console.log(this.state.books)
    }


    render() {


        return (
            <>
            {/* <Container>
                <Row>
                    <Col> */}
                        <JumbotronR />
                        <SearchBox getTheBooks={this.getTheBooks} />
                        <BookShelf books={this.state.books} />
                    {/* </Col>
                </Row>
            </Container> */}
            </>
        )
    }
}

export default Search;