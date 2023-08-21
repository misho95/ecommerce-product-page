import HeaderLink from "./headerLink";
import SlideMenuComponent from "./slide.menu";
import { ShowCart, SlideMenu, shoppingCart } from "../zustand";
import CartComponent from "./cart.component";

interface ItemType {
  id: number;
  name: string;
  img: string;
  quantity: number;
  price: number;
}

const Header = () => {
  const showCart = ShowCart((state) => state.show);
  const setShowCart = ShowCart((state) => state.setShow);
  const slideMenu = SlideMenu((state) => state.show);
  const setSlideMenu = SlideMenu((state) => state.setShow);
  const cart = shoppingCart((state) => state.cart);

  return (
    <div className="flex justify-between items-center w-full p-2 border-b-2 pb-0 border-b-gray-100">
      <div className="flex gap-2 sm:gap-5 items-center">
        <div
          onClick={() => {
            setSlideMenu(), setShowCart(false);
          }}
          className="sm:hidden h-16 flex py-1"
        >
          <span className="material-symbols-outlined">menu</span>
        </div>
        {slideMenu && <SlideMenuComponent />}
        <span className="text-xl font-bold h-16">SNEAKERS</span>
        <div className="hidden sm:flex gap-3 h-16">
          <HeaderLink name={"Collections"} />
          <HeaderLink name={"Men"} />
          <HeaderLink name={"Women"} />
          <HeaderLink name={"About"} />
          <HeaderLink name={"Contact"} />
        </div>
      </div>
      <div className="flex items-start h-16">
        <div className="flex items-center gap-3">
          <div className="w-fit relative">
            <button
              onClick={() => setShowCart(!showCart)}
              className="text-gray-500 relative w-fit"
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                />
              </svg>
              {cart.length > 0 && (
                <div className="absolute -right-2 -top-1 bg-orange-500 flex items-center justify-center rounded-full text-xs w-4 h-4 text-white">
                  {cart.reduce((val: number, el: ItemType) => {
                    return (val += el.quantity);
                  }, 0)}
                </div>
              )}
            </button>
            {showCart && <CartComponent />}
          </div>
          <img
            src={"src/assets/images/image-avatar.png"}
            className="h-6 sm:h-8 w-6 sm:w-8 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
