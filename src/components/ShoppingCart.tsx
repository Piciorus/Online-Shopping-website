import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "../components/CartItem";
import storeItems from "../data/items.json";
import "./ShoppingCart.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const navigate = useNavigate();

  return (
    <>
      <div className="container1">
        <div className="header">
          My Cart
          <Button variant="danger" onClick={() => navigate("/")}>
            X
          </Button>
        </div>
        <Stack gap={5}>
          {cartItems.map(
            (
              item: JSX.IntrinsicAttributes & { id: number; quantity: number }
            ) => (
              <CartItem key={item.id} {...item} />
            )
          )}
          <div className="total">
            <Button>Go to payment</Button>
            Total{"   "}
            {formatCurrency(
              cartItems.reduce(
                (total: number, cartItem: { id: number; quantity: number }) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                },
                0
              )
            )}
          </div>
        </Stack>
      </div>
    </>
  );
}
