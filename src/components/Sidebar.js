import { Link } from "react-router-dom";

export default function Sidebar() {
  const Option = ({ text, to }) => {
    return (
      <div className="hover:bg-gray-200 text-center p-5 hover:shadow-xl font-medium">
        {text}
      </div>
    );
  };

  return (
    <div className="top-0 w-[10rem] h-[100%] bg-gray-50 shadow-2xl fixed">
      <Link to="/">
        <Option reloadDocument text={"Atletas"} />
      </Link>
      <Link to="/favoritos">
        <Option reloadDocument text={"Favoritos"} />
      </Link>
    </div>
  );
}
