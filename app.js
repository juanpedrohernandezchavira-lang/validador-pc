// Base de datos masiva de componentes
const componentes = {
    cpu: [
        // --- DESKTOP AMD ---
        { id: "r5_5600x", nombre: "AMD Ryzen 5 5600X (AM4 | 6 Cores | 65W)", precio: 2600, socket: "AM4", ddr: 4, watts: 65, tipo: "desktop" },
        { id: "r7_5700x", nombre: "AMD Ryzen 7 5700X (AM4 | 8 Cores | 65W)", precio: 3400, socket: "AM4", ddr: 4, watts: 65, tipo: "desktop" },
        { id: "r7_5800x3d", nombre: "AMD Ryzen 7 5800X3D (AM4 | Gaming King | 105W)", precio: 5800, socket: "AM4", ddr: 4, watts: 105, tipo: "desktop" },
        { id: "r5_7600X", nombre: "AMD Ryzen 5 7600X (AM5 | 6 Cores | 105W)", precio: 4100, socket: "AM5", ddr: 5, watts: 105, tipo: "desktop" },
        { id: "r7_7800x3d", nombre: "AMD Ryzen 7 7800X3D (AM5 | Ultra Gaming | 120W)", precio: 7800, socket: "AM5", ddr: 5, watts: 120, tipo: "desktop" },
        { id: "r9_7950x", nombre: "AMD Ryzen 9 7950X (AM5 | 16 Cores | 170W)", precio: 9800, socket: "AM5", ddr: 5, watts: 170, tipo: "desktop" },
        // --- DESKTOP INTEL ---
        { id: "i3_12100f", nombre: "Intel Core i3 12100F (LGA1700 | 4 Cores | 58W)", precio: 1400, socket: "LGA1700", ddr: 4, watts: 58, tipo: "desktop" },
        { id: "i5_12400f", nombre: "Intel Core i5 12400F (LGA1700 | Calidad/Precio | 65W)", precio: 2100, socket: "LGA1700", ddr: 4, watts: 65, tipo: "desktop" },
        { id: "i5_13400f", nombre: "Intel Core i5 13400F (LGA1700 | 10 Cores | 65W)", precio: 3500, socket: "LGA1700", ddr: 4, watts: 65, tipo: "desktop" },
        { id: "i7_13700k", nombre: "Intel Core i7 13700K (LGA1700 | 16 Cores | 125W)", precio: 6900, socket: "LGA1700", ddr: 5, watts: 125, tipo: "desktop" },
        { id: "i5_14600k", nombre: "Intel Core i5 14600K (LGA1700 | 14 Cores | 125W)", precio: 5400, socket: "LGA1700", ddr: 5, watts: 125, tipo: "desktop" },
        { id: "i9_14900k", nombre: "Intel Core i9 14900K (LGA1700 | Máxima Potencia | 150W)", precio: 11500, socket: "LGA1700", ddr: 5, watts: 150, tipo: "desktop" },
        // --- LAPTOP INTEGRADOS ---
        { id: "r5_7535hs", nombre: "AMD Ryzen 5 7535HS (Laptop CPU | 35W)", precio: 3800, socket: "BGA", ddr: 5, watts: 35, tipo: "laptop" },
        { id: "r7_8845hs", nombre: "AMD Ryzen 7 8845HS (Laptop CPU | AI Ready | 45W)", precio: 6500, socket: "BGA", ddr: 5, watts: 45, tipo: "laptop" },
        { id: "i5_13420h", nombre: "Intel Core i5 13420H (Laptop CPU | 45W)", precio: 4200, socket: "BGA", ddr: 5, watts: 45, tipo: "laptop" },
        { id: "i7_13620h", nombre: "Intel Core i7 13620H (Laptop CPU | 45W)", precio: 5800, socket: "BGA", ddr: 5, watts: 45, tipo: "laptop" },
        { id: "i9_14900hx", nombre: "Intel Core i9 14900HX (Laptop Flagship | 55W)", precio: 9500, socket: "BGA", ddr: 5, watts: 55, tipo: "laptop" }
    ],
    motherboard: [
        // --- SOCKET AM4 ---
        { id: "a520m", nombre: "GIGABYTE A520M K V2 (AM4 | Básica DDR4)", precio: 1300, socket: "AM4", ddr: 4 },
        { id: "b550m", nombre: "ASUS Prime B550M-A AC (AM4 | Recomendada DDR4)", precio: 1950, socket: "AM4", ddr: 4 },
        { id: "x570", nombre: "MSI MAG X570S Tomahawk (AM4 | Entusiasta DDR4)", precio: 4100, socket: "AM4", ddr: 4 },
        // --- SOCKET AM5 ---
        { id: "a620m", nombre: "ASUS TUF Gaming A620M-Plus (AM5 | Entrada DDR5)", precio: 2300, socket: "AM5", ddr: 5 },
        { id: "b650m", nombre: "MSI MAG B650M Mortar WiFi (AM5 | Óptima DDR5)", precio: 3400, socket: "AM5", ddr: 5 },
        { id: "x670e", nombre: "ASUS ROG Strix X670E-F (AM5 | Premium DDR5)", precio: 7600, socket: "AM5", ddr: 5 },
        // --- SOCKET LGA1700 ---
        { id: "h610m", nombre: "MSI H610M-G DDR4 (LGA1700 | Económica)", precio: 1500, socket: "LGA1700", ddr: 4 },
        { id: "b760m_d4", nombre: "GIGABYTE B760M DS3H DDR4 (LGA1700 | Intermedia)", precio: 2200, socket: "LGA1700", ddr: 4 },
        { id: "b760_d5", nombre: "ASUS TUF Gaming B760-Plus WiFi (LGA1700 | DDR5)", precio: 3600, socket: "LGA1700", ddr: 5 },
        { id: "z790", nombre: "ASUS ROG Strix Z790-F Gaming (LGA1700 | OC DDR5)", precio: 6900, socket: "LGA1700", ddr: 5 }
    ],
    ram: [
        // --- RAM DESKTOP ---
        { id: "kingston_d4_8", nombre: "Kingston Fury Beast 8GB (1x8GB) 3200MHz DDR4", precio: 450, ddr: 4, tipo: "desktop" },
        { id: "corsair_d4_16", nombre: "Corsair Vengeance LPX 16GB (2x8GB) 3200MHz DDR4", precio: 850, ddr: 4, tipo: "desktop" },
        { id: "gskill_d4_32", nombre: "G.Skill Ripjaws V 32GB (2x16GB) 3600MHz DDR4", precio: 1600, ddr: 4, tipo: "desktop" },
        { id: "crucial_d5_16", nombre: "Crucial Classic 16GB (1x16GB) 4800MHz DDR5", precio: 980, ddr: 5, tipo: "desktop" },
        { id: "kingston_d5_32", nombre: "Kingston Fury Renegade 32GB (2x16GB) 6000MHz DDR5", precio: 2350, ddr: 5, tipo: "desktop" },
        { id: "corsair_d5_64", nombre: "Corsair Vengeance RGB 64GB (2x32GB) 6000MHz DDR5", precio: 4600, ddr: 5, tipo: "desktop" },
        // --- RAM LAPTOP (SO-DIMM) ---
        { id: "crucial_lap_8_d4", nombre: "Crucial 8GB (1x8GB) 3200MHz DDR4 SO-DIMM", precio: 380, ddr: 4, tipo: "laptop" },
        { id: "kingston_lap_16_d4", nombre: "Kingston ValueRAM 16GB (1x16GB) 3200MHz DDR4 SO-DIMM", precio: 750, ddr: 4, tipo: "laptop" },
        { id: "crucial_lap_16_d5", nombre: "Crucial 16GB (1x16GB) 4800MHz DDR5 SO-DIMM", precio: 950, ddr: 5, tipo: "laptop" },
        { id: "kingston_lap_32_d5", nombre: "Kingston Fury Impact 32GB (2x16GB) 5600MHz DDR5 SO-DIMM", precio: 2200, ddr: 5, tipo: "laptop" }
    ],
    gpu: [
        // --- GPUS DESKTOP ---
        { id: "rx_6600", nombre: "AMD Radeon RX 6600 8GB (GIGABYTE | 132W)", precio: 3900, watts: 132, tipo: "desktop" },
        { id: "rx_7600", nombre: "AMD Radeon RX 7600 8GB (ASUS | 165W)", precio: 5400, watts: 165, tipo: "desktop" },
        { id: "rx_7800xt", nombre: "AMD Radeon RX 7800 XT 16GB (XFX | 263W)", precio: 10800, watts: 263, tipo: "desktop" },
        { id: "rtx_3050", nombre: "NVIDIA RTX 3050 8GB (MSI | Ventus | 130W)", precio: 4100, watts: 130, tipo: "desktop" },
        { id: "rtx_4060", nombre: "NVIDIA RTX 4060 8GB (ZOTAC | Twin Edge | 115W)", precio: 6200, watts: 115, tipo: "desktop" },
        { id: "rtx_4070_super", nombre: "NVIDIA RTX 4070 Super 12GB (ASUS | Dual | 220W)", precio: 13500, watts: 220, tipo: "desktop" },
        { id: "rtx_4070ti", nombre: "NVIDIA RTX 4070 Ti Super 16GB (MSI | Gaming X | 285W)", precio: 17200, watts: 285, tipo: "desktop" },
        { id: "rtx_4090", nombre: "NVIDIA RTX 4090 24GB (ASUS | ROG Strix | 450W)", precio: 39500, watts: 450, tipo: "desktop" },
        // --- GPUS LAPTOP ---
        { id: "rtx_2050_lap", nombre: "NVIDIA RTX 2050 Laptop GPU (4GB | 45W)", precio: 2500, watts: 45, tipo: "laptop" },
        { id: "rtx_3050_lap", nombre: "NVIDIA RTX 3050 Laptop GPU (4GB | 60W)", precio: 3200, watts: 60, tipo: "laptop" },
        { id: "rtx_4050_lap", nombre: "NVIDIA RTX 4050 Laptop GPU (6GB | 75W)", precio: 4500, watts: 75, tipo: "laptop" },
        { id: "rtx_4060_lap", nombre: "NVIDIA RTX 4060 Laptop GPU (8GB | 115W)", precio: 6000, watts: 115, tipo: "laptop" },
        { id: "rtx_4070_lap", nombre: "NVIDIA RTX 4070 Laptop GPU (8GB | 140W)", precio: 8500, watts: 140, tipo: "laptop" },
        { id: "rtx_4080_lap", nombre: "NVIDIA RTX 4080 Laptop GPU (12GB | 150W)", precio: 14000, watts: 150, tipo: "laptop" }
    ],
    psu: [
        { id: "evga_500w", nombre: "EVGA 500W 80+ White (Equipos de Entrada)", precio: 900, watts: 500 },
        { id: "corsair_650w", nombre: "Corsair CX650 650W 80+ Bronze (Gama Media)", precio: 1350, watts: 650 },
        { id: "corsair_750w", nombre: "Corsair RM750e 750W 80+ Gold (Modular)", precio: 1950, watts: 750 },
        { id: "nzxt_850w", nombre: "NZXT C850 850W 80+ Gold (Gama Alta)", precio: 2400, watts: 850 },
        { id: "msi_1000w", nombre: "MSI MAG A1000G 1000W 80+ Gold (ATX 3.0)", precio: 3400, watts: 1000 }
    ],
    storage: [
        // El almacenamiento funciona igual para ambas plataformas (M.2 NVMe y SATA 2.5)
        { id: "kingston_nvme_500", nombre: "Kingston NV2 500GB NVMe M.2 SSD", precio: 680 },
        { id: "kingston_nvme_1tb", nombre: "Kingston NV2 1TB NVMe M.2 SSD", precio: 1150 },
        { id: "wd_black_1tb", nombre: "WD Black SN850X 1TB NVMe PCIe 4.0 (Gamer)", precio: 1950 },
        { id: "crucial_nvme_2tb", nombre: "Crucial P3 Plus 2TB NVMe M.2 SSD", precio: 2400 },
        { id: "crucial_sata_1tb", nombre: "Crucial BX500 1TB SSD SATA 2.5", precio: 950 }
    ]
};

