$(document).ready(function() {
    $("#generateButton").click(function() {
        GenererAvatar();
    });

    function GenererAvatar() {
        var habbo = $("#usuario").val();
        var action = $("#acao").val();
        var direction = $("#direction").val();
        var direction_tete = $("#direction_tete").val();
        var geste = $("#geste").val();
        var taille = $("#taille").val();
        var tete_seule = $("#tete_seule").val();

        var urlAvatar = `https://api.habbocity.me/avatar_image.php?user=${habbo}&action=${action}&direction=${direction}&head_direction=${direction_tete}&gesture=${geste}&size=${taille}&headonly=${tete_seule}`;

        $("#avatarImage").attr("src", urlAvatar);
    }
});
