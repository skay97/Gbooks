import React from 'react';
import {
    Card, Input, CardHeader, CardBody,
    CardTitle, CardText, InputGroup
} from 'reactstrap'



class SearchBox extends React.Component {

    state = {
        bookName: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { book, value } = event.target;

        // Updating the input's state
        this.setState({
            [book]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        let value = document.getElementById("searchField").value

        console.log(value)

        this.setState({
            bookName: value,
        });
        console.log(this.state.bookName)
    };


    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>

                        <InputGroup>
                            <form className="form">
                                <Input 
                                    id="searchField"
                                    value={this.state.bookName}
                                    book="bookName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="book name"
                                />
                                <button onClick={this.handleFormSubmit}>Submit</button>
                            </form>
                        </InputGroup>

                        <br></br>
                    </CardBody>
                </Card>


            </div>
        )

    };
};

export default SearchBox;
