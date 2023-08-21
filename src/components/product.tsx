import { useState } from "react";
import ProductImg from "./product.img.component";
import { shoppingCart } from "../zustand";
import ImgModal from "./img.modal";

const Product = () => {
  const [productNum, setProductNum] = useState<number>(0);
  const [imgActive, setImgActive] = useState<number>(0);
  const [showImgModal, setShowImgModal] = useState<boolean>(false);
  const cartTotal = shoppingCart((state) => state.cart);
  const addInCart = shoppingCart((state) => state.addNewItemInCart);

  const productData = {
    id: 1,
    name: "SAMBA ORIGINALS",
    company: "ADIDAS",
    des: ` Born on the pitch, the Samba is a timeless icon of street style. This
    silhouette stays true to its legacy with a tasteful, low-profile, soft
    leather upper, suede overlays and gum sole, making it a staple in
    everyone's closet - on and off the pitch.`,
    price: 125,
    dis: 50,
    fullPrice: 250,
    imgs: [
      {
        id: 0,
        link: "src/assets/imgs/1.avif",
      },
      {
        id: 1,
        link: "src/assets/imgs/2.avif",
      },
      {
        id: 2,
        link: "src/assets/imgs/3.avif",
      },
      {
        id: 3,
        link: "src/assets/imgs/4.avif",
      },
    ],
  };

  const decrease = () => {
    if (productNum !== 0) {
      setProductNum(productNum - 1);
    }
  };

  const addItemInCart = (obj) => {
    if (productNum === 0) {
      return;
    }

    const findWithID = cartTotal.find((c) => {
      if (c.id === obj.id) {
        return c;
      }
    });

    const updated = cartTotal.map((c) => {
      if (c.id === findWithID.id) {
        return { ...c, quantity: c.quantity + productNum };
      } else {
        return c;
      }
    });

    if (findWithID) {
      addInCart(updated);
    } else {
      addInCart([...cartTotal, obj]);
    }

    setProductNum(0);
  };

  const nextImg = () => {
    if (imgActive < 3) {
      setImgActive(imgActive + 1);
    } else {
      setImgActive(0);
    }
  };

  const prevImg = () => {
    if (imgActive > 0) {
      setImgActive(imgActive - 1);
    } else {
      setImgActive(3);
    }
  };

  const imgFullScreen = () => {
    setShowImgModal(true);
  };

  return (
    <div className="p-5  h-custom_height flex sm:flex-row flex-col">
      <div className="w-full sm:w-1/2 flex flex-col gap-3 items-center justify-center p-5 ">
        {showImgModal && (
          <ImgModal
            imgs={productData.imgs}
            imgActive={imgActive}
            setImgActive={setImgActive}
            setShowImgModal={setShowImgModal}
            nextImg={nextImg}
            prevImg={prevImg}
          />
        )}
        <div className="w-fit h-fit relative">
          <div
            onClick={prevImg}
            className="bg-gray-200 w-6 h-6 p-1 rounded-full flex sm:hidden items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 shadow-sm text-gray-700"
          >
            <span className="material-symbols-outlined text-sm select-none">
              arrow_back_ios
            </span>
          </div>
          <img
            src={productData.imgs[imgActive].link}
            className="w-full sm:w-128 rounded-lg"
            onClick={imgFullScreen}
          />
          <div
            onClickCapture={nextImg}
            className="bg-gray-200 w-6 h-6 p-1 rounded-full flex sm:hidden items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 shadow-sm text-gray-700"
          >
            <span className="material-symbols-outlined text-sm select-none">
              arrow_forward_ios
            </span>
          </div>
        </div>
        <div className="hidden sm:flex  gap-3">
          {productData.imgs.map((img) => {
            return (
              <ProductImg
                key={img.id}
                id={img.id}
                link={img.link}
                setImgActive={setImgActive}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center gap-5">
        <p className="text-orange-500 w-full">{productData.company}</p>
        <h1 className="w-full font-bold text-2xl">{productData.name}</h1>
        <p className="text-gray-500">{productData.des}</p>
        <div className="w-full">
          <p className="flex gap-3">
            <span className="text-black text-lg font-bold">
              ${productData.price}
            </span>
            <span className="bg-orange-200 text-orange-500 p-1 rounded-md">
              {productData.dis}%
            </span>
          </p>
          <p className="text-gray-500 line-through">${productData.fullPrice}</p>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex items-center">
            <button
              onClick={decrease}
              className="w-10 bg-gray-200 text-orange-500 font-bold rounded-l-md text-center"
            >
              -
            </button>
            <div className="w-10 bg-gray-200 text-orange-500 text-center">
              {productNum}
            </div>
            <button
              onClick={() => setProductNum(productNum + 1)}
              className="w-10 bg-gray-200 text-orange-500 font-bold rounded-r-md text-center"
            >
              +
            </button>
          </div>
          <button
            onClick={() =>
              addItemInCart({
                id: 1,
                name: "SAMBA ORIGINALS",
                img: "src/assets/imgs/1.avif",
                quantity: productNum,
                price: 125,
              })
            }
            className="bg-orange-500 px-10 py-1 rounded-md text-white"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
