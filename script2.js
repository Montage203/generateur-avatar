// Ajoutez ce code en haut de votre script2.js pour définir les déplacements possibles
const DIRECTIONS = {
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
};

// Mettez à jour la fonction avatarToPos pour déplacer l'avatar en fonction de la direction
function moveAvatar(direction) {
  const avatarPos = avatar.getBoundingClientRect();
  let newX = avatarPos.left;
  let newY = avatarPos.top;

  if (direction === DIRECTIONS.UP) {
    newY -= 55; // Déplacer vers le haut
  } else if (direction === DIRECTIONS.DOWN) {
    newY += 55; // Déplacer vers le bas
  } else if (direction === DIRECTIONS.LEFT) {
    newX -= 55; // Déplacer vers la gauche
  } else if (direction === DIRECTIONS.RIGHT) {
    newX += 55; // Déplacer vers la droite
  }

  avatarToPos({ avatar, x: newX, y: newY });
}

// Écouteurs d'événements pour les touches directionnelles
document.addEventListener("keydown", (event) => {
  if (event.key in DIRECTIONS) {
    moveAvatar(event.key);
  }
});

// Reste du code existant...





/** Determine Avatar Position */
const tiles = document.querySelectorAll(".room .block");
const avatar = document.querySelector(".avatar");
const door = document.querySelector(".room .door");

avatarToPos({
  avatar: avatar,
  x: door.getBoundingClientRect().left - 30,
  y: door.getBoundingClientRect().top + 70,
})

function avatarToPos({avatar, x, y}) {
  avatar.style.top = y + 30 + "px";
  avatar.style.left = x + 55 + "px";
}

tiles.forEach(tile => {
  tile.addEventListener("click", e => {
    const tilePos = e.target.getBoundingClientRect();
    avatarToPos({
      avatar: avatar,
      x: tilePos.left,
      y: tilePos.top
    });
  })
})
