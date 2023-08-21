import { shoppingCart } from "../zustand";

const CartComponent = () => {
  interface ItemType {
    id: number;
    name: string;
    img: string;
    quantity: number;
    price: number;
  }
  const cart = shoppingCart((state) => state.cart);
  const deleteFromCart = shoppingCart((state) => state.deleteItemFromCart);

  const deleteItemFromCart = (id: number) => {
    deleteFromCart(id);
  };

  return (
    <div className="fixed sm:absolute top-28 sm:top-12 left-1/2 -translate-x-1/2 sm:left-5 sm:-translate-x-1/2 shadow-sm shadow-gray-400 py-1 min-h-40 w-5/6 sm:w-60 rounded-md z-50 bg-white">
      <h1 className="font-bold text-md w-full border-b-2 border-b-gray-100 p-2">
        Cart
      </h1>
      <div className="p-3 flex flex-col gap-2">
        {cart.length === 0 && (
          <p className="text-gray-500 text-center">Cart Is Empty</p>
        )}
        {cart.map((item: ItemType) => {
          return (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="flex gap-3">
                <img src={item.img} className="w-12 h-12 rounded-lg" />
                <span className="text-sm">
                  <p>{item.name}</p>
                  <p className="text-gray-500">
                    ${item.price} x {item.quantity} {item.price * item.quantity}
                  </p>
                </span>
              </div>

              <span
                onClick={() => deleteItemFromCart(item.id)}
                className="material-symbols-outlined text-gray-500 select-none"
              >
                delete
              </span>
            </div>
          );
        })}

        {cart.length !== 0 && (
          <button className="bg-orange-500 rounded-lg text-white p-1">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
