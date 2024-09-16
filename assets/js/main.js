$(window).on("load resize", setHeightOfFooterContainer);
function setHeightOfFooterContainer() {
    var footer = document.getElementsByClassName('ft-container')[0];
    if (footer) {
        var footerContainer = document.getElementsByClassName('footer-container')[0];
        footerContainer.style.height = footer.offsetHeight + "px";
    }
}