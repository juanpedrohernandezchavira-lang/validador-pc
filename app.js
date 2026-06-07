// Base de datos de Sockets/Generaciones disponibles
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

// Catálogo MASIVO de componentes (Extendida)
const repositorio = {
    cpu: [
        // ==================== AMD RYZEN AM4 ====================
        { id: "r5_3600", nombre: "AMD Ryzen 5 3600 (6C/12T | 3.6GHz | 65W)", precio: 1650, socket: "AM4", ddr: 4, watts: 65 },
        { id: "r7_3700x", nombre: "AMD Ryzen 7 3700X (8C/16T | 3.6GHz | 65W)", precio: 2400, socket: "AM4", ddr: 4, watts: 65 },
        { id: "r9_3900x", nombre: "AMD Ryzen 9 3900X (12C/24T | 3.8GHz | 105W)", precio: 4200, socket: "AM4", ddr: 4, watts: 105 },
        { id: "r5_4500", nombre: "AMD Ryzen 5 4500 (Económico | 6C/12T | 65W)", precio: 1350, socket: "AM4", ddr: 4, watts: 65 },
        { id: "r5_5500", nombre: "AMD Ryzen 5 5500 (Calidad/Precio | 6C/12T | 65W)", precio: 1700, socket: "AM4", ddr: 4, watts: 65 },
        { id: "r5_5600", nombre: "AMD Ryzen 5 5600 (Excelente para Gaming | 65W)", precio: 2300, socket: "AM4", ddr: 4, watts: 65 },
        { id: "r5_5600x", nombre: "AMD Ryzen 5 5600X (6C/12T | 3.7GHz | 65W)", precio: 2600, socket: "AM4", ddr: 4, watts: 65 },
        { id: "r7_5700x", nombre: "AMD Ryzen 7 5700X (8C/16T | 3.4GHz | 65W)", precio: 3400, socket: "AM4", ddr: 4, watts: 65 },
        { id: "r7_5700x3d", nombre: "AMD Ryzen 7 5700X3D (3D V-Cache costo/beneficio | 105W)", precio: 4100, socket: "AM4", ddr: 4, watts: 105 },
        { id: "r7_5800x", nombre: "AMD Ryzen 7 5800X (8C/16T | 3.8GHz | 105W)", precio: 4300, socket: "AM4", ddr: 4, watts: 105 },
        { id: "r7_5800x3d", nombre: "AMD Ryzen 7 5800X3D (El Rey de AM4 Gaming | 105W)", precio: 5800, socket: "AM4", ddr: 4, watts: 105 },
        { id: "r9_5900x", nombre: "AMD Ryzen 9 5900X (12C/24T | 3.7GHz | 105W)", precio: 6200, socket: "AM4", ddr: 4, watts: 105 },
        { id: "r9_5950x", nombre: "AMD Ryzen 9 5950X (16C/32T | Productividad pesada | 105W)", precio: 7900, socket: "AM4", ddr: 4, watts: 105 },
        
        // ==================== AMD RYZEN AM5 ====================
        { id: "r5_7500f", nombre: "AMD Ryzen 5 7500F (Entrada AM5 sin iGPU | 65W)", precio: 3100, socket: "AM5", ddr: 5, watts: 65 },
        { id: "r5_7600", nombre: "AMD Ryzen 5 7600 (6C/12T | Incluye disipador | 65W)", precio: 3800, socket: "AM5", ddr: 5, watts: 65 },
        { id: "r5_7600x", nombre: "AMD Ryzen 5 7600X (6C/12T | 4.7GHz | 105W)", precio: 4100, socket: "AM5", ddr: 5, watts: 105 },
        { id: "r7_7700x", nombre: "AMD Ryzen 7 7700X (8C/16T | 4.5GHz | 105W)", precio: 5300, socket: "AM5", ddr: 5, watts: 105 },
        { id: "r7_7800x3d", nombre: "AMD Ryzen 7 7800X3D (El mejor CPU Gaming actual | 120W)", precio: 7800, socket: "AM5", ddr: 5, watts: 120 },
        { id: "r5_8600g", nombre: "AMD Ryzen 5 8600G (Gráficos Radeon 760M | 65W)", precio: 4200, socket: "AM5", ddr: 5, watts: 65 },
        { id: "r7_8700g", nombre: "AMD Ryzen 7 8700G (Gráficos Radeon 780M Ultra | 65W)", precio: 6100, socket: "AM5", ddr: 5, watts: 65 },
        { id: "r9_7900x", nombre: "AMD Ryzen 9 7900X (12C/24T | 4.7GHz | 170W)", precio: 7400, socket: "AM5", ddr: 5, watts: 170 },
        { id: "r9_7950x", nombre: "AMD Ryzen 9 7950X (16C/32T | 4.5GHz | 170W)", precio: 9800, socket: "AM5", ddr: 5, watts: 170 },
        { id: "r9_7950x3d", nombre: "AMD Ryzen 9 7950X3D (16C/32T | Mix Gaming/Trabajo | 120W)", precio: 11200, socket: "AM5", ddr: 5, watts: 120 },

        // ==================== INTEL LGA1200 ====================
        { id: "i3_10100f", nombre: "Intel Core i3 10100F (4C/8T | 3.6GHz | 65W)", precio: 1200, socket: "LGA1200", ddr: 4, watts: 65 },
        { id: "i5_10400f", nombre: "Intel Core i5 10400F (6C/12T | 2.9GHz | 65W)", precio: 1850, socket: "LGA1200", ddr: 4, watts: 65 },
        { id: "i7_10700f", nombre: "Intel Core i7 10700F (8C/16T | 2.9GHz | 65W)", precio: 3200, socket: "LGA1200", ddr: 4, watts: 65 },
        { id: "i7_10700k", nombre: "Intel Core i7 10700K (8C/16T | Desbloqueado | 125W)", precio: 3900, socket: "LGA1200", ddr: 4, watts: 125 },
        { id: "i9_10900k", nombre: "Intel Core i9 10900K (10C/20T | Clásico | 125W)", precio: 5100, socket: "LGA1200", ddr: 4, watts: 125 },
        { id: "i3_11100b", nombre: "Intel Core i3 11100F (4C/8T | 65W)", precio: 1400, socket: "LGA1200", ddr: 4, watts: 65 },
        { id: "i5_11400f", nombre: "Intel Core i5 11400F (Soporta PCIe 4.0 | 65W)", precio: 2100, socket: "LGA1200", ddr: 4, watts: 65 },
        { id: "i5_11600k", font: "Intel Core i5 11600K (6C/12T | 3.9GHz | 125W)", precio: 2950, socket: "LGA1200", ddr: 4, watts: 125 },
        { id: "i7_11700k", nombre: "Intel Core i7 11700K (8C/16T | 3.6GHz | 125W)", precio: 4600, socket: "LGA1200", ddr: 4, watts: 125 },
        { id: "i9_11900k", nombre: "Intel Core i9 11900K (8C/16T | Flagship 11va | 125W)", precio: 5900, socket: "LGA1200", ddr: 4, watts: 125 },

        // ==================== INTEL LGA1700 ====================
        { id: "i3_12100f", nombre: "Intel Core i3 12100F (4C/8T | Rendimiento Entrada | 58W)", precio: 1400, socket: "LGA1700", ddr: 4, watts: 58 },
        { id: "i5_12400f", nombre: "Intel Core i5 12400F (6C/12T | El consentido | 65W)", precio: 2100, socket: "LGA1700", ddr: 4, watts: 65 },
        { id: "i5_12600kf", nombre: "Intel Core i5 12600KF (10C/16T | Híbrido OC | 125W)", precio: 3300, socket: "LGA1700", ddr: 4, watts: 125 },
        { id: "i7_12700k", nombre: "Intel Core i7 12700K (12C/20T | Multi-núcleo | 125W)", precio: 4950, socket: "LGA1700", ddr: 4, watts: 125 },
        { id: "i9_12900k", nombre: "Intel Core i9 12900K (16C/24T | Alta Potencia | 150W)", precio: 6800, socket: "LGA1700", ddr: 5, watts: 150 },
        { id: "i5_13400f", nombre: "Intel Core i5 13400F (10 Cores | Eficiente | 65W)", precio: 3500, socket: "LGA1700", ddr: 4, watts: 65 },
        { id: "i5_13600kf", nombre: "Intel Core i5 13600KF (14 Cores | Excelente Balance | 125W)", precio: 4900, socket: "LGA1700", ddr: 5, watts: 125 },
        { id: "i7_13700k", nombre: "Intel Core i7 13700K (16 Cores | Gamer/Creator | 125W)", precio: 6900, socket: "LGA1700", ddr: 5, watts: 125 },
        { id: "i9_13900k", nombre: "Intel Core i9 13900K (24 Cores | Rendimiento Brutal | 150W)", precio: 9400, socket: "LGA1700", ddr: 5, watts: 150 },
        { id: "i5_14400f", nombre: "Intel Core i5 14400F (10 Cores | Refresh 14va | 65W)", precio: 3800, socket: "LGA1700", ddr: 4, watts: 65 },
        { id: "i5_14600k", nombre: "Intel Core i5 14600K (14 Cores | 5.3GHz | 125W)", precio: 5400, socket: "LGA1700", ddr: 5, watts: 125 },
        { id: "i7_14700k", nombre: "Intel Core i7 14700K (20 Cores | +E-Cores añadidos | 125W)", precio: 7600, socket: "LGA1700", ddr: 5, watts: 125 },
        { id: "i9_14900k", nombre: "Intel Core i9 14900K (24 Cores | Frecuencia Extrema | 150W)", precio: 11500, socket: "LGA1700", ddr: 5, watts: 150 }
    ],
    motherboard: [
        // --- TARJETAS MADRE AM4 ---
        { id: "a320m", nombre: "ASUS Prime A320M-K (AM4 | Ultra Económica DDR4)", precio: 1100, socket: "AM4", ddr: 4 },
        { id: "a520m", nombre: "GIGABYTE A520M K V2 (AM4 | Básica Estable DDR4)", precio: 1300, socket: "AM4", ddr: 4 },
        { id: "b450m", nombre: "MSI B450M Mortar Max (AM4 | Calidad/Precio Clásico)", precio: 1600, socket: "AM4", ddr: 4 },
        { id: "b550m", nombre: "ASUS Prime B550M-A AC (AM4 | Con WiFi PCIe 4.0)", precio: 1950, socket: "AM4", ddr: 4 },
        { id: "b550_tuf", nombre: "ASUS TUF Gaming B550-Plus (AM4 | Robustez Militar)", precio: 2900, socket: "AM4", ddr: 4 },
        { id: "x570", nombre: "MSI MAG X570S Tomahawk Max WiFi (AM4 | Gama Entusiasta)", precio: 4100, socket: "AM4", ddr: 4 },
        
        // --- TARJETAS MADRE AM5 ---
        { id: "a620m", nombre: "ASUS TUF Gaming A620M-Plus (AM5 | Entrada DDR5)", precio: 2300, socket: "AM5", ddr: 5 },
        { id: "b650m_ds3h", nombre: "GIGABYTE B650M DS3H (AM5 | Confiable e Ideal)", precio: 2900, socket: "AM5", ddr: 5 },
        { id: "b650m_mortar", nombre: "MSI MAG B650M Mortar WiFi (AM5 | Gran Disipación)", precio: 3400, socket: "AM5", ddr: 5 },
        { id: "b650_tuf", nombre: "ASUS TUF Gaming B650-Plus WiFi (AM5 | Recomendada Pro)", precio: 4300, socket: "AM5", ddr: 5 },
        { id: "x670e", nombre: "ASUS ROG Strix X670E-F Gaming (AM5 | Puertos PCIe 5.0)", precio: 7600, socket: "AM5", ddr: 5 },
        
        // --- TARJETAS MADRE LGA1200 ---
        { id: "h410m", nombre: "MSI H410M-A Pro (LGA1200 | Básica de Oficina)", precio: 1450, socket: "LGA1200", ddr: 4 },
        { id: "h510m", nombre: "ASUS Prime H510M-E (LGA1200 | Económica DDR4)", precio: 1650, socket: "LGA1200", ddr: 4 },
        { id: "b560m", nombre: "GIGABYTE B560M DS3H (LGA1200 | Soporta perfil XMP)", precio: 1980, socket: "LGA1200", ddr: 4 },
        { id: "z590", nombre: "ASUS TUF Gaming Z590-Plus (LGA1200 | Permite OC de CPU)", precio: 3400, socket: "LGA1200", ddr: 4 },

        // --- TARJETAS MADRE LGA1700 ---
        { id: "h610m", nombre: "MSI H610M-G DDR4 (LGA1700 | Costo Mínimo DDR4)", precio: 1500, socket: "LGA1700", ddr: 4 },
        { id: "b660m_d4", nombre: "ASUS Prime B660M-A DDR4 (LGA1700 | Equilibrada)", precio: 1990, socket: "LGA1700", ddr: 4 },
        { id: "b760m_d4", nombre: "GIGABYTE B760M DS3H DDR4 (LGA1700 | Para 13va/14va Gen)", precio: 2200, socket: "LGA1700", ddr: 4 },
        { id: "b760_d5", nombre: "ASUS TUF Gaming B760-Plus WiFi (LGA1700 | Moderna DDR5)", precio: 3600, socket: "LGA1700", ddr: 5 },
        { id: "z690_d4", nombre: "MSI PRO Z690-A DDR4 (LGA1700 | Fases potentes OC)", precio: 3800, socket: "LGA1700", ddr: 4 },
        { id: "z790", nombre: "ASUS ROG Strix Z790-F Gaming WiFi (LGA1700 | El tope de Intel)", precio: 6900, socket: "LGA1700", ddr: 5 }
    ],
    ram: [
        { id: "kingston_d4_8", nombre: "Kingston Fury Beast 8GB (1x8GB) 3200MHz DDR4", precio: 450, ddr: 4 },
        { id: "corsair_d4_16", nombre: "Corsair Vengeance LPX 16GB (2x8GB) 3200MHz DDR4", precio: 850, ddr: 4 },
        { id: "gskill_d4_32", nombre: "G.Skill Ripjaws V 32GB (2x16GB) 3600MHz DDR4", precio: 1600, ddr: 4 },
        { id: "kingston_d5_16", nombre: "Kingston Fury Beast 16GB (1x16GB) 5200MHz DDR5", precio: 1100, ddr: 5 },
        { id: "corsair_d5_32", nombre: "Corsair Vengeance RGB 32GB (2x16GB) 6000MHz DDR5", precio: 2450, ddr: 5 },
        { id: "gskill_d5_64", nombre: "G.Skill Trident Z5 64GB (2x32GB) 6400MHz DDR5", precio: 4800, ddr: 5 }
    ],
    gpu: [
        { id: "rx_6600", nombre: "AMD Radeon RX 6600 8GB (GIGABYTE Eagle | 132W)", precio: 3900, watts: 132 },
        { id: "rtx_3050", nombre: "NVIDIA RTX 3050 8GB (MSI Ventus | 130W)", precio: 4100, watts: 130 },
        { id: "rtx_4060", nombre: "NVIDIA RTX 4060 8GB (ZOTAC Twin | 115W)", precio: 6200, watts: 115 },
        { id: "rtx_4060ti", nombre: "NVIDIA RTX 4060 Ti 16GB (ASUS Dual | 165W)", precio: 8600, watts: 165 },
        { id: "rx_7700xt", nombre: "AMD Radeon RX 7700 XT 12GB (XFX | 245W)", precio: 8900, watts: 245 },
        { id: "rtx_4070_super", nombre: "NVIDIA RTX 4070 Super 12GB (ASUS TUF | 220W)", precio: 13500, watts: 220 },
        { id: "rx_7800xt", nombre: "AMD Radeon RX 7800 XT 16GB (PowerColor | 263W)", precio: 10800, watts: 263 },
        { id: "rtx_4080_super", nombre: "NVIDIA RTX 4080 Super 16GB (MSI Trio | 320W)", precio: 22500, watts: 320 },
        { id: "rtx_4090", nombre: "NVIDIA RTX 4090 24GB (ASUS ROG Strix | 450W)", precio: 39500, watts: 450 }
    ],
    psu: [
        { id: "evga_500w", nombre: "EVGA 500W 80+ White (Básico)", precio: 900, watts: 500 },
        { id: "corsair_650w", nombre: "Corsair CX650 650W 80+ Bronze (Estándar)", precio: 1350, watts: 650 },
        { id: "corsair_750w", nombre: "Corsair RM750e 750W 80+ Gold (Modular)", precio: 1950, watts: 750 },
        { id: "nzxt_850w", nombre: "NZXT C850 850W 80+ Gold (Gama Alta)", precio: 2400, watts: 850 },
        { id: "msi_1000w", nombre: "MSI MAG A1000G 1000W 80+ Gold (ATX 3.0 / PCIe 5.0)", precio: 3400, watts: 1000 }
    ],
    storage: [
        { id: "kingston_500gb", nombre: "Kingston NV2 500GB NVMe M.2 SSD", precio: 680 },
        { id: "kingston_1tb", nombre: "Kingston NV2 1TB NVMe M.2 SSD", precio: 1150 },
        { id: "wd_black_1tb", nombre: "WD Black SN850X 1TB NVMe PCIe 4.0 Pro", precio: 1950 },
        { id: "crucial_2tb", nombre: "Crucial P3 Plus 2TB NVMe M.2 SSD", precio: 2400 }
    ]
};

