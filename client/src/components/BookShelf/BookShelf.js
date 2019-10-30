import React from 'react';
import {
   Card, CardText, CardBody, CardImg,
   CardTitle, CardSubtitle, Button,
   Container, Row, Col
} from 'reactstrap';

const BookShelf = (props) => {
   return <div>{props.books.map((books) => {
      return (

         <Container>
            <Row>
               <Col>
                  <Card>
                     <CardBody style={{ backgroundColor: "#e9ecef" }}>
                        <Row>
                           <Col xs="2">
                              <CardImg style={{ maxWidth: "100%" }} src={books.volumeInfo.imageLinks.smallThumbnail} alt="Card image cap" />
                           </Col>
                           <Col xs="10">
                              <CardTitle>Author: {books.volumeInfo.authors.join(",")}</CardTitle>
                              <CardSubtitle>Category: {books.volumeInfo.categories}</CardSubtitle>
                              <CardText>Short Description:{books.volumeInfo.description}</CardText>
                              <Button color="secondary" href={books.volumeInfo.infoLink} target="_blank" >View Book</Button>
                              <Button disabled onClick={() => {
                                 props.clicked({
                                    author: books.volumeInfo.authors.join(","),
                                    category: books.volumeInfo.categories.join(","),
                                    description: books.volumeInfo.description,
                                    href: books.volumeInfo.infoLink,
                                    src: books.volumeInfo.imageLinks.smallThumbnail
                                 })
                              }} >Save Book</Button>
                           </Col>
                        </Row>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Container>

      )
   })}</div>
}

export default BookShelf;