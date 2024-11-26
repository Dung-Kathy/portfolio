// ------------------------------
// Toggle Menu for Small Screens
// ------------------------------
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Gestion de l'affichage du menu au clic
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.classList.remove("show"); // Supprime la classe "show" en grand écran
    menu.style.display = "flex"; // Assure que le menu est visible en grand écran
  } else {
    menu.style.display = ""; // Remet l'état CSS par défaut
  }
});

// ------------------------------
// Project Data
// ------------------------------
const projects = [
  {
    id: 1,
    title: "Projet 1",
    image: "projet1.jpg",
    description: "Description détaillée du projet 1. Ce projet utilise HTML, CSS et JavaScript.",
    technologies: "Technologies : HTML, CSS, JavaScript",
    link: "https://github.com/user/projet1",
  },
  {
    id: 2,
    title: "Projet 2",
    image: "projet2.jpg",
    description: "Description détaillée du projet 2. Ce projet est basé sur React.",
    technologies: "Technologies : React, Redux",
    link: "https://github.com/user/projet2",
  },
  {
    id: 3,
    title: "Projet 3",
    image: "projet3.jpg",
    description: "Description détaillée du projet 3. C'est une application mobile.",
    technologies: "Technologies : Flutter, Firebase",
    link: "https://github.com/user/projet3",
  },
];
// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check for saved preference in localStorage
const savedMode = localStorage.getItem("darkMode");
if (savedMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});


function enableDarkMode() {
  body.classList.add("dark-mode");
  document.querySelectorAll("header, section, footer").forEach((el) => {
    el.classList.add("dark-mode");
  });
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  body.classList.remove("dark-mode");
  document.querySelectorAll("header, section, footer").forEach((el) => {
    el.classList.remove("dark-mode");
  });
  localStorage.setItem("darkMode", "disabled");
}

// ------------------------------
// Modal Handling
// ------------------------------
const modal = document.getElementById("project-modal");

function openModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (project) {
    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-image").src = project.image;
    document.getElementById("modal-description").textContent = project.description;
    document.getElementById("modal-tech").textContent = project.technologies;
    document.getElementById("modal-link").href = project.link;

    modal.style.display = "flex";
  }
}

function closeModal() {
  modal.style.display = "none";
}

// Close modal when clicking outside the modal content
modal?.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// ------------------------------
// Contact Form Validation
// ------------------------------
const contactForm = document.getElementById("contact-form");

contactForm?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate form fields
  if (!name || !email || !message) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Veuillez entrer une adresse e-mail valide.");
    return;
  }

  alert("Message envoyé avec succès !");
  this.reset();
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// ------------------------------
// General Enhancements
// ------------------------------
// Utility function to toggle visibility
function toggleVisibility(element, visible) {
  element.style.display = visible ? "flex" : "none";
}


const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
};

// Appliquez le mode sombre si stocké
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

toggleDarkModeBtn.addEventListener('click', toggleDarkMode);
const toggleDarkModeBtn = document.querySelector('.dark-mode-btn');
toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