// PASO 1: Filtrar el selector de Sockets según la marca elegida
function filtrarSockets() {
    const marcaElegida = document.getElementById("cpuBrand").value;
    const selectSocket = document.getElementById("cpuSocket");
    
    selectSocket.innerHTML = '<option value="">-- Selecciona una arquitectura --</option>';
    document.getElementById("cpu").innerHTML = '<option value="">-- Selecciona un socket --</option>';
    document.getElementById("motherboard").innerHTML = '<option value="">-- Selecciona un socket --</option>';
    
    document.getElementById("cpu").disabled = true;
    document.getElementById("motherboard").disabled = true;

    if (!marcaElegida) {
        selectSocket.disabled = true;
        actualizarSimulacion();
        return;
    }

    selectSocket.disabled = false;
    arquitecturas[marcaElegida].forEach(arq => {
        selectSocket.innerHTML += `<option value="${arq.id}">${arq.nombre}</option>`;
    });
    
    actualizarSimulacion();
}

// PASO 2: Mostrar TODO el catálogo de CPUs y Boards, bloqueando lo incompatible
function filtrarComponentes() {
    const socketElegido = document.getElementById("cpuSocket").value;
    const selectCpu = document.getElementById("cpu");
    const selectMother = document.getElementById("motherboard");
    const selectRam = document.getElementById("ram");

    selectCpu.innerHTML = '<option value="">-- Selecciona un CPU --</option>';
    selectMother.innerHTML = '<option value="">-- Selecciona una Motherboard --</option>';

    if (!socketElegido) {
        selectCpu.disabled = true;
        selectMother.disabled = true;
        actualizarSimulacion();
        return;
    }

    selectCpu.disabled = false;
    selectMother.disabled = false;

    // Desplegar CPUs
    repositorio.cpu.forEach(c => {
        if (c.socket === socketElegido) {
            selectCpu.innerHTML += `<option value="${c.id}">${c.nombre}</option>`;
        } else {
            selectCpu.innerHTML += `<option value="${c.id}" disabled style="color: #666;">❌ ${c.nombre} (Requiere Socket ${c.socket})</option>`;
        }
    });

    // Desplegar Motherboards
    repositorio.motherboard.forEach(m => {
        if (m.socket === socketElegido) {
            selectMother.innerHTML += `<option value="${m.id}">${m.nombre}</option>`;
        } else {
            selectMother.innerHTML += `<option value="${m.id}" disabled style="color: #666;">❌ ${m.nombre} (Incompatible - Es de Socket ${m.socket})</option>`;
        }
    });

    // Desplegar RAMs de forma general
    selectRam.innerHTML = '<option value="">-- Selecciona memoria RAM --</option>';
    repositorio.ram.forEach(r => {
        selectRam.innerHTML += `<option value="${r.id}">${r.nombre}</option>`;
    });

    // Llenar complementos
    llenarSelectEstandar("gpu");
    llenarSelectEstandar("psu");
    llenarSelectEstandar("storage");

    actualizarSimulacion();
}

