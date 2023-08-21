import { SlideMenu } from "../zustand";

const SlideMenuComponent = () => {
  const setSlideMenu = SlideMenu((state) => state.setShow);

  return (
    <div
      onClick={() => setSlideMenu()}
      className="bg-black/50 w-full h-screen fixed top-0 left-0 sm:hidden z-50"
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="fixed left-0 top-0 h-screen bg-white p-5 w-2/3 flex flex-col items-start gap-5"
      >
        <button onClick={() => setSlideMenu()}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex flex-col gap-3">
          <a href="#" className="text-lg font-bold">
            Collection
          </a>
          <a href="#" className="text-lg font-bold">
            Men
          </a>
          <a href="#" className="text-lg font-bold">
            Women
          </a>
          <a href="#" className="text-lg font-bold">
            About
          </a>
          <a href="#" className="text-lg font-bold">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideMenuComponent;
