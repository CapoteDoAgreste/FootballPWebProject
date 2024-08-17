import { useState } from "react";
import SearchIcon from "../assets/SearchIcon.svg";

export default function InputPesquisa({ setPesquisa }) {
  const [inputPesquisa, setInputPesquisa] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setPesquisa(inputPesquisa);
    }
  };

  return (
    <div className="w-[40vw] flex items-center bg-white drop-shadow-2xl rounded-full p-2">
      <input
        type="text"
        className="w-full p-2 rounded-l-full focus:outline-none"
        placeholder="Pesquisar..."
        onChange={(e) => setInputPesquisa(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        type="submit"
        className="p-2 bg-neutral-400 rounded-full hover:bg-neutral-200"
        onClick={() => {
          setPesquisa(inputPesquisa);
        }}
      >
        <img src={SearchIcon} alt="Ícone de lupa" className="w-6 h-6" />
      </button>
    </div>
  );
}
