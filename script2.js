


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
const avatarImg = document.querySelector(".avatar img");

pseudoInput.addEventListener("keyup", () => {
  const newPseudo = pseudoInput.value;
  const avatarUrl = `https://api.habbocity.me/avatar_image.php?user=${encodeURIComponent(newPseudo)}&action=std&size=n&head_direction=2&direction=2&gesture=std&headonly=0`;
  avatarImg.src = avatarUrl;
});


const changeActionButton = document.getElementById("changeAction");
const directionSelect = document.getElementById("directionSelect");
const headDirectionSelect = document.getElementById("headDirectionSelect");
const gestureSelect = document.getElementById("gestureSelect");
const sizeSelect = document.getElementById("sizeSelect");
const headOnlyCheckbox = document.getElementById("headOnlyCheckbox");

// Fonction pour changer l'action de l'avatar
function updateAvatarAction(newAction) {
  // Mettez à jour l'action de l'avatar en utilisant l'API appropriée
  // Par exemple, si vous avez une variable pour l'élément d'image de l'avatar :
  avatarImg.src = `https://api.habbocity.me/avatar_image.php?user=PSEUDO&action=${encodeURIComponent(newAction)}&headonly=0&direction=3&head_direction=3&size=l`;
}

// Fonction pour changer la direction de l'avatar
function updateAvatarDirection(newDirection) {
  // Mettez à jour la direction de l'avatar en utilisant l'API appropriée
  avatarImg.src = `https://api.habbocity.me/avatar_image.php?user=PSEUDO&action=std&headonly=0&direction=${encodeURIComponent(newDirection)}&head_direction=3&size=l`;
}

// Fonction pour changer la head_direction de l'avatar
function updateAvatarHeadDirection(newHeadDirection) {
  // Mettez à jour la head_direction de l'avatar en utilisant l'API appropriée
  avatarImg.src = `https://api.habbocity.me/avatar_image.php?user=PSEUDO&action=std&headonly=0&direction=3&head_direction=${encodeURIComponent(newHeadDirection)}&size=l`;
}

// Fonction pour changer le gesture de l'avatar
function updateAvatarGesture(newGesture) {
  // Mettez à jour le gesture de l'avatar en utilisant l'API appropriée
  avatarImg.src = `https://api.habbocity.me/avatar_image.php?user=PSEUDO&action=std&headonly=0&direction=3&head_direction=3&size=l&gesture=${encodeURIComponent(newGesture)}`;
}

// Fonction pour changer la size de l'avatar
function updateAvatarSize(newSize) {
  // Mettez à jour la size de l'avatar en utilisant l'API appropriée
  avatarImg.src = `https://api.habbocity.me/avatar_image.php?user=PSEUDO&action=std&headonly=0&direction=3&head_direction=3&size=${encodeURIComponent(newSize)}`;
}

// Fonction pour changer la headonly de l'avatar
function updateAvatarHeadOnly(headOnly) {
  // Mettez à jour la headonly de l'avatar en utilisant l'API appropriée
  const headonlyValue = headOnly ? "1" : "0";
  avatarImg.src = `https://api.habbocity.me/avatar_image.php?user=PSEUDO&action=std&headonly=${encodeURIComponent(headonlyValue)}&direction=3&head_direction=3&size=l`;
}




