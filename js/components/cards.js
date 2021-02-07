const gameContainers = function (name, rating, tags) {
  return `
    <div class="game">
        <h2>${name}</h2>
        <p>Rating: ${rating}</p>
        <p>Number of tags: ${tags.length}</p>
    </div>
  `;
};
