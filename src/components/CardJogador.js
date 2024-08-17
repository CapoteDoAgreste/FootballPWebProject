import Star from "./Star";

export default function CardJogador({ jogador }) {
  const { id, nome, imagem, posicao, time } = jogador;

  return (
    <div className="bg-gray-50 w-[60vw] h-[10rem] grid grid-cols-3 grid-row-1 pd-5 rounded-lg shadow-xl">
      <div>
        <img
          src={imagem}
          className="size-[9rem] mx-5 rounded-[32px] my-2"
          alt={`${nome}`}
        />
      </div>
      <div className="mt-3">
        <h1 className="font-semibold">{nome}</h1>
        <h3 className="font-medium">
          Posicao: <span className="font-normal">{posicao}</span>
        </h3>
        <h3 className="font-medium">
          Time: <span className="font-normal">{time}</span>
        </h3>
      </div>
      <div>
        <Star id={id} />
      </div>
    </div>
  );
}
