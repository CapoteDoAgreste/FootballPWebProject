import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ favoritosDisabled }) {
  const Option = ({ text, to, disabled }) => {
    return disabled ? (
      <div className="hover:bg-gray-300 bg-gray-400 text-center p-5 hover:shadow-xl font-medium cursor-not-allowed">
        {text}
      </div>
    ) : (
      <Link to={to}>
        <div className="hover:bg-gray-200 text-center p-5 hover:shadow-xl font-medium">
          {text}
        </div>
      </Link>
    );
  };

  return (
    <div className="top-0 w-[10rem] h-[100%] bg-gray-50 shadow-2xl fixed">
      <Option to="/" text="Atletas" disabled={false} />
      <Option to="/favoritos" text="Favoritos" disabled={favoritosDisabled} />
    </div>
  );
}
