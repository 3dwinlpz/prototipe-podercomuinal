const featuresList = [
  {
    icon: "images/create-task-icon.svg",
    title: "Diagnóstico Comunitario",
    description:
      "Identifica las necesidades del sector desde la voz directa de la comunidad.",
  },

  {
    icon: "images/collaborations-icon.svg",
    title: "Mapa de Actores",
    description:
      "Ubica y articula a líderes e instituciones clave para decisiones comunitarias.",
  },

  {
    icon: "images/reminders-icon.svg",
    title: "Matriz de Problemas",
    description:
      "Analiza causas, efectos y soluciones para organizar prioridades comunales.",
  },


  {
    icon: "images/progress-icon.svg",
    title: "Proyectos Prioritarios",
    description:
      "Acciones enfocadas en salud, servicios, producción e infraestructura comunal.",
  },

  {
    icon: "images/deadline-icon.svg",
    title: "Cronograma de Acciones",
    description:
      "Define tiempos y responsables para ejecutar acciones comunitarias eficientemente.",
  },

  {
    icon: "images/file-icon.svg",
    title: "Articulación Institucional",
    description:
      "Coordina con instituciones del Estado para fortalecer la autogestión popular.",
  },
];

const testimonialsList = [
  {
    review:
      "La Sala de Autogobierno es la expresión concreta del poder popular en acción, donde el pueblo construye y decide desde su territorio.",
    image: "images/chavez.png", // o icono simbólico
    name: "Hugo Chávez",
    designation: "Comandante Eterno",
  },
  {
    review:
      "Debemos transformar la democracia participativa en democracia comunal, donde la gente planifica, decide y ejecuta directamente.",
    image: "images/maduro.png",
    name: "Nicolás Maduro",
    designation: "Presidente de la República Bolivariana de Venezuela",
  },
  {
    review:
      "Con la Sala de Autogobierno fortalecemos el tejido social y construimos soluciones colectivas desde el corazón de cada comunidad.",
    image: "images/comuna.png",
    name: "Ministerio del Poder Popular para las Comunas",
    designation: "Órgano rector de la democracia comunal",
  },
];

const plans = [
  {
    name: "Diagnóstico Comunal",
    features: [
      "Levantamiento de necesidades básicas",
      "Caracterización del territorio",
      "Participación de los actores locales",
      "Detección de problemas clave",
      "Mapa socio-productivo",
      "Priorización popular",
    ],
    price: "Etapa Inicial",
    link: "#",
  },

  {
    name: "Planificación Estratégica",
    features: [
      "Formulación de proyectos comunitarios",
      "Cronograma de ejecución",
      "Alianzas institucionales",
      "Presupuesto participativo",
      "Matriz de solución de problemas",
      "Consolidación del Plan Comunal",
    ],
    price: "Etapa Intermedia",
    link: "#",
  },

  {
    name: "Gestión y Seguimiento",
    features: [
      "Creación de Sala de Autogobierno",
      "Monitoreo de avances",
      "Rendición de cuentas comunal",
      "Participación activa y continua",
      "Gestión de indicadores",
      "Revisión y ajuste de planes",
    ],
    price: "Etapa Permanente",
    link: "#",
  },
];


const featuresContent = document.querySelector("#features .content");
const testimonialCard = document.querySelector(
  "#testimonials .testimonial-card"
);
const prevBtn = document.querySelector("#testimonials .prev-btn");
const nextBtn = document.querySelector("#testimonials .next-btn");
const pricingContent = document.querySelector("#pricing .content");
const menuIcon = document.querySelector(".menu-icon");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
let currentTestimonialIndex = 0;

const displayFeatures = () => {
  featuresList.forEach((f) => {
    const html = `<div class="icon">
        <img src="${f.icon}" alt="" />
      </div>
      <h3>${f.title}</h3>
      <p>
        ${f.description}
      </p>`;

    const featureCard = document.createElement("div");
    featureCard.classList.add("feature-card");
    featureCard.innerHTML = html;

    featuresContent.appendChild(featureCard);
  });
};

displayFeatures();

const displayTestimonial = () => {
  const html = `<span class="quote-icon">
  <img src="images/quote-icon.svg" alt="" />
</span>

<p class="review">
 ${testimonialsList[currentTestimonialIndex].review}
</p>

<div class="reviewer-info">
  <div class="image">
    <img src="${testimonialsList[currentTestimonialIndex].image}" alt="" />
  </div>

  <div class="details">
    <div class="name">${testimonialsList[currentTestimonialIndex].name}</div>
    <div class="designation">${testimonialsList[currentTestimonialIndex].designation}</div>
  </div>
</div>`;

  testimonialCard.innerHTML = html;
  testimonialCard.classList.add("active");
};

displayTestimonial();

nextBtn.addEventListener("click", () => {
  testimonialCard.classList.remove("active");

  setTimeout(() => {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= testimonialsList.length) {
      currentTestimonialIndex = 0;
    }
    displayTestimonial();
  }, 200);
});

prevBtn.addEventListener("click", () => {
  testimonialCard.classList.remove("active");

  setTimeout(() => {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
      currentTestimonialIndex = testimonialsList.length - 1;
    }
    displayTestimonial();
  }, 200);
});

const displayPricing = () => {
  plans.forEach((p) => {
    const featuresHTML = p.features
      .map(
        (f) =>
          `<li><span class='icon'><img src='images/check-icon.svg'/></span>${f}</li>`
      )
      .join("");

    const html = `<h4 class="plan-name">${p.name}</h4>
    <ul class="plan-features">
      ${featuresHTML}
    </ul>
    <div class="plan-price">${p.price}</div>`;

    const plan = document.createElement("div");
    plan.classList.add("plan");
    plan.innerHTML = html;

    pricingContent.appendChild(plan);
  });
};

displayPricing();

menuIcon.addEventListener("click", () => {
  mobileNavMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    // Solo prevenir el comportamiento si es un ancla interna (#...)
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offset = targetElement.offsetTop - 60;
        window.scrollTo({ top: offset });
      }

      mobileNavMenu.classList.remove("active");
    }
  });
});