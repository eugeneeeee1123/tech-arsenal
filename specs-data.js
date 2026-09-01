const specsCatalog = [
    {
        lot: "001", category: "mobile", name: "Mi 10 Ultra", brand: "XIAOMI · 10TH ANNIVERSARY", status: "wishlist", image: "Mi10Ultra.png",
        specs: [["SoC", "Snapdragon 865 (7nm) | LPDDR5 | UFS 3.1"], ["Display", "6.67\" OLED | 120Hz | 10-bit Color | 1120 nits peak"], ["Camera Sensor", "Main: OmniVision OV48C / 1/1.32\"; 2x portrait: Samsung ISOCELL 2L7 (S5K2L7) / 1/2.56\"; 5x periscope: Sony IMX586 / 1/2\"; ultrawide: Sony IMX350 / 1/2.78\"; front: Samsung ISOCELL 3T2 (S5K3T2) / 1/3.4\""], ["Camera System", "48MP OmniVision OV48C | 48MP 5x periscope | 12MP portrait | 20MP ultrawide"], ["Battery & Charging", "4500mAh Graphene | 120W wired | 50W wireless"], ["Build", "221.8g | Ceramic Black / Transparent Edition"]]
    },
    {
        lot: "002", category: "mobile", name: "Galaxy S23 Ultra", brand: "SAMSUNG · GALAXY ULTRA", status: "wishlist", image: "s23ultra.png",
        specs: [["SoC", "Snapdragon 8 Gen 2 For Galaxy"], ["Display", "6.8\" Dynamic AMOLED 2X | 1–120Hz LTPO | 1750 nits"], ["Camera Sensor", "Main: Samsung ISOCELL S5KHP2 (HP2) / 1/1.3\"; 3x and 10x tele: Sony IMX754 / 1/3.52\"; ultrawide: Sony IMX564 / 1/2.55\"; front: Samsung ISOCELL 3LU (S5K3LU) / 1/3.2\""], ["Camera System", "200MP main | 10MP 10x periscope | 10MP 3x tele | 12MP ultrawide"], ["Feature", "Built-in S-Pen | IP68 | Armor Aluminum Frame"], ["Battery", "5000mAh | 45W fast charging"]]
    },
    {
        lot: "003", category: "mobile", name: "iPhone 14 Pro Max", brand: "APPLE · PRO MAX", status: "wishlist", image: "iphone14promax.png",
        specs: [["SoC", "A16 Bionic (4nm) | 6-core CPU | 5-core GPU"], ["Display", "6.7\" Super Retina XDR OLED | ProMotion 120Hz | 2000 nits peak"], ["Camera Sensor", "Main: Sony IMX803 / 1/1.28\"; 3x tele: Sony IMX713 / 1/3.5\"; ultrawide: Sony IMX633 / 1/2.55\"; front: Sony IMX714 / 1/3.6\""], ["Camera System", "48MP main | 12MP 3x tele | 12MP ultrawide"], ["Feature", "Dynamic Island | Emergency SOS via Satellite | Crash Detection"], ["Build", "Surgical-grade Stainless Steel | Ceramic Shield front"]]
    },
    {
        lot: "004", category: "mobile", name: "Vivo X300 Pro", brand: "VIVO · ZEISS CO-ENGINEERED", status: "wishlist", image: "vivox300pro.png",
        specs: [["SoC", "MediaTek Dimensity 9400 | Custom V3+ Imaging Chip"], ["Display", "6.78\" 8T LTPO AMOLED | 144Hz | 3000 nits peak"], ["Camera Sensor", "Main: Sony LYTIA LYT-828 / 1/1.28\"; 3.7x ZEISS APO periscope: Samsung ISOCELL HPB / 1/1.4\"; ultrawide and front: Samsung ISOCELL JN1 / 1/2.76\""], ["Camera System", "50MP LYT-828 main | 200MP HPB 3.7x ZEISS APO periscope | 50MP JN1 ultrawide"], ["Battery", "5400mAh BlueVolt | 100W wired | 50W wireless"]]
    },
    {
        lot: "005", category: "mobile", name: "Magic 4 至臻版", brand: "HONOR · MAGIC ULTIMATE", status: "wishlist", image: "honormagic4ultimate.png",
        specs: [["SoC", "Snapdragon 8 Gen 1 | Custom Image Signal Processor"], ["Display", "6.81\" LTPO OLED | 1–120Hz | 1920Hz PWM"], ["Camera Sensor", "Main: HONOR GNH (often labeled S5KGNH; exact part number not officially disclosed) / 1/1.12\"; ultrawide and periscope: OmniVision OV64B / 1/2\"; spectrum-enhanced camera: 50MP / 1/2.5\" (part number not disclosed); front: 12MP + 3D depth sensor / model and size not publicly disclosed"], ["Camera System", "50MP GNH main | 64MP OV64B ultrawide | 64MP OV64B periscope | 50MP spectrum"], ["Battery & Charging", "4600mAh | 100W wired | 50W wireless"], ["Build", "Nanocrystal Ceramic | IP68 | 242g"]]
    },
    {
        lot: "006", category: "mobile", name: "Huawei P40 Pro+", brand: "HUAWEI · LEICA OPTICS", status: "wishlist", image: "huaweip40pro+.png",
        specs: [["SoC", "Kirin 990 5G | Mali-G76 MC16 GPU"], ["Display", "6.58\" OLED | 90Hz | Quad-Curve Overflow Display"], ["Camera Sensor", "Main: Sony IMX700 / 1/1.28\"; cine ultrawide: Sony IMX608 / 1/1.54\"; 3x and 10x tele model/size not publicly disclosed; ToF: Sony IMX316 / 1/6\"; front: Sony IMX616 / 1/2.8\"; front IR/depth: Sony IMX332 / 1/6.95\""], ["Camera System", "50MP RYYB main | 40MP cine ultrawide | 8MP 10x periscope | 8MP 3x tele"], ["Battery", "4200mAh | 40W wired | 40W wireless"], ["Build", "Kiln-baked Nano-tech Ceramic | IP68"]]
    },
    {
        lot: "007", category: "mobile", name: "Huawei P50 Pro", brand: "HUAWEI · LEICA OPTICS", status: "wishlist", image: "assets/images/huaweip50pro-transparent-v2.png",
        specs: [["SoC", "Kirin 9000 / Snapdragon 888 4G"], ["Display", "6.6\" OLED | 120Hz | 1440Hz PWM | True-Chroma"], ["Camera Sensor", "Main: Huawei-custom True-Chroma, likely OmniVision OV50A / about 1/1.55\" (inferred; exact part not officially disclosed); monochrome: about 1/1.7\" (likely OmniVision OV40A or Sony IMX600; not confirmed); 3.5x tele: 64MP / 1/1.97\" if Samsung ISOCELL GW3, or 1/2\" if OmniVision OV64B (sensor model not confirmed); ultrawide: about 1/2.75\" (likely OmniVision OV13B10 or Hynix HI1333; not confirmed); front: likely OmniVision OV13870 / 1/2.74\" (inferred; exact part not officially disclosed)"], ["Camera System", "50MP True-Chroma | 40MP monochrome | 64MP 3.5x periscope | 13MP ultrawide"], ["Imaging Tech", "HUAWEI XD Optics | XD Fusion Pro Image Engine"], ["Battery", "4360mAh | 66W wired | 50W wireless"]]
    },
    {
        lot: "008", category: "mobile", name: "Galaxy Z Fold8", brand: "SAMSUNG · GALAXY Z SERIES", status: "wishlist", image: "assets/images/samsungzfold8-transparent.png",
        specs: [["SoC", "Snapdragon 8 Elite Gen 5 for Galaxy | 12GB / 16GB LPDDR5X"], ["Inner Display", "7.6\" Dynamic AMOLED 2X | 1–120Hz | 3000 nits | 4:3"], ["Cover Display", "5.5\" Dynamic AMOLED 2X | 1–120Hz | 3000 nits | 10:16"], ["Camera Sensor", "Main: Samsung ISOCELL S5KGN3 (GN3) / 1/1.56\"; ultrawide: Samsung ISOCELL S5KJN3 (JN3) / 1/2.5\"; cover and inner selfie: Sony IMX374 / 1/3.0\""], ["Camera System", "50MP GN3 main | 50MP JN3 ultrawide | 10MP cover + 10MP inner selfie | up to 10x digital zoom"], ["Build / Battery", "Flex Titanium | IP48 | 4800mAh | 45W wired | 20W wireless | 201g"]]
    },
    {
        lot: "009", category: "mobile", name: "Pixel 11 Pro XL", brand: "GOOGLE · PIXEL FLAGSHIP", status: "wishlist", image: "assets/images/pixel11proxl-transparent.png",
        specs: [["SoC", "Google Tensor G4 | Titan M2 | 16GB RAM"], ["Display", "6.8\" Super Actua LTPO OLED | 1–120Hz | 3000 nits"], ["Camera Sensor", "Main: Samsung ISOCELL GNK (S5KGNK) / 1/1.31\"; 5x tele and ultrawide: Sony IMX858 / 1/2.55\"; front: Samsung ISOCELL 3J1 / 1/3.1\""], ["Camera System", "50MP main | 48MP 5x periscope | 48MP ultrawide | 42MP selfie"], ["AI Features", "Gemini Nano | Add Me | Video Boost | Magic Editor | Zoom Enhance"], ["Battery / Build", "5060mAh | 37W wired | 23W wireless | Polished Aluminum"]]
    },
    {
        lot: "010", category: "mobile", name: "Mi 9", brand: "XIAOMI · BATTLE ANGEL", status: "owned", image: "assets/images/mi9-transparent.png",
        specs: [["SoC", "Snapdragon 855 (7nm) | Adreno 640"], ["Display", "6.39\" Super AMOLED | 60Hz | HDR10"], ["Camera Sensor", "Main: Sony IMX586 / 1/2\"; 2x tele: Samsung ISOCELL 3M5 (S5K3M5) / 1/3\"; ultrawide: Sony IMX481 / 1/3\"; front: Samsung ISOCELL 3T1 (S5K3T1) / 1/3\""], ["Camera System", "48MP main | 12MP 2x tele | 16MP ultrawide | 4cm macro"], ["Battery & Charging", "3300mAh | 27W wired | 20W fast wireless"], ["Build", "Holographic Glass Back | Aluminum Frame | 173g"]]
    },
    {
        lot: "011", category: "mobile", name: "iPhone 13 Pro Max", brand: "APPLE · THE BATTERY KING", status: "wishlist", image: "assets/images/iphone13promax-transparent.png",
        specs: [["SoC", "A15 Bionic (5nm) | 5-core GPU | 16-core Neural Engine"], ["Display", "6.7\" Super Retina XDR OLED | 120Hz ProMotion | 1200 nits"], ["Camera Sensor", "Main: Sony IMX703 / about 1/1.65\"; 3x tele: Sony IMX713 / 1/3.4\"; ultrawide: Sony IMX772 / 1/3.4\"; front: Sony IMX514 / 1/3.6\""], ["Camera System", "12MP main | 12MP 3x tele | 12MP ultrawide | macro"], ["Battery", "4352mAh | endurance flagship"], ["Build", "Surgical-grade Stainless Steel | Ceramic Shield | 240g"]]
    },
    {
        lot: "012", category: "mobile", name: "Galaxy S21 Ultra", brand: "SAMSUNG · GALAXY CLASSIC", status: "wishlist", image: "assets/images/s21ultra-transparent.png",
        specs: [["SoC", "Snapdragon 888 / Exynos 2100 (5nm)"], ["Display", "6.8\" Dynamic AMOLED 2X | WQHD+ | Adaptive 10–120Hz"], ["Camera Sensor", "Main: Samsung ISOCELL S5KHM3 (HM3) / 1/1.33\"; 3x and 10x tele: Samsung S5K3J1 / about 1/3.24\"; ultrawide: Sony IMX563 / 1/2.55\"; front: Samsung ISOCELL GH1 (S5KGH1) / 1/2.65\""], ["Camera System", "108MP main | 10MP 10x periscope | 10MP 3x tele | 12MP ultrawide"], ["Feature", "S-Pen Support | Contour Cut Housing"], ["Battery", "5000mAh | 25W wired | 15W wireless"]]
    },
    {
        lot: "013", category: "mobile", name: "Galaxy S25 Ultra", brand: "SAMSUNG · 2025/2026 APEX", status: "wishlist", image: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=800&auto=format&fit=crop",
        specs: [["SoC", "Snapdragon 8 Gen 4 For Galaxy | 16GB LPDDR5X RAM"], ["Display", "6.8\" Flat Dynamic AMOLED 2X | 1–120Hz | 2600+ nits"], ["Camera Sensor", "Main: Samsung ISOCELL S5KHP2 (HP2) / 1/1.3\"; 5x periscope: Sony IMX854 / about 1/2.52\"; 3x tele: Sony IMX754 / 1/3.52\"; ultrawide: Samsung ISOCELL JN3 (S5KJN3) / about 1/2.76\" (third-party estimate; Samsung has no dedicated public JN3 datasheet); front: Samsung ISOCELL 3LU (S5K3LU) / 1/3.2\""], ["Camera System", "200MP HP2 main | 50MP IMX854 5x periscope | 10MP IMX754 3x tele | 50MP JN3 ultrawide"], ["Feature", "Built-in S-Pen | Galaxy AI | Titanium Frame"], ["Battery", "5000mAh | 45W wired | Wi-Fi 7"]]
    },
    {
        lot: "014", category: "mobile", name: "Galaxy S25+", brand: "SAMSUNG · THE SWEET SPOT", status: "wishlist", image: "assets/images/s25plus-clean-transparent.png",
        specs: [["SoC", "Snapdragon 8 Gen 4 For Galaxy | 12GB RAM"], ["Display", "6.7\" Flat Dynamic AMOLED 2X | WQHD+ | 1–120Hz LTPO"], ["Camera Sensor", "Main: Samsung ISOCELL GN3 (S5KGN3) / 1/1.57\"; 3x tele: Samsung ISOCELL 3K1 (S5K3K1) / 1/3.94\"; ultrawide: Sony IMX564 / 1/2.55\"; front: Samsung ISOCELL 3LU (S5K3LU) / 1/3.2\""], ["Camera System", "50MP GN3 main | 10MP 3x S5K3K1 tele | 12MP IMX564 ultrawide"], ["Build", "Armor Aluminum Frame | Symmetrical Bezels | 196g"], ["Battery", "4900mAh | 45W wired"]]
    },
    {
        lot: "015", category: "mobile", name: "iPhone 17", brand: "APPLE · NEXT GEN STANDARD", status: "wishlist", image: "assets/images/iphone17-transparent.png",
        specs: [["SoC", "A19 (3nm) | 8GB Unified Memory"], ["Display", "6.3\" Super Retina XDR | LTPO 120Hz ProMotion"], ["Camera Sensor", "Main: Sony IMX904 / 1/1.56\"; ultrawide: Sony IMX972 / 1/2.55\"; front: Sony IMX914 / square active area, optical format not publicly disclosed"], ["Camera System", "48MP main | 48MP ultrawide | 18MP selfie"], ["Features", "Action Button | Camera Control | Apple Intelligence"], ["Build", "Aerospace-grade Aluminum | Color-infused Glass"]]
    },
    {
        lot: "016", category: "mobile", name: "小米 11 Ultra", brand: "XIAOMI · IMAGING PIONEER", status: "wishlist", image: "assets/images/xiaomi11ultra-transparent.png",
        specs: [["SoC", "Snapdragon 888 | LPDDR5 | UFS 3.1"], ["Display", "6.81\" 2K AMOLED | 120Hz | 1700 nits | E4"], ["Camera Sensor", "Main: Samsung ISOCELL S5KGN2 (GN2) / 1/1.12\"; 5x periscope: Sony IMX586 / 1/2\"; ultrawide: Sony IMX586 / 1/2\"; front: Samsung ISOCELL 3T2 (S5K3T2) / 1/3.4\""], ["Camera System", "50MP GN2 1/1.12\" main | 48MP 5x periscope | 48MP ultrawide"], ["Feature", "Rear Tiny Display | Ceramic Body"], ["Battery", "5000mAh silicon-oxygen | 67W wired | 67W wireless"]]
    },
    {
        lot: "051", category: "mobile", name: "小米 11 Pro", brand: "XIAOMI · ANDROID KING", status: "wishlist", image: "assets/images/xiaomi11pro.png",
        specs: [["SoC", "Snapdragon 888 | LPDDR5 6400Mbps | UFS 3.1"], ["Display", "6.81\" Quad-Curved 2K AMOLED | 120Hz | 1700 nits | E4"], ["Camera Sensor", "Main: Samsung ISOCELL S5KGN2 (GN2) / 1/1.12\"; 5x periscope: OmniVision OV08A10 / 1/4.4\"; ultrawide: OmniVision OV13B10 / 1/3.06\"; front: Samsung ISOCELL 3T2 (S5K3T2) / 1/3.4\""], ["Camera System", "50MP GN2 1/1.12\" main | 8MP 5x periscope tele | 13MP 123° ultrawide"], ["Design & Styling", "AG Frosted Quad-Curved Glass | Dream Purple (幻境紫) | IP68 | 208g"], ["Battery", "5000mAh silicon-oxygen | 67W wired | 67W wireless"]]
    },
    {
        lot: "017", category: "mobile", name: "小米 17", brand: "XIAOMI · LEICA OPTICS", status: "wishlist", image: "assets/images/xiaomi17-transparent.png",
        specs: [["SoC", "Snapdragon 8 Elite Gen 5 | 16GB LPDDR5X | UFS 4.1"], ["Display", "6.36\" LTPO OLED | 1–120Hz | 3200 nits"], ["Camera Sensor", "Main: Xiaomi Light Fusion 950 / 1/1.28\"; floating tele: Samsung ISOCELL JN5 / 1/2.76\"; ultrawide: Samsung ISOCELL JN1 / 1/2.76\"; front: OmniVision OV32B40 / 1/3.14\""], ["Camera System", "50MP Light Fusion 950 main | 50MP 60mm floating tele | 50MP JN1 ultrawide"], ["Lens", "Leica Summilux"], ["Battery", "5400mAh | 90W wired | 50W wireless"]]
    },
    {
        lot: "018", category: "mobile", name: "小米 17 Pro Max", brand: "XIAOMI · THE CURRENT KING", status: "wishlist", image: "assets/images/xiaomi17promax-transparent.png",
        specs: [["SoC", "Snapdragon 8 Gen 5 (2nm) | 24GB LPDDR6 | 1TB UFS 4.1"], ["Display", "6.73\" All-Around Micro-Curved | 2K+ | 240Hz | 4500 nits"], ["Camera Sensor", "Main: Xiaomi Light Fusion 950L / 1/1.28\"; 5x periscope: Samsung ISOCELL GN8 (S5KGN8) / 1/1.95\" (often rounded to 1/2\"); ultrawide: OmniVision OV50M / 1/2.87\"; front: OmniVision OV50M / 1/2.87\""], ["Camera System", "50MP Light Fusion 950L main | 50MP 5x large-bottom periscope | 50MP OV50M ultrawide"], ["Build", "Full Nano-tech Ceramic Unibody"], ["Battery", "6200mAh solid-state | 120W wired | 80W wireless"]]
    },
    {
        lot: "019", category: "mobile", name: "iPhone 11", brand: "APPLE · LEGACY", status: "owned", image: "assets/images/iphone11-transparent.png",
        specs: [["SoC", "A13 Bionic (7nm+) | 6-core CPU | 4-core GPU"], ["Display", "6.1\" Liquid Retina IPS LCD | 625 nits | True Tone"], ["Camera Sensor", "Main: Sony IMX503 / 1/2.55\"; ultrawide: Sony IMX372 / 1/3.6\"; front: model not publicly disclosed / 1/3.6\""], ["Camera System", "12MP main | 12MP ultrawide | Night Mode"], ["Feature", "Face ID | IP68"], ["Battery", "3110mAh | 18W wired | Qi wireless"]]
    },
    {
        lot: "020", category: "mobile", name: "realme 11 Pro+", brand: "REALME · PREMIUM MID-RANGE", status: "wishlist", image: "assets/images/realme11proplus-transparent.png",
        specs: [["SoC", "MediaTek Dimensity 7050 (6nm) | Up to 12GB RAM"], ["Display", "6.7\" Curved AMOLED | 120Hz | 1 Billion Colors"], ["Camera Sensor", "Main: Samsung ISOCELL S5KHP3 (HP3) / 1/1.4\"; ultrawide: Sony IMX355 / 1/4\"; macro: model not publicly disclosed / 1/5\"; front: Sony IMX615 / size not publicly disclosed"], ["Camera System", "200MP Samsung HP3 main | 8MP IMX355 ultrawide | 2MP macro"], ["Battery & Charging", "5000mAh | 100W SuperVOOC"], ["Build", "Premium Lychee Vegan Leather"]]
    },
    {
        lot: "021", category: "mobile", name: "Galaxy A51", brand: "SAMSUNG · BEST SELLER", status: "owned", image: "assets/images/samsung-a51-transparent.png",
        specs: [["SoC", "Exynos 9611 (10nm) | Mali-G72 MP3"], ["Display", "6.5\" Super AMOLED | 1080×2400 | Gorilla Glass 3"], ["Camera Sensor", "Main: Sony IMX582 / 1/2\" (some regional/variant reports differ); ultrawide: Samsung ISOCELL 3L6 (S5K3L6) / 1/3\"; macro and depth: GalaxyCore GC5035 / 1/5\"; front: Samsung ISOCELL GD1 (S5KGD1) / 1/2.8\""], ["Camera System", "48MP main | 12MP ultrawide | 5MP macro | 5MP depth"], ["Battery", "4000mAh | 15W fast charging"], ["Feature", "Under-display Fingerprint | 3.5mm Jack"]]
    },
    {
        lot: "022", category: "tablet", name: "iPad Pro 13\"", brand: "APPLE · CREATOR SLATE", status: "wishlist", image: "assets/images/ipad-pro-13-enhanced.png",
        specs: [["SoC", "Apple M4 | 9/10-core CPU | 10-core GPU"], ["Display", "13\" Ultra Retina XDR | Tandem OLED | 1000/1600 nits"], ["Design", "5.1mm thickness | 579g"], ["Accessories", "Apple Pencil Pro | Magic Keyboard"]]
    },
    {
        lot: "023", category: "tablet", name: "iPad mini (A17 Pro)", brand: "APPLE · GAMING & READING", status: "wishlist", image: "assets/images/ipad-mini-enhanced.png",
        specs: [["SoC", "A17 Pro (3nm) | Hardware Ray Tracing"], ["Display", "8.3\" Liquid Retina | True Tone | P3"], ["Connectivity", "Wi-Fi 6E | USB-C 10Gbps"], ["Compatibility", "Apple Pencil Pro"]]
    },
    {
        lot: "024", category: "tablet", name: "Galaxy Tab S10 Ultra", brand: "SAMSUNG · GALAXY TAB", status: "wishlist", image: "assets/images/galaxy-tab-s11-ultra.png",
        specs: [["SoC", "MediaTek Dimensity 9300+ | AI Processing"], ["Display", "14.6\" Dynamic AMOLED 2X | 120Hz | Anti-Reflection"], ["Features", "IP68 | Included S-Pen"], ["Multitasking", "Samsung DeX | Multi-Active Window"]]
    },
    {
        lot: "025", category: "tablet", name: "Galaxy Tab S10+", brand: "SAMSUNG · GALAXY TAB PLUS", status: "wishlist", image: "assets/images/galaxy-tab-s10-plus.png",
        specs: [["SoC", "MediaTek Dimensity 9300+ | AI Processing Engine"], ["Display", "12.4\" Dynamic AMOLED 2X | 120Hz | Anti-Reflection"], ["Battery", "10,090mAh | 45W Super Fast Charging"], ["Features", "IP68 | Included S-Pen | AKG Quad Speakers"]]
    },
    {
        lot: "045", category: "tablet", name: "iPad Air 11\"", brand: "APPLE · EVERYDAY SLATE", status: "wishlist", image: "assets/images/ipad-air-11-transparent.png",
        specs: [["SoC", "Apple M2 | 8-core CPU | 9-core GPU"], ["Display", "11\" Liquid Retina | 2360×1640 | 500 nits"], ["Design", "6.1mm aluminum body | 462g Wi-Fi model"], ["Accessories", "Apple Pencil Pro | Magic Keyboard Folio"]]
    },
    {
        lot: "052", category: "tablet", name: "拯救者 Y700", brand: "LENOVO · COMPACT GAMING SLATE", status: "wishlist", image: "assets/images/legion-y700.png",
        specs: [["SoC", "Snapdragon 8 Gen 3 (4nm) | LPDDR5X | UFS 4.0"], ["Display", "8.8\" 2.5K IPS LCD | 2560×1600 | 165Hz | 500 nits | 343 PPI"], ["Cooling", "QianKun VC Cooling System | 10,004mm² Vapor Chamber"], ["Gaming Features", "Dual USB-C Ports (side + bottom) | Bypass Charging | Dual X-axis Linear Motors"], ["Build", "CNC Integrated Aluminum | 7.79mm | 340g"], ["Battery", "6550mAh | 68W Super Flash Charge"]]
    },
    {
        lot: "026", category: "laptop", name: "MacBook Pro 16-inch", brand: "APPLE · MACBOOK PRO / M5", status: "wishlist", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
        specs: [["Processor", "Apple M5 Pro | up to 18-core CPU | up to 20-core GPU; M5 Max | 18-core CPU | up to 40-core GPU"], ["Memory", "M5 Pro up to 64GB unified memory | M5 Max up to 128GB unified memory"], ["Display", "16.2\" Liquid Retina XDR | 1,600 nits peak HDR | 1,000,000:1 contrast ratio"], ["Battery", "Up to 24 hours"], ["Camera & Audio", "12MP Center Stage | Three-mic array | Six-speaker system with Spatial Audio and Dolby Atmos"], ["I/O", "3× Thunderbolt 4 or 5 | HDMI | MagSafe 3 | SDXC | Headphone jack"]]
    },
    {
        lot: "027", category: "laptop", name: "Legion 5 15AHP10", brand: "LENOVO · LEGION ESPORTS", status: "wishlist", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop",
        specs: [["Processor", "AMD Ryzen 9 9945HX | 16 cores / 32 threads"], ["Graphics", "NVIDIA RTX 5070 Laptop GPU | 140W"], ["Memory", "32GB (2×16GB) DDR5-5600"], ["Display", "15.6\" WQHD | 165Hz | 100% sRGB | G-Sync"], ["Cooling", "Legion Coldfront 5.0 | Liquid Metal"]]
    },
    {
        lot: "028", category: "desktop", name: "Platform:6 Gaming Setup", brand: "CUSTOM BUILD · BUILDCores", status: "wishlist", image: "assets/images/buildcores-platform6-setup-v2.png",
        specs: [["Processor", "AMD Ryzen 9 9950X3D | 16 cores"], ["Graphics", "ROG Astral GeForce RTX 5090 | 32GB GDDR7"], ["Memory", "256GB G.Skill Trident Z5 Neo RGB DDR5-6000"], ["Storage", "Samsung 990 Pro 4TB + 990 EVO 2TB"], ["Build Total", "$16,671.47 BuildCores setup"]]
    },
    {
        lot: "030", category: "desktop", name: "Mac Studio (M4 Ultra)", brand: "APPLE · PROFESSIONAL DESKTOP", status: "wishlist", image: "assets/images/macstudio-m4-ultra-transparent.png",
        specs: [["Processor", "Apple M4 Ultra | 32-core CPU | 80-core GPU"], ["Memory", "256GB Unified Memory | 1.6TB/s"], ["Storage", "8TB PCIe Gen 4 SSD"], ["Connectivity", "6× Thunderbolt 5 | 10Gb Ethernet | HDMI 2.1"], ["Form Factor", "Extruded Aluminum | Advanced Thermal System"]]
    },
    {
        lot: "031", category: "peripheral", name: "DeathAdder V2 Pro", brand: "RAZER · FOR GAMERS. BY GAMERS.", status: "owned", image: "assets/images/deathadder-v2-pro-transparent.png",
        specs: [["Sensor", "Razer Focus+ Optical | 20,000 DPI | 650 IPS"], ["Switches", "Optical Mouse Switches Gen-2 | 70M clicks"], ["Connectivity", "HyperSpeed 2.4GHz | Bluetooth | Wired"], ["Battery Life", "120h Bluetooth | 70h HyperSpeed"], ["Form Factor", "Right-handed ergonomic | 88g"]]
    },
    {
        lot: "032", category: "peripheral", name: "Pro Display XDR 2", brand: "APPLE · REFERENCE DISPLAY", status: "wishlist", image: "assets/images/pro-display-xdr-2-transparent.png",
        specs: [["Display", "32-inch Tandem OLED | 6016×3384 (6K)"], ["Refresh Rate", "ProMotion adaptive sync up to 120Hz"], ["Brightness", "1000 nits sustained | 2000 nits peak HDR"], ["Contrast Ratio", "1,000,000:1 | True Blacks"], ["Build", "Nano-texture glass | Pro Stand separate"]]
    },
    {
        lot: "033", category: "peripheral", name: "EarPods", brand: "APPLE · RETRO ESSENTIAL", status: "owned", image: "assets/images/earpods-transparent.png",
        specs: [["Acoustics", "Custom tuned drivers | Deeper bass tones"], ["Design", "Geometry-shaped open fit"], ["Controls", "Built-in remote | Volume | Playback | Calls"], ["Reliability", "Zero latency | No battery | Sweat/water protection"], ["Connection", "USB-C / Lightning / 3.5mm"]]
    },
    {
        lot: "034", category: "peripheral", name: "Galaxy Buds 2", brand: "SAMSUNG · TWS EARBUDS", status: "wishlist", image: "assets/images/galaxy-buds-2-transparent.png",
        specs: [["Audio", "Dynamic 2-way speakers | Sound by AKG"], ["ANC", "Active Noise Canceling | up to 98%"], ["Microphones", "3 mics + VPU"], ["Battery", "20h total with ANC on"], ["Connectivity", "Bluetooth 5.2 | Auto Switch"]]
    },
    {
        lot: "035", category: "peripheral", name: "Galaxy Buds 3", brand: "SAMSUNG · NEXT-GEN AUDIO", status: "wishlist", image: "assets/images/galaxy-buds-3-transparent.png",
        specs: [["Audio Architecture", "11mm Dynamic Driver | 24-bit / 96kHz Hi-Fi"], ["Design", "Blade Design | Pinch & Swipe | Open fit"], ["Smart Features", "Adaptive EQ | Adaptive ANC | Galaxy AI"], ["Durability", "IP57 Water & Dust Resistance"], ["Connectivity", "Bluetooth 5.4 | Auracast"]]
    },
    {
        lot: "036", category: "peripheral", name: "Nothing Ear (a)", brand: "NOTHING · EVERYDAY AUDIO", status: "wishlist", image: "assets/images/nothing-ear-a-transparent.png",
        specs: [["Audio Architecture", "11mm Dynamic Driver | PMI + TPU diaphragm"], ["Noise Cancellation", "Adaptive ANC | Up to 45dB | Transparency Mode"], ["Battery", "Up to 9.5h earbuds | 42.5h with case | 10 min = 10h"], ["Connectivity", "Bluetooth 5.3 | AAC / SBC / LDAC | Dual Connection"], ["Protection", "IP54 earbuds | IPX2 case | 4.8g per earbud"]]
    },
    {
        lot: "037", category: "laptop", name: "ProArt P16 (H7607)", brand: "ASUS · PROART P16 / RTX SPARK", status: "wishlist", image: "https://dlcdnwebimgs.asus.com/gain/db815677-1e89-4035-bc04-729491f4386e/w800",
        specs: [["Platform", "NVIDIA Blackwell RTX GPU | 6,144 CUDA cores | 20-core NVIDIA Grace CPU"], ["AI Performance", "Up to 1 petaflop FP4 AI performance | Purpose-built for personal agents"], ["Memory", "Up to 128GB unified memory"], ["Display", "4K ASUS Lumina Pro OLED | Delta E < 1 | 120Hz VRR | up to 1,600 nits | anti-reflection"], ["Design", "12.9mm ultrathin | 1.77kg | Nano Black / Neo White"], ["Operating System", "Windows 11 Home"]]
    },
    {
        lot: "038", category: "laptop", name: "MacBook Air 13\"", brand: "APPLE · EVERYDAY LAPTOP", status: "wishlist", image: "assets/images/macbook-air-13-clean.png",
        specs: [["Processor", "Apple M5 | 10-core CPU | up to 10-core GPU | Neural Accelerators"], ["Memory", "16GB Unified Memory | Configurable to 24GB / 32GB"], ["Storage", "512GB SSD | Configurable to 1TB / 2TB / 4TB"], ["Display", "13.6\" Liquid Retina | 2560×1664 | 500 nits | P3 | True Tone"], ["Battery & I/O", "Up to 18h video | MagSafe 3 | 2× Thunderbolt 4 | Wi-Fi 7 | Bluetooth 6"]]
    },
    {
        lot: "043", category: "laptop", name: "MacBook Air 15\"", brand: "APPLE · EVERYDAY LAPTOP", status: "wishlist", image: "assets/images/macbook-air-15-m5.png",
        specs: [["Processor", "Apple M5 | 10-core CPU | up to 10-core GPU | Neural Accelerators"], ["Memory", "16GB Unified Memory | Configurable to 24GB / 32GB"], ["Storage", "512GB SSD | Configurable to 1TB / 2TB / 4TB"], ["Display", "15.3\" Liquid Retina | 2880×1864 | 500 nits | P3 | True Tone"], ["Battery & I/O", "Up to 18h video | MagSafe 3 | 2× Thunderbolt 4 | Wi-Fi 7 | Bluetooth 6"]]
    },
    {
        lot: "039", category: "laptop", name: "Prestige 16 AI+ C3M", brand: "MSI · PRESTIGE 16 AI+ / C3M", status: "wishlist", image: "assets/images/prestige-16-ai-plus-c3m.png",
        specs: [["Processor", "Intel Core Ultra X9 388H | Up to 16 cores | Up to 5.1GHz | 50 NPU TOPS"], ["Graphics", "Up to Intel Arc GPU B390"], ["Memory & Storage", "LPDDR5x up to 64GB | 1× M.2 NVMe PCIe Gen4"], ["Display", "16\" 2.8K OLED | 2880×1800 | 48–120Hz VRR | 100% DCI-P3 | DisplayHDR True Black 600"], ["Design", "Ultra-slim 11.9–13.9mm | 1.59kg aluminum alloy chassis"], ["Battery & I/O", "81Wh | Up to 24+ hours | 100W PD 3.0 | Thunderbolt 4 | HDMI 2.1 | Wi-Fi 7"]]
    },
    {
        lot: "040", category: "laptop", name: "MacBook Neo 13\"", brand: "APPLE · ENTRY MAC", status: "wishlist", image: "assets/images/macbook-neo-13-clean.png",
        specs: [["Processor", "Apple A18 Pro | 6-core CPU | 5-core GPU | 16-core Neural Engine"], ["Memory & Storage", "8GB Unified Memory | 256GB / 512GB SSD"], ["Display", "13.0\" Liquid Retina | 2408×1506 | 500 nits | sRGB"], ["Battery", "Up to 16h video | 36.5Wh | 20W USB-C Power Adapter"], ["I/O & Wireless", "USB 3 USB-C + USB 2 USB-C | 3.5mm | Wi-Fi 6E | Bluetooth 6"]]
    },
    {
        lot: "042", category: "laptop", name: "Swift Go 14 AI", brand: "ACER · SWIFT GO / AI", status: "wishlist", image: "assets/images/swift-go-14-ai.png",
        specs: [["Processor", "Up to Intel Core Ultra X9 388H"], ["AI Performance", "Up to 180 TOPS total platform AI performance"], ["Graphics", "Up to Intel Arc B390 graphics"], ["Display", "Up to 3K OLED | Up to 120Hz | Slim bezels"], ["Mobility", "Starting at 1.12kg | 180° lie-flat hinge | Laser-etched aluminum cover"], ["Connectivity", "2× Thunderbolt 4 Type-C | HDMI 2.1 up to 8K | Wi-Fi 7 | 5MP IR camera"], ["Operating System", "Windows 11 Home"]]
    },
    {
        lot: "041", category: "mobile", name: "Galaxy Z Fold 8 Ultra", brand: "SAMSUNG · GALAXY Z ULTRA", status: "wishlist", image: "assets/images/samsungzfold8ultra-square-transparent.png",
        specs: [["SoC", "Snapdragon 8 Elite Gen 5 for Galaxy | 12GB / 16GB LPDDR5X"], ["Inner Display", "8.0\" Dynamic AMOLED 2X | 1–120Hz | 3000 nits | anti-reflection"], ["Cover Display", "6.5\" Dynamic AMOLED 2X | 1–120Hz | 3000 nits"], ["Camera Sensor", "Main: Samsung ISOCELL S5KHP2 (HP2) / 1/1.3\"; 3x tele: Samsung S5K3K1 / 1/3.94\"; ultrawide: Samsung ISOCELL S5KJN3 (JN3) / 1/2.5\"; cover and inner selfie: Sony IMX374 / 1/3.0\""], ["Camera System", "200MP HP2 main | 50MP JN3 ultrawide | 10MP 3x tele | 10MP cover + 10MP inner selfie"], ["Build / Battery", "Flex Titanium | IP48 | 5000mAh | 45W wired | 20W wireless | 215g"]]
    },
    {
        lot: "044", category: "mobile", name: "Huawei Mate 40 Pro+", brand: "HUAWEI · MATE ULTIMATE", status: "wishlist", image: "assets/images/huaweimate40proplus-transparent.png",
        specs: [["SoC", "Kirin 9000 5G (5nm) | Mali-G78 GPU"], ["Display", "6.76\" OLED | 90Hz | 2772×1344 | Horizon Display"], ["Camera Sensor", "Main: Sony IMX700 Ultra Vision RYYB / 1/1.28\" (50MP, 1.22µm, OIS); cine ultrawide: Sony IMX518 / 1/1.54\" (20MP); 3× tele: Sony IMX351 / 1/3.6\" (12MP); 10× periscope: Sony IMX520 / 1/3.6\" (8MP); 3D ToF"], ["Camera System", "50MP RYYB main | 20MP ultrawide | dual telephoto | 3D depth"], ["Imaging Tech", "HUAWEI XD Fusion Pro | Leica color science"], ["Battery & Charging", "4400mAh | 66W wired | 50W wireless"]]
    },
    {
        lot: "045", category: "mobile", name: "Mi 10 Pro", brand: "XIAOMI · MI 10 PRO", status: "wishlist", image: "assets/images/mi10pro-transparent.png",
        specs: [["Camera Sensor", "Main: Samsung ISOCELL Bright HMX (S5KHMX) / 1/1.33\" (108MP, 0.8µm / 1.6µm, 8P, OIS); 10× hybrid tele: OmniVision OV08A10 / 1/4.4\" (8MP, OIS); 2× portrait: Samsung S5K2L7 / 1/2.56\" (12MP); ultrawide: Sony IMX350 / 1/2.78\" (20MP)"], ["Camera System", "108MP 8P main | 8MP 10× hybrid | 12MP 2× portrait | 20MP ultrawide"], ["SoC", "Snapdragon 865 | LPDDR5 | UFS 3.0"], ["Display", "6.67\" OLED · 90Hz · 1200 nits peak"], ["Battery & Charging", "4500mAh | 50W wired | 30W wireless"]]
    },
    {
        lot: "050", category: "mobile", name: "Mi CC9 Pro", brand: "XIAOMI · MI CC9 PRO", status: "wishlist", image: "assets/images/micc9pro-transparent.png",
        specs: [["Camera Sensor", "Main: Samsung ISOCELL Bright HMX (S5KHMX) / 1/1.33\" (108MP, 0.8µm / 1.6µm, 4-axis OIS); 5× telephoto: OmniVision OV08A10 / 1/4.4\" (5MP, 4-axis OIS); 2× portrait: Samsung S5K2L7 / 1/2.56\" (12MP); ultrawide: Sony IMX350 / 1/2.8\" (20MP); macro: 2MP / 1/5.0\""], ["Camera System", "108MP penta-camera | 5× optical / 50× digital zoom | dual OIS"], ["SoC", "Snapdragon 730G"], ["Display", "6.47\" curved AMOLED · FHD+"], ["Battery & Charging", "5260mAh | 30W fast flash charge"]]
    },
    {
        lot: "046", category: "mobile", name: "Find X9 Ultra", brand: "OPPO · FIND X9 ULTRA", status: "wishlist", image: "assets/images/findx9ultra-transparent.png",
        specs: [["Camera Sensor", "Main: Sony LYTIA 900 / 1/1.12\" custom (200MP, 2-axis OIS); 3× portrait tele: Sony / 1/1.28\" (200MP, 2-axis OIS); 10× tele: Sony / 1/2.75\" (50MP, OIS); ultrawide: Sony / 1/1.95\" (50MP)"], ["Camera System", "200MP wide + 200MP 3× tele + 50MP 10× ultra tele + 50MP ultrawide"], ["SoC", "Snapdragon 8 Elite Gen 5"], ["Display", "6.82\" QHD+ 1–120Hz LTPO OLED"], ["Battery & Charging", "6100mAh | 100W SuperVOOC | 50W wireless"]]
    },
    {
        lot: "047", category: "mobile", name: "X70 Pro", brand: "VIVO · X70 PRO", status: "wishlist", image: "assets/images/vivox70pro-transparent.png",
        specs: [["Camera Sensor", "Main: Sony IMX766V / 1/1.56\" (50MP, Micro-Gimbal OIS, ZEISS T*); portrait: Sony IMX663 / 1/2.93\" (12MP); ultrawide: Samsung S5K3L6 / 1/3.1\" (12MP); 5× periscope: OmniVision OV08A10 / 1/4.4\" (8MP, OIS)"], ["Camera System", "50MP micro-gimbal main | 12MP portrait | 12MP ultrawide | 8MP 5× periscope"], ["SoC", "Dimensity 1200-vivo | V1 Imaging ISP"], ["Display", "6.56\" AMOLED · 120Hz"], ["Battery & Charging", "4450mAh | 44W FlashCharge"]]
    },
    {
        lot: "048", category: "mobile", name: "OnePlus 9 Pro", brand: "ONEPLUS · 9 PRO", status: "wishlist", image: "assets/images/oneplus9pro-transparent.png",
        specs: [["Camera Sensor", "Main: Sony IMX789 / 1/1.43\" (48MP, 1.12µm, 23mm, OIS); ultrawide: Sony IMX766 / 1/1.56\" (50MP, 14mm, Freeform); 3.3× telephoto: OmniVision OV08A10 / 1/4.4\" (8MP, OIS); monochrome: 2MP / 1/5.0\""], ["Camera System", "Hasselblad camera for mobile | 48MP main | 50MP freeform UW | 8MP tele"], ["SoC", "Snapdragon 888 5G"], ["Display", "6.7\" Fluid AMOLED 2.0 · 120Hz LTPO · 1440p"], ["Battery & Charging", "4500mAh | Warp Charge 65T | 50W Wireless"]]
    },
    {
        lot: "049", category: "mobile", name: "Galaxy A72", brand: "SAMSUNG · GALAXY A72", status: "wishlist", image: "assets/images/galaxya72-transparent.png",
        specs: [["Camera Sensor", "Main: Sony IMX682 (or Samsung GW1) / 1/1.7\" (64MP, 0.8µm, OIS); 3× telephoto: SK Hynix Hi-847 / 1/4.0\" (8MP, OIS); ultrawide: 1/3.0\" (12MP); macro: 1/5.0\" (5MP)"], ["Camera System", "64MP OIS main | 8MP 3× telephoto | 12MP ultrawide | 5MP macro"], ["SoC", "Snapdragon 720G"], ["Display", "6.7\" Super AMOLED · 90Hz · 800 nits"], ["Battery & Charging", "5000mAh | 25W Fast Charging"]]
    },
    {
        lot: "053", category: "mobile", name: "Pixel 11 Pro Fold", brand: "GOOGLE · FOLDABLE FLAGSHIP", status: "wishlist", image: "assets/images/pixel-11-pro-fold.png",
        specs: [["Camera Sensor", "Main: Sony IMX787 / 1/2.0\" (48MP, 0.8µm / 1.6µm, OIS); 5× telephoto: Samsung 3J1 / 1/3.2\" (10.8MP, OIS); ultrawide: Samsung 3J1 / 1/3.4\" (10.5MP); outer/inner selfie: Samsung 3K1 / 1/3.94\" (10MP)"], ["Camera System", "48MP Quad PD main | 10.8MP 5× tele | 10.5MP ultrawide | dual 10MP selfie"], ["SoC", "Google Tensor G4 (4nm) | Titan M2 Security | 16GB RAM"], ["Display", "Inner: 8.0\" Super Actua Flex 1–120Hz OLED | Outer: 6.3\" Actua 120Hz OLED"], ["Build & Durability", "10.5mm folded / 5.1mm unfolded | 257g | IPX8 water resistance"], ["Battery & Charging", "4650mAh | 30W USB-PD | Qi Wireless"]]
    }
];
