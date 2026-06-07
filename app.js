// ==========================================================================
// BASE DE DATOS AMPLIADA
// ==========================================================================
const arquitecturas = {
    AMD: [
        { id: "AM4", nombre: "Socket AM4 (Ryzen 3000 / 4000 / 5000)" },
        { id: "AM5", nombre: "Socket AM5 (Ryzen 7000 / 8000 / 9000)" }
    ],
    Intel: [
        { id: "LGA1200", nombre: "LGA1200 (Intel 10ma/11va Gen)" },
        { id: "LGA1700", nombre: "LGA1700 (Intel 12va/13va/14va Gen)" }
    ]
};

const repositorio = {
    cpu: [
        // AM4
        { id: "r3_4100", nombre: "AMD Ryzen 3 4100", precio: 1200, socket: "AM4", ddr: 4 },
        { id: "r5_3600", nombre: "AMD Ryzen 5 3600", precio: 1650, socket: "AM4", ddr: 4 },
        { id: "r5_5600", nombre: "AMD Ryzen 5 5600", precio: 2300, socket: "AM4", ddr: 4 },
        { id: "r7_5700x", nombre: "AMD Ryzen 7 5700X", precio: 3500, socket: "AM4", ddr: 4 },
        { id: "r9_5900x", nombre: "AMD Ryzen 9 5900X", precio: 5200, socket: "AM4", ddr: 4 },
        // AM5
        { id: "r5_7600", nombre: "AMD Ryzen 5 7600", precio: 3800, socket: "AM5", ddr: 5 },
        { id: "r7_7700x", nombre: "AMD Ryzen 7 7700X", precio: 5500, socket: "AM5", ddr: 5 },
        { id: "r9_7900x", nombre: "AMD Ryzen 9 7900X", precio: 7200, socket: "AM5", ddr: 5 },
        { id: "r7_7800x3d", nombre: "AMD Ryzen 7 7800X3D", precio: 7800, socket: "AM5", ddr: 5 },
        // LGA1200
        { id: "i3_10100", nombre: "Intel Core i3 10100", precio: 1500, socket: "LGA1200", ddr: 4 },
        { id: "i5_10400f", nombre: "Intel Core i5 10400F", precio: 1850, socket: "LGA1200", ddr: 4 },
        { id: "i7_11700k", nombre: "Intel Core i7 11700K", precio: 3200, socket: "LGA1200", ddr: 4 },
        // LGA1700
        { id: "i3_12100f", nombre: "Intel Core i3 12100F", precio: 1700, socket: "LGA1700", ddr: 4 },
        { id: "i5_12400f", nombre: "Intel Core i5 12400F", precio: 2100, socket: "LGA1700", ddr: 4 },
        { id: "i5_13600k", nombre: "Intel Core i5 13600K", precio: 4800, socket: "LGA1700", ddr: 5 },
        { id: "i7_14700k", nombre: "Intel Core i7 14700K", precio: 7500, socket: "LGA1700", ddr: 5 },
        { id: "i9_14900k", nombre: "Intel Core i9 14900K", precio: 11500, socket: "LGA1700", ddr: 5 }
    ],
    motherboard: [
        { id: "mb_a520", nombre: "ASUS Prime A520M-K (AM4 | DDR4)", precio: 1300, socket: "AM4", ddr: 4 },
        { id: "mb_b450", nombre: "MSI B450 Tomahawk (AM4 | DDR4)", precio: 1900, socket: "AM4", ddr: 4 },
        { id: "mb_b650", nombre: "Gigabyte B650M DS3H (AM5 | DDR5)", precio: 2900, socket: "AM5", ddr: 5 },
        { id: "mb_x670", nombre: "ASUS TUF X670E-Plus (AM5 | DDR5)", precio: 5500, socket: "AM5", ddr: 5 },
        { id: "mb_h510", nombre: "Gigabyte H510M (LGA1200 | DDR4)", precio: 1400, socket: "LGA1200", ddr: 4 },
        { id: "mb_b560", nombre: "MSI B560M Pro (LGA1200 | DDR4)", precio: 2100, socket: "LGA1200", ddr: 4 },
        { id: "mb_b760", nombre: "ASUS Prime B760M-A (LGA1700 | DDR5)", precio: 3200, socket: "LGA1700", ddr: 5 },
        { id: "mb_z790", nombre: "MSI Z790 Gaming Plus (LGA1700 | DDR5)", precio: 5800, socket: "LGA1700", ddr: 5 }
    ],
    ram: [
        { id: "ram_8_d4", nombre: "8GB DDR4 3200MHz", precio: 400, ddr: 4 },
        { id: "ram_16_d4", nombre: "16GB DDR4 3200MHz", precio: 750, ddr: 4 },
        { id: "ram_16_d5", nombre: "16GB DDR5 5600MHz", precio: 1200, ddr: 5 },
        { id: "ram_32_d5", nombre: "32GB DDR5 6000MHz", precio: 2200, ddr: 5 }
    ],
    gpu: [
        { id: "rtx_3050", nombre: "NVIDIA RTX 3050 8GB", precio: 4500 },
        { id: "rtx_4060", nombre: "NVIDIA RTX 4060 8GB", precio: 6500 },
        { id: "rtx_4070", nombre: "NVIDIA RTX 4070 12GB", precio: 12000 }
    ],
    psu: [
        { id: "psu_500", nombre: "EVGA 500W Bronze", precio: 900 },
        { id: "psu_650", nombre: "Corsair 650W Gold", precio: 1800 },
        { id: "psu_850", nombre: "MSI 850W Gold Modular", precio: 2600 }
    ],
    storage: [
        { id: "ssd_500", nombre: "SSD 500GB NVMe", precio: 700 },
        { id: "ssd_1tb", nombre: "SSD 1TB NVMe", precio: 1200 }
    ]
};

