import { Button, Card, CardImg } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

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
          {name} {formatCurrency(price)}
        </Card.Title>
        {/*<div className="mt-auto">*/}
        <div>
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
              <div>
                {/* Button Minus */}
                <Button size="sm" onClick={() => decreaseItemQuantity(id)}>
                  <FontAwesomeIcon icon={faMinus} />
                </Button>{" "}
                {/* Display Quantity in cart */}
                <span>{quantity}</span> in cart{" "}
                {/* Button Plus */}
                <Button size="sm" onClick={() => increaseItemQuantity(id)}>
                  <FontAwesomeIcon icon={faPlus} />
                </Button>{" "}
              </div>
              {/* Button Delete */}
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
