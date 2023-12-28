var toX, toY;
$(document).ready(function () {
    $("#userModal").modal("show");
})

$("#userModal input[type=radio]").change(function () {
    localStorage.setItem("user", this.value);
    $("#userModal").modal("hide");
})

$("div.card").click(function (event) {
    toX = this.children[0].x;
    toY = this.children[0].y;

    $("#iconsModal").modal("show");
    $("#iconsModal .modal-dialog").css({ top: event.clientY, left: event.clientX });
})

$("#iconsModal img").click(function () {
    const fromLeft = $("div[data-user='" + localStorage.getItem("user") + "']")[0].offsetLeft;
    const fromTop = $("div[data-user='" + localStorage.getItem("user") + "']")[0].offsetTop;
    const htmlEmoji = `<img style="background:url('${this.dataset.image}') 0 0 no-repeat; position:absolute;top:${fromTop}px;left:${fromLeft}px;z-index:10" height=176 width=176 />`;
    $("#emoji").html(htmlEmoji);

    $("#iconsModal").modal("hide");
    // this.style.animation = "sprite-image 1.5s steps(36) 1";
})