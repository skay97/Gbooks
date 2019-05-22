import React from 'react';
import {
    Card, Input, CardHeader, CardBody,
    CardTitle, CardText, InputGroup, Form, Button,
    // Container, Row, Col
} from 'reactstrap'



class SearchBox extends React.Component {

    state = {
        bookName: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        console.log(this.state.bookName)

        this.props.getTheBooks(this.state.bookName)

    };


    render() {
        return (
            // <Container>
            //     <Row>
            //         <Col>
                        <Card>
                            <CardHeader>Header</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Form onSubmit={this.handleFormSubmit}>
                                    <InputGroup>
                                        <Input
                                            id="searchField"
                                            value={this.state.bookName}
                                            name="bookName"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            placeholder="book name"
                                        />
                                        <br />
                                        <Button>Submit</Button>
                                    </InputGroup>
                                </Form>
                            </CardBody>
                        </Card>
            //         </Col>
            //     </Row>
            // </Container>


        )

    };
};

export default SearchBox;
