import HeaderLink from "./headerLink";
import SlideMenuComponent from "./slide.menu";
import { ShowCart, SlideMenu } from "../zustand";

const Header = () => {
  const showCart = ShowCart((state) => state.show);
  const setShowCart = ShowCart((state) => state.setShow);
  const slideMenu = SlideMenu((state) => state.show);
  const setSlideMenu = SlideMenu((state) => state.setShow);

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
      <div className="flex items-start gap-3 h-16">
        <div className="w-fit relative">
          <button
            onClick={() => setShowCart(!showCart)}
            className="text-gray-500 relative w-fit"
          >
            <span className="material-symbols-outlined text-xl">
              shopping_cart
            </span>
            <div className="absolute -right-2 -top-1 bg-orange-500 flex items-center justify-center rounded-full text-xs w-4 h-4 text-white">
              3
            </div>
          </button>
          {showCart && (
            <div className="fixed sm:absolute top-28 sm:top-12 left-1/2 -translate-x-1/2 sm:left-5 sm:-translate-x-1/2 shadow-sm shadow-gray-400 py-1 h-40 w-5/6 sm:w-60 rounded-md z-50 bg-white">
              <h1 className="font-bold text-md w-full border-b-2 border-b-gray-100 p-2">
                Cart
              </h1>
            </div>
          )}
        </div>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxG7Yll-Mqdj3Ce_9XfWDQ3qqvNTpEX82IeQ&usqp=CAU"
          }
          className="h-6 sm:h-8 w-6 sm:w-8 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