function llenarSelectEstandar(categoria) {
    const elemento = document.getElementById(categoria);
    if(elemento.options.length <= 1) {
        elemento.innerHTML = '<option value="">-- Selecciona una opción --</option>';
        repositorio[categoria].forEach(item => {
            elemento.innerHTML += `<option value="${item.id}">${item.nombre}</option>`;
        });
    }
}

// PASO 3: Cálculos y auditoría técnica en tiempo real
function actualizarSimulacion() {
    const cpuId = document.getElementById("cpu").value;
    const motherId = document.getElementById("motherboard").value;
    const ramId = document.getElementById("ram").value;
    const gpuId = document.getElementById("gpu").value;
    const psuId = document.getElementById("psu").value;
    const storageId = document.getElementById("storage").value;

    const cpu = repositorio.cpu.find(c => c.id === cpuId);
    const mother = repositorio.motherboard.find(m => m.id === motherId);
    const ram = repositorio.ram.find(r => r.id === ramId);
    const gpu = repositorio.gpu.find(g => g.id === gpuId);
    const psu = repositorio.psu.find(p => p.id === psuId);
    const storage = repositorio.storage.find(s => s.id === storageId);

    let total = 0;
    if (cpu) total += cpu.precio;
    if (mother) total += mother.precio;
    if (ram) total += ram.precio;
    if (gpu) total += gpu.precio;
    if (psu) total += psu.precio;
    if (storage) total += storage.precio;

    document.getElementById("totalPrice").innerText = `$${total.toLocaleString('es-MX')}.00 MXN`;

    let wattsConsumoTotal = 0;
    if (cpu) wattsConsumoTotal += cpu.watts;
    if (gpu) wattsConsumoTotal += gpu.watts;
    if (cpu || gpu) wattsConsumoTotal += 60; // Margen para ventiladores, RGB y pérdidas térmicas

    document.getElementById("totalWatts").innerText = `${wattsConsumoTotal} W`;

    const statusReport = document.getElementById("statusReport");
    const purposeReport = document.getElementById("purposeReport");

    if (!cpu || !mother || !ram || !storage || !psu) {
        statusReport.className = "report-box status-waiting";
        statusReport.innerText = "Esperando la selección de la base de hardware para iniciar auditoría de compatibilidad...";
        purposeReport.innerText = "Configura los componentes obligatorios para proyectar las capacidades de procesamiento.";
        return;
    }

    let errores = [];
    let advertencias = [];

    // Verificación de memorias RAM vs Tipo aceptado por placa (DDR4 vs DDR5)
    if (mother.ddr !== ram.ddr) {
        errores.push(`❌ Error Crítico de RAM: Elegiste una Motherboard que opera exclusivamente con tecnología DDR${mother.ddr}, pero seleccionaste un módulo de memoria RAM DDR${ram.ddr}. No va a encajar físicamente en los slots.`);
    }

    // Análisis de capacidad de fuente de poder
    if (psu.watts < wattsConsumoTotal) {
        errores.push(`❌ Error de Energía: El consumo de tus componentes bajo máxima carga es de ${wattsConsumoTotal}W. Tu fuente de poder de ${psu.watts}W se apagará por protección térmica o podría dañarse.`);
    } else if (psu.watts < wattsConsumoTotal + 150) {
        advertencias.push(`⚠️ Alerta de Eficiencia Eléctrica: Tu fuente de poder de ${psu.watts}W soportará los componentes, pero trabajará por encima del 85% de su capacidad. Recomendamos subir a una fuente con un colchón de +150W para alargar su vida útil.`);
    }

    if (errores.length > 0) {
        statusReport.className = "report-box status-error";
        statusReport.innerHTML = errores.join("<br><br>");
    } else if (advertencias.length > 0) {
        statusReport.className = "report-box status-warning";
        statusReport.innerHTML = advertencias.join("<br><br>");
    } else {
        statusReport.className = "report-box status-success";
        statusReport.innerHTML = `✅ ¡Arquitectura validada correctamente! El procesador coincide con el socket de la placa madre (${cpu.socket}), las memorias encajan en los slots DDR${mother.ddr} y la fuente cuenta con un rango de Watts seguro.`;
    }

    // Lógica inteligente de perfil según la potencia de la GPU y CPU elegida
    let perfilUso = "";
    if (gpu) {
        if (gpu.id === "rtx_4090" || gpu.id === "rtx_4080_super") {
            perfilUso = "🔥 **Máximo Rendimiento / Entusiasta**: Capacidad sobrada para Gaming 4K nativo, Inteligencia Artificial Local, renderizado de nivel cinematográfico y VR extrema.";
        } else if (gpu.id === "rtx_4070_super" || gpu.id === "rx_7800xt" || gpu.id === "rx_7700xt") {
            perfilUso = "🎮 **Gaming de Alta Gama / Competitivo Pro**: Excelente para jugar a más de 144 FPS en resolución 1440p (2K), streams profesionales sin pérdida de cuadros y edición de video 4K fluida.";
        } else {
            perfilUso = "⚡ **Estándar Gaming / Productividad**: Ideal para juegos competitivos a 1080p en gráficos Ultra/Altos, desarrollo de software intermedio y tareas de diseño gráfico/multitarea.";
        }
    } else {
        perfilUso = "🖥️ **Enfoque de Oficina / Servidor / Programación**: Óptimo para administración de bases de datos relacionales, compilación pesada de código, virtualización ligera y entornos escolares.";
    }
    purposeReport.innerHTML = perfilUso;
}