const pageFlip = new St.PageFlip(
    document.getElementById("book"),
    {
        width: 600,
        height: 800,
        showCover: true
    }
);

pageFlip.loadFromHTML(
    document.querySelectorAll(".page")
);