import React, { Component } from "react";
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        {/* <Container>
          <Row>
            <Col> */}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Gbooks</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/search">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/save">Saved Books(Coming Soon)</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/* </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}