// ==========================================================================
// LÓGICA (NO MODIFICAR)
// ==========================================================================
function filtrarSockets() {
    const marca = document.getElementById("cpuBrand").value;
    const socketSelect = document.getElementById("cpuSocket");
    socketSelect.innerHTML = '<option value="">-- Selecciona arquitectura --</option>';
    if (marca) {
        socketSelect.disabled = false;
        arquitecturas[marca].forEach(arq => socketSelect.innerHTML += `<option value="${arq.id}">${arq.nombre}</option>`);
    } else {
        socketSelect.disabled = true;
    }
    filtrarComponentes();
}

function filtrarComponentes() {
    const socket = document.getElementById("cpuSocket").value;
    const cpu = document.getElementById("cpu");
    const mb = document.getElementById("motherboard");
    
    cpu.innerHTML = '<option value="">-- Selecciona CPU --</option>';
    mb.innerHTML = '<option value="">-- Selecciona MB --</option>';

    if(socket) {
        cpu.disabled = false;
        mb.disabled = false;
        repositorio.cpu.forEach(c => { if(c.socket === socket) cpu.innerHTML += `<option value="${c.id}">${c.nombre}</option>`; });
        repositorio.motherboard.forEach(m => { if(m.socket === socket) mb.innerHTML += `<option value="${m.id}">${m.nombre}</option>`; });
    }
    
    // Llenar otros
    ['ram','gpu','psu','storage'].forEach(id => {
        const el = document.getElementById(id);
        el.innerHTML = '<option value="">-- Selecciona --</option>';
        repositorio[id].forEach(i => el.innerHTML += `<option value="${i.id}">${i.nombre}</option>`);
    });
    actualizarSimulacion();
}

function actualizarSimulacion() {
    let total = 0;
    ['cpu', 'motherboard', 'ram', 'gpu', 'psu', 'storage'].forEach(id => {
        const item = repositorio[id]?.find(i => i.id === document.getElementById(id).value);
        if(item) total += item.precio;
    });
    document.getElementById("totalPrice").innerText = `$${total.toLocaleString('es-MX')}.00 MXN`;

    // Compatibilidad
    const cpu = repositorio.cpu.find(c => c.id === document.getElementById("cpu").value);
    const mb = repositorio.motherboard.find(m => m.id === document.getElementById("motherboard").value);
    const ram = repositorio.ram.find(r => r.id === document.getElementById("ram").value);
    const report = document.getElementById("statusReport");

    if (cpu && mb && ram) {
        if (mb.ddr === ram.ddr) {
            report.className = "report-box status-success";
            report.innerText = "✅ ¡Configuración 100% compatible!";
        } else {
            report.className = "report-box status-danger";
            report.innerText = `❌ Error: La placa es DDR${mb.ddr} y la RAM es DDR${ram.ddr}.`;
        }
    } else {
        report.className = "report-box status-waiting";
        report.innerText = "Selecciona CPU, MB y RAM para validar.";
    }
}