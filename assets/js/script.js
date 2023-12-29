var toX, toY;

$(document).ready(function () {
    $("#userModal").modal("show");
})

$("#userModal input[type=radio]").change(function () {
    localStorage.setItem("user", this.value);
    $("#userModal").modal("hide");
})

$("div.card").click(function (event) {

    if (this.dataset.user == localStorage.getItem("user")){
        alert("You can't send your self.")
        return;
    }

    toX = this.children[0].x;
    toY = this.children[0].y;

    $("#iconsModal").modal("show");
    $("#iconsModal .modal-dialog").css({ top: event.clientY, left: event.clientX });
})

$("#iconsModal img").click(function () {
    $("#iconsModal").modal("hide");

    const animationDuration = 2.5;
    const fromLeft = $("div[data-user='" + localStorage.getItem("user") + "']")[0].offsetLeft;
    const fromTop = $("div[data-user='" + localStorage.getItem("user") + "']")[0].offsetTop;
    const htmlEmoji = `<img src="${this.src}" style="object-position: 0 0;object-fit:cover;position:absolute;top:${fromTop}px;left:${fromLeft}px;z-index:10;animation:sprite-image ${animationDuration}s steps(${this.dataset.frames}) 1" height=${this.height} width=${this.width} />`;
    const spriteImageStyle = `<style>@keyframes sprite-image{to {object-position: ${this.dataset.framesLayout == "horizontal" ? "100% 0" : "0 100%"};top:${toY}px;left:${toX}px;}}</style>`;
    $("#emoji").html(htmlEmoji + spriteImageStyle);

    setTimeout(function () {
        $("#emoji").html("");
    }, animationDuration * 1000)
})