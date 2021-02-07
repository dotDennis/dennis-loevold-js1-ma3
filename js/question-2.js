// question 2
const container = document.querySelector(".container");

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function getGames() {
  try {
    const response = await fetch(url);

    const result = await response.json();

    const data = result.results;

    for (let i = 0; i < data.length; i++) {
      if (i === 8) break;

      const name = data[i].name;
      const rating = data[i].rating;
      const tags = data[i].tags;

      container.innerHTML += gameContainers(name, rating, tags);
    }
  } catch (error) {
    container.innerHTML = getError("Woops!", error);
  } finally {
    container.classList.remove("loader");
  }
}

getGames();
