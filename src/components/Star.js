import { useState, useEffect } from "react";
import filledStar from "../assets/StarRounded.svg";
import notFilledStar from "../assets/StarBorderRounded.svg";

export default function Star({
  id,
  jogador,
  adicionarFavorito,
  tirarFavorito,
  favoritos,
}) {
  const [isFavorite, setIsFavorite] = useState(notFilledStar);

  useEffect(() => {
    const favoritosData = JSON.parse(localStorage.getItem("favoritos")) || {
      jogadores: [],
    };
    if (favoritosData.jogadores.some((jogadorF) => jogadorF.id === id)) {
      setIsFavorite(filledStar);
    }
  }, [favoritos, id]);

  const StarImage = ({
    id,
    image,
    jogador,
    adicionarFavorito,
    tirarFavorito,
  }) => {
    return (
      <img
        src={image}
        className="float-right m-2 size-10"
        alt="StarFavorite"
        onClick={() => {
          if (image === filledStar) {
            tirarFavorito(jogador, setIsFavorite, notFilledStar);
          } else {
            adicionarFavorito(jogador, setIsFavorite, filledStar);
          }
        }}
      />
    );
  };

  return (
    <StarImage
      image={isFavorite}
      jogador={jogador}
      adicionarFavorito={adicionarFavorito}
      tirarFavorito={tirarFavorito}
    />
  );
}
