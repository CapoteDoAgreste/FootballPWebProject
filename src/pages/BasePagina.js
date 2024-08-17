import { useState } from "react";
import PlayerCard from "../components/CardJogador";
import InputPesquisa from "../components/InputPesquisa";
import Listagem from "../components/Listagem";
import { mock } from "../scripts/mockedResponse";

//Página para teste de componentes e criação da base para a aba de favoritos e atletas
export default function BasePagina() {
  const [jogadores, setJogadores] = useState(mock);

  return (
    <>
      <div className="mt-10">
        <Listagem
          jogadores={jogadores}
          textoPesquisado={"Capote"}
          titulo={"Atletas"}
        />
      </div>
      <div className="fixed top-5 right-5">
        <InputPesquisa />
      </div>
    </>
  );
}
