import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart,increaseCartQuantity,decreaseCartQuantity,openCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)

  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={4} className="d-flex align-items-center ml-6 mr-6">
      <img
        src={item.thumbnail}
        style={{ width: "300px", height: "125px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          <div></div>
          {/* {quantity > 1 && (
            <span className="text-white" style={{ fontSize: "20px" }}>
              x{quantity}
            </span>
          )} */}
        </div>
        <div className="text-white" style={{ fontSize: "15px" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div className="text-white"> {formatCurrency(item.price * quantity)}</div>
      {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div className="text-white">
                  <span className="fs-3 text-white">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
    </Stack>
  )
}