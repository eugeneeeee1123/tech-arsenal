(function () {
    document.querySelectorAll(".seal").forEach((seal) => {
        const dot = seal.querySelector(".dot");
        if (!dot) return;
        seal.innerHTML = `${dot.outerHTML}${seal.classList.contains("owned") ? "In collection" : "Wishlist"}`;
    });

    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const pageNav = document.querySelector(".page-nav");
    if (!hamburgerBtn || !pageNav) return;

    function setOpen(open) {
        pageNav.classList.toggle("is-open", open);
        hamburgerBtn.classList.toggle("is-active", open);
        hamburgerBtn.setAttribute("aria-expanded", String(open));
    }

    hamburgerBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        setOpen(!pageNav.classList.contains("is-open"));
    });

    document.addEventListener("click", (event) => {
        if (!pageNav.contains(event.target) && !hamburgerBtn.contains(event.target)) {
            setOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || !pageNav.classList.contains("is-open")) return;
        setOpen(false);
        hamburgerBtn.focus();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 640) setOpen(false);
    });
})();
