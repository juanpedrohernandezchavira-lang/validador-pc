// ==========================================================================
// 1. BASE DE DATOS DE COMPONENTES CORREGIDA (Sincronizada con tu HTML)
// ==========================================================================
const cpus = {
    "Ryzen 5 5600X": { socket: "AM4", precio: 2400, watts: 65, perfil: "Gaming Calidad-Precio" },
    "Ryzen 7 7800X3D": { socket: "AM5", precio: 7200, watts: 120, perfil: "Gaming de Alto Rendimiento / Streaming" },
    "Core i5 12400F": { socket: "LGA1700", precio: 2100, watts: 65, perfil: "Gaming Calidad-Precio" },
    "Core i9 14900K": { socket: "LGA1700", precio: 10500, watts: 253, perfil: "Entusiasta / Estación de Trabajo Pesada" }
};

const motherboards = {
    "B550M": { socket: "AM4", ramSoportada: "DDR4", precio: 1800 },
    "B650M": { socket: "AM5", ramSoportada: "DDR5", precio: 3400 },
    "H610M": { socket: "LGA1700", ramSoportada: "DDR4", precio: 1500 },
    "Z790": { socket: "LGA1700", ramSoportada: "DDR5", precio: 6200 }
};

const rams = {
    "DDR4": { tipo: "DDR4", precio: 850 },
    "DDR5": { tipo: "DDR5", precio: 2100 }
};

const gpus = {
    "RTX 3050": { watts: 130, precio: 4200, nivel: "Entrada" },
    "RTX 4070 Ti": { watts: 285, precio: 16500, nivel: "Gama Alta" },
    "RX 6600": { watts: 132, precio: 3900, nivel: "Entrada" }
};

const psus = {
    "500W": { potencia: 500, precio: 950 },
    "750W": { potencia: 750, precio: 2200 },
    "1000W": { potencia: 1000, precio: 3600 }
};

const storages = {
    "NV2 1TB": { precio: 1200 },
    "BX500 1TB": { precio: 1050 }
};

// Helper para detectar qué palabra clave está en el texto seleccionado
function buscarEnBD(texto, baseDatos) {
    if (!texto) return null;
    for (let clave in baseDatos) {
        if (texto.toUpperCase().includes(clave.toUpperCase())) {
            return { ...baseDatos[clave], nombre: clave };
        }
    }
    return null;
}

