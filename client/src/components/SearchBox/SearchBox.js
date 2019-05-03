import React from 'react';
import {
    Card, Button, CardHeader, CardBody,
    CardTitle, CardText
} from 'reactstrap'
import { InputGroup, Input } from 'reactstrap';


const SearchBox = (props) => {
    return (
        <div>
            <Card>
                <CardHeader>Header</CardHeader>
                <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>

                    <InputGroup>
                        <Input placeholder="Lets search up some books, shall we?" />
                    </InputGroup>

                    <br></br>

                    <Button>Search!</Button>
                </CardBody>
            </Card>

        </div>
    );
};

export default SearchBox;
