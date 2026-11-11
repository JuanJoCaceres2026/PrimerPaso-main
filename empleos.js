// empleos.js

const jobs = [
    {
        id: 1,
        title: "Asistente administrativo",
        company: "Grupo Nova",
        location: "San Salvador",
        modality: "Presencial",
        schedule: "Tiempo completo",
        experience: "Sin experiencia",
        salaryMin: 400,
        salaryMax: 500,
        date: "2026-09-21",
        dateLabel: "21 de septiembre de 2026",
        icon: "📋",
        description: "Apoya al equipo administrativo con organización de documentos, atención básica y seguimiento de tareas.",
        tags: ["Sin experiencia", "Capacitación incluida", "Ideal para primer empleo"]
    },
    {
        id: 2,
        title: "Asistente de ventas",
        company: "Tiendas Express",
        location: "Soyapango",
        modality: "Presencial",
        schedule: "Medio tiempo",
        experience: "Sin experiencia",
        salaryMin: 325,
        salaryMax: 400,
        date: "2026-09-19",
        dateLabel: "19 de septiembre de 2026",
        icon: "🛍️",
        description: "Atiende clientes, organiza productos y apoya al equipo de tienda en tareas sencillas del día a día.",
        tags: ["Sin experiencia", "Medio tiempo", "Capacitación incluida"]
    },
    {
        id: 3,
        title: "Servicio al cliente",
        company: "Call Center Plus",
        location: "Santa Tecla",
        modality: "Híbrido",
        schedule: "Medio tiempo",
        experience: "Experiencia opcional",
        salaryMin: 350,
        salaryMax: 450,
        date: "2026-09-18",
        dateLabel: "18 de septiembre de 2026",
        icon: "🎧",
        description: "Brinda atención a clientes por teléfono y chat, siguiendo guías de servicio y resolviendo consultas frecuentes.",
        tags: ["Horarios flexibles", "Experiencia opcional", "Entrenamiento"]
    },
    {
        id: 4,
        title: "Auxiliar de informática",
        company: "TecnoSoluciones",
        location: "Antiguo Cuscatlán",
        modality: "Híbrido",
        schedule: "Tiempo completo",
        experience: "Sin experiencia",
        salaryMin: 450,
        salaryMax: 550,
        date: "2026-09-16",
        dateLabel: "16 de septiembre de 2026",
        icon: "💻",
        description: "Apoya en instalación de programas, revisión de equipos y tareas básicas de soporte tecnológico.",
        tags: ["Sin experiencia", "Tecnología", "Plan de aprendizaje"]
    },
    {
        id: 5,
        title: "Creador de contenido junior",
        company: "Estudio Creativo 503",
        location: "San Salvador",
        modality: "Remoto",
        schedule: "Medio tiempo",
        experience: "Experiencia opcional",
        salaryMin: 375,
        salaryMax: 500,
        date: "2026-09-15",
        dateLabel: "15 de septiembre de 2026",
        icon: "🎨",
        description: "Ayuda a crear publicaciones sencillas para redes sociales, organizar ideas y apoyar calendarios de contenido.",
        tags: ["Remoto", "Creatividad", "Experiencia opcional"]
    },
    {
        id: 6,
        title: "Auxiliar de cocina",
        company: "Sabor Local",
        location: "Ilopango",
        modality: "Presencial",
        schedule: "Fines de semana",
        experience: "Sin experiencia",
        salaryMin: 300,
        salaryMax: 380,
        date: "2026-09-14",
        dateLabel: "14 de septiembre de 2026",
        icon: "🍴",
        description: "Apoya en preparación básica, orden del área y atención interna durante los turnos de mayor movimiento.",
        tags: ["Sin experiencia", "Fines de semana", "Capacitación"]
    },
    {
        id: 7,
        title: "Recepcionista junior",
        company: "Centro Empresarial Norte",
        location: "Santa Tecla",
        modality: "Presencial",
        schedule: "Tiempo completo",
        experience: "Experiencia opcional",
        salaryMin: 425,
        salaryMax: 525,
        date: "2026-09-12",
        dateLabel: "12 de septiembre de 2026",
        icon: "🏢",
        description: "Recibe visitantes, organiza llamadas y apoya con tareas de recepción y coordinación de citas.",
        tags: ["Atención al cliente", "Experiencia opcional", "Crecimiento"]
    },
    {
        id: 8,
        title: "Asistente de redes sociales",
        company: "Impulso Digital",
        location: "Soyapango",
        modality: "Remoto",
        schedule: "Fines de semana",
        experience: "Sin experiencia",
        salaryMin: 325,
        salaryMax: 425,
        date: "2026-09-10",
        dateLabel: "10 de septiembre de 2026",
        icon: "📱",
        description: "Apoya con programación de contenido, respuestas básicas y seguimiento de publicaciones en redes sociales.",
        tags: ["Sin experiencia", "Remoto", "Fines de semana"]
    },
    {
        id: 9,
        title: "Auxiliar de inventario",
        company: "Distribuidora Central",
        location: "Ilopango",
        modality: "Presencial",
        schedule: "Tiempo completo",
        experience: "Sin experiencia",
        salaryMin: 390,
        salaryMax: 480,
        date: "2026-09-08",
        dateLabel: "8 de septiembre de 2026",
        icon: "📦",
        description: "Apoya en conteo de productos, orden de bodega y registro básico de entradas y salidas.",
        tags: ["Sin experiencia", "Organización", "Capacitación"]
    },
    {
        id: 10,
        title: "Soporte técnico junior",
        company: "Conecta SV",
        location: "Antiguo Cuscatlán",
        modality: "Híbrido",
        schedule: "Tiempo completo",
        experience: "Experiencia opcional",
        salaryMin: 475,
        salaryMax: 600,
        date: "2026-09-06",
        dateLabel: "6 de septiembre de 2026",
        icon: "🖥️",
        description: "Ayuda a usuarios con incidencias básicas, configuración de equipos y seguimiento de solicitudes.",
        tags: ["Tecnología", "Experiencia opcional", "Mentoría"]
    },
    {
        id: 11,
        title: "Promotor de marca",
        company: "Experiencia Activa",
        location: "San Salvador",
        modality: "Presencial",
        schedule: "Fines de semana",
        experience: "Sin experiencia",
        salaryMin: 300,
        salaryMax: 425,
        date: "2026-09-04",
        dateLabel: "4 de septiembre de 2026",
        icon: "📣",
        description: "Presenta productos en puntos de venta, orienta a clientes y apoya actividades promocionales.",
        tags: ["Sin experiencia", "Fines de semana", "Comunicación"]
    },
    {
        id: 12,
        title: "Asistente de recursos humanos",
        company: "Talento Joven",
        location: "Santa Tecla",
        modality: "Híbrido",
        schedule: "Tiempo completo",
        experience: "Experiencia opcional",
        salaryMin: 450,
        salaryMax: 575,
        date: "2026-09-02",
        dateLabel: "2 de septiembre de 2026",
        icon: "👥",
        description: "Apoya en organización de expedientes, coordinación de entrevistas y actividades administrativas de talento.",
        tags: ["Experiencia opcional", "Aprendizaje", "Recursos humanos"]
    }
];

