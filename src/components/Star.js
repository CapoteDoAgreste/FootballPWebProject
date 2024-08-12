import filledStar from "../assets/StarRounded.svg";
import notFilledStar from "../assets/StarBorderRounded.svg";

const StarImage = ({ image }) => {
  return (
    <img src={image} className="float-right m-2 size-10" alt="StarFavorite" />
  );
};

export default function Star({ id }) {
  let isFavorite = false;
  localStorage.getItem("favoritos")?.jogadores.forEach((jogador) => {
    if ((jogador.id = id)) {
      isFavorite = true;
    }
  });

  if (isFavorite) {
    return <StarImage image={filledStar} />;
  } else {
    return <StarImage image={notFilledStar} />;
  }
}
