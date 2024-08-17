import axios from "axios";

export async function getJogadores() {
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

  try {
    // Await axios request and access response data
    const { data } = await axios.request(config);

    // Iterate over the response data to build the jogadores array
    data.response.forEach((dadosJogador) => {
      jogadores.push({
        id: dadosJogador.player.id,
        imagem: dadosJogador.player.photo,
        nome: dadosJogador.player.name,
        time: dadosJogador.statistics[0].team.name,
        posicao: dadosJogador.statistics[0].games.position,
      });
    });
  } catch (error) {
    console.error("Error fetching jogadores:", error);
  }

  return { jogadores: jogadores };
}
