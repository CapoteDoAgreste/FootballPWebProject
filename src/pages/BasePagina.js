import { useEffect, useState } from "react";
import InputPesquisa from "../components/InputPesquisa";
import Listagem from "../components/Listagem";
import { mock } from "../scripts/mockedResponse";
import { getJogadores } from "../scripts/Routes";

export default function BasePagina({ titulo }) {
  const [jogadores, setJogadores] = useState(mock);
  const [lista, setLista] = useState(jogadores);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    const fetchJogadores = async () => {
      const fetchedJogadores = await getJogadores();
      setJogadores(fetchedJogadores);
      setLista(jogadores);
    };
    if (titulo == "Atletas") {
      fetchJogadores();
    }
  }, []);

  const search = (pesquisaString) => {
    setPesquisa(pesquisaString);
    setLista({
      jogadores: jogadores.jogadores.filter((jogador) =>
        jogador.nome.toLowerCase().includes(pesquisaString.toLowerCase())
      ),
    });
  };

  return (
    <>
      <div className="mt-10">
        <Listagem
          jogadores={lista}
          textoPesquisado={pesquisa}
          titulo={titulo}
        />
      </div>
      <div className="fixed top-5 right-5">
        <InputPesquisa setPesquisa={search} />
      </div>
    </>
  );
}
