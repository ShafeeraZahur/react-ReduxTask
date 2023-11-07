import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const CartProducts = useSelector((state) => state.cart);

  return (
    <><div>
      <Navbar expand="lg" className="NavB fixed-header" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="font-weight-bold"> {/* Apply styles here */}
          <span className="shopping">Shopping Cart</span>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" /> */}
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="font-weight-bold">
            <span className="shopping">Products</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart" className="font-weight-bold">
            <span className="shopping">My Cart </span>
              
              
              <i className="fa-solid fa-cart-shopping">{CartProducts.length}</i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div></>
  );
};

export default NavBar;
