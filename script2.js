


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

const pseudoInput = document.getElementById("pseudoInput");
const pseudoBtn = document.getElementById("pseudoBtn");

pseudoBtn.addEventListener("click", () => {
  const newPseudo = pseudoInput.value;
  if (newPseudo) {
    const avatarImg = document.querySelector(".avatar img");
    const avatarUrl = `https://api.habbocity.me/avatar_image.php?user=${encodeURIComponent(newPseudo)}&action=std&size=n&head_direction=2&direction=2&gesture=std&headonly=0`;
    avatarImg.src = avatarUrl;
  }
});