const savedJobs = new Set();

const filtersState = {
    location: new Set(),
    modality: new Set(),
    schedule: new Set(),
    experience: new Set()
};

const keywordInput = document.getElementById("keywordInput");
const locationInput = document.getElementById("locationInput");
const jobsSearchForm = document.getElementById("jobsSearchForm");
const resultsCount = document.getElementById("resultsCount");
const jobsList = document.getElementById("jobsList");
const emptyState = document.getElementById("emptyState");
const clearFiltersButton = document.getElementById("clearFilters");
const emptyClearFiltersButton = document.getElementById("emptyClearFilters");
const activeFilters = document.getElementById("activeFilters");
const sortSelect = document.getElementById("sortSelect");
const categorySelect = document.getElementById("categorySelect");

const jobModal = document.getElementById("jobModal");
const modalJobIcon = document.getElementById("modalJobIcon");
const modalCompany = document.getElementById("modalCompany");
const modalJobTitle = document.getElementById("modalJobTitle");
const modalDescription = document.getElementById("modalDescription");
const modalDetails = document.getElementById("modalDetails");
const modalTags = document.getElementById("modalTags");
const modalSalary = document.getElementById("modalSalary");
const modalSaveButton = document.getElementById("modalSaveButton");
const modalApplyButton = document.getElementById("modalApplyButton");

