
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';





function Navv () {
    return(
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Welcome</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About Us</Nav.Link>
        <NavDropdown title="choose" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Discover</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Exclusive</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
         Our Local
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
       take your time
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default Navv