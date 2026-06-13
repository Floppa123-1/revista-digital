const container = document.getElementById("book");

const isMobile = window.innerWidth < 768;

// 📱 Celular
const mobileWidth = 320;
const mobileHeight = 480;

// 💻 Monitor / PC
const desktopWidth = 700;
const desktopHeight = 900;

const pageFlip = new St.PageFlip(container, {
    width: isMobile ? mobileWidth : desktopWidth,
    height: isMobile ? mobileHeight : desktopHeight,
    showCover: true,
    size: "fixed",
    mobileScrollSupport: true
});

pageFlip.loadFromHTML(
    document.querySelectorAll(".page")
);
