function createGame(player1, hour, player2) {
    return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
      </li>
    `
  }

  let delay = -0.4;
  function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
    `
  }

  document.querySelector("#cards").innerHTML =
  createCard("22/11", "terça", createGame("argentina", "07:00", "arabia-saudita") + createGame("dinamarca", "10:00", "tunisia") + createGame("mexico", "13:00", "polonia") + createGame("frança", "16:00", "australia")) +
  createCard("23/11", "quarta", createGame("marrocos", "07:00", "croacia") + createGame("alemanha", "10:00", "japao") + createGame("espanha", "13:00", "costa-rica") + createGame("belgica", "16:00", "canada")) +
  createCard("24/11", "quinta", createGame("suiça", "07:00", "camaroes") + createGame("uruguai", "10:00", "korea") + createGame("portugal", "13:00", "gana") + createGame("brasil", "16:00", "servia")) +
  createCard("25/11", "sexta", createGame("gales", "07:00", "ira") + createGame("catar", "10:00", "senegal") + createGame("holanda", "13:00", "equador") + createGame("inglaterra", "16:00", "eua")) +
  createCard("26/11", "sabado", createGame("tunisia", "07:00", "australia") + createGame("polonia", "10:00", "arabia-saudita") + createGame("frança", "13:00", "dinamarca") + createGame("argentina", "16:00", "mexico")) +
  createCard("27/11", "domingo", createGame("japao", "07:00", "costa-rica") + createGame("belgica", "10:00", "marrocos") + createGame("croacia", "13:00", "canada") + createGame("espanha", "16:00", "alemanha")) +
  createCard("28/11", "segunda", createGame("camaroes", "07:00", "servia") + createGame("korea", "10:00", "gana") + createGame("brasil", "13:00", "suiça") + createGame("portugal", "16:00", "uruguai")) +
  createCard("02/12", "sexta", createGame("korea", "07:00", "portugal") + createGame("gana", "10:00", "uruguai") + createGame("servia", "13:00", "suiça") + createGame("camaroes", "16:00", "brasil"))


