(function () {
    const pages = [
        { file: "index.html", zh: "首页", en: "Home", key: "home" },
        { file: "tech-arsenal.html", zh: "总目录", en: "Catalogue", key: "catalogue" },
        { file: "comparison-lab.html", zh: "对比", en: "Compare", key: "compare" },
        { file: "topology.html", zh: "工位与连接", en: "Setup", key: "topology" }
    ];

    const currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const current = pages.find((page) => page.file === currentFile) || pages[0];

    function bilingual(zh, en) {
        return `<span class="lang-pair"><span class="lang-zh" lang="zh-CN">${zh}</span><span class="lang-divider" aria-hidden="true"> / </span><span class="lang-en" lang="en">${en}</span></span>`;
    }

    window.arsenalBilingual = bilingual;

    document.querySelectorAll("[data-zh][data-en]").forEach((node) => {
        node.innerHTML = bilingual(node.dataset.zh, node.dataset.en);
    });

    document.querySelectorAll("[data-placeholder-zh][data-placeholder-en]").forEach((input) => {
        input.placeholder = `${input.dataset.placeholderZh} / ${input.dataset.placeholderEn}`;
    });

    const textPairs = {
        "phones": ["手机", "Phones"],
        "手机": ["手机", "Phones"],
        "平板与薄板设备": ["平板与薄板设备", "Tablets & thin slabs"],
        "移动工作站": ["移动工作站", "Mobile workstations"],
        "终极主机": ["终极主机", "Ultimate desktop"],
        "装备与外设": ["装备与外设", "Gear & peripherals"],
        "Magic 4 至臻版": ["Magic 4 至臻版", "Magic4 Ultimate"],
        "小米 11 Pro": ["小米 11 Pro", "Xiaomi 11 Pro"],
        "小米 11 Ultra": ["小米 11 Ultra", "Xiaomi 11 Ultra"],
        "小米 15": ["小米 15", "Xiaomi 15"],
        "小米 17": ["小米 17", "Xiaomi 17"],
        "小米 17 Pro Max": ["小米 17 Pro Max", "Xiaomi 17 Pro Max"],
        "拯救者 Y700": ["拯救者 Y700", "Legion Y700"],
        "Legion Y700": ["拯救者 Y700", "Legion Y700"],
        "Xiaomi 13 Ultra": ["小米 13 Ultra", "Xiaomi 13 Ultra"],
        "Xiaomi MIX 4": ["小米 MIX 4", "Xiaomi MIX 4"],
        "Sony Xperia 1 V": ["索尼 Xperia 1 V", "Sony Xperia 1 V"],
        "Huawei P60 Pro": ["华为 P60 Pro", "Huawei P60 Pro"],
        "OPPO Find X7 Ultra": ["OPPO Find X7 Ultra", "OPPO Find X7 Ultra"]
    };

    document.querySelectorAll("body *:not(script):not(style)").forEach((node) => {
        if (node.children.length || node.closest(".lang-pair") || node.dataset.zh) return;
        const key = node.textContent.trim();
        const pair = textPairs[key];
        if (pair) node.innerHTML = bilingual(pair[0], pair[1]);
    });

    document.querySelectorAll(".seal").forEach((seal) => {
        const dot = seal.querySelector(".dot");
        if (!dot || seal.querySelector(".lang-pair")) return;
        const owned = seal.classList.contains("owned");
        seal.innerHTML = `${dot.outerHTML}${bilingual(owned ? "已入藏" : "心愿单", owned ? "In collection" : "Wishlist")}`;
    });

    document.querySelectorAll(".page-nav").forEach((nav) => {
        nav.setAttribute("aria-label", "Site navigation / 网站导航");
        nav.innerHTML = pages.map((page) => {
            const active = page.file === current.file;
            return `<a class="page-link${active ? " active" : ""}" href="${page.file}"${active ? ' aria-current="page"' : ""}>${bilingual(page.zh, page.en)}</a>`;
        }).join("");
    });

    document.querySelectorAll(".back-link, .back-btn").forEach((link) => {
        link.classList.add("home-mark-link");
        if (!link.querySelector("img")) {
            link.innerHTML = '<img src="assets/images/arsenal-spark.png" alt="">';
        }
        if (!link.hasAttribute("aria-label")) link.setAttribute("aria-label", "返回首页 / Back to home");
        if (!link.hasAttribute("title")) link.setAttribute("title", "返回首页 / Back to home");
    });



    document.documentElement.dataset.sitePage = current.key;
})();
