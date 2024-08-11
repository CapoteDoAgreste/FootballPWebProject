const { default: axios } = require("axios");

export function getJogadores() {
  let jogadores = [];

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2020",
    headers: {
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      "X-RapidApi-Key": "5fbfa5f499mshaf2a891b46c2ddap1b9f3ejsne3b6245a8e75",
    },
  };

  axios
    .request(config)
    .then(({ response }) => {
      response.forEach((dadosJogador) => {
        jogadores.push({
          id: dadosJogador.player.id,
          imagem: dadosJogador.player.photo,
          nome: dadosJogador.player.name,
          time: dadosJogador.statistics[0].team.name,
          posicao: dadosJogador.statistics[0].games.position,
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });

  return { jogadores };
}
