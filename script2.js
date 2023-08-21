
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
const headDirectionSelect = document.getElementById("headDirectionSelect");
const gestureSelect = document.getElementById("gestureSelect");
const sizeSelect = document.getElementById("sizeSelect");
const headOnlySelect = document.getElementById("headOnlySelect");

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

actionSelect.addEventListener("change", () => {
  action = actionSelect.value;
  updateAvatar();
});

directionSelect.addEventListener("change", () => {
  direction = parseInt(directionSelect.value);
  updateAvatar();
});

headDirectionSelect.addEventListener("change", () => {
  headDirection = parseInt(headDirectionSelect.value);
  updateAvatar();
});

gestureSelect.addEventListener("change", () => {
  gesture = gestureSelect.value;
  updateAvatar();
});

sizeSelect.addEventListener("change", () => {
  size = sizeSelect.value;
  updateAvatar();
});

headOnlySelect.addEventListener("change", () => {
  headOnly = parseInt(headOnlySelect.value);
  updateAvatar();
});


// Ajoutez des écouteurs d'événements pour les autres éléments d'interface utilisateur (head_direction, gesture, size, headonly, etc.)
// Lorsque ces options changent, appelez simplement la fonction updateAvatar() pour mettre à jour l'avatar en conséquence.

document.getElementById("updateButton").addEventListener("click", () => {
  updateAvatar();
});



const addBlockButton = document.getElementById("addBlockButton");
addBlockButton.addEventListener("click", () => {
  const rowInput = parseInt(document.getElementById("rowInput").value);
  const columnInput = parseInt(document.getElementById("columnInput").value);

  if (isNaN(rowInput) || isNaN(columnInput)) {
    alert("Veuillez saisir des valeurs valides pour la ligne et la colonne.");
    return;
  }

  if (rowInput < 1 || rowInput > 8 || columnInput < 1 || columnInput > 6) {
    alert("Les valeurs de ligne et de colonne doivent être comprises entre 1 et 8 pour la ligne et entre 1 et 6 pour la colonne.");
    return;
  }

  const newBlock = document.createElement("div");
  newBlock.classList.add("block");
  const room = document.querySelector(".room");
  room.appendChild(newBlock);

  const blockIndex = (rowInput - 1) * 6 + columnInput - 1;
  const tiles = document.querySelectorAll(".room .block");
  const tilePos = tiles[blockIndex].getBoundingClientRect();
  
  const avatar = document.querySelector(".avatar");
  avatarToPos({ avatar, x: tilePos.left, y: tilePos.top });
});