let currentModalJobId = null;

function normalizeText(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function formatSalary(job) {
    return `$${job.salaryMin} – $${job.salaryMax}`;
}

function getSelectedValues(filterName) {
    return [...filtersState[filterName]];
}

function matchesSelectedGroup(jobValue, selectedValues) {
    if (!selectedValues.length) return true;

    return selectedValues.includes(jobValue);
}

function getFilteredJobs() {
    const keyword = normalizeText(keywordInput.value);
    const locationSearch = normalizeText(locationInput.value);

    const filtered = jobs.filter((job) => {

        const searchableText = normalizeText([
            job.title,
            job.company,
            job.location,
            job.modality,
            job.schedule,
            job.experience,
            job.description,
            ...job.tags
        ].join(" "));

        const matchesKeyword =
            !keyword || searchableText.includes(keyword);

        const selectedCategory = categorySelect ? normalizeText(categorySelect.value) : "";
        const categoryAliases = {
            "administracion": ["administr", "asistente", "recepcion", "auxiliar"],
            "atencion al cliente": ["cliente", "servicio", "recepcion", "ventas"],
            "tecnologia": ["tecnologia", "informatica", "tecnico", "soporte", "digital"],
            "ventas": ["ventas", "promotor", "comercial"],
            "cocina": ["cocina", "restaurante", "alimento"],
            "marketing": ["marketing", "contenido", "redes", "creativo"],
            "recursos humanos": ["recursos humanos", "talento", "rrhh"],
            "logistica": ["inventario", "bodega", "logistica", "distribuidora"]
        };
        const matchesCategory = !selectedCategory ||
            (categoryAliases[selectedCategory] || [selectedCategory]).some(term => searchableText.includes(normalizeText(term)));

        const matchesLocationSearch =
            !locationSearch ||
            normalizeText(job.location).includes(locationSearch);

        const matchesLocationFilter =
            matchesSelectedGroup(
                job.location,
                getSelectedValues("location")
            );

        const matchesModality =
            matchesSelectedGroup(
                job.modality,
                getSelectedValues("modality")
            );

        const matchesSchedule =
            matchesSelectedGroup(
                job.schedule,
                getSelectedValues("schedule")
            );

        const matchesExperience =
            matchesSelectedGroup(
                job.experience,
                getSelectedValues("experience")
            );

        return (
            matchesKeyword &&
            matchesCategory &&
            matchesLocationSearch &&
            matchesLocationFilter &&
            matchesModality &&
            matchesSchedule &&
            matchesExperience
        );
    });

    return sortJobs(filtered);
}

function sortJobs(items) {
    const sortValue = sortSelect.value;
    const sorted = [...items];

    if (sortValue === "recent") {
        sorted.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );
    }

    else if (sortValue === "oldest") {
        sorted.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );
    }

    else if (sortValue === "salary-high") {
        sorted.sort(
            (a, b) => b.salaryMax - a.salaryMax
        );
    }

    else if (sortValue === "salary-low") {
        sorted.sort(
            (a, b) => a.salaryMin - b.salaryMin
        );
    }

    else if (sortValue === "title") {
        sorted.sort(
            (a, b) => a.title.localeCompare(b.title, "es")
        );
    }

    return sorted;
}

function renderJobs() {
    const filteredJobs = getFilteredJobs();

    const countLabel =
        filteredJobs.length === 1
            ? "oportunidad encontrada"
            : "oportunidades encontradas";

    resultsCount.textContent =
        `${filteredJobs.length} ${countLabel}`;

    jobsList.innerHTML = filteredJobs
        .map(createJobCard)
        .join("");

    jobsList.hidden = filteredJobs.length === 0;
    emptyState.hidden = filteredJobs.length !== 0;

    renderActiveFilters();
}

