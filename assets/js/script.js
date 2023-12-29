var to, toX, toY;

$(document).ready(function () {
    $("#userModal").modal("show");
})

$("#userModal input[type=radio]").change(function () {
    localStorage.setItem("user", this.value);
    $("#userModal").modal("hide");
    $(`div[data-user="${this.value}"] img`).css({"border": "2px solid var(--bs-primary)"});
})

$("div.card").click(function (event) {

    if (this.dataset.user == localStorage.getItem("user")) {
        alert("You can't send your self.")
        return;
    }

    to = this.dataset.user;
    toX = this.children[0].x;
    toY = this.children[0].y;

    $("#iconsModal").modal("show");
    $("#iconsModal .modal-dialog").css({ top: event.clientY, left: event.clientX });
})

$("#iconsModal img").click(function () {
    $("#iconsModal").modal("hide");
    const toUser = to, toUserX = toX, toUserY = toY;
    const animationDuration = 2;
    const fromLeft = $("div[data-user='" + localStorage.getItem("user") + "']")[0].offsetLeft;
    const fromTop = $("div[data-user='" + localStorage.getItem("user") + "']")[0].offsetTop;
    const htmlEmoji = `<div id="${toUser}"><img src="${this.src}" style="object-position: 0 0;object-fit:cover;position:absolute;top:${fromTop}px;left:${fromLeft}px;z-index:10;animation-name:sprite-user-${toUser},sprite-image-${toUser};animation-delay:0s,${animationDuration}s;animation-duration:${animationDuration}s,${animationDuration}s;animation-timing-function:linear,steps(${this.dataset.frames});animation-iteration-count:1,1;animation-fill-mode:forwards,forwards" height=${this.height} width=${this.width} />`;
    const spriteImageStyle = `<style>@keyframes sprite-image-${toUser}{to {object-position: ${this.dataset.framesLayout == "horizontal" ? "100% 0" : "0 100%"}}} `;
    const spriteUserStyle = `@keyframes sprite-user-${toUser}{to {top:${toUserY}px;left:${toUserX}px;}}</style></div>`;
    $("#emoji").append(htmlEmoji + spriteImageStyle + spriteUserStyle);

    setTimeout(function () {
        $(`#emoji #${toUser}`).remove();
    }, animationDuration * 2000)
})