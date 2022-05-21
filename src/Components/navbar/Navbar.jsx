import React from 'react'
import './navbar.css'
import { Offcanvas,Navbar,Container,Nav,Button } from "react-bootstrap";
function Navigationbar() {
  return (
    
<>
    <Navbar key="md" expand="md" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">AREC</Navbar.Brand>
        <Navbar.Toggle className="bg-light text-warning" aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} className="navbar-brand">
            AREC
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='bg-Transparent'>
            <Nav className="justify-content-end flex-grow-1 pe-3 " >
              <Nav.Link href="/" className='text-Primary fs-4'>Home</Nav.Link>
              <Nav.Link href="#action2" className='text-Primary fs-4'>Services</Nav.Link>
              <Nav.Link href="#action2" className='text-Primary fs-4'>Contact</Nav.Link>
              <Nav.Link href="#deets"><Button className="navButton">Register</Button></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                    <Button className="navButton">Login</Button>
               </Nav.Link> 
              {/* <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>*/} 
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar> 
  
</>


  )
}

export default Navigationbar