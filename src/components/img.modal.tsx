import ProductImg from "./product.img.component";

const ImgModal = ({
  imgs,
  imgActive,
  setImgActive,
  setShowImgModal,
  prevImg,
  nextImg,
}) => {
  return (
    <div
      onClick={() => setShowImgModal(false)}
      className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50 flex justify-center items-center"
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="flex flex-col items-center gap-5"
      >
        <div className="w-full flex justify-end">
          <span
            onClick={() => setShowImgModal(false)}
            className="material-symbols-outlined text-white select-none"
          >
            close
          </span>
        </div>
        <div className="w-fit h-fit relative">
          <div
            onClick={prevImg}
            className="bg-gray-200 w-6 h-6 p-1 rounded-full flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 shadow-sm text-gray-700"
          >
            <span className="material-symbols-outlined text-sm select-none">
              arrow_back_ios
            </span>
          </div>
          <img
            src={imgs[imgActive].link}
            className="w-full sm:w-128 rounded-lg"
          />
          <div
            onClickCapture={nextImg}
            className="bg-gray-200 w-6 h-6 p-1 rounded-full flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 shadow-sm text-gray-700"
          >
            <span className="material-symbols-outlined text-sm select-none">
              arrow_forward_ios
            </span>
          </div>
        </div>
        <div className="hidden sm:flex gap-3 justify-center ">
          {imgs.map((img) => {
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
    </div>
  );
};

export default ImgModal;
