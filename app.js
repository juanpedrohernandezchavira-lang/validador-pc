// ==========================================================================
// BASE DE DATOS (Mantenida intacta)
// ==========================================================================
const arquitecturas = {
    AMD: [
        { id: "AM4", nombre: "Socket AM4 (Ryzen 3000 / 4000 / 5000)" },
        { id: "AM5", nombre: "Socket AM5 (Ryzen 7000 / 8000 / 9000)" }
    ],
    Intel: [
        { id: "LGA1200", nombre: "LGA1200 (Intel Core 10ma y 11va Gen)" },
        { id: "LGA1700", nombre: "LGA1700 (Intel Core 12va, 13va y 14va Gen)" }
    ]
};

const repositorio = {
    cpu: [
        { id: "r5_3600", nombre: "AMD Ryzen 5 3600 (6C/12T | 3.6GHz | 65W)", precio: 1650, socket: "AM4", ddr: 4, watts: 65 },
        { id: "r5_5600", nombre: "AMD Ryzen 5 5600 (Gaming | 65W)", precio: 2300, socket: "AM4", ddr: 4, watts: 65 },
        { id: "r7_5800x3d", nombre: "AMD Ryzen 7 5800X3D (Gaming | 105W)", precio: 5800, socket: "AM4", ddr: 4, watts: 105 },
        { id: "r5_7600", nombre: "AMD Ryzen 5 7600 (AM5 | 65W)", precio: 3800, socket: "AM5", ddr: 5, watts: 65 },
        { id: "r7_7800x3d", nombre: "AMD Ryzen 7 7800X3D (Gaming | 120W)", precio: 7800, socket: "AM5", ddr: 5, watts: 120 },
        { id: "i5_10400f", nombre: "Intel Core i5 10400F (LGA1200 | 65W)", precio: 1850, socket: "LGA1200", ddr: 4, watts: 65 },
        { id: "i5_12400f", nombre: "Intel Core i5 12400F (LGA1700 | 65W)", precio: 2100, socket: "LGA1700", ddr: 4, watts: 65 },
        { id: "i7_13700k", nombre: "Intel Core i7 13700K (LGA1700 | 125W)", precio: 6900, socket: "LGA1700", ddr: 5, watts: 125 }
    ],
    motherboard: [
        { id: "b450m", nombre: "MSI B450M Mortar Max (AM4 | DDR4)", precio: 1600, socket: "AM4", ddr: 4 },
        { id: "b650m_ds3h", nombre: "GIGABYTE B650M DS3H (AM5 | DDR5)", precio: 2900, socket: "AM5", ddr: 5 },
        { id: "b560m", nombre: "GIGABYTE B560M DS3H (LGA1200 | DDR4)", precio: 1980, socket: "LGA1200", ddr: 4 },
        { id: "b760_d5", nombre: "ASUS TUF Gaming B760-Plus WiFi (LGA1700 | DDR5)", precio: 3600, socket: "LGA1700", ddr: 5 }
    ],
    ram: [
        { id: "kingston_d4_8", nombre: "Kingston 8GB 3200MHz DDR4", precio: 450, ddr: 4 },
        { id: "corsair_d5_32", nombre: "Corsair 32GB 6000MHz DDR5", precio: 2450, ddr: 5 }
    ],
    gpu: [
        { id: "rtx_4060", nombre: "NVIDIA RTX 4060 8GB", precio: 6200, watts: 115 },
        { id: "rtx_4070_super", nombre: "NVIDIA RTX 4070 Super 12GB", precio: 13500, watts: 220 }
    ],
    psu: [
        { id: "evga_500w", nombre: "EVGA 500W 80+", precio: 900, watts: 500 },
        { id: "corsair_750w", nombre: "Corsair 750W 80+ Gold", precio: 1950, watts: 750 }
    ],
    storage: [
        { id: "kingston_1tb", nombre: "Kingston 1TB NVMe", precio: 1150 }
    ]
};

// ==========================================================================
// LÓGICA DEL SIMULADOR
// ==========================================================================

function filtrarSockets() {
    const marca = document.getElementById("cpuBrand").value;
    const socketSelect = document.getElementById("cpuSocket");
    socketSelect.innerHTML = '<option value="">-- Selecciona arquitectura --</option>';
    
    if (marca && arquitecturas[marca]) {
        socketSelect.disabled = false;
        arquitecturas[marca].forEach(arq => {
            socketSelect.innerHTML += `<option value="${arq.id}">${arq.nombre}</option>`;
        });
    } else {
        socketSelect.disabled = true;
    }
    actualizarSimulacion();
}

function filtrarComponentes() {
    const socket = document.getElementById("cpuSocket").value;
    const cpuSelect = document.getElementById("cpu");
    const mbSelect = document.getElementById("motherboard");

    cpuSelect.innerHTML = '<option value="">-- Selecciona CPU --</option>';
    mbSelect.innerHTML = '<option value="">-- Selecciona Motherboard --</option>';

    if (socket) {
        cpuSelect.disabled = false;
        mbSelect.disabled = false;
        repositorio.cpu.forEach(c => { if(c.socket === socket) cpuSelect.innerHTML += `<option value="${c.id}">${c.nombre}</option>`; });
        repositorio.motherboard.forEach(m => { if(m.socket === socket) mbSelect.innerHTML += `<option value="${m.id}">${m.nombre}</option>`; });
    }

    llenarSelect("ram", repositorio.ram);
    llenarSelect("gpu", repositorio.gpu);
    llenarSelect("psu", repositorio.psu);
    llenarSelect("storage", repositorio.storage);
    
    actualizarSimulacion();
}

function llenarSelect(id, lista) {
    const el = document.getElementById(id);
    el.innerHTML = '<option value="">-- Selecciona opción --</option>';
    lista.forEach(i => el.innerHTML += `<option value="${i.id}">${i.nombre}</option>`);
}

function actualizarSimulacion() {
    let total = 0;
    const ids = ['cpu', 'motherboard', 'ram', 'gpu', 'psu', 'storage'];
    
    ids.forEach(id => {
        const val = document.getElementById(id).value;
        const item = repositorio[id]?.find(i => i.id === val);
        if(item) total += item.precio;
    });

    document.getElementById("totalPrice").innerText = `$${total.toLocaleString('es-MX')}.00 MXN`;
    
    // Validación básica
    const cpu = repositorio.cpu.find(c => c.id === document.getElementById("cpu").value);
    const mb = repositorio.motherboard.find(m => m.id === document.getElementById("motherboard").value);
    const ram = repositorio.ram.find(r => r.id === document.getElementById("ram").value);
    const report = document.getElementById("statusReport");

    if (cpu && mb && ram) {
        if (mb.ddr === ram.ddr) {
            report.className = "report-box status-success";
            report.innerText = "✅ ¡Configuración compatible!";
        } else {
            report.className = "report-box status-danger";
            report.innerText = "❌ Error: La placa usa DDR" + mb.ddr + " y seleccionaste DDR" + ram.ddr;
        }
    }
}