window.onload = function() {
    cambiarPlataforma();
};

function cambiarPlataforma() {
    const plataforma = document.getElementById("platform").value;
    
    const selectCpu = document.getElementById("cpu");
    const selectMother = document.getElementById("motherboard");
    const selectRam = document.getElementById("ram");
    const selectGpu = document.getElementById("gpu");
    const selectPsu = document.getElementById("psu");
    const selectStorage = document.getElementById("storage");

    if (plataforma === "laptop") {
        selectMother.innerHTML = '<option value="integrada">⚙️ Tarjeta Madre Integrada de Fábrica (Móvil)</option>';
        selectMother.disabled = true;
        selectPsu.innerHTML = '<option value="cargador">🔌 Cargador de Laptop / Eliminador Incluido</option>';
        selectPsu.disabled = true;
    } else {
        selectMother.disabled = false;
        selectPsu.disabled = false;
        llenarSelect("motherboard", selectMother);
        llenarSelect("psu", selectPsu);
    }

    llenarSelectFiltrado("cpu", selectCpu, plataforma);
    llenarSelectFiltrado("ram", selectRam, plataforma);
    llenarSelectFiltrado("gpu", selectGpu, plataforma);
    llenarSelect("storage", selectStorage);

    actualizarSimulacion();
}

function llenarSelect(categoria, elemento) {
    let opciones = `<option value="">-- Selecciona un componente --</option>`;
    componentes[categoria].forEach(comp => {
        opciones += `<option value="${comp.id}">${comp.nombre}</option>`;
    });
    elemento.innerHTML = opciones;
}

