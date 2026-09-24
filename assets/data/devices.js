/**
 * TECH ARSENAL · Unified Device Catalogue Data
 * Single Source of Truth for Catalogue, Comparison Lab, and Setup Topology
 */
(function (root, factory) {
    var data = factory();
    if (typeof define === 'function' && define.amd) {
        define([], function () { return data; });
    }
    if (typeof module === 'object' && module.exports) {
        module.exports = data;
    }
    if (root) {
        root.TECH_ARSENAL_DEVICES = data;
    }
})(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : this, function () {
    'use strict';
    return [
    {
        "lot": "001",
        "name": "Mi 10 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "xiaomi",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/mi10ultra-transparent.webp",
            "alt": "Mi 10 Ultra",
            "width": 1087,
            "height": 1446
        },
        "searchKeys": "mi 10 ultra xiaomi · 10th anniversary 10th anniversary xiaomi",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 865 (7nm) | LPDDR5 | UFS 3.1"
            },
            {
                "label": "Display",
                "value": "6.67\" OLED | 120Hz | 10-bit Color | 1120 nits peak"
            },
            {
                "label": "Camera System",
                "value": "[Main] 48MP OmniVision OV48C | 1/1.32\" | OIS<br/>\n                        [Periscope] 48MP Sony IMX586 | 5x Optical | 120x Zoom<br/>\n                        [Portrait] 12MP S5K2L7 | 2x Optical | 46mm Equivalent<br/>\n                        [Ultrawide] 20MP Sony IMX350 | 128° FOV | 12mm"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: OmniVision OV48C / 1/1.32\" (48MP, 1.2µm, OIS); Periscope: Sony IMX586 / 1/2.0\" (48MP, 5× optical / 120× digital, OIS); Portrait: Samsung S5K2L7 / 1/2.56\" (12MP, 2× optical); Ultrawide: Sony IMX350 / 1/2.78\" (20MP, 128°); Front: Samsung S5K3T2 / 1/3.4\" (20MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 25mm / 50mm / 120mm | Sensor crop: 50mm (2× main; overlaps the native 50mm camera) | Hybrid reach: 240mm+ at 10× and beyond"
            },
            {
                "label": "Battery & Charging",
                "value": "4500mAh Graphene-based | 120W Wired (100% in 23m) | 50W Wireless"
            },
            {
                "label": "Build",
                "value": "221.8g | Ceramic Black / Transparent Edition"
            }
        ],
        "why": "120W is still fast today. I like that the transparent edition shows the internals."
    },
    {
        "lot": "002",
        "name": "Galaxy S23 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "samsung",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/s23ultra.webp",
            "alt": "Galaxy S23 Ultra",
            "width": 624,
            "height": 624
        },
        "searchKeys": "galaxy s23 ultra samsung · galaxy ultra galaxy ultra samsung",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 8 Gen 2 For Galaxy (Overclocked)"
            },
            {
                "label": "Display",
                "value": "6.8\" Dynamic AMOLED 2X | 1-120Hz LTPO | 1750 nits"
            },
            {
                "label": "Camera System",
                "value": "[Main] 200MP ISOCELL HP2 | 1/1.3\" | Laser AF | OIS<br/>\n                        [Periscope] 10MP | 10x Optical | 100x Space Zoom<br/>\n                        [Telephoto] 10MP | 3x Optical<br/>\n                        [Ultrawide] 12MP | 120° FOV"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL HP2 / 1/1.3\" (200MP, 0.6µm, OIS); Periscope: Sony IMX754 / 1/3.52\" (10MP, 10× optical, OIS); 3× Telephoto: Sony IMX754 / 1/3.52\" (10MP, 3×, OIS); Ultrawide: Sony IMX564 / 1/2.55\" (12MP, 120°); Front: Samsung S5K3LU / 1/3.2\" (12MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm / 24mm / 70mm / 230mm | Sensor crop: 48mm (2× main) | Space Zoom: up to 100× (algorithmic, not a fixed optical focal length)"
            },
            {
                "label": "Feature",
                "value": "Built-in S-Pen | IP68 | Armor Aluminum Frame"
            },
            {
                "label": "Battery",
                "value": "5000mAh | 45W Fast Charging"
            },
            {
                "label": "Build",
                "value": "Armor Aluminum frame | Gorilla Glass Victus 2 | IP68 water &amp; dust | 234g"
            },
            {
                "label": "Memory",
                "value": "12GB LPDDR5X RAM"
            },
            {
                "label": "Storage",
                "value": "1TB UFS 4.0 (Max spec)"
            }
        ],
        "why": "200MP plus a built-in S-Pen is the combination I keep coming back to."
    },
    {
        "lot": "003",
        "name": "iPhone 14 Pro Max",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "apple",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/iphone14promax-transparent.webp",
            "alt": "iPhone 14 Pro Max",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "iphone 14 pro max apple · pro max apple flagship apple",
        "specs": [
            {
                "label": "SoC",
                "value": "A16 Bionic (4nm) | 6-core CPU | 5-core GPU"
            },
            {
                "label": "Display",
                "value": "6.7\" Super Retina XDR OLED | ProMotion 120Hz | 2000 nits peak"
            },
            {
                "label": "Camera System",
                "value": "[Main] 48MP Sony IMX803 | 1/1.28\" | Sensor-shift OIS<br/>\n                        [Telephoto] 12MP | 3x Optical | 77mm equivalent<br/>\n                        [Ultrawide] 12MP | 120° FOV"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX803 / 1/1.28\" (48MP, 1.22µm, 24mm, Sensor-shift OIS); 3× Telephoto: Sony IMX713 / 1/3.5\" (12MP, 77mm, OIS); Ultrawide: Sony IMX633 / 1/2.55\" (12MP, 13mm, 120°); Front: Sony IMX714 / 1/3.6\" (12MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm / 24mm / 77mm | Sensor crop: 48mm (2× from the 48MP main sensor)"
            },
            {
                "label": "Feature",
                "value": "Dynamic Island | Emergency SOS via Satellite | Crash Detection"
            },
            {
                "label": "Build",
                "value": "Surgical-grade Stainless Steel | Ceramic Shield front"
            },
            {
                "label": "Battery",
                "value": "4323mAh | 20W wired fast charging | 15W MagSafe | Up to 29 hours video playback"
            },
            {
                "label": "Memory",
                "value": "6GB LPDDR5 RAM"
            },
            {
                "label": "Storage",
                "value": "1TB NVMe Storage (Max spec)"
            }
        ],
        "why": "Dynamic Island was a real design shift, not just a notch redesign."
    },
    {
        "lot": "004",
        "name": "Vivo X300 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "vivo",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/vivox300ultra-transparent.webp",
            "alt": "Vivo X300 Ultra",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "vivo x300 ultra vivo · zeiss master lenses snapdragon 8 elite gen 5 200mp camera",
        "specs": [
            {
                "label": "SoC",
                "value": "Qualcomm Snapdragon 8 Elite Gen 5 | 3nm | up to 4.6GHz"
            },
            {
                "label": "Memory",
                "value": "16GB LPDDR5X Ultra Pro | UFS 4.1 | 512GB or 1TB"
            },
            {
                "label": "Display",
                "value": "6.82\" 2K AMOLED | 3168 × 1440 | 1–144Hz | 4500 nits local peak"
            },
            {
                "label": "Camera System",
                "value": "[Ultra-wide] 50MP Sony LYTIA 818 | 14mm | 1/1.28\" | OIS<br/>\n                        [Documentary] 200MP Sony LYTIA 901 | 35mm | 1/1.12\" | OIS<br/>\n                        [Telephoto] 200MP HP0 | 85mm | 1/1.4\" | 3° OIS<br/>\n                        [Front] 50MP | ZEISS T* coatings across the master lenses"
            },
            {
                "label": "Camera Sensors",
                "value": "Documentary Main: Sony LYTIA 901 / 1/1.12\" (200MP, 35mm, OIS); Ultrawide: Sony LYTIA 818 / 1/1.28\" (50MP, 14mm, OIS); Telephoto: Samsung HP0 / 1/1.4\" (200MP, 85mm, 3° OIS); Front: 50MP ZEISS master lens"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 14mm / 35mm / 85mm | Sensor crop modes: 28mm / 50mm / 135mm | ZEISS extenders: 200mm / 400mm equivalent"
            },
            {
                "label": "Video",
                "value": "Multi-focal 4K 120fps | 10-bit Log | 4:2:2 | Dolby Vision"
            },
            {
                "label": "Battery",
                "value": "6600mAh BlueVolt | 100W wired FlashCharge | 40W wireless"
            },
            {
                "label": "Build",
                "value": "IP68/IP69 | 3D ultrasonic fingerprint | 232–237g"
            }
        ],
        "why": "A camera-first flagship built around three ZEISS focal lengths: 14mm ultra-wide, 35mm documentary, and an 85mm gimbal-grade APO telephoto."
    },
    {
        "lot": "005",
        "name": "Magic4 Ultimate",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "honor",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/honormagic4ultimate-transparent.webp",
            "alt": "Magic4 Ultimate",
            "width": 1089,
            "height": 1445
        },
        "searchKeys": "magic4 ultimate honor ㆍ magic ultimate periscope",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 8 Gen 1 (4nm) | Custom Image Signal Processor"
            },
            {
                "label": "Display",
                "value": "6.81\" LTPO OLED | 1-120Hz | 1920Hz PWM Dimming"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP Custom 1/1.12\" | 8P Lens | f/1.6 | OIS<br/>\n                        [Ultrawide] 64MP | 126° FOV | Dual Free-Form Lens<br/>\n                        [Periscope] 64MP | 3.5x Optical | 100x Digital | OIS<br/>\n                        [Spectrum] 50MP Spectrum Enhanced Sensor"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Custom Sony IMX707 / GNH / 1/1.12\" (50MP, 1.4µm, 8P, OIS); Ultrawide: OmniVision OV64B / 1/2.0\" (64MP, 126°); Periscope: OmniVision OV64B / 1/2.0\" (64MP, 3.5× optical / 100× digital, OIS); Spectrum: 50MP / 1/2.5\"; Front: 12MP / 1/3.6\" + 3D ToF"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 11mm / 23mm / 90mm | Sensor crop: 46mm (2× main) | 100× mode is computational reach, not a fixed optical focal length"
            },
            {
                "label": "Battery & Charging",
                "value": "4600mAh | 100W Wired | 50W Wireless"
            },
            {
                "label": "Build",
                "value": "Nanocrystal Ceramic | IP68 | 242g"
            }
        ],
        "why": "荣耀脱离华为后的影像巅峰之作，超大底定制主摄搭配潜望式长焦，陶瓷机身质感与多主摄影像体系极具辨识度。"
    },
    {
        "lot": "006",
        "name": "Huawei P40 Pro+",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "huawei",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/huaweip40proplus.webp",
            "alt": "Huawei P40 Pro+",
            "width": 700,
            "height": 700
        },
        "searchKeys": "huawei p40 pro+ huawei · leica optics huawei // leica huawei",
        "specs": [
            {
                "label": "SoC",
                "value": "Kirin 990 5G (7nm+) | Mali-G76 MC16 GPU"
            },
            {
                "label": "Display",
                "value": "6.58\" OLED | 90Hz | Quad-Curve Overflow Display"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP Ultra Vision RYYB | 1/1.28\" | OIS<br/>\n                        [Cine Ultrawide] 40MP | 18mm | f/1.8<br/>\n                        [Periscope] 8MP | 10x Optical | 100x Max Zoom | OIS<br/>\n                        [Telephoto] 8MP | 3x Optical | OIS<br/>\n                        [Depth] 3D ToF Sensor"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX700 Ultra Vision RYYB / 1/1.28\" (50MP, 1.22µm, OIS); Cine Ultrawide: Sony IMX608 / 1/1.54\" (40MP, 18mm); 10× Periscope: Sony IMX520 / 1/3.6\" (8MP, 240mm, OIS); 3× Telephoto: Sony IMX520 / 1/3.6\" (8MP, 80mm, OIS); 3D ToF; Front: Sony IMX616 / 1/2.8\" (32MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 18mm / 23mm / 80mm / 240mm | Sensor crop / hybrid: ~46mm (2× main) | 100× mode extends beyond the optical 240mm anchor"
            },
            {
                "label": "Battery",
                "value": "4200mAh | 40W Wired | 40W Wireless Charging"
            },
            {
                "label": "Build",
                "value": "Kiln-baked Nano-tech Ceramic | IP68 Water Resistance"
            },
            {
                "label": "Memory",
                "value": "8GB LPDDR4X RAM"
            },
            {
                "label": "Storage",
                "value": "512GB UFS 3.0 (Max spec)"
            }
        ],
        "why": "First phone with a true 10x optical periscope zoom. Notable engineering for 2020."
    },
    {
        "lot": "007",
        "name": "Huawei P50 Pro",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "huawei",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/huaweip50pro-transparent-v2.webp",
            "alt": "Huawei P50 Pro",
            "width": 378,
            "height": 480
        },
        "searchKeys": "huawei p50 pro huawei · leica optics huawei // leica huawei",
        "specs": [
            {
                "label": "SoC",
                "value": "Kirin 9000 / Snapdragon 888 4G"
            },
            {
                "label": "Display",
                "value": "6.6\" OLED | 120Hz | 1440Hz PWM Dimming | True-Chroma"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP True-Chroma | f/1.8 | OIS<br/>\n                        [Monochrome] 40MP True-Chroma | f/1.6<br/>\n                        [Periscope] 64MP | 3.5x Optical | 200x Digital Zoom Range | OIS<br/>\n                        [Ultrawide] 13MP | 13mm Equivalent"
            },
            {
                "label": "Camera Sensors",
                "value": "Color Main: Sony IMX766 / 1/1.56\" (50MP, 1.0µm, OIS); B&amp;W Main: Sony IMX600 / 1/1.7\" (40MP, 1.0µm); Periscope: OmniVision OV64B / 1/2.0\" (64MP, 3.5× optical / 200× digital, OIS); Ultrawide: Sony IMX258 / 1/3.06\" (13MP, 13mm); Front: 13MP / 1/3.06\""
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm / 23mm / 26mm monochrome / 90mm | Sensor crop: 46mm (2× main) | 200× range is computational reach"
            },
            {
                "label": "Imaging Tech",
                "value": "HUAWEI XD Optics | XD Fusion Pro Image Engine"
            },
            {
                "label": "Battery",
                "value": "4360mAh | 66W Wired | 50W Wireless Charging"
            },
            {
                "label": "Build",
                "value": "Aluminum frame | Curved glass front &amp; back | IP68 water &amp; dust | 195g"
            },
            {
                "label": "Memory",
                "value": "12GB LPDDR5 RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB (Max spec)"
            }
        ],
        "why": "The Dual-Matrix camera ring is a distinct design nobody else really copied."
    },
    {
        "lot": "008",
        "name": "Galaxy Z Fold8",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "samsung",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/samsungzfold8-transparent.webp",
            "alt": "Galaxy Z Fold8",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "galaxy z fold8 samsung ㆍ foldable flagship samsung z fold 8",
        "specs": [
            {
                "label": "SoC",
                "value": "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm) | 3.39GHz Cortex-X4 | Adreno 750"
            },
            {
                "label": "Memory",
                "value": "12GB LPDDR5X RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "1TB UFS 4.0 (Max spec)"
            },
            {
                "label": "Inner Display",
                "value": "7.6\" Dynamic AMOLED 2X (2160x1856) | 1-120Hz LTPO | 2600 nits peak | Ultra Thin Glass"
            },
            {
                "label": "Cover Display",
                "value": "6.3\" Dynamic AMOLED 2X (2376x968, 22.1:9) | 1-120Hz LTPO | 2600 nits peak | Corning Gorilla Glass Victus 2"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP (1/1.56\", f/1.8, Dual Pixel AF, OIS) | [Telephoto] 10MP (3x Optical, OIS) | [Ultrawide] 12MP (123° FOV)"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL GN3 / 1/1.56\" (50MP, 1.0µm, OIS); 3× Telephoto: Samsung S5K3K1 (10MP, 3×, OIS); Ultrawide: 12MP (123°); Under-display: 4MP; Cover Front: 10MP"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 24mm / 67mm | Sensor crop: 48mm (2× main optical crop) | Digital zoom: up to 30×"
            },
            {
                "label": "Battery",
                "value": "4400mAh dual battery | 25W wired | 15W wireless | Wireless PowerShare"
            },
            {
                "label": "Build",
                "value": "Enhanced Armor Aluminum frame | IP48 water &amp; dust resistance | 239g | 12.1mm folded (5.6mm unfolded)"
            },
            {
                "label": "Feature",
                "value": "Dual-Screen Live Interpreter | Note Assist | S-Pen support | Samsung DeX | 7 years OS updates"
            }
        ],
        "why": "A thinner, sharper foldable that turns a pocket device into a real multitasking canvas."
    },
    {
        "lot": "009",
        "name": "Pixel 11 Pro XL",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "google",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/pixel11proxl-transparent.webp",
            "alt": "Pixel 11 Pro XL",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "pixel 11 pro xl google ㆍ tensor flagship google camera xl",
        "specs": [
            {
                "label": "SoC",
                "value": "Google Tensor G4 (4nm) | Titan M2 Security Coprocessor"
            },
            {
                "label": "Memory",
                "value": "16GB LPDDR5X RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "1TB UFS 3.1 SSD (Max spec)"
            },
            {
                "label": "Display",
                "value": "6.8\" Super Actua LTPO OLED (1344x2992) | 1-120Hz | 3000 nits peak | Corning Gorilla Glass Victus 2"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP Octa PD (1/1.31\", f/1.68, OIS) | [Periscope] 48MP Quad PD (5x Optical, 30x Super Res Zoom, OIS) | [Ultrawide] 48MP Quad PD (123° FOV, Macro) | [Front] 42MP Dual PD (103° FOV)"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung GNK / 1/1.31\" (50MP, 1.2µm, OIS); 5× Periscope: Sony IMX858 / 1/2.51\" (48MP, 5× optical, OIS); Ultrawide: Sony IMX858 / 1/2.51\" (48MP, 123°); Front: Sony IMX858 / 1/2.51\" (42MP, 103°)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 25mm / 110mm | Sensor crop: 50mm (2× from 50MP main) | Super Res Zoom: up to 30× computational reach"
            },
            {
                "label": "Battery",
                "value": "5060mAh | 37W wired fast charging | 23W wireless with Pixel Stand 2 | Qi certified"
            },
            {
                "label": "Build",
                "value": "Polished aerospace-grade aluminum frame | Silky matte back glass | IP68 water &amp; dust | 221g | 8.5mm"
            },
            {
                "label": "Feature",
                "value": "Gemini Live multimodal AI | Add Me | Magic Editor | Pixel Screenshots | Call Notes | 7 years OS updates"
            }
        ],
        "why": "On-device Gemini plus a 42MP selfie camera. Google's camera phone and AI phone in one this time."
    },
    {
        "lot": "053",
        "name": "Pixel 11 Pro Fold",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "google",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/pixel-11-pro-fold.webp",
            "alt": "Pixel 11 Pro Fold",
            "width": 1536,
            "height": 1024
        },
        "searchKeys": "pixel 11 pro fold google ㆍ tensor foldable canvas",
        "specs": [
            {
                "label": "SoC",
                "value": "Google Tensor G4 (4nm) | Titan M2 Security Coprocessor"
            },
            {
                "label": "Memory",
                "value": "16GB LPDDR5X RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB UFS 3.1 (Max spec)"
            },
            {
                "label": "Inner Display",
                "value": "8.0\" Super Actua Flex LTPO OLED (2076x2152) | 1-120Hz | 2700 nits peak | Ultra Thin Glass"
            },
            {
                "label": "Cover Display",
                "value": "6.3\" Actua OLED (1080x2424) | 60-120Hz | 2700 nits peak | Corning Gorilla Glass Victus 2"
            },
            {
                "label": "Camera System",
                "value": "[Main] 48MP Quad PD (1/2\", f/1.7, OIS) | [Telephoto] 10.8MP Dual PD (5x Optical, 20x Super Res Zoom, OIS) | [Ultrawide] 10.5MP (127° FOV, Macro)"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX787 (48MP, OIS); 5× Telephoto: Samsung 3J1 (10.8MP, 5× optical, OIS); Ultrawide: Samsung 3LU (10.5MP, 127°); Front &amp; Inner: Dual 10MP Dual PD (f/2.2)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 25mm / 112mm | Sensor crop: 50mm (2× main) | Super Res Zoom: up to 20×"
            },
            {
                "label": "Battery",
                "value": "4650mAh | 21W wired fast charging | 7.5W wireless Qi"
            },
            {
                "label": "Build",
                "value": "Aerospace-grade high-strength aluminum alloy | Multi-gear fluid hinge | IPX8 water resistance | 257g | 10.5mm folded (5.1mm unfolded)"
            },
            {
                "label": "Feature",
                "value": "Split Screen Dual-App Multitasking | Drag and Drop | Gemini Live | 7 years of OS upgrades &amp; Pixel Drops"
            }
        ],
        "why": "Google's vision of the ultimate foldable: an 8.0\" square canvas, fluid multi-tasking, Gemini multimodal intelligence, and genuine flagship camera tuning."
    },
    {
        "lot": "010",
        "name": "Mi 9",
        "status": "owned",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "xiaomi",
        "isLead": false,
        "inSetup": true,
        "setupRole": "Archive Unit",
        "isDeskCore": false,
        "image": {
            "src": "assets/images/mi9-transparent.webp",
            "alt": "Mi 9",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "mi 9 xiaomi · battle angel xiaomi // battle angel xiaomi",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 855 (7nm) | Adreno 640"
            },
            {
                "label": "Display",
                "value": "6.39\" Super AMOLED | 60Hz | HDR10"
            },
            {
                "label": "Camera System",
                "value": "[Main] 48MP Sony IMX586 | 1/2.0\" | f/1.75 | Laser AF<br/>\n                        [Telephoto] 12MP Samsung S5K3M5 | 2x Optical Zoom<br/>\n                        [Ultrawide] 16MP Sony IMX481 | 117° FOV | 4cm Macro"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX586 / 1/2.0\" (48MP, 0.8µm / 1.6µm 4-in-1, Laser AF); 2× Telephoto: Samsung S5K3M5 / 1/3.6\" (12MP, 54mm); Ultrawide: Sony IMX481 / 1/3.0\" (16MP, 117°, 4cm macro); Front: Samsung S5K3T1 / 1/3.1\" (20MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm / 27mm / 54mm | Sensor crop: 54mm (2× main; overlaps the native telephoto)"
            },
            {
                "label": "Battery & Charging",
                "value": "3300mAh | 27W Wired | 20W Fast Wireless (World's First)"
            },
            {
                "label": "Build",
                "value": "Holographic Glass Back | Aluminum Frame | Ultra-light 173g"
            }
        ],
        "why": "My OG. First phone to hit 20W wireless, Snapdragon 855, holographic back. She's been through wars."
    },
    {
        "lot": "011",
        "name": "iPhone 13 Pro Max",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "apple",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/iphone13promax-transparent.webp",
            "alt": "iPhone 13 Pro Max",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "iphone 13 pro max apple · the battery king apple legend apple",
        "specs": [
            {
                "label": "SoC",
                "value": "A15 Bionic (5nm) | 5-core GPU | 16-core Neural Engine"
            },
            {
                "label": "Display",
                "value": "6.7\" Super Retina XDR OLED | 120Hz ProMotion | 1200 nits peak"
            },
            {
                "label": "Camera System",
                "value": "[Main] 12MP | 1.9µm pixels | f/1.5 | Sensor-shift OIS<br/>\n                        [Telephoto] 12MP | 3x Optical Zoom | 77mm<br/>\n                        [Ultrawide] 12MP | f/1.8 | Autofocus &amp; Macro Photography"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX703 / 1/1.66\" (12MP, 1.9µm, 26mm, Sensor-shift OIS); 3× Telephoto: Sony IMX713 / 1/3.5\" (12MP, 77mm, OIS); Ultrawide: Sony IMX772 / 1/3.4\" (12MP, 13mm, 120°, macro); Front: Sony IMX514 / 1/3.6\" (12MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm / 26mm / 77mm | Digital crop: 52mm (2× main; software crop rather than a separate telephoto sensor)"
            },
            {
                "label": "Battery",
                "value": "4352mAh | The undisputed endurance champion of its era"
            },
            {
                "label": "Build",
                "value": "Surgical-grade Stainless Steel | Ceramic Shield | 240g"
            },
            {
                "label": "Memory",
                "value": "6GB LPDDR4X RAM"
            },
            {
                "label": "Storage",
                "value": "1TB NVMe Storage (Max spec)"
            }
        ],
        "why": "First iPhone with 120Hz ProMotion, and the battery life held up."
    },
    {
        "lot": "012",
        "name": "Galaxy S21 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "samsung",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/s21ultra-transparent.webp",
            "alt": "Galaxy S21 Ultra",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "galaxy s21 ultra samsung · galaxy classic design icon samsung",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 888 / Exynos 2100 (5nm)"
            },
            {
                "label": "Display",
                "value": "6.8\" Dynamic AMOLED 2X | WQHD+ | Adaptive 10-120Hz | 1500 nits"
            },
            {
                "label": "Camera System",
                "value": "[Main] 108MP ISOCELL HM3 | 1/1.33\" | Laser AF | OIS<br/>\n                        [Periscope] 10MP | 10x Optical | 100x Space Zoom<br/>\n                        [Telephoto] 10MP | 3x Optical<br/>\n                        [Ultrawide] 12MP | 120° FOV | Dual Pixel AF"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL HM3 / 1/1.33\" (108MP, 0.8µm, Laser AF, OIS); 10× Periscope: Samsung S5K3I1 / 1/3.24\" (10MP, 240mm, Dual Pixel AF, OIS); 3× Telephoto: Samsung S5K3I1 / 1/3.24\" (10MP, 72mm, Dual Pixel AF, OIS); Ultrawide: Sony IMX563 / 1/2.55\" (12MP, 120°); Front: Samsung S5KGH1 / 1/2.8\" (40MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm / 24mm / 72mm / 240mm | Sensor crop: 48mm (2× main) | Space Zoom: up to 100× computational reach"
            },
            {
                "label": "Feature",
                "value": "S-Pen Support (First for S-Series) | Phantom Black Matte Finish"
            },
            {
                "label": "Battery",
                "value": "5000mAh | 25W Wired | 15W Wireless"
            },
            {
                "label": "Build",
                "value": "Armor Aluminum frame | Gorilla Glass Victus | IP68 | 227g"
            },
            {
                "label": "Memory",
                "value": "16GB LPDDR5 RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB UFS 3.1 (Max spec)"
            }
        ],
        "why": "First phone to bring 108MP and dual telephoto to the mainstream. The specs still hold up."
    },
    {
        "lot": "013",
        "name": "Galaxy S25 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "samsung",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/s25ultra-transparent.webp",
            "alt": "Galaxy S25 Ultra",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "galaxy s25 ultra",
        "specs": [
            {
                "label": "SoC",
                "value": "Qualcomm Snapdragon 8 Elite for Galaxy (3nm) | 2x 4.47GHz Prime + 6x 3.53GHz Performance | Adreno 830 GPU"
            },
            {
                "label": "Memory",
                "value": "16GB LPDDR5X RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "1TB UFS 4.0 (Max spec)"
            },
            {
                "label": "Display",
                "value": "6.8\" Flat Dynamic AMOLED 2X | QHD+ (3120x1440) | 1-120Hz LTPO | 2600 nits peak | Corning Gorilla Armor 2 (Anti-Reflective)"
            },
            {
                "label": "Camera System",
                "value": "[Main] 200MP ISOCELL HP2 (1/1.3\", f/1.7, OIS) | [Periscope] 50MP Sony IMX854 (5x Optical, 100x Space Zoom, OIS) | [Telephoto] 10MP Sony IMX754 (3x Optical, OIS) | [Ultrawide] 50MP ISOCELL JN3 (120° FOV, AF Macro)"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL HP2 / 1/1.3\" (200MP, 0.6µm, OIS); 5× Periscope: Sony IMX854 / 1/2.52\" (50MP, 5× optical, OIS); 3× Telephoto: Sony IMX754 / 1/3.52\" (10MP, 3×, OIS); Ultrawide: Samsung ISOCELL JN3 / 1/2.76\" (50MP, 120°); Front: Samsung S5K3LU / 1/3.2\" (12MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm / 24mm / 67mm / 111mm | Sensor crop: 48mm (2× main) | Space Zoom: up to 100× computational reach"
            },
            {
                "label": "Battery",
                "value": "5000mAh | 45W Fast Charging 2.0 | 15W Fast Wireless Charging 2.0 | Wireless PowerShare | Wi-Fi 7 | Bluetooth 5.4"
            },
            {
                "label": "Build",
                "value": "Grade 5 Titanium frame | Corning Gorilla Armor 2 front | Gorilla Glass rear | IP68 water &amp; dust | 218g | 8.2mm"
            },
            {
                "label": "Feature",
                "value": "Built-in S-Pen | Galaxy AI with Gemini Nano multimodal | ProVisual Engine | 7 years OS &amp; security updates"
            }
        ],
        "why": "Snapdragon 8 Elite in the thinnest Ultra yet. I want one."
    },
    {
        "lot": "014",
        "name": "Galaxy S25+",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "samsung",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/s25plus-clean-transparent.webp",
            "alt": "Galaxy S25+",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "galaxy s25+",
        "specs": [
            {
                "label": "SoC",
                "value": "Qualcomm Snapdragon 8 Elite for Galaxy (3nm) | 2x 4.47GHz Prime + 6x 3.53GHz Performance | Adreno 830 GPU"
            },
            {
                "label": "Memory",
                "value": "12GB LPDDR5X RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB UFS 4.0 (Max spec)"
            },
            {
                "label": "Display",
                "value": "6.7\" Flat Dynamic AMOLED 2X | QHD+ (3120x1440) | 1-120Hz LTPO | 2600 nits peak | Corning Gorilla Glass Victus 2"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP ISOCELL GN3 (1/1.57\", f/1.8, Dual Pixel AF, OIS) | [Telephoto] 10MP (3x Optical, OIS) | [Ultrawide] 12MP (120° FOV, Super Steady)"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL GN3 / 1/1.57\" (50MP, 1.0µm, Dual Pixel AF, OIS); 3× Telephoto: Samsung S5K3K1 / 1/3.94\" (10MP, 3×, OIS); Ultrawide: Sony IMX564 / 1/2.55\" (12MP, 120°); Front: Samsung S5K3LU / 1/3.2\" (12MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm / 24mm / 67mm | Sensor crop: 48mm (2× main; optical-quality crop)"
            },
            {
                "label": "Battery",
                "value": "4900mAh | 45W Wired Fast Charging | 15W Wireless | Wireless PowerShare | Wi-Fi 7"
            },
            {
                "label": "Build",
                "value": "Enhanced Armor Aluminum frame | Corning Gorilla Glass Victus 2 | IP68 water &amp; dust | 196g | 7.3mm thickness"
            },
            {
                "label": "Feature",
                "value": "Galaxy AI multimodal suite | Circle to Search | Generative Edit | 7 years OS &amp; security updates"
            }
        ],
        "why": "The sweet spot - all the performance, none of the S-Pen bulk. This is what most people actually need."
    },
    {
        "lot": "015",
        "name": "iPhone 17",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "apple",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/iphone17-transparent.webp",
            "alt": "iPhone 17",
            "width": 600,
            "height": 815
        },
        "searchKeys": "iphone 17 apple · next gen standard apple ai flagship apple",
        "specs": [
            {
                "label": "SoC",
                "value": "A19 (3nm process) | 8GB Unified Memory for On-device AI"
            },
            {
                "label": "Display",
                "value": "6.3\" Super Retina XDR | LTPO 120Hz ProMotion (Finally on base model) | Dynamic Island"
            },
            {
                "label": "Camera System",
                "value": "[Main] 48MP | f/1.6 | Sensor-shift OIS | 2x Optical-quality crop<br/>\n                        [Ultrawide] 48MP | Autofocus | Spatial Video Capture<br/>\n                        [Front] 24MP Upgraded Selfie Camera"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: 48MP Sony Fusion / 1/1.56\" (1.0µm / 2.0µm 4-in-1, Sensor-shift OIS); Ultrawide: 48MP Sony / 1/2.55\" (13mm, 120°); Front: 24MP / 1/3.0\" (PDAF)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm / 26mm | Sensor crop: 52mm (2× main sensor, optical-quality crop)"
            },
            {
                "label": "New Features",
                "value": "Action Button | Camera Control | Native Apple Intelligence"
            },
            {
                "label": "Build",
                "value": "Aerospace-grade Aluminum | Color-infused Glass"
            },
            {
                "label": "Battery",
                "value": "3650mAh | 25W wired fast charge | 15W MagSafe | Qi2 wireless"
            }
        ],
        "why": "Aluminum frame design leak had me losing sleep. If they bring proper ProMotion to the base model, it's game over."
    },
    {
        "lot": "016",
        "name": "Xiaomi 11 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "xiaomi",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/xiaomi11ultra-transparent.webp",
            "alt": "Xiaomi 11 Ultra",
            "width": 1600,
            "height": 1600
        },
        "searchKeys": "xiaomi 11 ultra xiaomi ㆍ gn2 android flagship",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 888 | LPDDR5 | UFS 3.1"
            },
            {
                "label": "Display",
                "value": "6.81\" 2K AMOLED | 120Hz | 1700 nits | E4 Material"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP GN2 (1/1.12\") | f/1.95 | OIS<br/>\n                        [Periscope] 48MP IMX586 | 5x Optical | 120x Digital | OIS<br/>\n                        [Ultrawide] 48MP IMX586 | 128° FOV"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL GN2 (S5KGN2) / 1/1.12\" (50MP, 1.4µm / 2.8µm 4-in-1, 8P, Dual Pixel Pro, OIS, dToF); Periscope: Sony IMX586 / 1/2.0\" (48MP, 5× optical / 120× digital, OIS); Ultrawide: Sony IMX586 / 1/2.0\" (48MP, 128° FOV, 12mm); Front: Samsung S5K3T2 / 1/3.4\" (20MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 24mm / 120mm | Sensor crop: 48mm (2× main) | Hybrid reach: 240mm+ toward the 120× mode"
            },
            {
                "label": "Battery",
                "value": "5000mAh Silicon-Oxygen Anode | 67W Wired | 67W Wireless"
            },
            {
                "label": "Build",
                "value": "Ceramic body | 234g | IP68"
            },
            {
                "label": "Memory",
                "value": "12GB LPDDR5 RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB UFS 3.1 (Max spec)"
            }
        ],
        "why": "小米首款『安卓之光』，首发 GN2 接近一英寸超大底与背屏灵眸副屏设计，三主摄影像体系奠定了小米超大杯的旗舰基调。"
    },
    {
        "lot": "051",
        "name": "Xiaomi 11 Pro",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "xiaomi",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/xiaomi11pro.webp",
            "alt": "Xiaomi 11 Pro",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "xiaomi 11 pro xiaomi · android king xiaomi // gn2 flagship xiaomi",
        "specs": [
            {
                "label": "SoC",
                "value": "Qualcomm Snapdragon 888 (5nm) | Adreno 660 | LPDDR5 6400Mbps + UFS 3.1"
            },
            {
                "label": "Display",
                "value": "6.81\" Quad-Curved AMOLED | 3200×1440 2K WQHD+ | 120Hz | 480Hz Touch | 1700 nits Peak | Samsung E4 | Gorilla Glass Victus"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP Samsung ISOCELL GN2 | 1/1.12\" | f/1.95 | 8P | OIS | Dual Pixel Pro<br/>\n                        [Periscope] 8MP OmniVision OV08A10 | 5× Optical Zoom | 50× Digital | OIS<br/>\n                        [Ultrawide] 13MP OmniVision OV13B10 | 123° FOV | f/2.4<br/>\n                        [Front] 20MP Samsung S5K3T2 | f/2.2"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL GN2 (S5KGN2) / 1/1.12\" (1.4µm native, 2.8µm 4-in-1); Periscope: OmniVision OV08A10 / 1/4.4\"; Ultrawide: OmniVision OV13B10 / 1/3.06\"; Front: Samsung S5K3T2 / 1/3.4\""
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 16mm (ultrawide) / 24mm (main) / 120mm (5× periscope) | Sensor crop: 48mm (2× main) | Hybrid zoom reach to 50×"
            },
            {
                "label": "Design & Styling",
                "value": "Style: AG Frosted Quad-Curved Glass | Dream Purple | Stepped squircle camera DECO with CD-textured metal collar ring | Aluminum alloy middle frame | IP68 dust/water resistant | 208g | 8.53mm"
            },
            {
                "label": "Battery & Charging",
                "value": "5000mAh MTW Silicon-Oxygen Anode single cell | 67W wired fast charge | 67W wireless fast charge (100% in 36m) | 10W reverse wireless"
            },
            {
                "label": "Audio & Haptics",
                "value": "Harman Kardon tuned stereo dual speakers | Hi-Res &amp; Hi-Res Wireless Audio | X-axis linear vibration motor | IR blaster"
            },
            {
                "label": "Build",
                "value": "Quad-curved Corning Gorilla Glass Victus | Metal middle frame | IP68 | 208g"
            }
        ],
        "why": "The \"King of Android\" defined by its massive 1/1.12\" Samsung GN2 sensor, 67W dual fast charge, and elegant dream purple quad-curved finish."
    },
    {
        "lot": "017",
        "name": "Xiaomi 17",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "xiaomi",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/xiaomi17-transparent.webp",
            "alt": "Xiaomi 17",
            "width": 1600,
            "height": 1600
        },
        "searchKeys": "xiaomi 17 xiaomi · leica optics xiaomi // compact flagship xiaomi",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 8 Elite Gen 5 | 16GB LPDDR5X | UFS 4.1"
            },
            {
                "label": "Display",
                "value": "6.36\" LTPO OLED | 1-120Hz | 3200 nits"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP Light Fusion 950 | 23mm | OIS<br/>\n                        [Telephoto] 50MP Floating Lens | 60mm | OIS<br/>\n                        [Ultrawide] 50MP | 14mm | 115° FOV"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Xiaomi Light Fusion 950 / 1/1.28\" (50MP, 1.2µm, 23mm, OIS); Floating Telephoto: Samsung ISOCELL JN5 / 1/2.76\" (50MP, 60mm, 10cm macro, OIS); Ultrawide: Samsung ISOCELL JN1 / 1/2.76\" (50MP, 14mm, 115°); Front: OmniVision OV32B40 / 1/3.14\" (32MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 14mm / 23mm / 60mm | Main-sensor crop modes: 28mm / 35mm / 46mm (2×)"
            },
            {
                "label": "Battery & Charging",
                "value": "5400mAh High-Density Battery | 90W Wired | 50W Wireless"
            },
            {
                "label": "Build",
                "value": "Ceramic Body | Dragon Crystal Glass"
            }
        ],
        "why": "A compact Leica flagship built around fast performance, a bright LTPO panel, and a versatile triple-camera system."
    },
    {
        "lot": "018",
        "name": "Xiaomi 17 Pro Max",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "xiaomi",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/xiaomi17promax-transparent.webp",
            "alt": "Xiaomi 17 Pro Max",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "xiaomi 17 pro max xiaomi ㆍ future concept flagship",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 8 Gen 5 (2nm) | 24GB LPDDR6 | 1TB UFS 4.1"
            },
            {
                "label": "Display",
                "value": "6.73\" All-Around Micro-Curved | 2K+ | 240Hz | 4500 nits"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP Light Hunter 950L | 23mm | OIS<br/>\n                         [Periscope] 50MP Samsung GN8 | 115mm | 5x Optical | OIS<br/>\n                         [Ultrawide] 50MP | 17mm | 102° FOV"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony LYT-900 / 1.0\" (50MP, 1.6µm / 3.2µm 4-in-1, 23mm, OIS); 5× Periscope: Sony IMX858 / 1/2.51\" (50MP, 115mm, OIS); Ultrawide: OmniVision OV50M / 1/2.88\" (50MP, 17mm); Front: Sony IMX858 / 1/2.51\" (50MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 17mm / 23mm / 115mm | Sensor crop: 46mm (2× main) | Hybrid reach: ~230mm (2× telephoto)"
            },
            {
                "label": "Build",
                "value": "Full Nano-tech Ceramic Unibody | Dragon Crystal Glass 3.0"
            },
            {
                "label": "Battery",
                "value": "6200mAh Solid-State Battery | 120W Wired | 80W Wireless"
            }
        ],
        "why": "未来概念旗舰形态，探索无开孔真全面屏与大底光学连续潜望变焦极限的构想机型。"
    },
    {
        "lot": "019",
        "name": "iPhone 11",
        "status": "owned",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "apple",
        "isLead": false,
        "inSetup": true,
        "setupRole": "Pocket Daily",
        "isDeskCore": false,
        "image": {
            "src": "assets/images/iphone11-transparent.webp",
            "alt": "iPhone 11",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "iphone 11 apple · legacy apple classic apple",
        "specs": [
            {
                "label": "SoC",
                "value": "A13 Bionic (7nm+) | 6-core CPU | 4-core GPU"
            },
            {
                "label": "Display",
                "value": "6.1\" Liquid Retina IPS LCD | 625 nits | True Tone"
            },
            {
                "label": "Camera System",
                "value": "[Main] 12MP | 1/2.55\" | f/1.8 | Dual Pixel PDAF | OIS<br/>\n                        [Ultrawide] 12MP | 120° FOV | f/2.4"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX503 / 1/2.55\" (12MP, 1.4µm, 26mm, 100% Focus Pixels, OIS); Ultrawide: Sony IMX372 / 1/3.6\" (12MP, 13mm, 120°); Front: Sony IMX514 / 1/3.6\" (12MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm / 26mm | Digital crop: 52mm (2× main; no separate telephoto sensor)"
            },
            {
                "label": "Feature",
                "value": "Face ID | IP68 Water Resistance | Night Mode"
            },
            {
                "label": "Battery",
                "value": "3110 mAh | 18W Wired Charging | Qi Wireless"
            },
            {
                "label": "Build",
                "value": "Aerospace-grade 7000-series aluminum | Dual-ion glass | IP68 (2m 30min) | 194g"
            }
        ],
        "why": "My first iPhone. Night Mode changed how I shoot after dark. Still running smooth after all these years."
    },
    {
        "lot": "020",
        "name": "realme 11 Pro+",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "realme",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/realme11proplus-transparent.webp",
            "alt": "realme 11 Pro+",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "realme 11 pro+ realme · premium mid-range realme design realme",
        "specs": [
            {
                "label": "SoC",
                "value": "MediaTek Dimensity 7050 (6nm) | Up to 12GB RAM"
            },
            {
                "label": "Display",
                "value": "6.7\" Curved AMOLED | 120Hz | 1 Billion Colors | 2160Hz PWM"
            },
            {
                "label": "Camera System",
                "value": "[Main] 200MP Samsung ISOCELL HP3 | f/1.69 | OIS | 4x In-sensor Zoom<br/>\n                        [Ultrawide] 8MP | 112° FOV<br/>\n                        [Macro] 2MP"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL HP3 / 1/1.4\" (200MP, 0.56µm / 2.24µm 16-in-1, SuperOIS, 4× in-sensor zoom); Ultrawide: Sony IMX355 / 1/4.0\" (8MP, 112°); Macro: GalaxyCore GC02M1 / 1/5.0\" (2MP, 4cm); Front: Sony IMX615 / 1/2.74\" (32MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 15.9mm / 22.9mm | Sensor crops: 45.8mm (2×) / 91.6mm (4× in-sensor zoom) | Macro: 4cm focus distance"
            },
            {
                "label": "Battery & Charging",
                "value": "5000mAh | 100W SuperVOOC (100% in 26 mins)"
            },
            {
                "label": "Build",
                "value": "Premium Lychee Vegan Leather | 3D Woven Texture"
            }
        ],
        "why": "A curved OLED display and 200MP sensor at this price is unusual for the segment."
    },
    {
        "lot": "021",
        "name": "Galaxy A51",
        "status": "owned",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "samsung",
        "isLead": false,
        "inSetup": true,
        "setupRole": "Test Device",
        "isDeskCore": false,
        "image": {
            "src": "assets/images/samsung-a51-transparent.webp",
            "alt": "Galaxy A51",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "galaxy a51 samsung · best seller galaxy essential samsung",
        "specs": [
            {
                "label": "SoC",
                "value": "Exynos 9611 (10nm) | Mali-G72 MP3"
            },
            {
                "label": "Display",
                "value": "6.5\" Super AMOLED | 1080x2400 | Corning Gorilla Glass 3"
            },
            {
                "label": "Camera System",
                "value": "[Main] 48MP | 1/2.0\" | f/2.0 | PDAF<br/>\n                        [Ultrawide] 12MP | 123° FOV<br/>\n                        [Macro] 5MP | f/2.4<br/>\n                        [Depth] 5MP | f/2.2"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL GM2 (S5KGM2) / 1/2.0\" (48MP, 0.8µm, PDAF); Ultrawide: Samsung S5K3L6 / 1/3.1\" (12MP, 123°); Macro: GalaxyCore GC5035 / 1/5.0\" (5MP, 40mm); Depth: GalaxyCore GC5035 / 1/5.0\" (5MP); Front: Sony IMX616 / 1/2.8\" (32MP)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 26mm | Macro module: 25mm (Samsung also describes close-up framing as ~40mm) | Sensor crop: 52mm (2× main)"
            },
            {
                "label": "Battery",
                "value": "4000mAh | 15W Fast Charging"
            },
            {
                "label": "Feature",
                "value": "Under-display Fingerprint | 3.5mm Headphone Jack"
            },
            {
                "label": "Build",
                "value": "Glasstic (polycarbonate) 3D curved back | Aluminum frame | 172g | 7.9mm"
            }
        ],
        "why": "The phone that introduced me to Samsung's ecosystem. Quad camera mid-ranger done right."
    },
    {
        "lot": "041",
        "name": "Galaxy Z Fold 8 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "samsung",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/samsungzfold8ultra-square-transparent.webp",
            "alt": "Galaxy Z Fold 8 Ultra",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "galaxy z fold 8 ultra samsung ㆍ 200mp titanium foldable",
        "specs": [
            {
                "label": "SoC",
                "value": "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm) | 3.39GHz Cortex-X4"
            },
            {
                "label": "Memory",
                "value": "16GB LPDDR5X RAM (Max spec, expanded for Galaxy AI)"
            },
            {
                "label": "Storage",
                "value": "512GB UFS 4.0 (Max spec)"
            },
            {
                "label": "Inner Display",
                "value": "8.0\" Dynamic AMOLED 2X (20:18 ratio, 2184x1968) | 1-120Hz LTPO | 2600 nits peak | UTG"
            },
            {
                "label": "Cover Display",
                "value": "6.5\" Dynamic AMOLED 2X (21:9 ratio, 2520x1080) | 1-120Hz LTPO | 2600 nits peak | Gorilla Glass Ceramic"
            },
            {
                "label": "Camera System",
                "value": "[Main] 200MP ISOCELL HP2 (1/1.3\", f/1.7, OIS) | [Telephoto] 10MP (3x Optical, OIS) | [Ultrawide] 12MP (AF Macro)"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL HP2 / 1/1.3\" (200MP, 0.6µm, OIS); 3× Telephoto: Samsung S5K3K1 (10MP, OIS); Ultrawide: 12MP with AF; Cover Front: 10MP"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 24mm / 67mm | Sensor crop: 48mm (2× from 200MP) | Space Zoom: up to 30×"
            },
            {
                "label": "Battery",
                "value": "4400mAh dual battery | 25W wired fast charge | 15W wireless | Wi-Fi 7"
            },
            {
                "label": "Build",
                "value": "Striped patterned craft titanium/glass back | Armor Aluminum frame | IP48 | 236g | 10.6mm folded (4.9mm unfolded)"
            },
            {
                "label": "Feature",
                "value": "First 200MP camera in a Samsung foldable | 16GB RAM on-device AI | Wi-Fi 7 | Ultra-wide 21:9 cover screen"
            }
        ],
        "why": "A foldable flagship with an 8-inch canvas, thin titanium hardware, and the camera system of an ultra-class phone."
    },
    {
        "lot": "044",
        "name": "Huawei Mate 40 Pro+",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "huawei",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/huaweimate40proplus-transparent.webp",
            "alt": "Huawei Mate 40 Pro+",
            "width": 1088,
            "height": 1445
        },
        "searchKeys": "huawei mate 40 pro+ huawei · mate ultimate huawei // kirin 9000 camera system",
        "specs": [
            {
                "label": "SoC",
                "value": "Kirin 9000 5G (5nm) | Mali-G78 GPU"
            },
            {
                "label": "Display",
                "value": "6.76\" OLED | 90Hz | 2772×1344 | Horizon Display"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP Ultra Vision RYYB | OIS<br/>\n                        [Cine Ultrawide] 20MP | 120° FOV<br/>\n                        [Telephoto] 12MP | 3x Optical | OIS<br/>\n                        [SuperZoom] 8MP | 10x Optical-equivalent | OIS<br/>\n                        [Depth] 3D ToF Sensor"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX700 Ultra Vision RYYB / 1/1.28\" (50MP, 1.22µm / 2.44µm 4-in-1, OIS); Cine Ultrawide: Sony IMX518 / 1/1.54\" (20MP, 14mm, free-form); 3× Telephoto: Sony IMX351 / 1/3.6\" (12MP, 70mm, OIS); 10× Periscope: Sony IMX520 / 1/3.6\" (8MP, 240mm, OIS); 3D ToF; Front: 13MP / 1/3.06\" + 3D ToF"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 18mm / 23mm / 70mm / 240mm | Sensor crop: 46mm (2× main)"
            },
            {
                "label": "Imaging Tech",
                "value": "HUAWEI XD Fusion Pro | Leica color science"
            },
            {
                "label": "Battery & Charging",
                "value": "4400mAh | 66W Wired | 50W Wireless"
            },
            {
                "label": "Build",
                "value": "Ceramic Back | IP68 | 234g"
            }
        ],
        "why": "The Mate 40 series at its most elaborate: a ceramic-backed flagship with a five-camera system built for every focal length."
    },
    {
        "lot": "054",
        "name": "Mi 10 Pro",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "xiaomi",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/mi10-pro-transparent.webp",
            "alt": "Mi 10 Pro",
            "width": 672,
            "height": 937
        },
        "searchKeys": "mi 10 pro xiaomi · mi flagship xiaomi camera phone 108mp 1/1.33 sensor",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 865 | 8GB LPDDR5 + 256GB UFS 3.0"
            },
            {
                "label": "Display",
                "value": "6.67\" OLED | 2340×1080 FHD+ | 90Hz"
            },
            {
                "label": "Camera System",
                "value": "[Main] 108MP primary | f/1.69 | OIS | 8P lens<br/>\n                        [Telephoto] 8MP | 10× hybrid zoom | OIS<br/>\n                        [Portrait] 12MP | 2× optical zoom<br/>\n                        [Ultrawide] 20MP | up to 117° FOV<br/>\n                        [Front] 20MP"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL Bright HMX (S5KHMX) / 1/1.33\" (108MP, 0.8µm / 1.6µm 4-in-1, 8P, OIS); 10× Hybrid Tele: OmniVision OV08A10 / 1/4.4\" (8MP, OIS); 2× Portrait: Samsung S5K2L7 / 1/2.56\" (12MP, 50mm, Dual Pixel AF); Ultrawide: Sony IMX350 / 1/2.78\" (20MP, 117°); Front: Samsung S5K3T2 / 1/3.4\" (20MP)"
            },
            {
                "label": "Battery & Charging",
                "value": "4500mAh typical | 50W wired | 30W wireless"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 25mm / 94mm (3.7×) | Sensor crop: 50mm (2×)"
            },
            {
                "label": "Build",
                "value": "208g | Glass Back"
            }
        ],
        "why": "A Snapdragon 865 flagship built around a 108MP primary sensor and a four-camera zoom stack."
    },
    {
        "lot": "050",
        "name": "Mi CC9 Pro",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "xiaomi",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/mi-note-10-pro-transparent.webp",
            "alt": "Mi CC9 Pro",
            "width": 401,
            "height": 525
        },
        "searchKeys": "mi cc9 pro xiaomi ㆍ 108mp penta camera note 10 pro",
        "specs": [
            {
                "label": "SoC",
                "value": "Qualcomm Snapdragon 730G (8nm) | Adreno 618 | 8GB LPDDR4X"
            },
            {
                "label": "Display",
                "value": "6.47\" curved AMOLED | 2340×1080 FHD+ | HDR10 | Gorilla Glass 5"
            },
            {
                "label": "Camera System",
                "value": "[Main] 108MP | f/1.69 | OIS<br/>\n                        [Periscope] 8MP | 5× optical | OIS<br/>\n                        [Portrait] 12MP | 2× optical<br/>\n                        [Ultrawide] 20MP | 117° FOV<br/>\n                        [Macro] 2MP | [Front] 32MP"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL Bright HMX (S5KHMX) / 1/1.33\" (108MP, 0.8µm / 1.6µm 4-in-1, 4-axis OIS); 5× Telephoto: OmniVision OV08A10 / 1/4.4\" (5MP / 8MP crop, 4-axis OIS); 2× Portrait: Samsung S5K2L7 / 1/2.56\" (12MP, 50mm, Dual Pixel AF); Ultrawide: Sony IMX350 / 1/2.8\" (20MP, 117°); Macro: GalaxyCore GC02M1 / 1/5.0\" (2MP); Front: Samsung S5KGD1 / 1/2.8\" (32MP)"
            },
            {
                "label": "Battery & Charging",
                "value": "5260mAh typical | 30W wired fast charging"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 25mm / 50mm / 94mm / 125mm (5×)"
            },
            {
                "label": "Build",
                "value": "208g | curved glass front/back | 3.5mm headphone jack"
            }
        ],
        "why": "The camera-first CC-series phone that brought a 108MP, five-camera stack to Xiaomi's mainstream line."
    },
    {
        "lot": "046",
        "name": "Find X9 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "oppo",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/oppo-find-x9-ultra-gpt-image-2-transparent.webp",
            "alt": "Find X9 Ultra",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "oppo find x9 ultra oppo · find ultra camera flagship 200mp sony sensor 1/1.12",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 8 Elite Gen 5 | 12GB LPDDR5X + 512GB UFS 4.1"
            },
            {
                "label": "Display",
                "value": "6.82\" AMOLED | QHD+ 3168×1440 | adaptive 1–120Hz (144Hz in supported games)"
            },
            {
                "label": "Camera System",
                "value": "[Main] 200MP wide | f/1.5 | 2-axis OIS<br/>\n                        [Portrait Telephoto] 200MP | 3× optical | f/2.2 | 2-axis OIS<br/>\n                        [Ultra Telephoto] 50MP | 10× optical | f/3.5 | 2-axis OIS<br/>\n                        [Ultrawide] 50MP | 123° FOV | f/2.0<br/>\n                        [Monochrome] 3.2MP | [Front] 50MP AF"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony LYTIA 900 / 1/1.12\" custom (200MP, f/1.5, 2-axis OIS); 3× Portrait Tele: Sony / 1/1.28\" (200MP, 2-axis OIS); 10× Tele: Sony / 1/2.75\" (50MP, OIS); Ultrawide: Sony / 1/1.95\" (50MP, 14mm)"
            },
            {
                "label": "Battery & Charging",
                "value": "7050mAh typical | 100W SUPERVOOC wired | 50W AIRVOOC wireless"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 14mm / 23mm / 65mm / 135mm"
            },
            {
                "label": "Build",
                "value": "IP68/IP69 | ~225g"
            }
        ],
        "why": "An all-focal-length camera flagship built around dual 200MP cameras and a 10× periscope."
    },
    {
        "lot": "047",
        "name": "X70 Pro",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "vivo",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/vivo-x70-pro-gpt-image-2-transparent.webp",
            "alt": "X70 Pro",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "vivo x70 pro vivo · x70 pro camera flagship vivo sony imx766v gimbal sensor",
        "specs": [
            {
                "label": "SoC",
                "value": "MediaTek Dimensity 1200-vivo | 12GB + 256GB"
            },
            {
                "label": "Display",
                "value": "6.56\" E5 AMOLED | 2376×1080 FHD+ | 120Hz"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP Ultra-Sensing Gimbal | f/1.75 | ZEISS T* coating<br/>\n                        [Portrait] 12MP | 50mm equivalent | f/1.98<br/>\n                        [Ultrawide] 12MP | f/2.2<br/>\n                        [Periscope] 8MP OIS | f/3.4<br/>\n                        [Front] 32MP | f/2.45"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX766V / 1/1.56\" (50MP, 1.0µm / 2.0µm, Micro-Gimbal OIS, ZEISS T*); Portrait: Sony IMX663 / 1/2.93\" (12MP, 50mm, Dual Pixel AF); Ultrawide: Samsung S5K3L6 / 1/3.1\" (12MP, 116°); 5× Periscope: OmniVision OV08A10 / 1/4.4\" (8MP, 5× optical / 60× zoom, OIS); Front: Samsung S5KGD2 / 1/2.8\" (32MP)"
            },
            {
                "label": "Battery & Charging",
                "value": "4450mAh typical | 44W vivo FlashCharge"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 14mm / 23mm / 50mm | ZEISS T* coatings"
            },
            {
                "label": "Build",
                "value": "IP68 | 185g | Fluorite AG Glass"
            }
        ],
        "why": "A ZEISS-coated camera flagship whose gimbal-stabilized main sensor is the defining feature."
    },
    {
        "lot": "048",
        "name": "OnePlus 9 Pro",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "oneplus",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/oneplus-9-pro-gpt-image-2-transparent.webp",
            "alt": "OnePlus 9 Pro",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "oneplus 9 pro oneplus · hasselblad flagship oneplus sony imx789 imx766 sensor",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 888 5G | 12GB LPDDR5 + 256GB UFS 3.1"
            },
            {
                "label": "Display",
                "value": "6.7\" Fluid Display 2.0 | LTPO | QHD+ 3216×1440 | Smart 1–120Hz"
            },
            {
                "label": "Camera System",
                "value": "[Main] 48MP Sony IMX789 | 23mm | f/1.8 | OIS<br/>\n                        [Ultrawide] 50MP Sony IMX766 | 14mm | f/2.2 | Freeform lens<br/>\n                        [Telephoto] 8MP | 3.3× | 77mm | OIS<br/>\n                        [Mono] 2MP | [Front] 16MP"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX789 / 1/1.43\" (48MP, 1.12µm, 23mm, OIS, Omnidirectional PDAF); Ultrawide: Sony IMX766 / 1/1.56\" (50MP, 14mm, Freeform); 3.3× Telephoto: OmniVision OV08A10 / 1/4.4\" (8MP, 77mm, OIS); Monochrome: GalaxyCore GC02M1B / 1/5.0\" (2MP); Front: Sony IMX471 / 1/3.06\" (16MP)"
            },
            {
                "label": "Battery & Charging",
                "value": "4500mAh | 65W Warp Charge wired | 50W Warp Charge wireless"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 14mm / 23mm / 77mm | Freeform ultrawide lens"
            },
            {
                "label": "Build",
                "value": "197g | Morning Mist / Pine Green"
            }
        ],
        "why": "A Hasselblad-tuned flagship with a custom Sony main sensor and a large IMX766 ultrawide."
    },
    {
        "lot": "049",
        "name": "Galaxy A72",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "samsung",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/samsung-galaxy-a72-gpt-image-2-transparent.webp",
            "alt": "Galaxy A72",
            "width": 1088,
            "height": 1445
        },
        "searchKeys": "samsung galaxy a72 samsung · galaxy a series samsung midrange 64mp ois camera sensor",
        "specs": [
            {
                "label": "SoC",
                "value": "Qualcomm Snapdragon 720G (SDM720G) | octa-core 2×2.3GHz + 6×1.8GHz | 6/8GB + 128/256GB"
            },
            {
                "label": "Display",
                "value": "6.7\" FHD+ Super AMOLED Infinity-O | 1080×2400 | 90Hz | 800 nits"
            },
            {
                "label": "Camera System",
                "value": "[Main] 64MP OIS AF | f/1.8 | 0.8µm<br/>\n                        [Ultrawide] 12MP | f/2.2 | 1.12µm<br/>\n                        [Telephoto] 8MP AF | 3× optical | f/2.4 | 1.0µm<br/>\n                        [Macro] 5MP | f/2.4 | 1.12µm<br/>\n                        [Front] 32MP | f/2.2 | 0.8µm"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX682 (or Samsung GW1) / 1/1.7\" (64MP, 0.8µm / 1.6µm 4-in-1, OIS); 3× Telephoto: SK Hynix Hi-847 / 1/4.0\" (8MP, 3× optical, OIS); Ultrawide: 1/3.0\" (12MP, 123°); Macro: 1/5.0\" (5MP); Front: Sony IMX616 / 1/2.8\" (32MP)"
            },
            {
                "label": "Battery & Charging",
                "value": "5000mAh typical | 25W fast charging"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 26mm / 52mm (2×) / 64mm (2.4× main crop)"
            },
            {
                "label": "Build",
                "value": "203g | Plastic (Glasstic) | IP67"
            }
        ],
        "why": "A practical Galaxy A-series camera phone with OIS, 3× telephoto, and a large 5000mAh battery."
    },
    {
        "lot": "029",
        "name": "Xiaomi 13 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "xiaomi",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/xiaomi13ultra-transparent.webp",
            "alt": "Xiaomi 13 Ultra",
            "width": 1024,
            "height": 1024
        },
        "searchKeys": "xiaomi 13 ultra xiaomi · leica apex leica apex xiaomi",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 8 Gen 2 (4nm) | Adreno 740 | LPDDR5X | UFS 4.0"
            },
            {
                "label": "Memory",
                "value": "16GB LPDDR5X RAM 8533Mbps (Max spec)"
            },
            {
                "label": "Storage",
                "value": "1TB UFS 4.0 high-speed flash (Max spec)"
            },
            {
                "label": "Display",
                "value": "6.73\" C7 AMOLED | 1-120Hz LTPO | 2600 nits peak | WQHD+ (3200×1440) | 12-bit color depth | 1920Hz high-frequency PWM + DC-like dimming | Gorilla Glass Victus"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP Sony IMX989 | 1\" large sensor | 8P lens | f/1.9-f/4.0 two-stop physical variable aperture | OIS<br/>\n                        [Portrait Telephoto] 50MP Sony IMX858 | 3.2× Optical (75mm) | f/1.8 | OIS<br/>\n                        [Super Telephoto] 50MP Sony IMX858 | 5× Optical (120mm) | 120× digital zoom | f/3.0 | OIS<br/>\n                        [Ultrawide] 50MP Sony IMX858 | 12mm equivalent | 122° FOV | f/1.8 | 5cm macro"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX989 / 1.0\" (50MP, 1.6µm / 3.2µm 4-in-1, 8P aspherical, OIS, Octa-PD); Telephoto 3.2×: Sony IMX858 / 1/2.51\" (50MP, 75mm, f/1.8, OIS); Super Telephoto 5×: Sony IMX858 / 1/2.51\" (50MP, 120mm, f/3.0, OIS); Ultrawide: Sony IMX858 / 1/2.51\" (50MP, 12mm, f/1.8, AF); Front: OmniVision OV32C / 1/3.14\" (32MP, f/2.0)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 23mm / 75mm / 120mm | In-sensor zoom: 46mm (2×) / 240mm (10×) | Digital crop up to 120×"
            },
            {
                "label": "Battery & Charging",
                "value": "5000mAh single-cell | 90W wired fast charging | 50W Pro wireless fast charging | 10W reverse wireless | Surge P2 charging chip + G1 power management chip"
            },
            {
                "label": "Build",
                "value": "227g | Gen-2 silicone nano-leather | Integrated metal unibody frame | Classic camera sloped rear | IP68 dust &amp; water resistance"
            },
            {
                "label": "Feature",
                "value": "Leica professional camera grip accessory ecosystem (two-stage physical shutter / 67mm filter adapter) | Loop LiquidCool cooling | Leica Authentic / Vibrant dual color profiles | USB 3.2 Gen 1 (DP video out)"
            }
        ],
        "why": "One-inch variable aperture paired with large-sensor quad cameras across all focal lengths. The sloped leatherette back firmly anchors Xiaomi in dedicated camera territory."
    },
    {
        "lot": "055",
        "name": "Xiaomi MIX 4",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "xiaomi",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/xiaomimix4-transparent.webp",
            "alt": "Xiaomi MIX 4",
            "width": 1024,
            "height": 1024
        },
        "searchKeys": "xiaomi mix 4 xiaomi · unibody ceramic unibody ceramic cup xiaomi",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 888+ (5nm, Cortex-X1 @ 3.0GHz) | Adreno 660 | LPDDR5 | UFS 3.1"
            },
            {
                "label": "Memory",
                "value": "12GB LPDDR5 RAM 6400Mbps (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB UFS 3.1 high-speed flash (Max spec)"
            },
            {
                "label": "Display",
                "value": "6.67\" CUP under-display curved AMOLED | 2400×1080 FHD+ | 120Hz | 480Hz touch | 400PPI micro-diamond true full view | 10-bit HDR10+ | Dolby Vision | Gorilla Glass Victus"
            },
            {
                "label": "Camera System",
                "value": "[Main] 108MP Samsung HMX | 1/1.33\" large sensor | 7P lens | 4-axis OIS<br/>\n                        [Periscope] 8MP 5× periscope telephoto (120mm) | OIS | 50× digital zoom<br/>\n                        [Ultrawide] 13MP free-form ultrawide (12mm) | 120° FOV | Hardware-level low distortion"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Samsung ISOCELL HMX / 1/1.33\" (108MP, 0.8µm / 1.6µm 4-in-1, 7P, f/1.95, 4-axis OIS); Periscope: 8MP (5× optical / 50× digital, 120mm, f/4.1, OIS); Ultrawide: 13MP free-form anti-distortion (12mm, f/2.2, 120°); Front CUP: 20MP micro-diamond under-display camera (1.6µm 4-in-1)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm / 24mm / 120mm | Sensor crop: 48mm (2×) | Digital zoom up to 50×"
            },
            {
                "label": "Battery & Charging",
                "value": "4500mAh dual-cell graphene | 120W wired fast charge (Boost 15 min / Standard 21 min to 100%) | 50W wireless fast charge (Boost 28 min to 100%) | 10W reverse wireless"
            },
            {
                "label": "Build",
                "value": "225g | High-precision lightweight unibody ceramic (30% weight reduction) | Shadow Celadon / Ceramic Black / Ceramic White (Ru kiln glaze finish)"
            },
            {
                "label": "Feature",
                "value": "CUP true notchless full-screen display | Free-form low-distortion ultrawide lens | UWB point-to-connect spatial precision | Harman Kardon dual stereo speakers"
            }
        ],
        "why": "Lightweight unibody ceramic inspired by ancient Ru kiln porcelain, paired with an under-display camera for an uninterrupted front display."
    },
    {
        "lot": "056",
        "name": "Sony Xperia 1 V",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "sony",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/sony-xperia-1-v-transparent.webp",
            "alt": "Sony Xperia 1 V",
            "width": 1024,
            "height": 1024
        },
        "searchKeys": "sony xperia 1 v sony · alpha in hand zeiss t optics continuous optical zoom sony",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 8 Gen 2 (4nm) | Adreno 740 | LPDDR5X | UFS 4.0"
            },
            {
                "label": "Memory",
                "value": "16GB LPDDR5X RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB UFS 4.0 (Max spec) | Tool-free MicroSDXC expansion up to 1TB"
            },
            {
                "label": "Display",
                "value": "6.5\" 4K HDR OLED (3840×1644, 643 PPI) | 120Hz | 21:9 cinema aspect ratio | Unnotched symmetrical bezels | X1 for mobile engine | Gorilla Glass Victus 2"
            },
            {
                "label": "Camera System",
                "value": "[Main] 48MP (52MP full) dual-layer transistor Exmor T | 24mm | f/1.9 | Zeiss T* coating | OIS<br/>\n                        [Telephoto] 12MP true continuous optical zoom (85mm-125mm, 3.5×-5.2×) | f/2.3-f/2.8 | OIS<br/>\n                        [Ultrawide] 12MP Exmor RS | 16mm | f/2.2 | 123° FOV | Dual PD AF<br/>\n                        [Shutter] Dedicated two-stage physical mechanical shutter button"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony Exmor T for mobile / 1/1.35\" (48MP effective, 1.12µm / 2.24µm 4-in-1, 24mm, f/1.9, OIS, Zeiss T* coating); Telephoto: Sony IMX650 / 1/3.5\" (12MP, 85-125mm continuous optical zoom, f/2.3-f/2.8, OIS); Ultrawide: Sony IMX563 / 1/2.5\" (12MP, 16mm, f/2.2); Front: Sony IMX663 / 1/2.9\" (12MP, 24mm, f/2.0)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 16mm / 24mm / 85mm-125mm (continuous optical zoom range) | Sensor crop: 48mm (2× lossless crop)"
            },
            {
                "label": "Battery & Charging",
                "value": "5000mAh long-life battery (Xperia Battery Care) | 30W USB PD fast charge | Qi wireless charging and battery share"
            },
            {
                "label": "Build",
                "value": "187g lightweight build | 71mm narrow ergonomic width | Ribbed tactile metal frame | Tactile micro-dot frosted glass | Dedicated gold-plated 3.5mm headphone jack | IP65/IP68 dual water resistance"
            },
            {
                "label": "Feature",
                "value": "Hardware two-stage shutter button | 85-125mm true continuous optical zoom | 3.5mm headphone jack | All-focal 4K 120fps HDR recording with Eye AF | Direct monitor hookup for Sony Alpha cameras"
            }
        ],
        "why": "Unnotched 21:9 4K OLED display with tactile ribbed frame, retaining a physical two-stage shutter button and true continuous optical zoom."
    },
    {
        "lot": "057",
        "name": "Huawei P60 Pro",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "huawei",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/huawei-p60-pro-transparent.webp",
            "alt": "Huawei P60 Pro",
            "width": 1024,
            "height": 1024
        },
        "searchKeys": "huawei p60 pro huawei · rococo pearl rococo pearl xmage optics huawei",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 8+ Gen 1 4G (4nm) | Adreno 730 | LPDDR5 | UFS 3.1"
            },
            {
                "label": "Memory",
                "value": "12GB LPDDR5 RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB UFS 3.1 (Max spec) | NM card expandable up to 256GB"
            },
            {
                "label": "Display",
                "value": "6.67\" Quad-Curved OLED | 2700×1220 1.5K+ | 1-120Hz LTPO adaptive refresh | 1440Hz high-frequency PWM dimming | 1.07B colors | Kunlun Glass (10× drop resistance)"
            },
            {
                "label": "Camera System",
                "value": "[Main] 48MP Ultra Lighting main camera | f/1.4-f/4.0 10-stop physical variable aperture | RYYB | Sensor-shift OIS<br/>\n                        [Telephoto] 48MP Ultra Lighting night telephoto | f/2.1 large aperture | 3.5× optical (90mm) | RYYB | 100× digital zoom | Three-axis sensor-shift OIS | 10cm telephoto macro<br/>\n                        [Ultrawide] 13MP ultrawide | 13mm | f/2.2 | RYYB | 2.5cm macro"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony IMX888 / 1/1.43\" (48MP, RYYB Ultra Lighting, f/1.4-f/4.0 10-stop variable aperture, sensor-shift OIS); Telephoto: 48MP (RYYB, f/2.1 large periscope aperture, 90mm, 3.5× optical / 100× digital, 3-axis sensor-shift OIS); Ultrawide: 13MP RYYB (13mm, f/2.2); Front: 13MP ultrawide (f/2.4)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm / 24.5mm / 90mm | Sensor crop: 49mm (2×) / 270mm (10× hybrid) | Digital zoom up to 100×"
            },
            {
                "label": "Battery & Charging",
                "value": "4815mAh | 88W wired SuperCharge (Turbo: 50% in 10 min) | 50W wireless SuperCharge | 7.5W reverse wireless"
            },
            {
                "label": "Build",
                "value": "200g | 8.3mm | Handcrafted Rococo Pearl natural mineral texture (each piece unique) | Kunlun Glass | IP68 dust &amp; water resistance"
            },
            {
                "label": "Feature",
                "value": "10-stop physical variable aperture (f/1.4-f/4.0) | Rococo Pearl handcrafted natural shell texture | Two-way BeiDou satellite messaging | 10cm Ultra Lighting telephoto macro"
            }
        ],
        "why": "Handcrafted Rococo Pearl finish where each unit carries an individual natural pattern. The Ultra Lighting telephoto periscope sets a high standard for low-light reach."
    },
    {
        "lot": "058",
        "name": "OPPO Find X7 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "oppo",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/oppo-find-x7-ultra-transparent.webp",
            "alt": "OPPO Find X7 Ultra",
            "width": 1024,
            "height": 1024
        },
        "searchKeys": "oppo find x7 ultra oppo · hasselblad dual periscope hasselblad optics oppo",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 8 Gen 3 (4nm) | Tidal Architecture | Adreno 750 | LPDDR5X | UFS 4.0"
            },
            {
                "label": "Memory",
                "value": "16GB LPDDR5X RAM 8533Mbps (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB UFS 4.0 high-speed flash (Max spec)"
            },
            {
                "label": "Display",
                "value": "6.82\" 2K (3168×1440) Diamond OLED | 1-120Hz LTPO | 4500 nits peak | ProXDR display | 2160Hz high-frequency PWM + DC-like dimming | Gorilla Glass Victus 2"
            },
            {
                "label": "Camera System",
                "value": "[Main] 50MP Sony LYT-900 | Gen-2 1\" large sensor | 1G+7P hybrid lens | f/1.8 | OIS<br/>\n                        [Portrait Telephoto] 50MP Sony IMX890 | 3× (65mm) | 1/1.56\" large sensor | f/2.6 | Floating prism OIS | 25cm minimum focus<br/>\n                        [Close-up Telephoto] 50MP Sony IMX858 | 6× (135mm) | 1/2.51\" | f/4.3 | Prism OIS | 35cm minimum focus<br/>\n                        [Ultrawide] 50MP Sony LYT-600 | 14mm | f/2.0 | 123° FOV | 4cm macro"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony LYT-900 / 1.0\" (50MP, 1.6µm / 3.2µm 4-in-1, 1G+7P, f/1.8, OIS); 65mm 3× Periscope: Sony IMX890 / 1/1.56\" (50MP, f/2.6, floating prism OIS); 135mm 6× Periscope: Sony IMX858 / 1/2.51\" (50MP, f/4.3, prism OIS); Ultrawide: Sony LYT-600 / 1/1.95\" (50MP, 14mm, f/2.0); Front: 32MP Sony IMX709 (RGBW, f/2.4, AF)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 14mm / 23mm / 65mm / 135mm | In-sensor zoom: 46mm (2×) / 300mm (13.3×) | Digital zoom up to 120×"
            },
            {
                "label": "Battery & Charging",
                "value": "5000mAh high-capacity battery | 100W wired SuperVOOC (100% in 26 min) | 50W wireless AirVOOC | 10W reverse wireless | Sub-zero charging down to -20°C"
            },
            {
                "label": "Build",
                "value": "221g | Desert Silver Moon (Litchi-grain vegan leather spliced with cold-carved aluminum) | Three-stage physical alert slider | IP68 dust &amp; water resistance"
            },
            {
                "label": "Feature",
                "value": "Dual periscope quad-main-camera system (65mm + 135mm) | Three-stage physical alert slider (One-touch VIP privacy mode) | Dedicated hardware security chip | All-focal 4K Dolby Vision HDR video"
            }
        ],
        "why": "Two-tone vegan leather and brushed metal finish, dual periscope telephoto system, and Hasselblad portrait tuning across all focal lengths."
    },
    {
        "lot": "059",
        "name": "Xiaomi 17 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "xiaomi",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/xiaomi17ultra-transparent.webp",
            "alt": "Xiaomi 17 Ultra",
            "width": 800,
            "height": 800
        },
        "searchKeys": "xiaomi 17 ultra xiaomi · continuous optical zoom leica apo continuous zoom xiaomi",
        "specs": [
            {
                "label": "SoC",
                "value": "Snapdragon 8 Gen 5 / 8 Elite Gen 2 (3nm) | Adreno 830 | LPDDR5X | UFS 4.1"
            },
            {
                "label": "Memory",
                "value": "16GB / 24GB LPDDR5X RAM 8533Mbps (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB / 1TB UFS 4.1 high-speed flash (Max spec)"
            },
            {
                "label": "Display",
                "value": "6.73\" 2K (3200×1440) quad-curved OLED | 1-120Hz LTPO adaptive refresh | 4500 nits peak | 2160Hz high-frequency PWM + DC-like dimming | Xiaomi Dragon Crystal Glass 3.0"
            },
            {
                "label": "Camera System",
                "value": "[Continuous Optical Zoom Telephoto] 200MP 1/1.4\" large sensor | 75-100mm true continuous optical zoom | 3G+5P dual floating mechanical group | Leica APO certified | Lossless optical output | OIS<br/>\n                        [Main] 50MP Sony LYT-900 | 1.0\" large sensor | f/1.63-f/4.0 stepless physical variable aperture | 1G+7P lens | Sensor-shift OIS<br/>\n                        [Ultrawide] 50MP Leica ultrawide | 12mm | f/1.8 | 122° FOV | 5cm macro"
            },
            {
                "label": "Camera Sensors",
                "value": "Continuous Telephoto: 200MP (1/1.4\", 0.56µm / 2.24µm 16-in-1, 75-100mm continuous optical zoom, 3G+5P dual floating group, Leica APO, physical OIS); Main: Sony LYT-900 / 1.0\" (50MP, 1.6µm / 3.2µm 4-in-1, f/1.63-f/4.0 stepless variable aperture, OIS); Ultrawide: 50MP (1/2.51\", 12mm, f/1.8); Front: 32MP (f/2.0, 4K 60fps)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 12mm (Ultrawide) / 23mm (Main) / 75-100mm (Continuous optical zoom range) | In-sensor crop: 46mm (2×) / 200mm (8×) | Digital zoom up to 120×"
            },
            {
                "label": "Battery & Charging",
                "value": "6000mAh high-density silicon-carbon battery | 120W wired fast charge (100% in 20 min) | 80W wireless fast charge | 10W reverse wireless"
            },
            {
                "label": "Build",
                "value": "225g | Nano-tech microcrystalline ceramic back / Aviation titanium-aluminum alloy frame | Dragon Crystal Glass 3.0 | IP68 / IP69 dust &amp; high-pressure water resistance"
            },
            {
                "label": "Feature",
                "value": "75-100mm mechanical continuous optical zoom (zero quality loss / no focal jump) | Leica APO optical certification | Professional camera grip expansion kit | Two-way BeiDou satellite communication"
            }
        ],
        "why": "75-100mm continuous optical zoom group paired with a 200MP large-sensor periscope, producing clean optical rendering without focal jumps across the entire range."
    },
    {
        "lot": "060",
        "name": "Huawei Pura 80 Ultra",
        "status": "wishlist",
        "category": "mobile",
        "chapter": "SMARTPHONES",
        "brand": "huawei",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/huaweipura80ultra-transparent.webp",
            "alt": "Huawei Pura 80 Ultra",
            "width": 1024,
            "height": 1024
        },
        "searchKeys": "huawei pura 80 ultra huawei · retractable mechanical pop-out lens xmage optics huawei",
        "specs": [
            {
                "label": "SoC",
                "value": "Kirin 9020 / 9100 octa-core high-efficiency architecture | Taishan cores | Maleoon 920 GPU | DaVinci NPU"
            },
            {
                "label": "Memory",
                "value": "16GB high-speed memory (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB / 1TB high-speed flash (Max spec)"
            },
            {
                "label": "Display",
                "value": "6.8\" 1.5K (2844×1260) quad-curved OLED | 1-120Hz LTPO adaptive refresh | 3000 nits peak | 1440Hz high-frequency PWM dimming | Gen-2 Basalt-Tempered Kunlun Glass"
            },
            {
                "label": "Camera System",
                "value": "[Retractable Main] 50MP 1\" mechanical pop-out lens | f/1.6-f/4.0 10-stop physical variable aperture | Sensor-shift OIS<br/>\n                        [Telephoto Macro] 200MP Ultra Lighting macro telephoto | f/2.1 large aperture | 3.5× optical zoom / 100× digital zoom | 5cm macro | Lighting OIS<br/>\n                        [Ultrawide] 40MP ultrawide (13mm, f/2.2)"
            },
            {
                "label": "Camera Sensors",
                "value": "Main: Sony/SmartSens 1.0\" RYYB Ultra Lighting mechanical pop-out (50MP, f/1.6-f/4.0 physical variable aperture, rotary stepper motor, Sensor-Shift OIS); Telephoto Macro: 200MP RYYB (f/2.1, 3.5× optical zoom, 5cm macro, OIS); Ultrawide: 40MP (13mm, f/2.2); Front: 13MP ultrawide (f/2.4, 4K video)"
            },
            {
                "label": "Focal Lengths",
                "value": "Native: 13mm (Ultrawide) / 24.5mm (Retractable Main) / 90mm (Ultra Lighting Telemacro) | In-sensor crop: 49mm (2×) / 180mm (7×) | Digital zoom up to 100×"
            },
            {
                "label": "Battery & Charging",
                "value": "5500mAh high-density silicon anode battery | 100W wired SuperCharge | 80W wireless SuperCharge | 20W reverse wireless charging"
            },
            {
                "label": "Build",
                "value": "226g | Aviation-grade titanium alloy frame / Nano-microcrystalline ceramic star-pattern back | Red ring and gold emblem watchcraft finish | IP68 dust &amp; water resistance (2m depth)"
            },
            {
                "label": "Feature",
                "value": "High-precision rotary mechanical pop-out lens (300,000 extension cycle durability) | Dual-way BeiDou satellite messaging + Tiantong satellite calling | NearLink wireless precision connectivity | HarmonyOS NEXT"
            }
        ],
        "why": "Mechanical pop-out main camera combined with a 200MP Ultra Lighting telemacro periscope. Precision micro-mechanics built directly into a thin handset."
    },
    {
        "lot": "022",
        "name": "iPad Pro 13\" (M4)",
        "status": "wishlist",
        "category": "tablet",
        "chapter": "TABLETS & SLATES",
        "brand": "apple",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/ipad-pro-13-enhanced.webp",
            "alt": "iPad Pro 13\" (M4)",
            "width": 2000,
            "height": 1500
        },
        "searchKeys": "ipad pro 13 m4 apple ㆍ tandem oled ultra thin",
        "specs": [
            {
                "label": "SoC",
                "value": "Apple M4 | 10-Core CPU (4P + 6E) | 10-Core GPU | Hardware Ray Tracing | 16-Core Neural Engine (38 TOPS)"
            },
            {
                "label": "Memory",
                "value": "16GB Unified Memory (Max spec)"
            },
            {
                "label": "Storage",
                "value": "2TB PCIe SSD with Nano-texture display glass option (Max spec)"
            },
            {
                "label": "Display",
                "value": "13\" Ultra Retina XDR | Tandem OLED (2752x2064) | 120Hz ProMotion | 1000 nits full / 1600 nits peak HDR | Nano-texture option"
            },
            {
                "label": "Camera System",
                "value": "Rear: 12MP Wide (f/1.8) + LiDAR Scanner | Front: Landscape 12MP Ultra Wide (Center Stage)"
            },
            {
                "label": "Battery",
                "value": "Built-in 38.99Wh rechargeable lithium-polymer | Up to 10 hours web/video"
            },
            {
                "label": "Connectivity",
                "value": "Thunderbolt / USB 4 (up to 40Gb/s) | Wi-Fi 6E (802.11ax) | 5G Sub-6 | Bluetooth 5.3"
            },
            {
                "label": "Build",
                "value": "100% recycled aluminum unibody | 5.1mm thickness (Thinnest Apple product) | 579g (Wi-Fi) / 582g (Cellular)"
            },
            {
                "label": "Accessories",
                "value": "Apple Pencil Pro (Squeeze, Barrel Roll, Haptic Feedback) | Magic Keyboard for iPad Pro (Aluminum palm rest)"
            }
        ],
        "why": "双层串联 OLED 顶级超精细显示屏，配合仅 5.1mm 的超薄机身与 M4 芯片，极致轻薄与工作站级性能的统一体。"
    },
    {
        "lot": "023",
        "name": "iPad mini (A17 Pro)",
        "status": "wishlist",
        "category": "tablet",
        "chapter": "TABLETS & SLATES",
        "brand": "apple",
        "isLead": false,
        "inSetup": true,
        "setupRole": "Field Tablet",
        "isDeskCore": false,
        "image": {
            "src": "assets/images/ipad-mini-enhanced.webp",
            "alt": "iPad mini (A17 Pro)",
            "width": 2250,
            "height": 1688
        },
        "searchKeys": "ipad mini (a17 pro) apple · gaming & reading apple portable apple",
        "specs": [
            {
                "label": "SoC",
                "value": "Apple A17 Pro (3nm) | 6-Core CPU (2P + 4E) | 5-Core GPU | Hardware-accelerated Ray Tracing | 16-Core Neural Engine"
            },
            {
                "label": "Memory",
                "value": "8GB Unified Memory (Max spec, Apple Intelligence support)"
            },
            {
                "label": "Storage",
                "value": "512GB PCIe SSD (Max spec)"
            },
            {
                "label": "Display",
                "value": "8.3\" Liquid Retina (2266x1488, 326 PPI) | 500 nits | P3 Wide Color | True Tone | Anti-reflective coating"
            },
            {
                "label": "Camera System",
                "value": "Rear: 12MP Wide (f/1.8, Smart HDR 4) | Front: 12MP Ultra Wide (Landscape, Center Stage)"
            },
            {
                "label": "Battery",
                "value": "Built-in 19.3Wh lithium-polymer | Up to 10 hours web/video | 20W USB-C adapter"
            },
            {
                "label": "Connectivity",
                "value": "USB-C (USB 3, up to 10Gb/s) | Wi-Fi 6E | 5G Sub-6 | Bluetooth 5.3"
            },
            {
                "label": "Build",
                "value": "100% recycled aluminum enclosure | 195.4 x 134.8 x 6.3mm | 293g (Wi-Fi) / 297g (Cellular)"
            },
            {
                "label": "Compatibility",
                "value": "Supports Apple Pencil Pro (Squeeze &amp; Barrel roll) and Apple Pencil (USB-C)"
            }
        ],
        "why": "A17 Pro in the smallest form factor. Fits in a jacket pocket and benchmarks close to a laptop."
    },
    {
        "lot": "024",
        "name": "Galaxy Tab S11 Ultra",
        "status": "wishlist",
        "category": "tablet",
        "chapter": "TABLETS & SLATES",
        "brand": "samsung",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/galaxy-tab-s11-ultra.webp",
            "alt": "Galaxy Tab S11 Ultra",
            "width": 1536,
            "height": 1024
        },
        "searchKeys": "galaxy tab s11 ultra samsung ㆍ galaxy tab galaxy ultra samsung",
        "specs": [
            {
                "label": "SoC",
                "value": "MediaTek Dimensity 9300+ (4nm) | 1x 3.4GHz Cortex-X4 + 3x 2.85GHz Cortex-X4 + 4x 2.0GHz Cortex-A720 | Immortalis-G720 GPU"
            },
            {
                "label": "Memory",
                "value": "16GB LPDDR5X RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "1TB UFS 4.0 (MicroSD expandable up to 1.5TB) (Max spec)"
            },
            {
                "label": "Display",
                "value": "14.6\" Dynamic AMOLED 2X (2960x1848, 16:10) | 120Hz | 930 nits peak | Anti-Reflection Coating"
            },
            {
                "label": "Camera System",
                "value": "Rear: 13MP Wide + 8MP Ultra-wide | Front: Dual 12MP Wide + 12MP Ultra-wide"
            },
            {
                "label": "Battery",
                "value": "11,200mAh | 45W Super Fast Charging 2.0"
            },
            {
                "label": "Build",
                "value": "Enhanced Armor Aluminum unibody | IP68 water &amp; dust resistance | 326.4 x 208.6 x 5.4mm | 718g (Wi-Fi) / 723g (5G)"
            },
            {
                "label": "Connectivity",
                "value": "Wi-Fi 7 | 5G Sub-6 | USB Type-C 3.2 Gen 1 with DisplayPort Out | Pogo Pin keyboard connection"
            },
            {
                "label": "Features",
                "value": "Galaxy AI Suite (Circle to Search, Note Assist, Sketch to Image) | Included IP68 S-Pen | Samsung DeX"
            }
        ],
        "why": "14.6\" AMOLED plus 16GB RAM, close to a desktop replacement, and the S-Pen integration is done well."
    },
    {
        "lot": "025",
        "name": "Galaxy Tab S10+",
        "status": "wishlist",
        "category": "tablet",
        "chapter": "TABLETS & SLATES",
        "brand": "samsung",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/galaxy-tab-s10-plus.webp",
            "alt": "Galaxy Tab S10+",
            "width": 1164,
            "height": 776
        },
        "searchKeys": "galaxy tab s10+ samsung · galaxy tab plus the sweet spot samsung",
        "specs": [
            {
                "label": "SoC",
                "value": "MediaTek Dimensity 9300+ (4nm) | 1x 3.4GHz Cortex-X4 + 3x 2.85GHz Cortex-X4 + 4x 2.0GHz Cortex-A720 | Immortalis-G720 GPU"
            },
            {
                "label": "Memory",
                "value": "12GB LPDDR5X RAM (Max spec)"
            },
            {
                "label": "Storage",
                "value": "512GB UFS 4.0 (MicroSD expandable up to 1.5TB) (Max spec)"
            },
            {
                "label": "Display",
                "value": "12.4\" Dynamic AMOLED 2X (2800x1752, 16:10) | 120Hz | 650 nits peak | Anti-Reflection Coating"
            },
            {
                "label": "Camera System",
                "value": "Rear: 13MP Wide + 8MP Ultra-wide | Front: 12MP Ultra-wide"
            },
            {
                "label": "Battery",
                "value": "10,090mAh | 45W Super Fast Charging 2.0"
            },
            {
                "label": "Build",
                "value": "Enhanced Armor Aluminum unibody | IP68 water &amp; dust resistance | 285.4 x 185.4 x 5.6mm | 571g (Wi-Fi) / 576g (5G)"
            },
            {
                "label": "Connectivity",
                "value": "Wi-Fi 7 | 5G Sub-6 | USB Type-C 3.2 Gen 1 with DisplayPort Out | Pogo Pin"
            },
            {
                "label": "Features",
                "value": "Galaxy AI Suite | Included low-latency S-Pen (0.7mm, 4096 pressure levels) | Samsung DeX | Quad AKG Speakers"
            }
        ],
        "why": "The balanced one. Just enough screen, just enough power. My ideal couch + coffee setup."
    },
    {
        "lot": "045",
        "name": "iPad Air 11-inch (M2)",
        "status": "wishlist",
        "category": "tablet",
        "chapter": "TABLETS & SLATES",
        "brand": "apple",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/ipad-air-11-transparent.webp",
            "alt": "iPad Air 11-inch (M2)",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "ipad air 11 m2 apple ㆍ everyday slate portable",
        "specs": [
            {
                "label": "SoC",
                "value": "Apple M2 | 8-core CPU | 9-core GPU | 16-core Neural Engine"
            },
            {
                "label": "Display",
                "value": "11\" Liquid Retina | 2360×1640 | 500 nits | P3 | True Tone"
            },
            {
                "label": "Camera System",
                "value": "Rear: 12MP Wide | Front: 12MP Ultra Wide (Center Stage)"
            },
            {
                "label": "Design",
                "value": "6.1mm aluminum body | 462g Wi-Fi model"
            },
            {
                "label": "Battery",
                "value": "Built-in 28.93Wh | Up to 10 hours"
            },
            {
                "label": "Accessories",
                "value": "Apple Pencil Pro | Apple Pencil (USB-C) | Magic Keyboard Folio"
            }
        ],
        "why": "The iPad sweet spot: enough M-series power for creative work without the weight or price of the Pro line."
    },
    {
        "lot": "052",
        "name": "Legion Y700 (Gen 3)",
        "status": "wishlist",
        "category": "tablet",
        "chapter": "TABLETS & SLATES",
        "brand": "lenovo",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/legion-y700.webp",
            "alt": "Legion Y700 (Gen 3)",
            "width": 1536,
            "height": 1024
        },
        "searchKeys": "legion y700 gen 3 lenovo ㆍ compact gaming tablet slate",
        "specs": [
            {
                "label": "SoC",
                "value": "Qualcomm Snapdragon 8 Gen 3 (4nm) | Adreno 750 | LPDDR5X (up to 16GB) + UFS 4.0 (up to 512GB)"
            },
            {
                "label": "Display",
                "value": "8.8\" IPS LCD | 2560×1600 2.5K | 165Hz | 343 PPI | 500 nits | DCI-P3 | DC Dimming | TÜV Low Blue Light"
            },
            {
                "label": "Thermal Architecture",
                "value": "QianKun Cooling Architecture | 10,004mm² Super-Large Vapor Chamber (VC)"
            },
            {
                "label": "Ports & Gaming Features",
                "value": "Dual USB Type-C Ports (side + bottom) | Bypass Charging (direct motherboard power) | DP Video Output | Dual X-axis Linear Motors"
            },
            {
                "label": "Battery & Charging",
                "value": "6550mAh high-density battery | 68W Super Flash Charge"
            },
            {
                "label": "Build & Audio",
                "value": "CNC Integrated Anodized Aluminum | 7.79mm | 340g | Dual Ultra-linear Stereo Speakers with Dolby Atmos"
            },
            {
                "label": "Camera System",
                "value": "Rear: 13MP Main + 2MP Macro with flash | Front: 8MP Centered HD Camera"
            },
            {
                "label": "Build",
                "value": "CNC Integrated Anodized Aluminum | 7.79mm | 340g"
            },
            {
                "label": "Battery",
                "value": "6550mAh high-density battery | 68W Super Flash Charge | Bypass Charging"
            },
            {
                "label": "Connectivity",
                "value": "Dual USB-C (1x USB 3.2 Gen 2 DP Out + 1x USB 2.0) | Wi-Fi 6E | Bluetooth 5.4"
            },
            {
                "label": "Memory",
                "value": "12GB / 16GB LPDDR5X | 256GB / 512GB UFS 4.0"
            }
        ],
        "why": "The undisputed king of compact Android gaming tablets. An 8.8\" 165Hz display, Snapdragon 8 Gen 3, dual USB-C ports, and bypass charging in an ultra-portable 340g CNC metal frame."
    },
    {
        "lot": "026",
        "name": "MacBook Pro 16-inch",
        "status": "wishlist",
        "category": "laptop",
        "chapter": "MOBILE WORKSTATIONS",
        "brand": "apple",
        "isLead": false,
        "inSetup": true,
        "setupRole": "Mobile Daily",
        "isDeskCore": false,
        "image": {
            "src": "assets/images/macbook-pro-16.webp",
            "alt": "MacBook Pro 16-inch",
            "width": 1436,
            "height": 1096
        },
        "searchKeys": "macbook pro 16-inch m5 pro m5 max apple · professional apple creator",
        "specs": [
            {
                "label": "Processor",
                "value": "Apple M5 Max | 18-Core CPU (12P + 6E) | 40-Core GPU | 16-Core Neural Engine"
            },
            {
                "label": "Graphics",
                "value": "Apple M5 Max 40-Core GPU | Hardware-accelerated Ray Tracing | Dynamic Caching"
            },
            {
                "label": "Memory",
                "value": "128GB Unified Memory | 800GB/s Memory Bandwidth"
            },
            {
                "label": "Storage",
                "value": "8TB PCIe NVMe SSD (up to 7.4GB/s read)"
            },
            {
                "label": "Display",
                "value": "16.2\" Liquid Retina XDR (3456x2234) | 120Hz ProMotion | 1,600 nits peak HDR | Nano-texture option"
            },
            {
                "label": "Battery",
                "value": "100Wh Lithium-Polymer | 140W USB-C GaN Power Adapter | Up to 24 hours"
            },
            {
                "label": "Camera & Audio",
                "value": "12MP Center Stage camera | Studio-quality three-mic array | Six-speaker system with Spatial Audio"
            },
            {
                "label": "I/O",
                "value": "3x Thunderbolt 5 (up to 120Gb/s) | HDMI 2.1 (8K) | MagSafe 3 | SDXC (UHS-II) | 3.5mm Headphone Jack"
            },
            {
                "label": "Form Factor",
                "value": "100% recycled aluminum unibody | 2.16kg | 16.8mm thickness"
            }
        ],
        "why": "M5 Pro or M5 Max in a 16-inch Liquid Retina XDR display, built for heavier workloads."
    },
    {
        "lot": "027",
        "name": "Legion 5 15AHP10",
        "status": "wishlist",
        "category": "laptop",
        "chapter": "MOBILE WORKSTATIONS",
        "brand": "lenovo",
        "isLead": false,
        "inSetup": true,
        "setupRole": "Gaming Rig",
        "isDeskCore": false,
        "image": {
            "src": "assets/images/legion-5-15ahp10.webp",
            "alt": "Legion 5 15AHP10",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "legion 5 15ahp10 lenovo · legion esports lenovo gaming lenovo",
        "specs": [
            {
                "label": "Processor",
                "value": "AMD Ryzen 9 9945HX | 16 Cores / 32 Threads | up to 5.4GHz | 80MB Cache"
            },
            {
                "label": "Graphics",
                "value": "NVIDIA GeForce RTX 5070 Laptop GPU | 8GB GDDR6 | 140W Max TGP"
            },
            {
                "label": "Memory",
                "value": "64GB (2x32GB) DDR5-5600 SO-DIMM"
            },
            {
                "label": "Storage",
                "value": "4TB (2x2TB) M.2 2280 PCIe Gen 4 NVMe SSD"
            },
            {
                "label": "Display",
                "value": "15.6\" WQHD (2560x1440) | 165Hz | 100% sRGB | G-Sync | 350 nits"
            },
            {
                "label": "Cooling",
                "value": "Legion Coldfront 5.0 | Liquid Metal Thermal Interface | Dual 12V Fans"
            },
            {
                "label": "Battery",
                "value": "80Wh integrated battery | 230W Slim Tip AC adapter | Rapid Charge Pro"
            },
            {
                "label": "I/O",
                "value": "1x USB-C (DP 1.4, 140W PD) | 3x USB-A 3.2 Gen 1 | 1x HDMI 2.1 | RJ-45 LAN | Wi-Fi 6E"
            },
            {
                "label": "Form Factor",
                "value": "Storm Grey aluminum top / polymer bottom | 2.3kg | 19.9-25.2mm"
            }
        ],
        "why": "Ryzen 9 and RTX 5070 in a chassis that doesn't look like a toy."
    },
    {
        "lot": "037",
        "name": "ProArt P16 (H7607)",
        "status": "wishlist",
        "category": "laptop",
        "chapter": "MOBILE WORKSTATIONS",
        "brand": "asus",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "https://dlcdnwebimgs.asus.com/gain/db815677-1e89-4035-bc04-729491f4386e/w800",
            "alt": "ProArt P16 (H7607)",
            "width": 800,
            "height": 600
        },
        "searchKeys": "proart p16 h7607 rtx spark asus · creator workstation asus creator laptop",
        "specs": [
            {
                "label": "Processor",
                "value": "AMD Ryzen AI 9 HX 370 | 12 Cores / 24 Threads | up to 5.1GHz | 50 TOPS NPU"
            },
            {
                "label": "Graphics",
                "value": "NVIDIA GeForce RTX 5070 Laptop GPU | 8GB GDDR6 | 105W Max TGP"
            },
            {
                "label": "Memory",
                "value": "64GB LPDDR5X-7500 on-board"
            },
            {
                "label": "Storage",
                "value": "4TB (2x 2TB) M.2 NVMe PCIe 4.0 SSD"
            },
            {
                "label": "Display",
                "value": "16\" 4K ASUS Lumina Pro OLED | Delta E &lt; 1 | 120Hz VRR | up to 1,600 nits | Touch &amp; Stylus"
            },
            {
                "label": "Battery",
                "value": "90Wh 4-cell Li-ion | 200W AC adapter | Fast charging"
            },
            {
                "label": "I/O",
                "value": "1x USB4 40Gbps | 1x USB 3.2 Gen 2 Type-C | 2x USB 3.2 Gen 2 Type-A | HDMI 2.1 | SD Express 7.0"
            },
            {
                "label": "Form Factor",
                "value": "Nano Black CNC aluminum unibody | 1.77kg | 12.9mm ultrathin"
            },
            {
                "label": "Operating System",
                "value": "Windows 11 Pro"
            }
        ],
        "why": "The exact RTX Spark creator laptop from ASUS: a portable workstation built for local AI, 3D, and high-resolution creative work."
    },
    {
        "lot": "038",
        "name": "MacBook Air 13-inch",
        "status": "wishlist",
        "category": "laptop",
        "chapter": "MOBILE WORKSTATIONS",
        "brand": "apple",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/macbook-air-13-clean.webp",
            "alt": "MacBook Air 13-inch",
            "width": 1448,
            "height": 1086
        },
        "searchKeys": "macbook air 13 apple · everyday laptop apple macbook",
        "specs": [
            {
                "label": "Processor",
                "value": "Apple M5 | 10-Core CPU (4P + 6E) | 10-Core GPU | 16-Core Neural Engine"
            },
            {
                "label": "Graphics",
                "value": "Apple M5 10-Core GPU | Hardware-accelerated Ray Tracing"
            },
            {
                "label": "Memory",
                "value": "32GB Unified Memory | 153GB/s Bandwidth"
            },
            {
                "label": "Storage",
                "value": "4TB PCIe NVMe SSD"
            },
            {
                "label": "Display",
                "value": "13.6\" Liquid Retina (2560x1664) | 500 nits | P3 Wide Color | True Tone"
            },
            {
                "label": "Battery",
                "value": "52.6Wh Lithium-Polymer | 35W Dual USB-C Port Adapter | Up to 18 hours"
            },
            {
                "label": "I/O",
                "value": "MagSafe 3 | 2x Thunderbolt / USB 4 (40Gb/s) | 3.5mm Headphone Jack | Wi-Fi 7"
            },
            {
                "label": "Form Factor",
                "value": "100% recycled aluminum unibody | 1.24kg | 11.3mm thickness"
            }
        ],
        "why": "The quiet, light everyday machine: enough power for creative work without the weight of a workstation."
    },
    {
        "lot": "043",
        "name": "MacBook Air 15-inch",
        "status": "wishlist",
        "category": "laptop",
        "chapter": "MOBILE WORKSTATIONS",
        "brand": "apple",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/macbook-air-15-m5.webp",
            "alt": "MacBook Air 15-inch",
            "width": 1415,
            "height": 1112
        },
        "searchKeys": "macbook air 15 apple · everyday laptop apple macbook",
        "specs": [
            {
                "label": "Processor",
                "value": "Apple M5 | 10-Core CPU (4P + 6E) | 10-Core GPU | 16-Core Neural Engine"
            },
            {
                "label": "Graphics",
                "value": "Apple M5 10-Core GPU | Hardware-accelerated Ray Tracing"
            },
            {
                "label": "Memory",
                "value": "32GB Unified Memory | 153GB/s Bandwidth"
            },
            {
                "label": "Storage",
                "value": "4TB PCIe NVMe SSD"
            },
            {
                "label": "Display",
                "value": "15.3\" Liquid Retina (2880x1864) | 500 nits | P3 Wide Color | True Tone"
            },
            {
                "label": "Battery",
                "value": "66.5Wh Lithium-Polymer | 35W Dual USB-C Port Adapter | Up to 18 hours"
            },
            {
                "label": "I/O",
                "value": "MagSafe 3 | 2x Thunderbolt / USB 4 (40Gb/s) | 3.5mm Headphone Jack | Wi-Fi 7"
            },
            {
                "label": "Form Factor",
                "value": "100% recycled aluminum unibody | 1.51kg | 11.5mm thickness"
            }
        ],
        "why": "The larger-screen Air: the same silent, fanless M5 platform with more room for multitasking."
    },
    {
        "lot": "039",
        "name": "Prestige 16 AI+ C3M",
        "status": "wishlist",
        "category": "laptop",
        "chapter": "MOBILE WORKSTATIONS",
        "brand": "msi",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/prestige-16-ai-plus-c3m.webp",
            "alt": "Prestige 16 AI+ C3M",
            "width": 1536,
            "height": 1024
        },
        "searchKeys": "prestige 16 ai c3m c3mx msi · business productivity msi laptop",
        "specs": [
            {
                "label": "Processor",
                "value": "Intel Core Ultra 9 388H | 16 Cores | up to 5.1GHz | 50+ NPU TOPS"
            },
            {
                "label": "Graphics",
                "value": "Intel Arc GPU B390 | Xe2-LPG Architecture"
            },
            {
                "label": "Memory",
                "value": "64GB LPDDR5x-8533MHz on-board"
            },
            {
                "label": "Storage",
                "value": "2TB NVMe PCIe Gen 4 SSD (M.2 2280)"
            },
            {
                "label": "Display",
                "value": "16\" 2.8K OLED (2880x1800) | 120Hz VRR | 100% DCI-P3 | DisplayHDR True Black 600"
            },
            {
                "label": "Battery",
                "value": "99.9Wh (FAA maximum limit) | 100W PD 3.0 Type-C | Up to 24 hours"
            },
            {
                "label": "I/O",
                "value": "1x Thunderbolt 4 | 1x USB 3.2 Gen 2 Type-C | 1x USB 3.2 Gen 2 Type-A | HDMI 2.1 | SD Card Reader"
            },
            {
                "label": "Form Factor",
                "value": "Magnesium-aluminum alloy chassis | 1.59kg | 11.9-13.9mm"
            }
        ],
        "why": "A 16-inch professional laptop balancing AI headroom with all-day battery life."
    },
    {
        "lot": "040",
        "name": "MacBook Neo 13-inch",
        "status": "wishlist",
        "category": "laptop",
        "chapter": "MOBILE WORKSTATIONS",
        "brand": "apple",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/macbook-neo-13-clean.webp",
            "alt": "MacBook Neo 13-inch",
            "width": 1536,
            "height": 1024
        },
        "searchKeys": "macbook neo 13 apple · entry mac apple laptop",
        "specs": [
            {
                "label": "Processor",
                "value": "Apple A18 Pro | 6-Core CPU (2P + 4E) | 5-Core GPU | 16-Core Neural Engine"
            },
            {
                "label": "Graphics",
                "value": "Apple A18 Pro 5-Core GPU | Hardware-accelerated Ray Tracing"
            },
            {
                "label": "Memory",
                "value": "16GB Unified Memory | 100GB/s Memory Bandwidth"
            },
            {
                "label": "Storage",
                "value": "1TB PCIe NVMe SSD"
            },
            {
                "label": "Display",
                "value": "13.0\" Liquid Retina (2408x1506) | 500 nits | sRGB | True Tone"
            },
            {
                "label": "Battery",
                "value": "36.5Wh Lithium-Polymer | 20W USB-C Power Adapter | Up to 16 hours"
            },
            {
                "label": "I/O",
                "value": "2x USB-C (USB 3 + USB 2) | 3.5mm Headphone Jack | Wi-Fi 6E | Bluetooth 6.0"
            },
            {
                "label": "Form Factor",
                "value": "Recycled Aluminum Unibody | 1.08kg | 10.5mm thickness"
            }
        ],
        "why": "The affordable Mac I keep wishing existed: compact, quiet, and still unmistakably Apple."
    },
    {
        "lot": "042",
        "name": "Swift Go 14 AI",
        "status": "wishlist",
        "category": "laptop",
        "chapter": "MOBILE WORKSTATIONS",
        "brand": "acer",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/swift-go-14-ai.webp",
            "alt": "Swift Go 14 AI",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "swift go 14 ai acer · swift go acer 14-inch intel core ultra ai laptop",
        "specs": [
            {
                "label": "Processor",
                "value": "Intel Core Ultra 9 388H | 16 Cores | up to 5.1GHz | 50 NPU TOPS"
            },
            {
                "label": "Graphics",
                "value": "Intel Arc B390 Graphics"
            },
            {
                "label": "Memory",
                "value": "32GB LPDDR5X-8448 dual-channel"
            },
            {
                "label": "Storage",
                "value": "2TB PCIe Gen 4 NVMe SSD"
            },
            {
                "label": "Display",
                "value": "14\" 3K OLED (2880x1800) | 120Hz | 500 nits | 100% DCI-P3 | DisplayHDR 500"
            },
            {
                "label": "Battery",
                "value": "65Wh Li-ion battery | 100W USB-C GaN adapter | Up to 14.5 hours"
            },
            {
                "label": "I/O",
                "value": "2x Thunderbolt 4 Type-C | HDMI 2.1 | 2x USB 3.2 Gen 1 Type-A | Wi-Fi 7"
            },
            {
                "label": "Form Factor",
                "value": "Laser-etched anodized aluminum | 1.12kg | 14.9mm thickness"
            },
            {
                "label": "Operating System",
                "value": "Windows 11 Pro"
            }
        ],
        "why": "The 14-inch Swift Go is the portable counterpoint to the big workstations: light enough to carry every day, smart enough to keep up."
    },
    {
        "lot": "028",
        "name": "Platform:6 Gaming Setup",
        "status": "wishlist",
        "category": "desktop",
        "chapter": "ULTIMATE RIGS",
        "brand": "buildcores",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/buildcores-platform6-setup-v2.webp",
            "alt": "Platform:6 Gaming Setup",
            "width": 1501,
            "height": 1048
        },
        "searchKeys": "buildcores platform 6 gaming setup darkflash dy470 ryzen 9 9950x3d rog astral rtx 5090 256gb ddr5",
        "specs": [
            {
                "label": "Processor",
                "value": "AMD Ryzen 9 9950X3D | 16 Cores / 32 Threads | 128MB 3D V-Cache"
            },
            {
                "label": "Graphics",
                "value": "ROG Astral GeForce RTX 5090 OC Edition | 32GB GDDR7"
            },
            {
                "label": "Case",
                "value": "darkFlash DY470 ATX Mid Tower | Black tempered glass"
            },
            {
                "label": "Motherboard",
                "value": "ASUS ROG STRIX X870E-E GAMING WIFI"
            },
            {
                "label": "Memory",
                "value": "G.Skill Trident Z5 Neo RGB | 256GB (4x64GB) DDR5-6000 CL36"
            },
            {
                "label": "Cooling",
                "value": "TRYX PANORAMA SE 360mm ARGB AIO | Lian Li Uni Fan SL-Infinity 120mm 3-pack"
            },
            {
                "label": "Storage",
                "value": "Samsung 990 Pro 4TB PCIe 4.0 NVMe + Samsung 990 EVO 4TB PCIe 5.0 NVMe (8TB total)"
            },
            {
                "label": "Power Supply",
                "value": "ASUS ROG THOR 1600T2 | 1600W | 80+ Titanium"
            },
            {
                "label": "Display",
                "value": "Corsair Xeneon 32UHD144 (32\" 4K 144Hz IPS) + Dual Elgato Flex Arm Rig"
            },
            {
                "label": "Battery",
                "value": "AC Mains Powered (Dual Dedicated 120V/15A Circuits)"
            },
            {
                "label": "Desk & Chair",
                "value": "CORSAIR Platform:6 Elevate Desk | TC500 LUXE Gaming Chair"
            },
            {
                "label": "Keyboards",
                "value": "Razer BlackWidow V3 Mini Phantom Edition | ASUS ROG Strix Scope II 96 RGB"
            },
            {
                "label": "Audio",
                "value": "Razer BlackShark V2 Pro (2023) + BlackShark V2 X | Razer Leviathan V2 + Edifier G2000"
            },
            {
                "label": "I/O",
                "value": "Dual 2.5GbE LAN | Wi-Fi 7 | 12x Rear USB-A/C | Front USB 3.2 Gen 2x2 Type-C | HDMI 2.1 | DP 2.1"
            },
            {
                "label": "Form Factor",
                "value": "Full Tower Custom Rig + Corsair Platform:6 Modular Motorized Sit-Stand Desk"
            },
            {
                "label": "Build Total",
                "value": "$16,671.47 total parts list"
            }
        ],
        "why": "A $16.7K full-room setup built around the 9950X3D, a 32GB RTX 5090, and an unapologetic 256GB of RGB memory."
    },
    {
        "lot": "030",
        "name": "Mac Studio (M4 Ultra)",
        "status": "wishlist",
        "category": "desktop",
        "chapter": "ULTIMATE RIGS",
        "brand": "apple",
        "isLead": false,
        "inSetup": true,
        "setupRole": "Primary Desktop",
        "isDeskCore": true,
        "image": {
            "src": "assets/images/macstudio-m4-ultra-transparent.webp",
            "alt": "Mac Studio (M4 Ultra)",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "mac studio (m4 ultra) apple · professional desktop apple workstation apple",
        "specs": [
            {
                "label": "Processor",
                "value": "Apple M4 Ultra | 32-Core CPU (24P + 8E) | 80-Core GPU | 64-Core Neural Engine"
            },
            {
                "label": "Graphics",
                "value": "80-Core Apple GPU | Hardware-accelerated Ray Tracing | 64-Core Neural Engine"
            },
            {
                "label": "Memory",
                "value": "256GB Unified Memory | 1.6TB/s Memory Bandwidth"
            },
            {
                "label": "Storage",
                "value": "8TB PCIe Gen 4 SSD (up to 7.4GB/s read)"
            },
            {
                "label": "Display",
                "value": "External: Up to 8x 6K displays @ 60Hz or 4x 8K displays @ 60Hz (Direct display not integrated)"
            },
            {
                "label": "Battery",
                "value": "AC Mains Powered (Desktop Workstation) | Internal 370W Power Supply"
            },
            {
                "label": "Camera & Audio",
                "value": "Built-in speaker | 3.5mm Headphone Jack with advanced high-impedance support"
            },
            {
                "label": "I/O",
                "value": "6x Thunderbolt 5 (120Gb/s) | 10Gb Ethernet | HDMI 2.1 (8K) | 2x USB-A (5Gbps) | SDXC (UHS-II)"
            },
            {
                "label": "Form Factor",
                "value": "Extruded Aluminum Unibody (19.7 x 19.7 x 9.5 cm) | 3.6kg | Dual-fan thermal system"
            }
        ],
        "why": "Fits in a lunchbox and outperforms workstations that cost several times more."
    },
    {
        "lot": "031",
        "name": "DeathAdder V2 Pro",
        "status": "owned",
        "category": "peripheral",
        "chapter": "WEAPONS & PERIPHERALS",
        "brand": "razer",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/deathadder-v2-pro-transparent.webp",
            "alt": "DeathAdder V2 Pro",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "deathadder v2 pro razer · for gamers. by gamers. esports grade razer",
        "specs": [
            {
                "label": "Sensor",
                "value": "Razer Focus+ Optical Sensor | 20,000 DPI | 650 IPS"
            },
            {
                "label": "Switches",
                "value": "Razer Optical Mouse Switches Gen-2 | 70 Million Clicks"
            },
            {
                "label": "Connectivity",
                "value": "Razer HyperSpeed Wireless (2.4GHz) | Bluetooth | Wired Speedflex Cable"
            },
            {
                "label": "Battery Life",
                "value": "Up to 120 hours (Bluetooth) | 70 hours (HyperSpeed)"
            },
            {
                "label": "Form Factor",
                "value": "Right-Handed Ergonomic | 88g Weight"
            }
        ],
        "why": "My daily driver. The ergonomics are perfect for my grip style and HyperSpeed wireless is basically wired latency."
    },
    {
        "lot": "032",
        "name": "Pro Display XDR 2",
        "status": "wishlist",
        "category": "peripheral",
        "chapter": "WEAPONS & PERIPHERALS",
        "brand": "apple",
        "isLead": false,
        "inSetup": true,
        "setupRole": "Reference Display",
        "isDeskCore": true,
        "image": {
            "src": "assets/images/pro-display-xdr-2-transparent.webp",
            "alt": "Pro Display XDR 2",
            "width": 1736,
            "height": 906
        },
        "searchKeys": "pro display xdr 2 apple · reference display reference monitor apple",
        "specs": [
            {
                "label": "Display",
                "value": "32-inch Tandem OLED | 6016 x 3384 (6K)"
            },
            {
                "label": "Refresh Rate",
                "value": "ProMotion Adaptive Sync up to 120Hz"
            },
            {
                "label": "Brightness",
                "value": "1000 nits sustained | 2000 nits peak (HDR)"
            },
            {
                "label": "Contrast Ratio",
                "value": "1,000,000:1 | True Blacks"
            },
            {
                "label": "Build",
                "value": "Nano-texture glass | Pro Stand (Sold Separately)"
            }
        ],
        "why": "6K OLED reference panel. I don't need this spec, but I still want it."
    },
    {
        "lot": "033",
        "name": "EarPods",
        "status": "owned",
        "category": "peripheral",
        "chapter": "WEAPONS & PERIPHERALS",
        "brand": "apple",
        "isLead": false,
        "inSetup": true,
        "setupRole": "Wired Audio",
        "isDeskCore": false,
        "image": {
            "src": "assets/images/earpods-transparent.webp",
            "alt": "EarPods",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "earpods apple · retro essential apple audio apple",
        "specs": [
            {
                "label": "Acoustics",
                "value": "Custom tuned drivers | Deeper, richer bass tones"
            },
            {
                "label": "Design",
                "value": "Defined by the geometry of the ear for enhanced comfort"
            },
            {
                "label": "Controls",
                "value": "Built-in remote | Adjust volume, control playback, answer calls"
            },
            {
                "label": "Reliability",
                "value": "Zero latency | Infinite battery life | Greater protection from sweat/water"
            }
        ],
        "why": "Never left. No ANC, no spatial audio, just crystal clear call quality and zero latency. Underrated forever."
    },
    {
        "lot": "034",
        "name": "Galaxy Buds 2",
        "status": "wishlist",
        "category": "peripheral",
        "chapter": "WEAPONS & PERIPHERALS",
        "brand": "samsung",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/galaxy-buds-2-transparent.webp",
            "alt": "Galaxy Buds 2",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "galaxy buds 2 samsung · tws earbuds galaxy audio samsung",
        "specs": [
            {
                "label": "Audio",
                "value": "Dynamic 2-way speakers (Woofer + Tweeter) | Sound by AKG"
            },
            {
                "label": "ANC",
                "value": "Active Noise Canceling cuts background noise by up to 98%"
            },
            {
                "label": "Microphones",
                "value": "3 mics + VPU (Voice Pickup Unit) for clear calls"
            },
            {
                "label": "Battery",
                "value": "Up to 20h total playback with ANC on (with charging case)"
            },
            {
                "label": "Connectivity",
                "value": "Bluetooth 5.2 | Auto Switch between Galaxy devices"
            },
            {
                "label": "Build",
                "value": "IPX2 water resistance | 5.0g per bud | 41.2g charging case"
            }
        ],
        "why": "Compact, clean ANC, and that galaxy ecosystem lock-in makes it seamless. Simple done right."
    },
    {
        "lot": "035",
        "name": "Galaxy Buds 3",
        "status": "wishlist",
        "category": "peripheral",
        "chapter": "WEAPONS & PERIPHERALS",
        "brand": "samsung",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/galaxy-buds-3-transparent.webp",
            "alt": "Galaxy Buds 3",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "galaxy buds 3 samsung · next-gen audio galaxy ai audio samsung",
        "specs": [
            {
                "label": "Audio Architecture",
                "value": "11mm Dynamic Driver | 24-bit / 96kHz Hi-Fi Audio (SSC Codec)"
            },
            {
                "label": "Design",
                "value": "New Blade Design | Pinch &amp; Swipe Controls | Open-type fit"
            },
            {
                "label": "Smart Features",
                "value": "Adaptive EQ | Adaptive ANC | Galaxy AI Real-time Interpreter"
            },
            {
                "label": "Durability",
                "value": "IP57 Water &amp; Dust Resistance"
            },
            {
                "label": "Connectivity",
                "value": "Bluetooth 5.4 | Auracast Support"
            },
            {
                "label": "Battery",
                "value": "Up to 5h (ANC on) / 6h (ANC off) | 24h total with case | Wireless Qi"
            },
            {
                "label": "ANC",
                "value": "Adaptive ANC | Ambient Sound Mode | Sound Optimization"
            },
            {
                "label": "Build",
                "value": "IP57 water &amp; dust resistance | 4.7g per bud | 46.5g case"
            }
        ],
        "why": "Blade stem design + Galaxy AI real-time interpreter. If I'm on calls all day, these are the move."
    },
    {
        "lot": "036",
        "name": "Nothing Ear (a)",
        "status": "wishlist",
        "category": "peripheral",
        "chapter": "WEAPONS & PERIPHERALS",
        "brand": "nothing",
        "isLead": false,
        "inSetup": false,
        "setupRole": null,
        "isDeskCore": false,
        "image": {
            "src": "assets/images/nothing-ear-a-transparent.webp",
            "alt": "Nothing Ear (a)",
            "width": 1254,
            "height": 1254
        },
        "searchKeys": "nothing ear a nothing · everyday audio wireless earbuds",
        "specs": [
            {
                "label": "Audio Architecture",
                "value": "11mm Dynamic Driver | PMI + TPU diaphragm"
            },
            {
                "label": "Noise Cancellation",
                "value": "Adaptive ANC | Up to 45dB | Transparency Mode"
            },
            {
                "label": "Battery",
                "value": "Up to 9.5h earbuds | 42.5h with case | 10 min = 10h"
            },
            {
                "label": "Connectivity",
                "value": "Bluetooth 5.3 | AAC / SBC / LDAC | Dual Connection"
            },
            {
                "label": "Protection",
                "value": "IP54 earbuds | IPX2 case | 4.8g per earbud"
            },
            {
                "label": "Build",
                "value": "IP54 earbuds | IPX2 case | 4.8g per earbud | 39.6g case"
            },
            {
                "label": "ANC",
                "value": "Smart ANC with 3 levels | Up to 45dB depth | Transparency Mode"
            }
        ],
        "why": "A playful everyday pair that brings proper ANC, good battery life, and a little visual personality to the shortlist."
    }
];
});
