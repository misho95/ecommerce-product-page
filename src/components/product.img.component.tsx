const ProductImg = ({ id, link, setImgActive }) => {
  return (
    <img
      onClick={() => setImgActive(id)}
      src={link}
      className="w-28 rounded-lg"
    />
  );
};

export default ProductImg;
