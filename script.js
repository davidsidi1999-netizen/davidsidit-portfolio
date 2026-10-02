// =========================================
// DAVID SIDIT PORTFOLIO
// =========================================

const portfolio = {
  editing: {
    title: "Video Editing",

    projects: [
      {
        title: "Сreative",
        client: "visual",
        cover: "images/editing/creative.jpg",
        video: "cADKHELegYY",
        aspect: "horizontal",
      },
      {
        title: "collage",
        client: "creative",
        cover: "images/editing/creative1.jpg",
        video: "1XF7hgGBPL0",
        aspect: "vertical",
      },
      {
        title: "REELS",
        client: "Сreative",
        cover: "images/editing/creative2.jpg",
        video: "Q-qxcIdZWi4",
        aspect: "vertical",
      },
      {
        title: "visual effect",
        client: "art",
        cover: "images/editing/creative3.jpg",
        video: "Xy72MKjUiPs",
        aspect: "vertical",
      },
      {
        title: "Сreative",
        client: "collage 2",
        cover: "images/editing/creative4.jpg",
        video: "lVdZKdfXOHI",
        aspect: "vertical",
      },
      {
        title: "collage story",
        client: "crt",
        cover: "images/editing/creative5.jpg",
        video: "ISXVdZnBchI",
        aspect: "vertical",
      },
    ],
  },

  creative: {
    title: "Creative Direction",

    projects: [
      {
        title: "Concept 1",
        client: "Artist",
        cover: "images/creative/project1.jpg",
        video: "jVKO2R_SaeQ",
        aspect: "vertical",
      },
      {
        title: "Concept Two",
        client: "Nuteki",
        cover: "images/creative/project2.jpg",
        video: "dZFurMVP03U",
        aspect: "vertical",
      },
      {
        title: "Concept lll",
        client: "Sing",
        cover: "images/creative/project3.jpg",
        video: "SNKkNo_0hWU",
        aspect: "vertical",
      },
      {
        title: "Concept Four",
        client: "Visual artist",
        cover: "images/creative/project4.jpg",
        video: "pOCwGo8iugQ",
        aspect: "vertical",
      },
      {
        title: "Concept 5",
        client: "Artist in car",
        cover: "images/creative/project5.jpg",
        video: "iBSJs6O9Se0",
        aspect: "vertical",
      },
      {
        title: "Concept Six",
        client: "Artist",
        cover: "images/creative/project6.jpg",
        video: "NznJBgEtu0Y",
        aspect: "vertical",
      },
    ],
  },

  ai: {
    title: "AI Visuals",

    projects: [
      {
        title: "AI Work",
        client: "AI FILM",
        cover: "images/ai/project1.jpg",
        video: "q4QqyrTRd2g",
        aspect: "horizontal",
      },
      {
        title: "AI CARTOON",
        client: "AI",
        cover: "images/ai/project2.jpg",
        video: "rRjbdjsGtv4",
        aspect: "horizontal",
      },
      {
        title: "AI",
        client: "AI ARTIST",
        cover: "images/ai/project3.jpg",
        video: "d64HGsJ_F5c",
        aspect: "vertical",
      },
      {
        title: "AI",
        client: "ADS",
        cover: "images/ai/project4.jpg",
        video: "t5JT3TKLzDU",
        aspect: "vertical",
      },
    ],
  },

  commercials: {
    title: "Commercials",

    projects: [
      {
        title: "USA",
        client: "REELS",
        cover: "images/commercials/project1.jpg",
        video: "Tx4y6CtplNc",
        aspect: "vertical",
      },
      {
        title: "PROMO",
        client: "building",
        cover: "images/commercials/project2.jpg",
        video: "tWDJQ6ClK84",
        aspect: "vertical",
      },
      {
        title: "S",
        client: "trend",
        cover: "images/commercials/project3.jpg",
        video: "Y_GEo7ze_to",
        aspect: "vertical",
      },
      {
        title: "WORK",
        client: "WTC",
        cover: "images/commercials/project4.jpg",
        video: "tIacThSc8ao",
        aspect: "vertical",
      },
    ],
  },
};

// =====================================
// OPEN MODAL (с сеткой)
// =====================================

let currentCategory = "";

function openCategory(category) {
  const modal = document.getElementById("modal");
  const gallery = document.getElementById("gallery");

  currentCategory = category;
  gallery.innerHTML = "";

  const current = portfolio[category];

  if (!current || !current.projects || current.projects.length === 0) {
    gallery.innerHTML =
      '<p style="color: #666; text-align: center; padding: 40px;">No projects yet</p>';
    modal.style.display = "flex";
    return;
  }

  // Создаём контейнер-сетку
  const grid = document.createElement("div");
  grid.className = "gallery-grid";

  current.projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img
        src="${project.cover}"
        alt="${project.title}"
        class="project-cover"
        onclick="playVideo('${project.video}', '${project.aspect || "horizontal"}')"
        style="cursor: pointer;"
      >
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.client}</p>
        <button onclick="playVideo('${project.video}', '${project.aspect || "horizontal"}')">▶ View Project</button>
      </div>
    `;
    grid.appendChild(card);
  });

  gallery.appendChild(grid);
  modal.style.display = "flex";
}

// =====================================
// PLAY VIDEO (компактный плеер)
// =====================================

function playVideo(videoId, aspect = "horizontal") {
  const gallery = document.getElementById("gallery");
  const playerClass =
    aspect === "vertical"
      ? "compact-player vertical"
      : "compact-player horizontal";

  gallery.innerHTML = `
    <div class="player-wrapper">
      <iframe
        id="portfolioVideo"
        class="${playerClass}"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div class="back-button">
        <button onclick="backToProjects()">← Back to Projects</button>
      </div>
    </div>
  `;
}

// =====================================
// BACK TO PROJECTS
// =====================================

function closeModal() {
  const modal = document.getElementById("modal");
  const gallery = document.getElementById("gallery");

  gallery.innerHTML = "";
  modal.style.display = "none";
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const toast = document.getElementById("welcome-toast");
  if (toast) {
    setTimeout(() => {
      toast.classList.add("show");
    }, 1000);

    setTimeout(() => {
      closeToast();
    }, 8000);
  }
});

function closeToast() {
  const toast = document.getElementById("welcome-toast");
  if (toast) {
    toast.classList.remove("show");
  }
}
