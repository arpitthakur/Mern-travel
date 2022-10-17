import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Home() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Travel Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <NavDropdown title="Adventure" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                
                <Link to = "/rafting">
                  rafting
                  </Link>
                </NavDropdown.Item>
                
                <NavDropdown.Item>
                <Link to = "/paragliding">
              
                  ParaGliding
                  </Link>
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
              </NavDropdown> */}
            
            {/* <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                
                <Link to = "/rafting">
                  rafting
                  </Link>
                </NavDropdown.Item>
                
                <NavDropdown.Item>
                <Link to = "/paragliding">
              
                  ParaGliding
                  </Link>
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
              </NavDropdown> */}
              <Link to = "/booking">
                  Book now
                  </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /><button ><button >Full blog</button>Full blog</button>
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        {/* <div className='image-section'>
    <img src='./travel management.jpg'/>

    </div> */}
      </Navbar>
      <div className="image-section">
        <img src="./cody-scott-milewski-HwpOAJfN8mM-unsplash.jpg" />
      </div>
    </div>
  );
}

export default Home;
