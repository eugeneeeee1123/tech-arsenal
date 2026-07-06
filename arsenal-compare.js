const compareDevices = {
    fold7: {
        name: "Galaxy Z Fold 7",
        role: "Best when the form factor itself is the reason to buy.",
        display: '7.6 inch inner AMOLED with a 6.3 inch cover screen.',
        camera: "50MP main system with a productivity first compromise profile.",
        chip: "Snapdragon 8 Gen 4 for Galaxy with multitasking as the main story.",
        note: "It pulls hardest when a normal slab phone already feels solved."
    },
    s25u: {
        name: "Galaxy S25 Ultra",
        role: "The no weak category option in the whole shortlist.",
        display: '6.8 inch flat LTPO AMOLED with an anti reflective top layer.',
        camera: "200MP main and stronger zoom stack across more situations.",
        chip: "Snapdragon 8 Gen 4 for Galaxy plus the most complete Android utility set.",
        note: "This is the safe apex pick when you want one device to do everything."
    },
    iphone17: {
        name: "iPhone 17",
        role: "The ecosystem anchor if the base line really grows up this cycle.",
        display: '6.3 inch class panel with expected ProMotion and cleaner balance.',
        camera: "Less wild than the Ultras, but tighter and more cohesive in daily use.",
        chip: "A19 positioning with Apple Intelligence as the baseline story.",
        note: "It matters if the regular iPhone finally stops feeling intentionally held back."
    },
    pixel9: {
        name: "Pixel 9 Pro XL",
        role: "The software flavored flagship in this group.",
        display: '6.8 inch LTPO OLED with strong brightness and clean Android feel.',
        camera: "Signature Pixel tuning with a more obvious computational identity.",
        chip: "Tensor G4 with Gemini leaning features and Google first behavior.",
        note: "Choose it when camera taste and software personality matter more than prestige."
    }
};

const compareConfig = window.compareLabConfig || { slots: ["fold7", "s25u", "iphone17"] };
const compareSlots = [...compareConfig.slots];

function renderCompareTable() {
    compareSlots.forEach((deviceKey, index) => {
        const device = compareDevices[deviceKey];
        if (!device) return;

        document.getElementById(`head-${index}`).textContent = device.name;
        document.getElementById(`role-${index}`).textContent = device.role;
        document.getElementById(`display-${index}`).textContent = device.display;
        document.getElementById(`camera-${index}`).textContent = device.camera;
        document.getElementById(`chip-${index}`).textContent = device.chip;
        document.getElementById(`note-${index}`).textContent = device.note;
    });

    document.querySelectorAll(".choice-btn").forEach((button) => {
        const slotIndex = Number(button.dataset.slot);
        const key = button.dataset.device;
        button.classList.toggle("active", compareSlots[slotIndex] === key);
    });
}

document.querySelectorAll(".choice-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const slotIndex = Number(button.dataset.slot);
        const key = button.dataset.device;
        compareSlots[slotIndex] = key;
        renderCompareTable();
    });
});

renderCompareTable();
