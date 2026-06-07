const arquitecturas = {
    AMD: [{ id: "AM4", nombre: "Socket AM4" }, { id: "AM5", nombre: "Socket AM5" }],
    Intel: [{ id: "LGA1200", nombre: "LGA1200" }, { id: "LGA1700", nombre: "LGA1700" }]
};

const repositorio = {
    cpu: [
        // AM4 (Series 3000, 4000, 5000)
        { id: "r3_3100", nombre: "Ryzen 3 3100", precio: 1200, socket: "AM4", categoria: "desktop" },
        { id: "r5_3600", nombre: "Ryzen 5 3600", precio: 1650, socket: "AM4", categoria: "desktop" },
        { id: "r7_3700x", nombre: "Ryzen 7 3700X", precio: 2800, socket: "AM4", categoria: "desktop" },
        { id: "r5_4500", nombre: "Ryzen 5 4500", precio: 1500, socket: "AM4", categoria: "desktop" },
        { id: "r7_4700g", nombre: "Ryzen 7 4700G", precio: 2200, socket: "AM4", categoria: "desktop" },
        { id: "r5_5500", nombre: "Ryzen 5 5500", precio: 1800, socket: "AM4", categoria: "desktop" },
        { id: "r5_5600", nombre: "Ryzen 5 5600", precio: 2300, socket: "AM4", categoria: "desktop" },
        { id: "r7_5700x", nombre: "Ryzen 7 5700X", precio: 3200, socket: "AM4", categoria: "desktop" },
        { id: "r9_5900x", nombre: "Ryzen 9 5900X", precio: 5500, socket: "AM4", categoria: "desktop" },
        // AM5 (Series 7000, 9000)
        { id: "r5_7600", nombre: "Ryzen 5 7600", precio: 3800, socket: "AM5", categoria: "desktop" },
        { id: "r7_7700x", nombre: "Ryzen 7 7700X", precio: 5500, socket: "AM5", categoria: "desktop" },
        { id: "r7_7800x3d", nombre: "Ryzen 7 7800X3D", precio: 7800, socket: "AM5", categoria: "desktop" },
        { id: "r9_7950x", nombre: "Ryzen 9 7950X", precio: 9500, socket: "AM5", categoria: "desktop" },
        { id: "r7_9700x", nombre: "Ryzen 7 9700X", precio: 8200, socket: "AM5", categoria: "desktop" },
        // Intel
        { id: "i3_12100", nombre: "Intel i3-12100", precio: 1700, socket: "LGA1700", categoria: "desktop" },
        { id: "i5_12400f", nombre: "Intel i5-12400F", precio: 2100, socket: "LGA1700", categoria: "desktop" },
        { id: "i5_13400", nombre: "Intel i5-13400", precio: 3500, socket: "LGA1700", categoria: "desktop" },
        { id: "i7_14700k", nombre: "Intel i7-14700K", precio: 7500, socket: "LGA1700", categoria: "desktop" },
        { id: "i9_14900k", nombre: "Intel i9-14900K", precio: 11500, socket: "LGA1700", categoria: "desktop" },
        // Laptops
        { id: "i7_13700h", nombre: "i7-13700H (Laptop)", precio: 14000, socket: "none", categoria: "laptop" },
        { id: "r9_7940hs", nombre: "Ryzen 9 7940HS (Laptop)", precio: 15500, socket: "none", categoria: "laptop" }
    ],
    motherboard: [
        { id: "mb_a520", nombre: "A520M (AM4)", precio: 1300, socket: "AM4", categoria: "desktop" },
        { id: "mb_b450", nombre: "B450M (AM4)", precio: 1600, socket: "AM4", categoria: "desktop" },
        { id: "mb_b650", nombre: "B650M (AM5)", precio: 2900, socket: "AM5", categoria: "desktop" },
        { id: "mb_z790", nombre: "Z790 (LGA1700)", precio: 5800, socket: "LGA1700", categoria: "desktop" },
        { id: "mb_laptop", nombre: "Placa Base Integrada (Laptop)", precio: 0, socket: "none", categoria: "laptop" }
    ],
    ram: [
        { id: "d4_8", nombre: "8GB DDR4", precio: 400, categoria: "desktop" },
        { id: "d4_16", nombre: "16GB DDR4", precio: 750, categoria: "desktop" },
        { id: "d5_16", nombre: "16GB DDR5", precio: 1200, categoria: "desktop" },
        { id: "so_16", nombre: "16GB SO-DIMM (Laptop)", precio: 1500, categoria: "laptop" }
    ],
    gpu: [
        { id: "nv_1050", nombre: "GTX 1050 (NVIDIA)", precio: 2000, categoria: "desktop" },
        { id: "nv_1660", nombre: "GTX 1660 Super", precio: 3500, categoria: "desktop" },
        { id: "nv_3060", nombre: "RTX 3060", precio: 6000, categoria: "desktop" },
        { id: "nv_4070", nombre: "RTX 4070", precio: 12000, categoria: "desktop" },
        { id: "amd_560", nombre: "RX 560 (AMD)", precio: 1800, categoria: "desktop" },
        { id: "amd_6600", nombre: "RX 6600", precio: 4200, categoria: "desktop" },
        { id: "amd_7700xt", nombre: "RX 7700 XT", precio: 9500, categoria: "desktop" }
    ],
    psu: [
        { id: "psu_400", nombre: "400W Básica", precio: 600, categoria: "desktop" },
        { id: "psu_650", nombre: "650W Gold", precio: 1800, categoria: "desktop" },
        { id: "psu_850", nombre: "850W Modular", precio: 2800, categoria: "desktop" }
    ],
    storage: [
        { id: "ssd_500", nombre: "SSD 500GB NVMe", precio: 700, categoria: "desktop" },
        { id: "ssd_1tb", nombre: "SSD 1TB NVMe", precio: 1200, categoria: "desktop" }
    ]
};

