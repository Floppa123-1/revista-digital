const container = document.getElementById("book");

const isMobile = window.innerWidth < 768;

const bookWidth = isMobile
    ? window.innerWidth * 0.95
    : Math.min(850, window.innerWidth * 0.8);

const bookHeight = isMobile
    ? bookWidth * 1.5
    : bookWidth * 1.3;

const pageFlip = new St.PageFlip(container, {
    width: bookWidth,
    height: bookHeight,
    showCover: true,
    size: "stretch",
    mobileScrollSupport: true
});

pageFlip.loadFromHTML(
    document.querySelectorAll(".page")
);