function llenarSelectFiltrado(categoria, elemento, plataforma) {
    let opciones = `<option value="">-- Selecciona un componente --</option>`;
    componentes[categoria].forEach(comp => {
        if (comp.tipo === plataforma) {
            opciones += `<option value="${comp.id}">${comp.nombre}</option>`;
        }
    });
    elemento.innerHTML = opciones;
}

function actualizarSimulacion() {
    const plataforma = document.getElementById("platform").value;
    
    const cpuId = document.getElementById("cpu").value;
    const motherId = document.getElementById("motherboard").value;
    const ramId = document.getElementById("ram").value;
    const gpuId = document.getElementById("gpu").value;
    const psuId = document.getElementById("psu").value;
    const storageId = document.getElementById("storage").value;

    const cpu = componentes.cpu.find(c => c.id === cpuId);
    const mother = componentes.motherboard.find(m => m.id === motherId);
    const ram = componentes.ram.find(r => r.id === ramId);
    const gpu = componentes.gpu.find(g => g.id === gpuId);
    const psu = componentes.psu.find(p => p.id === psuId);
    const storage = componentes.storage.find(s => s.id === storageId);

    // --- 1. CALCULO DE PRECIO TOTAL ---
    let total = 0;
    if (cpu) total += cpu.precio;
    if (plataforma === "desktop" && mother) total += mother.precio;
    if (ram) total += ram.precio;
    if (gpu) total += gpu.precio;
    if (plataforma === "desktop" && psu) total += psu.precio;
    if (storage) total += storage.precio;

    document.getElementById("totalPrice").innerText = `$${total.toLocaleString('es-MX')}.00 MXN`;

    // --- 2. CÁLCULO DE WATTS / VOLTAJE ---
    let wattsConsumoTotal = 0;
    if (cpu) wattsConsumoTotal += cpu.watts;
    if (gpu) wattsConsumoTotal += gpu.watts;
    
    // Suma fija por periféricos, tarjeta madre, RAM y ventiladores (aproximado básico)
    if (cpu || gpu) {
        wattsConsumoTotal += (plataforma === "desktop") ? 60 : 25; 
    }

    document.getElementById("totalWatts").innerText = `${wattsConsumoTotal} W`;

    // Interfaces de reportes
    const statusReport = document.getElementById("statusReport");
    const purposeReport = document.getElementById("purposeReport");

    if (!cpu || !ram || !storage || (plataforma === "desktop" && (!mother || !psu))) {
        statusReport.className = "report-box status-waiting";
        statusReport.innerText = "Esperando componentes críticos para iniciar el escaneo de compatibilidad...";
        purposeReport.innerText = "Configura el hardware para proyectar sus capacidades de rendimiento.";
        return;
    }

    // --- 3. LOGICA DE VALIDACIÓN ---
    let errores = [];
    let advertencias = [];

    if (plataforma === "desktop") {
        if (cpu.socket !== mother.socket) {
            errores.push(`❌ Conflicto de Socket: El CPU requiere un socket ${cpu.socket} pero la placa elegida es ${mother.socket}. No son compatibles.`);
        }
        if (mother.ddr !== ram.ddr) {
            errores.push(`❌ Conflicto de Memorias: La placa madre acepta únicamente formato DDR${mother.ddr}, y estás intentando meter módulos DDR${ram.ddr}.`);
        }
        if (psu.watts < wattsConsumoTotal) {
            errores.push(`❌ Apagón por Energía Insuﬁciente: Tu hardware requiere mínimo ${wattsConsumoTotal}W a máxima carga. Tu fuente de ${psu.watts}W va a colapsar el sistema.`);
        } else if (psu.watts < wattsConsumoTotal + 150) {
            advertencias.push(`⚠️ Watts Ajustados: La fuente de ${psu.watts}W resistirá, pero operará con sobreesfuerzo continuo. Considera una de mayor potencia para proteger tus componentes.`);
        }
    } else {
        // Validación de Laptop interna
        if (ram.ddr !== cpu.ddr) {
            errores.push(`❌ Incompatibilidad de RAM: El procesador móvil requiere una arquitectura de memoria DDR${cpu.ddr}. Revisa tu módulo SO-DIMM.`);
        }
    }

    // Despliegue de Resultados
    if (errores.length > 0) {
        statusReport.className = "report-box status-error";
        statusReport.innerHTML = errores.join("<br><br>");
    } else if (advertencias.length > 0) {
        statusReport.className = "report-box status-warning";
        statusReport.innerHTML = advertencias.join("<br><br>");
    } else {
        statusReport.className = "report-box status-success";
        statusReport.innerHTML = `✅ ¡Compatibilidad del 100% asegurada! Los consumos eléctricos se encuentran dentro del rango óptimo de operación y los sockets coinciden perfectamente.`;
    }

    // --- 4. PERFIL DE RENDIMIENTO ---
    let perfilUso = "";
    if (gpu) {
        if (gpu.id === "rtx_4090" || gpu.id === "rtx_4080_lap" || gpu.id === "rtx_4070ti") {
            perfilUso = "🔥 **Gama Entusiasta / Extrema**: Ideal para jugar a más de 100 FPS en resolución 4K, Realidad Virtual (VR), modelado 3D profesional, Inteligencia Artificial nativa y streaming exigente.";
        } else if (gpu.id === "rtx_4070_super" || gpu.id === "rx_7800xt" || gpu.id === "rtx_4070_lap") {
            perfilUso = "🎮 **Gama Alta / Competitivo Pro**: Diseñado para correr todo en Ultra a 1440p (2K), excelentes tasas de cuadros en shooters competitivos y renderizado veloz de video.";
        } else {
            perfilUso = "⚡ **Gama Media / Estándar Gaming**: Perfecto para gaming fluido en resolución 1080p en configuraciones competitivas o medias, ideal para tareas escolares pesadas y edición casual.";
        }
    } else {
        perfilUso = "🖥️ **Multitarea / Estudiante**: Excelente rendimiento para programación de software, ejecución de bases de datos relacionales, navegación fluida con múltiples pestañas y tareas de productividad de oficina.";
    }
    purposeReport.innerHTML = perfilUso;
}