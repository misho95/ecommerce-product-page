import { useState } from "react";
import ProductImg from "./product.img.component";
import { shoppingCart } from "../zustand";
import ImgModal from "./img.modal";

const Product = () => {
  const [productNum, setProductNum] = useState<number>(0);
  const [imgActive, setImgActive] = useState<number>(0);
  const [showImgModal, setShowImgModal] = useState<boolean>(false);
  const addInCart = shoppingCart((state) => state.addNewItemInCart);

  interface ItemType {
    id: number;
    name: string;
    img: string;
    quantity: number;
    price: number;
  }

  const productData = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    company: "Sneaker Company",
    des: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
    price: 125,
    dis: 50,
    fullPrice: 250,
    imgs: [
      {
        id: 0,
        link: "src/assets/images/image-product-1.jpg",
      },
      {
        id: 1,
        link: "src/assets/images/image-product-2.jpg",
      },
      {
        id: 2,
        link: "src/assets/images/image-product-3.jpg",
      },
      {
        id: 3,
        link: "src/assets/images/image-product-4.jpg",
      },
    ],
  };

  const dataSent = {
    id: 1,
    name: "SAMBA ORIGINALS",
    img: "src/assets/images/image-product-1.jpg",
    quantity: productNum,
    price: 125,
  };

  const decrease = () => {
    if (productNum !== 0) {
      setProductNum(productNum - 1);
    }
  };

  const addItemInCart = (obj: ItemType) => {
    if (productNum === 0) {
      return;
    }

    addInCart(obj);

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
            className="bg-gray-200 w-6 h-6 p-1 rounded-full flex sm:hidden items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 shadow-sm text-gray-700 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm select-none ">
              arrow_back_ios
            </span>
          </div>
          <img
            src={productData.imgs[imgActive].link}
            className="w-full sm:w-72 lg:w-128 rounded-lg cursor-pointer"
            onClick={imgFullScreen}
          />
          <div
            onClickCapture={nextImg}
            className="bg-gray-200 w-6 h-6 p-1 rounded-full flex sm:hidden items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 shadow-sm text-gray-700 cursor-pointer"
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
        <div className="w-full flex justify-between gap-3">
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
            onClick={() => addItemInCart(dataSent)}
            className="bg-orange-500 px-10 py-1 rounded-md text-white flex gap-3 items-center"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
