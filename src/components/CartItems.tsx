import { useCartSelector, useCartDispatch } from '../hooks/hooks';

import {
  type CartItemTypes,
  addToCart,
  removeFromCart,
} from '../store/cart-slice';

export default function CartItems() {
  const dispatch = useCartDispatch();
  const cartItems = useCartSelector((state) => state.cart.items);
  const totalFormattedPrice = cartItems
    .reduce((value, item) => value + item.price * item.quantity, 0)
    .toFixed(2);

  function handleAddToCart(item: CartItemTypes) {
    const { id, title, price } = item;
    dispatch(addToCart({ id, title, price }));
  }

  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }

  return (
    <div id='cart'>
      {cartItems.length < 1 ? (
        <p>No items in cart!</p>
      ) : (
        <ul id='cart-items'>
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className='cart-item-actions'>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id='cart-total-price'>
        Cart Total: <strong>${totalFormattedPrice}</strong>
      </p>
    </div>
  );
}
