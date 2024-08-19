import { useEffect, useState } from "react";
import InputPesquisa from "../components/InputPesquisa";
import Listagem from "../components/Listagem";
import { mock } from "../scripts/mockedResponse";
import { getJogadores } from "../scripts/Routes";

export default function BasePagina({ titulo }) {
  const [jogadores, setJogadores] = useState(
    JSON.parse(localStorage.getItem("favoritos"))
  );
  const [lista, setLista] = useState(jogadores);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    const fetchJogadores = async () => {
      const fetchedJogadores = await getJogadores();
      setJogadores(fetchedJogadores);
      setLista(fetchedJogadores);
    };

    if (titulo === "Atletas") {
      fetchJogadores();
    } else {
      getFavoritos();
    }
  }, [titulo]);

  const getFavoritos = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos"));
    if (favoritos?.jogadores?.length > 0) {
      if (titulo !== "Atletas") {
        setJogadores(favoritos);
        setLista(jogadores);
      }
    } else {
      criarFavorito();
    }
  };

  const criarFavorito = (novoFavorito) => {
    let favoritoData = { jogadores: [] };
    if (novoFavorito) {
      favoritoData.jogadores?.push(novoFavorito);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritoData));
    if (titulo !== "Atletas") {
      setJogadores(favoritoData);
      setLista(jogadores);
    }
  };

  const adicionarFavorito = (novoFavorito, setImagem, imagem) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {
      jogadores: [],
    };

    const existeFavorito = favoritos?.jogadores.some(
      (jogador) => jogador.id === novoFavorito.id
    );

    if (!existeFavorito) {
      favoritos.jogadores.push(novoFavorito);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      if (titulo !== "Atletas") {
        setJogadores(favoritos);
        setLista(favoritos.jogadores);
      }
      setImagem(imagem);
    } else {
      console.log("O jogador já está na lista de favoritos.");
    }
  };

  const tirarFavorito = (jogador, setImagem, imagem) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {
      jogadores: [],
    };

    const indiceFavorito = favoritos.jogadores.findIndex(
      (jogador) => jogador.id === jogador.id
    );

    if (indiceFavorito !== -1) {
      favoritos.jogadores.splice(indiceFavorito, 1);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      setImagem(imagem);
    } else {
      console.log("O jogador não está na lista de favoritos.");
    }
  };

  const search = (pesquisaString) => {
    setPesquisa(pesquisaString);
    setLista({
      jogadores: jogadores?.jogadores?.filter((jogador) =>
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
          adicionarFavorito={adicionarFavorito}
          tirarFavorito={tirarFavorito}
        />
      </div>
      <div className="fixed top-5 right-5">
        <InputPesquisa setPesquisa={search} />
      </div>
    </>
  );
}
