


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







html, body
  background #212226
  color #fff
		font-family 'Ubuntu Condensed'
  margin 0

.dashboard:not(.habbo__disabled)
  background #1E1E20
  width 100%
  position fixed
  bottom 0

.habbo__input
	font-family 'Ubuntu Condensed'
	border-radius 4px
	box-shadow 0 1px 0 #828181 inset
	
.habbo__outline
	-webkit-filter drop-shadow(0 1px 0 #FFF) drop-shadow(0 -1px 0 #FFF) drop-shadow(1px 0 0 #FFF) drop-shadow(-1px 0 0 #FFF) drop-shadow(0 0 10px rgba(000,000,000,000))
	
.habbo__wallet:not(.habbo__disabled)
	height 50px
	
	.uk-navbar-center
		background #1C1D21
		border-bottom-left-radius 5px
		border-bottom-right-radius 5px
		
	.uk-navbar-nav > li > a
		font-family 'Ubuntu Condensed'
		font-weight 800

.habbo__button__action
	background #111214
	border-radius 5px
	
.habbo__information
	width 15vw
	right .5vw
	bottom 85px
	border-radius 4px
	position absolute
	background #1C1D1F
	color #fff
	
	h6
		color #fff
		font-weight 500
	
	.uk-card-header
		padding 10px 25px
		border-bottom 3px solid #191A1C
		
	.uk-card-body
		padding 20px 25px
		
	.uk-card-footer
		padding 10px 25px
		border-top 3px solid #191A1C
		
	