function createJobCard(job) {
    const isSaved = savedJobs.has(job.id);

    const greenTagIndex = job.tags.findIndex(
        (tag) =>
            normalizeText(tag).includes("sin experiencia")
    );

    const tagHtml = job.tags
        .map(
            (tag, index) => `
                <span class="explore-tag ${index === greenTagIndex ? "green" : ""}">
                    ${tag}
                </span>
            `
        )
        .join("");

    return `
        <article class="explore-job-card">

            <div class="company-logo" aria-hidden="true">
                ${job.icon}
            </div>

            <div class="job-card-main">

                <div class="job-title-row">
                    <div>
                        <h3>${job.title}</h3>
                        <p class="company-name">${job.company}</p>
                    </div>
                </div>

                <p class="job-description">
                    ${job.description}
                </p>

                <div class="job-meta">
                    <span>📍 ${job.location}</span>
                    <span>🏢 ${job.modality}</span>
                    <span>⏰ ${job.schedule}</span>
                </div>

                <div class="explore-tags">
                    ${tagHtml}
                </div>

            </div>

            <div class="card-actions">

                <button
                    class="save-button ${isSaved ? "saved" : ""}"
                    type="button"
                    aria-label="${isSaved ? "Quitar de guardados" : "Guardar oferta"}: ${job.title}"
                    data-save-job="${job.id}"
                >
                    ${isSaved ? "♥" : "♡"}
                </button>

                <div class="salary-block">
                    <span class="salary-label">
                        Salario aproximado
                    </span>

                    <strong class="salary-value">
                        ${formatSalary(job)}
                    </strong>
                </div>

                <span class="job-date">
                    Publicado: ${job.dateLabel}
                </span>

                <button
                    class="view-job-button"
                    type="button"
                    data-view-job="${job.id}"
                >
                    Ver empleo →
                </button>

            </div>

        </article>
    `;
}

function renderActiveFilters() {
    const chips = [];

    Object.entries(filtersState).forEach(
        ([filterName, values]) => {

            values.forEach((value) => {

                chips.push(`
                    <span class="active-filter">
                        ${value}

                        <button
                            type="button"
                            aria-label="Quitar filtro ${value}"
                            data-remove-filter="${filterName}"
                            data-filter-value="${value}"
                        >
                            ×
                        </button>
                    </span>
                `);
            });
        }
    );

    const keyword = keywordInput.value.trim();
    const locationSearch = locationInput.value.trim();

    if (keyword) {
        chips.push(`
            <span class="active-filter">

                ${keyword}

                <button
                    type="button"
                    aria-label="Quitar búsqueda de palabra clave"
                    data-remove-search="keyword"
                >
                    ×
                </button>

            </span>
        `);
    }

    if (locationSearch) {
        chips.push(`
            <span class="active-filter">

                ${locationSearch}

                <button
                    type="button"
                    aria-label="Quitar búsqueda de ubicación"
                    data-remove-search="location"
                >
                    ×
                </button>

            </span>
        `);
    }

    activeFilters.innerHTML = chips.join("");
}

function syncCheckboxState() {
    document
        .querySelectorAll(
            '.checkbox-option input[type="checkbox"]'
        )
        .forEach((checkbox) => {

            checkbox.checked =
                filtersState[checkbox.name]
                    .has(checkbox.value);

        });
}

function resetExplorer() {
    Object
        .values(filtersState)
        .forEach((set) => set.clear());

    keywordInput.value = "";
    locationInput.value = "";
    sortSelect.value = "recent";
    if (categorySelect) categorySelect.value = "";

    syncCheckboxState();
    renderJobs();
}

function toggleSavedJob(jobId) {
    if (savedJobs.has(jobId)) {
        savedJobs.delete(jobId);
    } else {
        savedJobs.add(jobId);
    }

    renderJobs();

    if (
        currentModalJobId === jobId &&
        !jobModal.hidden
    ) {
        updateModalSaveButton(jobId);
    }
}

