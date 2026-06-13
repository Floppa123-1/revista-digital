const container = document.getElementById("book");

const bookWidth = Math.min(window.innerWidth * 0.9, 900);
const bookHeight = bookWidth * 1.4;

const pageFlip = new St.PageFlip(container, {
    width: bookWidth,
    height: bookHeight,
    showCover: true,
    mobileScrollSupport: true
});

pageFlip.loadFromHTML(
    document.querySelectorAll(".page")
);