// ==========================================================================
// 2. MOTOR DE SIMULACIÓN INTELIGENTE
// ==========================================================================
function actualizarSimulacion() {
    // Obtener el texto visible seleccionado por el usuario en cada menú
    const cpuSelect = document.getElementById("cpu");
    const motherSelect = document.getElementById("motherboard");
    const ramSelect = document.getElementById("ram");
    const gpuSelect = document.getElementById("gpu");
    const psuSelect = document.getElementById("psu");
    const storageSelect = document.getElementById("storage");

    const cpuText = cpuSelect.options[cpuSelect.selectedIndex].text;
    const motherText = motherSelect.options[motherSelect.selectedIndex].text;
    const ramText = ramSelect.options[ramSelect.selectedIndex].text;
    const gpuText = gpuSelect.options[gpuSelect.selectedIndex].text;
    const psuText = psuSelect.options[psuSelect.selectedIndex].text;
    const storageText = storageSelect.options[storageSelect.selectedIndex].text;

    // Buscar los objetos correspondientes en la BD analizando las palabras clave del texto
    const cpu = cpuSelect.value ? buscarEnBD(cpuText, cpus) : null;
    const mother = motherSelect.value ? buscarEnBD(motherText, motherboards) : null;
    const ram = ramSelect.value ? buscarEnBD(ramText, rams) : null;
    const gpu = gpuSelect.value ? buscarEnBD(gpuText, gpus) : null;
    const psu = psuSelect.value ? buscarEnBD(psuText, psus) : null;
    const storage = storageSelect.value ? buscarEnBD(storageText, storages) : null;

    // 2.1 CALCULAR PRECIO TOTAL
    let totalPrecio = 0;
    if (cpu) totalPrecio += cpu.precio;
    if (mother) totalPrecio += mother.precio;
    if (ram) totalPrecio += ram.precio;
    if (gpu) totalPrecio += gpu.precio;
    if (psu) totalPrecio += psu.precio;
    if (storage) totalPrecio += storage.precio;

    document.getElementById("totalPrice").innerText = `$${totalPrecio.toLocaleString('es-MX')}.00 MXN`;

    const statusReport = document.getElementById("statusReport");
    const purposeReport = document.getElementById("purposeReport");

    // Validar requerimientos mínimos (CPU y Motherboard)
    if (!cpu || !mother) {
        statusReport.className = "report-box status-waiting";
        statusReport.innerHTML = "Esperando a que selecciones al menos Procesador y Tarjeta Madre para iniciar el escaneo...";
        purposeReport.innerHTML = "Selecciona componentes para calcular el perfil de rendimiento.";
        return;
    }

    let errores = [];
    let advertencias = [];

    // 2.2 REGLAS DE COMPATIBILIDAD HARDWARE
    
    // Regla 1: Socket del CPU vs Motherboard
    if (cpu.socket !== mother.socket) {
        errores.push(`❌ <strong>Incompatibilidad de Socket:</strong> El procesador requiere un socket <strong>${cpu.socket}</strong>, pero la motherboard ofrece un socket <strong>${mother.socket}</strong>. No se pueden ensamblar.`);
    }

    // Regla 2: Tipo de Memoria RAM (DDR4 / DDR5)
    if (ram && ram.tipo !== mother.ramSoportada) {
        errores.push(`❌ <strong>Incompatibilidad de RAM:</strong> La memoria seleccionada es <strong>${ram.tipo}</strong>, pero la motherboard elegida solo soporta ranuras <strong>${mother.ramSoportada}</strong>.`);
    }

    // Regla 3: Consumo Eléctrico y Fuente de Poder
    let wattsConsumoTotal = cpu.watts + (gpu ? gpu.watts : 0) + 80; 
    let margenSeguridad = wattsConsumoTotal + 100;

    if (psu) {
        if (psu.potencia < wattsConsumoTotal) {
            errores.push(`❌ <strong>Fuente de Poder Insuficiente:</strong> Tu hardware consume un aproximado de <strong>${wattsConsumoTotal}W</strong> bajo carga pesada, pero la fuente seleccionada es de solo <strong>${psu.potencia}W</strong>. El sistema colapsará.`);
        } else if (psu.potencia < margenSeguridad) {
            advertencias.push(`⚠️ <strong>Margen de Energía Reducido:</strong> La fuente de ${psu.potencia}W aguanta los componentes, pero se recomienda una de al menos <strong>${margenSeguridad}W</strong> para evitar picos de sobretensión.`);
        }
    }

    // 2.3 IMPRIMIR REPORTE VISUAL DE COMPATIBILIDAD
    if (errores.length > 0) {
        statusReport.className = "report-box status-danger";
        statusReport.innerHTML = errores.join("<br><br>");
    } else if (advertencias.length > 0) {
        statusReport.className = "report-box status-danger"; 
        statusReport.innerHTML = `<strong>¡Componentes Físicamente Compatibles! Pero ojo:</strong><br><br>` + advertencias.join("<br>");
    } else {
        statusReport.className = "report-box status-success";
        statusReport.innerHTML = `✔️ <strong>¡Ensamble 100% Compatible!</strong> El socket coincide (<strong>${cpu.socket}</strong>)${ram ? ` y la memoria RAM encaja perfectamente en los slots (<strong>${ram.tipo}</strong>)` : ''}. Todos los componentes se pueden armar sin problemas de hardware.`;
    }

    // ==========================================================================
    // 3. ANÁLISIS DE FINALIDAD DE USO (¿Para qué sirve?)
    // ==========================================================================
    if (errores.length > 0) {
        purposeReport.innerHTML = `<span style="color: #ff5252;">No se puede calcular el rendimiento debido a errores críticos de compatibilidad física en la configuración.</span>`;
        return;
    }

    let veredictoUso = "";

    if (!gpu) {
        if (cpu.nombre === "Core i9 14900K") {
            veredictoUso = `Procesador de gama industrial trabajando con <span class="purpose-highlight">Gráficos Integrados</span>. Excelente para desarrollo masivo de software, base de datos e ingeniería de sistemas, pero requerirá una GPU dedicada para poder jugar de forma fluida.`;
        } else {
            veredictoUso = `Equipo ideal para <span class="purpose-highlight">Ofimática, Clases en Línea y Productividad Ligera</span>. Excelente velocidad para paquetería Office, navegación web fluida y contenido multimedia. No apto para gaming moderno.`;
        }
    } else {
        if (gpu.nivel === "Gama Alta") {
            veredictoUso = `¡Una bestia completa! Esta configuración califica como <span class="purpose-highlight">PC de Gama Alta Enthusiast</span>. Diseñada para exprimir juegos pesados en resolución 4K o 1440p en Ultra a más de 100 FPS (como <i>Silent Hill 2 Remake</i> o <i>Dragon Ball: Sparking! ZERO</i>). También vuela en renderizado 3D y simulaciones pesadas.`;
        } else {
            if (cpu.nombre === "Core i9 14900K" || cpu.nombre === "Ryzen 7 7800X3D") {
                veredictoUso = `Configuración desbalanceada (Cuello de Botella). Tienes demasiada potencia en el procesador para la tarjeta gráfica de entrada que elegiste. Va excelente para <span class="purpose-highlight">Edición de Video y Renderizado por CPU</span>, pero en Gaming la gráfica limitará el rendimiento total.`;
            } else {
                veredictoUso = `¡El rey del costo-beneficio! Una <span class="purpose-highlight">PC Gamer Calidad-Precio Excelente</span>. Hecha para jugar cualquier juego moderno en resolución 1080p en Alto/Ultra a más de 60-144 FPS estables. Perfecta para títulos competitivos, streaming y tus proyectos escolares del día a día.`;
            }
        }
    }

    purposeReport.innerHTML = veredictoUso;
}