function openJobModal(jobId) {
    const job = jobs.find(
        (item) => item.id === jobId
    );

    if (!job) return;

    currentModalJobId = job.id;

    modalJobIcon.textContent = job.icon;
    modalCompany.textContent = job.company;
    modalJobTitle.textContent = job.title;
    modalDescription.textContent = job.description;

    modalSalary.textContent =
        `${formatSalary(job)} · ${job.dateLabel}`;

    modalDetails.innerHTML = `
        <div class="modal-detail">
            📍 ${job.location}
        </div>

        <div class="modal-detail">
            🏢 ${job.modality}
        </div>

        <div class="modal-detail">
            ⏰ ${job.schedule}
        </div>

        <div class="modal-detail">
            ⭐ ${job.experience}
        </div>
    `;

    modalTags.innerHTML = job.tags
        .map(
            (tag) =>
                `<span class="explore-tag">${tag}</span>`
        )
        .join("");

    updateModalSaveButton(job.id);

    jobModal.hidden = false;

    document.body.classList.add("modal-open");

    modalApplyButton.textContent = "Aplicar →";
}

function updateModalSaveButton(jobId) {
    const isSaved = savedJobs.has(jobId);

    modalSaveButton.classList.toggle(
        "saved",
        isSaved
    );

    modalSaveButton.textContent =
        isSaved
            ? "♥ Guardada"
            : "♡ Guardar oferta";
}

function closeJobModal() {
    jobModal.hidden = true;

    document.body.classList.remove("modal-open");

    currentModalJobId = null;
}

function updateFromCheckbox(event) {
    const checkbox = event.target;

    if (
        !checkbox.matches(
            'input[type="checkbox"]'
        )
    ) {
        return;
    }

    const selectedSet =
        filtersState[checkbox.name];

    if (checkbox.checked) {
        selectedSet.add(checkbox.value);
    } else {
        selectedSet.delete(checkbox.value);
    }

    renderJobs();
}

jobsSearchForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        renderJobs();

        document
            .querySelector(".results-area")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
    }
);

keywordInput.addEventListener(
    "input",
    renderJobs
);

locationInput.addEventListener(
    "input",
    renderJobs
);

sortSelect.addEventListener(
    "change",
    renderJobs
);
if (categorySelect) categorySelect.addEventListener("change", renderJobs);

// Accept searches submitted from the homepage.
const params = new URLSearchParams(location.search);
if (params.has("keyword")) keywordInput.value = params.get("keyword");
if (params.has("location")) locationInput.value = params.get("location");

document.addEventListener(
    "change",
    updateFromCheckbox
);

clearFiltersButton.addEventListener(
    "click",
    resetExplorer
);

emptyClearFiltersButton.addEventListener(
    "click",
    resetExplorer
);

jobsList.addEventListener(
    "click",
    (event) => {

        const saveButton =
            event.target.closest(
                "[data-save-job]"
            );

        const viewButton =
            event.target.closest(
                "[data-view-job]"
            );

        if (saveButton) {
            toggleSavedJob(
                Number(saveButton.dataset.saveJob)
            );

            return;
        }

        if (viewButton) {
            openJobModal(
                Number(viewButton.dataset.viewJob)
            );
        }
    }
);

activeFilters.addEventListener(
    "click",
    (event) => {

        const removeFilterButton =
            event.target.closest(
                "[data-remove-filter]"
            );

        const removeSearchButton =
            event.target.closest(
                "[data-remove-search]"
            );

        if (removeFilterButton) {

            const removeFilter =
                removeFilterButton.dataset.removeFilter;

            const filterValue =
                removeFilterButton.dataset.filterValue;

            filtersState[removeFilter]
                .delete(filterValue);

            syncCheckboxState();
            renderJobs();

            return;
        }

        if (removeSearchButton) {

            if (
                removeSearchButton.dataset.removeSearch ===
                "keyword"
            ) {
                keywordInput.value = "";
            }

            if (
                removeSearchButton.dataset.removeSearch ===
                "location"
            ) {
                locationInput.value = "";
            }

            renderJobs();
        }
    }
);

document
    .querySelectorAll("[data-close-modal]")
    .forEach((element) => {

        element.addEventListener(
            "click",
            closeJobModal
        );

    });

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            !jobModal.hidden
        ) {
            closeJobModal();
        }

    }
);

modalSaveButton.addEventListener(
    "click",
    () => {

        if (currentModalJobId !== null) {
            toggleSavedJob(
                currentModalJobId
            );
        }

    }
);

modalApplyButton.addEventListener(
    "click",
    () => {
        alert(
            "La aplicación a una oferta se conectará en la siguiente etapa de PrimerPaso."
        );
    }
);

syncCheckboxState();
renderJobs();