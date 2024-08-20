export default function Sidebar() {
  const Option = ({ text }) => {
    return (
      <div className="hover:bg-gray-200 text-center p-5 hover:shadow-xl font-medium">
        {text}
      </div>
    );
  };

  return (
    <div className="top-0 w-[10rem] h-[100vh] bg-gray-50 shadow-2xl absolute">
      <Option text={"Atletas"} />
      <Option text={"Favoritos"} />
    </div>
  );
}
