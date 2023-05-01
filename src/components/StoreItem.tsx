import { Button, Card, CardImg } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type storeItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem(props: storeItemProps) {
  const { id, name, price, imgUrl } = props;

  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <CardImg
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-center align-items-baseline mb-3">
          <span>{name}</span>
          <span>{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {/*Button Add to cart*/}
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
              Add to cart
            </Button>
          ) : (
            // Buttons - + remove
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div>
                  <Button onClick={() => decreaseItemQuantity(id)}>-</Button>{" "}
                  <span>{quantity}</span> in cart{" "}
                  <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                </div>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
