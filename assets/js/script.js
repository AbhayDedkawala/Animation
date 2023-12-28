$("div.card").click(function (event) {
    console.log(event);
    $("#iconsModal").modal("show");
    $("#iconsModal .modal-dialog").css({ top: event.screenY, left: event.screenX });
})

$("#iconsModal img").click(function () {
    this.style.animation = "sprite 1.5s steps(36) 1";
})