// --- LÓGICA DE FILTRADO MAESTRA ---
function filtrarComponentes() {
    const socket = document.getElementById("cpuSocket").value;
    const tipo = document.getElementById("deviceType").value;
    const keys = ["cpu", "motherboard", "ram", "gpu", "psu", "storage"];
    
    keys.forEach(key => {
        const select = document.getElementById(key);
        const valorPrevio = select.value;
        select.innerHTML = '<option value="">-- Selecciona --</option>';
        
        repositorio[key].forEach(item => {
            const matchCat = (item.categoria === tipo);
            const matchSocket = (tipo === "laptop" || !item.socket || item.socket === socket);
            
            if (matchCat && matchSocket) {
                select.innerHTML += `<option value="${item.id}">${item.nombre}</option>`;
            }
        });
        select.value = valorPrevio;
    });
    actualizarSimulacion();
}

function filtrarSockets() {
    const marca = document.getElementById("cpuBrand").value;
    const socketSelect = document.getElementById("cpuSocket");
    socketSelect.innerHTML = '<option value="">-- Selecciona arquitectura --</option>';
    if (marca && arquitecturas[marca]) {
        arquitecturas[marca].forEach(arq => socketSelect.innerHTML += `<option value="${arq.id}">${arq.nombre}</option>`);
    }
    filtrarComponentes();
}

function limpiarYFiltrar() {
    const tipo = document.getElementById("deviceType").value;
    document.getElementById("cpuSocket").parentElement.style.display = (tipo === "laptop") ? "none" : "block";
    filtrarComponentes();
}

function actualizarSimulacion() {
    let total = 0;
    ['cpu', 'motherboard', 'ram', 'gpu', 'psu', 'storage'].forEach(id => {
        const item = repositorio[id]?.find(i => i.id === document.getElementById(id).value);
        if(item) total += item.precio;
    });
    document.getElementById("totalPrice").innerText = `$${total.toLocaleString('es-MX')}.00 MXN`;
    document.getElementById("statusReport").innerText = "Configuración activa...";
}