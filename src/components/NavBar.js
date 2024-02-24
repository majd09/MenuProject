import React from "react";
import { Navbar, Nav, Form, Button, Row, Container  } from "react-bootstrap";
const NavForm  = ()=>{

    return (
        <Row className="row">
 <Navbar bg="dark" expand="lg" variant="dark">
      <Container >
        <Navbar.Brand href="#"  >Kitchen Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mx-2"
              
            />
            <Button className="btn-search">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </Row>
    )


}

export default NavForm;