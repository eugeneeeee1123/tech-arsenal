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
        "个人档案": ["个人档案", "Personal archive"],
        "个人首页": ["个人首页", "Personal archive"],
        "一份关于设备、手感，以及时间如何改变判断的私人档案。": ["一份关于设备、手感，以及时间如何改变判断的私人档案。", "A private archive of devices, tactility, and how time changes judgment."],
        "从 Mi 9 到 Fold、Ultra 和 iPad mini，我更在意一台设备留下的理由。": ["从 Mi 9 到 Fold、Ultra 和 iPad mini，我更在意一台设备留下的理由。", "From Mi 9 to Fold, Ultra, and iPad mini, I care about why a device earns its place."],
        "这里不追求把参数抄全。我要记下的是：第一次为什么会心动，用久了哪里顺手，热度退掉以后还愿不愿意拿起来。": ["这里不追求把参数抄全。我要记下的是：第一次为什么会心动，用久了哪里顺手，热度退掉以后还愿不愿意拿起来。", "This is not a complete spec dump. I record the first spark, the daily ease, and whether I still reach for it after the hype fades."],
        "我留下设备，先看三件事": ["我留下设备，先看三件事", "Three things I look for before a device stays"],
        "跑分和镜头当然会影响选择，但真正让一台设备待得久的，往往是每天都能感觉到的小地方。": ["跑分和镜头当然会影响选择，但真正让一台设备待得久的，往往是每天都能感觉到的小地方。", "Benchmarks and cameras matter, but the small daily sensations are what keep a device around."],
        "外形": ["外形", "Form"],
        "手感": ["手感", "Tactility"],
        "余味": ["余味", "Aftertaste"],
        "买过只是经历，留下才算判断。": ["买过只是经历，留下才算判断。", "Buying is an experience; keeping is a judgment."],
        "值得收藏的设备，应该过几年再看，仍然说得出喜欢它的理由。": ["值得收藏的设备，应该过几年再看，仍然说得出喜欢它的理由。", "A device worth keeping should still have a reason you can name years later."],
        "这一页专门处理“来源感”。它不需要比主目录更炫，只要更安静、更具体，让设备从参数变成真实经过你手里的东西。": ["这一页专门处理“来源感”。它不需要比主目录更炫，只要更安静、更具体，让设备从参数变成真实经过你手里的东西。", "This page follows provenance. It stays quieter and more specific, turning specs into objects that have genuinely passed through your hands."],
        "收藏的高级感，往往来自记忆，不来自效果。": ["收藏的高级感，往往来自记忆，不来自效果。", "The refinement of a collection comes from memory, not effects."],
        "现在先按阶段归档，后面再补真实日期。": ["现在先按阶段归档，后面再补真实日期。", "For now, the archive is arranged by phase; exact dates can come later."],
        "这页专门写“到手以后”的内容。它和时间线不一样，时间线讲阶段，这里讲使用后的判断有没有改变，哪些设备是真正留下来的。": ["这页专门写“到手以后”的内容。它和时间线不一样，时间线讲阶段，这里讲使用后的判断有没有改变，哪些设备是真正留下来的。", "This page is about what happened after ownership. The timeline tracks phases; these notes track which judgments changed and what truly stayed."],
        "高级感不来自想买多少，而来自你能不能说清用了以后是什么感觉。": ["高级感不来自想买多少，而来自你能不能说清用了以后是什么感觉。", "Refinement is not wanting more; it is being able to explain how something feels after using it."],
        "先把最值得写后记的三类设备挑出来。": ["先把最值得写后记的三类设备挑出来。", "Start with the three devices most worth writing about."],
        "这页的内容格式可以固定下来": ["这页的内容格式可以固定下来", "A repeatable format for every note"],
        "每条后记建议都回答同样四个问题。": ["每条后记建议都回答同样四个问题。", "Every note should answer the same four questions."],
        "主目录里写的是喜欢，这一页写的是取舍。把最容易纠结的旗舰机型拉到一起，比继续堆更多“想买理由”更有价值。": ["主目录里写的是喜欢，这一页写的是取舍。把最容易纠结的旗舰机型拉到一起，比继续堆更多“想买理由”更有价值。", "The main catalogue records attraction; this page records tradeoffs. Putting the difficult flagships together is more useful than adding more reasons to want them."],
        "同样是旗舰，吸引力其实来自完全不同的维度。": ["同样是旗舰，吸引力其实来自完全不同的维度。", "Flagships can be compelling for entirely different reasons."],
        "点选候选机型，下面的三列会同步切换。": ["点选候选机型，下面的三列会同步切换。", "Select a candidate and the three comparison columns update together."],
        "不是所有感兴趣的东西都应该直接进入主目录。Horizon 页面负责承接那些正在形成中的偏好、传闻线索和还没正式转正的候选设备。": ["不是所有感兴趣的东西都应该直接进入主目录。Horizon 页面负责承接那些正在形成中的偏好、传闻线索和还没正式转正的候选设备。", "Not every interest belongs in the main catalogue. Horizon holds emerging preferences, signals, and candidates that are not ready for promotion."],
        "让整站从静态收藏册，变成还在继续生长的判断系统。": ["让整站从静态收藏册，变成还在继续生长的判断系统。", "Turn a static collection book into a judgment system that keeps growing."],
        "现在最适合单独观察的四条线": ["现在最适合单独观察的四条线", "Four lines worth watching on their own"],
        "后续可以继续补的观察字段": ["后续可以继续补的观察字段", "Fields to add to the watchlist"],
        "candidate devices": ["候选设备", "Candidate devices"],
        "live slots": ["当前席位", "Live slots"],
        "shared table": ["共享表格", "Shared table"],
        "archive phases": ["档案阶段", "Archive phases"],
        "owned references": ["已入藏参考", "Owned references"],
        "living ledger": ["持续账本", "Living ledger"],
        "note clusters": ["手记分组", "Note clusters"],
        "owned anchors": ["已入藏锚点", "Owned anchors"],
        "after use page": ["使用后页面", "After-use page"],
        "watch states": ["观察状态", "Watch states"],
        "tracked themes": ["追踪主题", "Tracked themes"],
        "future lane": ["未来方向", "Future lane"],
        "criteria": ["比较维度", "Criteria"],
        "role": ["定位", "Role"],
        "display": ["屏幕", "Display"],
        "camera": ["影像", "Camera"],
        "chip and ai": ["芯片与 AI", "Chip and AI"],
        "pull": ["吸引力", "Pull"],
        "next move": ["下一步", "Next move"],
        "signal source": ["信号来源", "Signal source"],
        "promotion trigger": ["转正条件", "Promotion trigger"],
        "expected window": ["预计时间", "Expected window"]
    };

    /* Narrative copy that predates the bilingual data attributes. Keep the
       Chinese source intact, then give every visible sentence the same paired
       treatment as the shared chrome. */
    Object.assign(textPairs, {
        "已记录的品目": ["已记录的品目", "Catalogued entries"],
        "正在更新的页面": ["正在更新的页面", "Pages in progress"],
        "贯穿全站的口味": ["贯穿全站的口味", "A consistent point of view"],
        "它有没有清楚的时代感。轻薄直板、折叠屏，或小尺寸旗舰，都应该一眼能认出来。": ["它有没有清楚的时代感。轻薄直板、折叠屏，或小尺寸旗舰，都应该一眼能认出来。", "Whether it has a clear sense of its era. A slim slab, foldable, or compact flagship should be recognizable at a glance."],
        "用久了还顺不顺手，系统会不会打断节奏，重量和续航会不会让人慢慢放下它。": ["用久了还顺不顺手，系统会不会打断节奏，重量和续航会不会让人慢慢放下它。", "Whether it still feels effortless, whether the system interrupts the rhythm, and whether weight or battery life slowly pushes it aside."],
        "过几年再回头，它还能不能把我带回某个具体时期，想起当时为什么喜欢它。": ["过几年再回头，它还能不能把我带回某个具体时期，想起当时为什么喜欢它。", "Years later, can it still return me to a specific period and remind me why I liked it then?"],
        "有些机器到手以后越用越喜欢，有些只在开箱那几天让人兴奋。首页想留下的是前一种。它可以不新，但今天看仍然有意思。": ["有些机器到手以后越用越喜欢，有些只在开箱那几天让人兴奋。首页想留下的是前一种。它可以不新，但今天看仍然有意思。", "Some devices grow on you; others are exciting only during unboxing week. This archive keeps the first kind. It does not need to be new, only interesting today."],
        "初见": ["初见", "First look"],
        "第一次让我停下来的地方。": ["第一次让我停下来的地方。", "The detail that first made me stop."],
        "拿到手": ["拿到手", "In hand"],
        "真正进入日常后，优缺点变成了什么。": ["真正进入日常后，优缺点变成了什么。", "What changed once it entered daily life."],
        "用久以后": ["用久以后", "After living with it"],
        "热度退掉，依然愿意留下的部分。": ["热度退掉，依然愿意留下的部分。", "What I still want to keep after the hype fades."],
        "归档": ["归档", "Archive"],
        "它适合进主目录，还是继续放在观望区。": ["它适合进主目录，还是继续放在观望区。", "Whether it belongs in the main catalogue or stays on the watchlist."],
        "这几类设备，最能说明我的口味": ["这几类设备，最能说明我的口味", "These device families say the most about my taste"],
        "它们先把收藏的轮廓勾出来。其他型号以后再补，不急着一次写完。": ["它们先把收藏的轮廓勾出来。其他型号以后再补，不急着一次写完。", "They sketch the collection's outline first. The rest can come later; there is no need to finish everything at once."],
        "起点": ["起点", "Starting point"],
        "Mi 9：当时一眼就喜欢上的机器": ["Mi 9：当时一眼就喜欢上的机器", "Mi 9: the machine I liked at first sight"],
        "它未必是后来最强的，却像很多偏好的起点：轻薄、快，还有一点不怕张扬的外形。": ["它未必是后来最强的，却像很多偏好的起点：轻薄、快，还有一点不怕张扬的外形。", "It was not the strongest for long, but it began many preferences: light, fast, and unafraid of a little visual drama."],
        "日常": ["日常", "Daily"],
        "iPhone 11 和 Galaxy A51：真的用得久": ["iPhone 11 和 Galaxy A51：真的用得久", "iPhone 11 and Galaxy A51: genuinely long-term"],
        "它们提醒我，稳定、顺手、不用反复折腾，有时比短暂的新鲜感更能留住人。": ["它们提醒我，稳定、顺手、不用反复折腾，有时比短暂的新鲜感更能留住人。", "They remind me that stable, effortless, low-maintenance devices can outlast a brief rush of novelty."],
        "想收": ["想收", "On the list"],
        "Fold、Ultra、iPad mini：总会再看一眼": ["Fold、Ultra、iPad mini：总会再看一眼", "Fold, Ultra, and iPad mini: always worth another look"],
        "有人被形态吸引，有人看重影像和生态，也有人只是觉得尺寸刚好。它们决定我接下来还会追哪些方向。": ["有人被形态吸引，有人看重影像和生态，也有人只是觉得尺寸刚好。它们决定我接下来还会追哪些方向。", "Some pull me in with form, some with imaging or ecosystem, and some simply feel the right size. They set the directions I will keep watching."],
        "站内四个入口，各自只做一件事": ["站内四个入口，各自只做一件事", "Four entrances, one job each"],
        "首页先交代口味，具体内容分到其他页面。这样每一页都有自己的重点。": ["首页先交代口味，具体内容分到其他页面。这样每一页都有自己的重点。", "The home page names the taste; the other pages hold the detail. Each surface keeps one clear focus."],
        "时间线，记录它们怎样进来。": ["时间线，记录它们怎样进来。", "Timeline: how they entered."],
        "从最早真正喜欢上的型号，到后来慢慢成形的偏好，按顺序看会更清楚。": ["从最早真正喜欢上的型号，到后来慢慢成形的偏好，按顺序看会更清楚。", "From the first model I truly loved to the preferences that formed later, the sequence makes the pattern clearer."],
        "重点": ["重点", "Focus"],
        "来源和阶段": ["来源和阶段", "Origin and phase"],
        "打开": ["打开", "Open"],
        "使用手记，把“想买”写到“用过以后”。": ["使用手记，把“想买”写到“用过以后”。", "Field notes: move from wanting it to living with it."],
        "很多判断都要上手后才会改变，这里留下的是实际使用的感觉。": ["很多判断都要上手后才会改变，这里留下的是实际使用的感觉。", "Many judgments change only after hands-on time. This is where the lived feeling stays."],
        "使用后的判断": ["使用后的判断", "Post-use judgment"],
        "把几台纠结的机型放一起看。": ["把几台纠结的机型放一起看。", "Put the difficult choices side by side."],
        "适合处理那些会来回权衡的选择。": ["适合处理那些会来回权衡的选择。", "For decisions that keep pulling you back and forth."],
        "观望": ["观望", "Watchlist"],
        "收好还没决定的对象。": ["收好还没决定的对象。", "Keep the undecided objects here."],
        "先持续关注，不急着把它们写进主目录。": ["先持续关注，不急着把它们写进主目录。", "Keep watching first; there is no rush to promote them into the main catalogue."],
        "先把这套口味说清楚。": ["先把这套口味说清楚。", "Start by naming the taste."],
        "看完这里，再去其他页面找细节。": ["看完这里，再去其他页面找细节。", "Start here, then follow the details into the other pages."],
        "这页先把理由摆出来。来源、后记和取舍，留给后面的页面慢慢补齐。": ["这页先把理由摆出来。来源、后记和取舍，留给后面的页面慢慢补齐。", "This page lays out the reasons first. Provenance, afterthoughts, and tradeoffs can be filled in by the pages that follow."],
        "去看对比": ["去看对比", "Open compare"],
        "所以时间线页的重点不是视觉花活，而是阶段、原因、使用痕迹和状态变化。": ["所以时间线页的重点不是视觉花活，而是阶段、原因、使用痕迹和状态变化。", "The timeline is about phases, reasons, traces of use, and status changes—not visual effects."],
        "先把结构立住，比硬编精确时间更重要。你之后只要往每个节点补上年月、购买背景和后续评价，这一页就会越来越强。": ["先把结构立住，比硬编精确时间更重要。你之后只要往每个节点补上年月、购买背景和后续评价，这一页就会越来越强。", "Establishing the structure matters more than inventing exact dates. Add the month, buying context, and later verdict to each node and the page will gain weight."],
        "Mi 9 把“高性能机很迷人”这件事第一次具体化。": ["Mi 9 把“高性能机很迷人”这件事第一次具体化。", "Mi 9 made the appeal of a high-performance phone concrete for the first time."],
        "轻、快、带一点炫技感，但又没有后来那些设备那样沉重。它像整个收藏倾向的起点。": ["轻、快、带一点炫技感，但又没有后来那些设备那样沉重。它像整个收藏倾向的起点。", "Light, fast, and a little showy without the weight of later devices. It feels like the starting point of the collection's bias."],
        "iPhone 11 和 Galaxy A51 把收藏冲动拉回了日常。": ["iPhone 11 和 Galaxy A51 把收藏冲动拉回了日常。", "iPhone 11 and Galaxy A51 pulled the collecting impulse back into daily life."],
        "这两台很适合一起写。一个代表长期稳定的 iPhone 体验，一个代表真正陪着日常任务跑很久的安卓中坚。": ["这两台很适合一起写。一个代表长期稳定的 iPhone 体验，一个代表真正陪着日常任务跑很久的安卓中坚。", "They belong together: one represents long-term iPhone stability, the other an Android workhorse that stayed with daily tasks."],
        "EarPods 和 DeathAdder V2 Pro 记录的是习惯，不只是规格。": ["EarPods 和 DeathAdder V2 Pro 记录的是习惯，不只是规格。", "EarPods and DeathAdder V2 Pro record habits, not just specifications."],
        "真正留下肌肉记忆的往往不是手机，而是每天摸到的鼠标和耳机。这一段最适合补“使用后记”。": ["真正留下肌肉记忆的往往不是手机，而是每天摸到的鼠标和耳机。这一段最适合补“使用后记”。", "Muscle memory often comes from the mouse and earphones touched every day, not the phone. This is the right place for a post-use note."],
        "接下来最值得补的字段": ["接下来最值得补的字段", "The next fields worth adding"],
        "只要再补下面三类信息，这一页就会从“结构完成”进入“内容开始有厚度”。": ["只要再补下面三类信息，这一页就会从“结构完成”进入“内容开始有厚度”。", "Add these three kinds of information and the page moves from complete structure to meaningful depth."],
        "入藏时间": ["入藏时间", "Acquisition date"],
        "先写到年月就够了，不必强求精确到日。": ["先写到年月就够了，不必强求精确到日。", "Year and month are enough; there is no need to force an exact day."],
        "使用后记": ["使用后记", "Post-use note"],
        "让“买之前为什么想要”变成“到手后到底怎样”。": ["让“买之前为什么想要”变成“到手后到底怎样”。", "Turn why you wanted it before buying into what it was actually like in hand."],
        "当前状态": ["当前状态", "Current status"],
        "继续服役、纪念保留、备用、退役，这些标签都很有用。": ["继续服役、纪念保留、备用、退役，这些标签都很有用。", "Active, kept for memory, backup, or retired—these labels make the archive useful."],
        "所以这页写的不是参数，也不是梦想配置，而是设备到手之后，哪些点真的兑现了，哪些只是发布期的激情。": ["所以这页写的不是参数，也不是梦想配置，而是设备到手之后，哪些点真的兑现了，哪些只是发布期的激情。", "This page is not a spec sheet or a dream build. It asks which promises held up after ownership and which belonged only to launch-week excitement."],
        "不是每一件设备都需要长评，但总有一些会代表一整个时期的偏好。先从这些写起最划算。": ["不是每一件设备都需要长评，但总有一些会代表一整个时期的偏好。先从这些写起最划算。", "Not every device needs a long review, but some stand for an entire period of taste. Start with those."],
        "从惊艳感变成怀旧感": ["从惊艳感变成怀旧感", "From first impact to nostalgia"],
        "当年觉得轻薄、快、外观有攻击性。现在回头看，它更像一个时代的起点，而不是一台绝对无敌的机器。": ["当年觉得轻薄、快、外观有攻击性。现在回头看，它更像一个时代的起点，而不是一台绝对无敌的机器。", "It felt light, fast, and boldly styled then. Looking back, it is more a starting point for an era than an unbeatable machine."],
        "稳定性比“是否最强”更长久": ["稳定性比“是否最强”更长久", "Stability lasts longer than being the strongest"],
        "很多设备一开始靠规格抓人，但留下来的往往是顺手、续航和不出戏的体验。": ["很多设备一开始靠规格抓人，但留下来的往往是顺手、续航和不出戏的体验。", "Specs catch attention at first; ease, battery life, and an experience that stays out of the way are what remain."],
        "越不花哨，越容易进入日常": ["越不花哨，越容易进入日常", "The less showy, the easier it enters daily life"],
        "EarPods 这种东西很适合拿来写“为什么它还在桌上”，因为它的价值恰恰来自不需要被夸张描述。": ["EarPods 这种东西很适合拿来写“为什么它还在桌上”，因为它的价值恰恰来自不需要被夸张描述。", "EarPods are perfect for asking why they are still on the desk: their value comes from needing no exaggerated description."],
        "一旦格式稳定，后面每加一件设备的后记都会很轻松。": ["一旦格式稳定，后面每加一件设备的后记都会很轻松。", "Once the format is stable, adding another device note becomes easy."],
        "买之前最期待什么": ["买之前最期待什么", "What did I hope for before buying?"],
        "实际到手后最常感受到什么": ["实际到手后最常感受到什么", "What did I feel most often in hand?"],
        "今天回头看仍然成立的优点": ["今天回头看仍然成立的优点", "Which strengths still hold up today?"],
        "还在用、备用、纪念保留、已退役": ["还在用、备用、纪念保留、已退役", "Still in use, backup, kept for memory, or retired"],
        "这页会让整站从“会列设备”变成“真的有判断”。": ["这页会让整站从“会列设备”变成“真的有判断”。", "This page turns the site from a list of devices into a record of real judgment."],
        "因为只有当你开始写后记，别人才能看出你的收藏不是堆规格，而是有持续修正和筛选过程的。": ["因为只有当你开始写后记，别人才能看出你的收藏不是堆规格，而是有持续修正和筛选过程的。", "Only when you write the afterthoughts can readers see that the collection is not a spec pile, but a process of revision and selection."],
        "有的靠形态，有的靠影像，有的靠生态，有的靠毫无短板。这个页面就是把差异讲清楚。": ["有的靠形态，有的靠影像，有的靠生态，有的靠毫无短板。这个页面就是把差异讲清楚。", "Some win on form, some on imaging, some on ecosystem, and some by having no obvious weakness. This page makes the difference legible."],
        "默认保留 Fold、Ultra 和 iPhone。Pixel 作为替换项，负责那条更偏算法和 AI 的路线。": ["默认保留 Fold、Ultra 和 iPhone。Pixel 作为替换项，负责那条更偏算法和 AI 的路线。", "Fold, Ultra, and iPhone stay in the default set. Pixel is the substitute for the more algorithmic, AI-led route."],
        "增加排序模式": ["增加排序模式", "Add sorting modes"],
        "后面可以做只看影像、只看续航、只看便携性。": ["后面可以做只看影像、只看续航、只看便携性。", "Later, filter to imaging, battery life, or portability alone."],
        "高亮差异项": ["高亮差异项", "Highlight differences"],
        "只标真正不同的项，读起来会更快。": ["只标真正不同的项，读起来会更快。", "Mark only the real differences so the table reads faster."],
        "跳回主目录卡片": ["跳回主目录卡片", "Jump back to catalogue cards"],
        "每一列后面都可以继续连回新的设备详情页。": ["每一列后面都可以继续连回新的设备详情页。", "Each column can eventually link back to a fuller device dossier."],
        "这个页面的价值不在于写满，而在于区分轻度关注、强关注和接近发布的对象。": ["这个页面的价值不在于写满，而在于区分轻度关注、强关注和接近发布的对象。", "The value is not filling the page; it is separating light interest, strong interest, and near-launch candidates."],
        "它们不一定都会买，但都值得继续盯。分开记录以后，主目录就能继续保持克制。": ["它们不一定都会买，但都值得继续盯。分开记录以后，主目录就能继续保持克制。", "I may not buy all of them, but each is worth watching. Keeping them separate lets the main catalogue stay restrained."],
        "真正该盯的是厚度、折痕和相机妥协是否还存在。如果这三个点一起解决，折叠屏会再次上升一个层级。": ["真正该盯的是厚度、折痕和相机妥协是否还存在。如果这三个点一起解决，折叠屏会再次上升一个层级。", "Watch the thickness, crease, and camera compromises. If all three improve together, foldables move up another tier."],
        "比起单纯涨性能，更重要的是基础款是否终于拿到完整的高刷和更成熟的 AI 入口。": ["比起单纯涨性能，更重要的是基础款是否终于拿到完整的高刷和更成熟的 AI 入口。", "More than a performance bump, the question is whether the base model finally gets a full high-refresh display and a mature AI entry point."],
        "小尺寸旗舰更能看出厂商有没有真正下功夫，因为它们很难同时兼顾续航、散热和影像。": ["小尺寸旗舰更能看出厂商有没有真正下功夫，因为它们很难同时兼顾续航、散热和影像。", "Compact flagships reveal how serious the engineering is because battery life, thermals, and imaging are hard to balance at once."],
        "这个页面很适合再往前一步，变成真正的 watchlist，而不是普通的兴趣备忘录。": ["这个页面很适合再往前一步，变成真正的 watchlist，而不是普通的兴趣备忘录。", "This page can become a real watchlist rather than an ordinary interest memo."],
        "记录来自发布会、爆料人还是评测人。": ["记录来自发布会、爆料人还是评测人。", "Record whether the signal came from a launch, a leaker, or a reviewer."],
        "满足什么条件后，它会正式进入 wishlist。": ["满足什么条件后，它会正式进入 wishlist。", "Name the condition that promotes it into the wishlist."],
        "给自己一个大致时间感，而不是永远停在模糊状态。": ["给自己一个大致时间感，而不是永远停在模糊状态。", "Give it a rough time window instead of leaving it permanently vague."],
        "Next Galaxy Fold line": ["下一代 Galaxy Fold 系列", "Next Galaxy Fold line"],
        "Base iPhone with stronger display tier": ["拥有更高规格屏幕的基础款 iPhone", "Base iPhone with stronger display tier"],
        "Compact Android flagships": ["小尺寸 Android 旗舰", "Compact Android flagships"],
        "rumor watch": ["传闻观察", "Rumor watch"],
        "launch window": ["发布窗口", "Launch window"],
        "high interest": ["高度关注", "High interest"],
        "form factor and productivity": ["形态与生产力", "Form factor and productivity"],
        "all round apex": ["全能旗舰", "All-round apex"],
        "ecosystem baseline": ["生态基准", "Ecosystem baseline"],
        "camera and native ai": ["影像与原生 AI", "Camera and native AI"],
        "phase 01 / first flagship pull": ["阶段 01 / 第一台旗舰的吸引力", "Phase 01 / First flagship pull"],
        "phase 02 / daily reliability": ["阶段 02 / 日常可靠性", "Phase 02 / Daily reliability"],
        "phase 03 / peripheral memory": ["阶段 03 / 外设记忆", "Phase 03 / Peripheral memory"],
        "lot": ["批次", "Lot"],
        "lots": ["批次", "Lots"],
        "memory": ["记忆", "Memory"],
        "thread": ["线索", "Thread"],
        "next field": ["下一字段", "Next field"],
        "note format": ["手记格式", "Note format"],
        "why this page matters": ["这页为什么重要", "Why this page matters"],
        "before": ["之前", "Before"],
        "after": ["之后", "After"],
        "still good": ["仍然成立", "Still good"],
        "status": ["状态", "Status"],
        "field 01": ["字段 01", "Field 01"],
        "field 02": ["字段 02", "Field 02"],
        "field 03": ["字段 03", "Field 03"],
        "phones": ["手机", "Phones"],
        "手机": ["手机", "Phones"],
        "Magic 4 至臻版": ["Magic 4 至臻版", "Magic4 Ultimate"],
        "小米 11 Pro": ["小米 11 Pro", "Xiaomi 11 Pro"],
        "小米 11 Ultra": ["小米 11 Ultra", "Xiaomi 11 Ultra"],
        "小米 15": ["小米 15", "Xiaomi 15"],
        "小米 17": ["小米 17", "Xiaomi 17"],
        "小米 17 Pro Max": ["小米 17 Pro Max", "Xiaomi 17 Pro Max"],
        "拯救者 Y700": ["拯救者 Y700", "Legion Y700"],
        "Legion Y700": ["拯救者 Y700", "Legion Y700"],
        "平板与薄板设备": ["平板与薄板设备", "Tablets & thin slabs"],
        "移动工作站": ["移动工作站", "Mobile workstations"],
        "终极主机": ["终极主机", "Ultimate desktop"],
        "装备与外设": ["装备与外设", "Gear & peripherals"]
    });

    Object.assign(textPairs, {
        "The no weak category option in the whole shortlist.": ["这份候选中没有明显短板的选择。", "The no-weak-category option in the whole shortlist."],
        "Best when the form factor itself is the reason to buy.": ["当形态本身就是购买理由时，它最合适。", "Best when the form factor itself is the reason to buy."],
        "The ecosystem anchor if the base line really grows up this cycle.": ["如果基础款这次真正成长，它就是生态锚点。", "The ecosystem anchor if the base line really grows up this cycle."],
        "The software flavored flagship in this group.": ["这组里最偏软件体验的旗舰。", "The software-flavored flagship in this group."],
        "7.6 inch inner AMOLED with a 6.3 inch cover screen.": ["7.6 英寸内屏 AMOLED，外屏 6.3 英寸。", "7.6-inch inner AMOLED with a 6.3-inch cover screen."],
        "6.8 inch flat LTPO AMOLED with an anti reflective top layer.": ["6.8 英寸平面 LTPO AMOLED，配抗反射表层。", "6.8-inch flat LTPO AMOLED with an anti-reflective top layer."],
        "6.3 inch class panel with expected ProMotion and cleaner balance.": ["约 6.3 英寸屏幕，预计配 ProMotion，整体更均衡。", "6.3-inch-class panel with expected ProMotion and cleaner balance."],
        "6.8 inch LTPO OLED with strong brightness and clean Android feel.": ["6.8 英寸 LTPO OLED，高亮度与干净的 Android 体验。", "6.8-inch LTPO OLED with strong brightness and a clean Android feel."],
        "50MP main system with a productivity first compromise profile.": ["5000 万像素主摄，优先服务生产力的取舍。", "50MP main system with a productivity-first compromise profile."],
        "200MP main and stronger zoom stack across more situations.": ["2 亿像素主摄，在更多场景下提供更强的变焦组合。", "200MP main and a stronger zoom stack across more situations."],
        "Less wild than the Ultras, but tighter and more cohesive in daily use.": ["不如 Ultra 激进，但日常使用更紧凑、更协调。", "Less wild than the Ultras, but tighter and more cohesive in daily use."],
        "Signature Pixel tuning with a more obvious computational identity.": ["标志性的 Pixel 调校，更鲜明的计算影像个性。", "Signature Pixel tuning with a more obvious computational identity."],
        "Snapdragon 8 Gen 4 for Galaxy with multitasking as the main story.": ["Galaxy 定制 Snapdragon 8 Gen 4，重点在多任务。", "Snapdragon 8 Gen 4 for Galaxy with multitasking as the main story."],
        "Snapdragon 8 Gen 4 for Galaxy plus the most complete Android utility set.": ["Galaxy 定制 Snapdragon 8 Gen 4，加上最完整的 Android 工具集。", "Snapdragon 8 Gen 4 for Galaxy plus the most complete Android utility set."],
        "A19 positioning with Apple Intelligence as the baseline story.": ["A19 定位，以 Apple Intelligence 作为基础叙事。", "A19 positioning with Apple Intelligence as the baseline story."],
        "Tensor G4 with Gemini leaning features and Google first behavior.": ["Tensor G4，偏向 Gemini 功能与 Google 原生体验。", "Tensor G4 with Gemini-leaning features and Google-first behavior."],
        "It pulls hardest when a normal slab phone already feels solved.": ["当普通直板机已经足够时，它的形态吸引力最强。", "It pulls hardest when a normal slab phone already feels solved."],
        "This is the safe apex pick when you want one device to do everything.": ["如果只想用一台设备完成所有事，这是最稳妥的顶点选择。", "This is the safe apex pick when you want one device to do everything."],
        "It matters if the regular iPhone finally stops feeling intentionally held back.": ["如果普通 iPhone 不再被刻意限制，它就会变得重要。", "It matters if the regular iPhone finally stops feeling intentionally held back."],
        "Choose it when camera taste and software personality matter more than prestige.": ["当影像口味与软件个性比声望更重要时，选它。", "Choose it when camera taste and software personality matter more than prestige."]
    });

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
        link.innerHTML = '<img src="assets/images/arsenal-spark.png" alt="">';
        link.setAttribute("aria-label", "返回首页 / Back to home");
        link.setAttribute("title", "返回首页 / Back to home");
    });



    document.documentElement.dataset.sitePage = current.key;
})();
