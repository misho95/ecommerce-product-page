interface PropsType {
  id: number;
  link: string;
  setImgActive: (arg0: number) => void;
}

const ProductImg = ({ id, link, setImgActive }: PropsType) => {
  return (
    <img
      onClick={() => setImgActive(id)}
      src={link}
      className="w-16 lg:w-28 rounded-lg"
    />
  );
};

export default ProductImg;
