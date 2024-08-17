import SearchIcon from "../assets/SearchIcon.svg";

export default function InputPesquisa({ setPesquisa }) {
  return (
    <div className="w-[40vw] flex items-center bg-white drop-shadow-2xl rounded-full p-2">
      <input
        type="text"
        className="w-full p-2 rounded-l-full focus:outline-none"
        placeholder="Pesquisar..."
        onChange={(e) => setPesquisa(e.target.value)}
      />
      <button className="p-2 bg-neutral-400 rounded-full">
        <img src={SearchIcon} alt="Ícone de lupa" className="w-6 h-6" />
      </button>
    </div>
  );
}
