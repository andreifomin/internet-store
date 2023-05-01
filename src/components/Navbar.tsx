import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBootstrap,
  NavLink as NavLinkBootstrap,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBootstrap sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        {/*Navbar main*/}
        <Nav className="me-auto">
          <NavLinkBootstrap to="/" as={NavLink}>
            Home
          </NavLinkBootstrap>

          <NavLinkBootstrap to="/store" as={NavLink}>
            Store
          </NavLinkBootstrap>

          <NavLinkBootstrap to="/contacts" as={NavLink}>
            Contacts
          </NavLinkBootstrap>
        </Nav>

        {/*Button Open cart*/}
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            className="rounded-circle"
            variant="outline-primary"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              position: "relative",
            }}
          >
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                width: "1.2rem",
                height: "1.2rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(10%, 10%)",
                color: "white",
                fontSize: "12px",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;
