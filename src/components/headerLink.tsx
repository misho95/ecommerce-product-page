interface PropsType {
  name: string;
}

const HeaderLink = ({ name }: PropsType) => {
  return (
    <a
      href="#"
      className="text-gray-500 hover:text-gray-700 hover:border-b-2 border-b-orange-500 h-16"
    >
      {name}
    </a>
  );
};

export default HeaderLink;
