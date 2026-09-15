(function () {
    const pages = [
        { file: "index.html", en: "Home", key: "home" },
        { file: "tech-arsenal.html", en: "Catalogue", key: "catalogue" },
        { file: "comparison-lab.html", en: "Compare", key: "compare" },
        { file: "topology.html", en: "Setup", key: "topology" }
    ];

    const currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const current = pages.find((page) => page.file === currentFile) || pages[0];

    function bilingual(zh, en) {
        return en;
    }

    window.arsenalBilingual = bilingual;

    document.querySelectorAll("[data-zh][data-en]").forEach((node) => {
        node.textContent = node.dataset.en;
    });

    document.querySelectorAll("[data-placeholder-zh][data-placeholder-en]").forEach((input) => {
        input.placeholder = input.dataset.placeholderEn;
    });

    const textPairs = {
        "phones": "Phones",
        "Legion Y700": "Legion Y700",
        "Xiaomi 13 Ultra": "Xiaomi 13 Ultra",
        "Xiaomi MIX 4": "Xiaomi MIX 4",
        "Sony Xperia 1 V": "Sony Xperia 1 V",
        "Huawei P60 Pro": "Huawei P60 Pro",
        "OPPO Find X7 Ultra": "OPPO Find X7 Ultra"
    };

    document.querySelectorAll("body *:not(script):not(style)").forEach((node) => {
        if (node.children.length || node.closest(".lang-pair") || node.dataset.zh) return;
        const key = node.textContent.trim();
        const en = textPairs[key];
        if (en) node.textContent = en;
    });

    document.querySelectorAll(".seal").forEach((seal) => {
        const dot = seal.querySelector(".dot");
        if (!dot) return;
        const owned = seal.classList.contains("owned");
        seal.innerHTML = `${dot.outerHTML}${owned ? "In collection" : "Wishlist"}`;
    });

    document.querySelectorAll(".page-nav").forEach((nav) => {
        nav.setAttribute("aria-label", "Site navigation");
        nav.innerHTML = pages.map((page) => {
            const active = page.file === current.file;
            return `<a class="page-link${active ? " active" : ""}" href="${page.file}"${active ? ' aria-current="page"' : ""}>${page.en}</a>`;
        }).join("");
    });

    document.querySelectorAll(".back-link, .back-btn").forEach((link) => {
        link.classList.add("home-mark-link");
        if (!link.querySelector("img")) {
            link.innerHTML = '<img src="assets/images/arsenal-spark.png" alt="">';
        }
        link.setAttribute("aria-label", "Back to home");
        link.setAttribute("title", "Back to home");
    });



    document.documentElement.dataset.sitePage = current.key;
})();
