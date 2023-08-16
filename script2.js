


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



// Ajoutez ces lignes à la fin de votre script2.js

const arrowButtons = document.querySelectorAll(".arrow-btn");

arrowButtons.forEach(button => {
  button.addEventListener("click", () => {
    const currentX = parseInt(avatar.style.left, 10);
    const currentY = parseInt(avatar.style.top, 10);

    let newX = currentX;
    let newY = currentY;

    if (button.classList.contains("up")) {
      newY -= 55; // Déplacer vers le haut
    } else if (button.classList.contains("down")) {
      newY += 55; // Déplacer vers le bas
    } else if (button.classList.contains("left")) {
      newX -= 55; // Déplacer vers la gauche
    } else if (button.classList.contains("right")) {
      newX += 55; // Déplacer vers la droite
    }

    // Vérification pour ne pas sortir de la pièce
    if (newX >= 0 && newX <= (8 * 55) && newY >= 0 && newY <= (6 * 55)) {
      avatarToPos({ avatar: avatar, x: newX, y: newY });
    }
  });
});
