document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("gameForm");
  const gamesList = document.getElementById("games-list");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("title").value;
      const genre = document.getElementById("genre").value;
      const newGame = { title, genre };

      let games = JSON.parse(localStorage.getItem("games")) || [];
      games.push(newGame);
      localStorage.setItem("games", JSON.stringify(games));

      form.reset();
      alert("Game added successfully! 🎉");
    });
  }

  if (gamesList) {
    const games = JSON.parse(localStorage.getItem("games")) || [];
    gamesList.innerHTML = games.map(g => `<p><strong>${g.title}</strong> - ${g.genre}</p>`).join("");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("gameForm");
  const gamesList = document.getElementById("games-list");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("title").value;
      const genre = document.getElementById("genre").value;
      const download = document.getElementById("download").value;
      const newGame = { title, genre, download };

      let games = JSON.parse(localStorage.getItem("games")) || [];
      games.push(newGame);
      localStorage.setItem("games", JSON.stringify(games));

      form.reset();
      alert("Game added successfully! 🎉");
    });
  }

  if (gamesList) {
    const games = JSON.parse(localStorage.getItem("games")) || [];
    gamesList.innerHTML = games.map(g => `
      <div class="game-card">
        <h3>${g.title}</h3>
        <p>Genre: ${g.genre}</p>
        <a href="${g.download}" class="download-btn" target="_blank">⬇️ Download</a>
      </div>
    `).join("");
  }
});
