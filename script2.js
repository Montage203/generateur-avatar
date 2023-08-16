
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


const pseudoInput = document.getElementById("pseudoInput");
const avatarImg = document.querySelector(".avatar img");
const actionSelect = document.getElementById("actionSelect");
const directionSelect = document.getElementById("directionSelect");
// Ajoutez des sélecteurs pour les autres éléments d'interface utilisateur (head_direction, gesture, size, headonly, etc.)

let action = "std";
let direction = 2;
let headDirection = 2;
let gesture = "std";
let size = "n";
let headOnly = 0;

updateAvatar();

function updateAvatar() {
  const avatarUrl = `https://api.habbocity.me/avatar_image.php?user=${encodeURIComponent(
    pseudoInput.value
  )}&action=${action}&direction=${direction}&head_direction=${headDirection}&gesture=${gesture}&size=${size}&headonly=${headOnly}`;
  avatarImg.src = avatarUrl;
}

pseudoInput.addEventListener("keyup", () => {
  updateAvatar();
});

// Ajoutez des écouteurs d'événements pour les changements d'options d'avatar (par exemple, boutons pour changer d'action, de direction, etc.)
actionSelect.addEventListener("change", () => {
  action = actionSelect.value;
  updateAvatar();
});

directionSelect.addEventListener("change", () => {
  direction = parseInt(directionSelect.value);
  updateAvatar();
});

// Ajoutez des écouteurs d'événements pour les autres éléments d'interface utilisateur (head_direction, gesture, size, headonly, etc.)
// Lorsque ces options changent, appelez simplement la fonction updateAvatar() pour mettre à jour l'avatar en conséquence.

document.getElementById("updateButton").addEventListener("click", () => {
  updateAvatar();
});
