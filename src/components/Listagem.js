import CardJogador from "./CardJogador";

export default function Listagem({
  jogadores,
  textoPesquisado,
  titulo,
  adicionarFavorito,
  tirarFavorito,
}) {
  return (
    <div className="md:container md:mx-auto">
      <h2 className="ml-16 font-semibold">{titulo + ":"}</h2>
      {textoPesquisado ? (
        <>
          <h3 className="ml-32">
            Você pesquisou por:
            <span className="font-semibold">{" " + textoPesquisado}</span>
          </h3>
        </>
      ) : null}

      <br />

      <div>
        {jogadores?.jogadores?.map((jogador) => {
          return (
            <>
              <CardJogador
                jogador={jogador}
                key={jogador.id}
                adicionarFavorito={adicionarFavorito}
                tirarFavorito={tirarFavorito}
              />
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}
