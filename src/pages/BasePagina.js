import { useState } from "react";
import PlayerCard from "../components/CardJogador";

//Página para teste de componentes e criação da base para a aba de favoritos e atletas
export default function BasePagina() {
  const [jogadores, setJogadores] = useState({
    jogadores: [{}],
  });

  return (
    <>
      {players.jogadores.map((jogador) => {
        return <PlayerCard jogador={jogador} />;
      })}
    </>
  );
}
