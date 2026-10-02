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
        video: "videos/editing/creative.mp4",
      },
      {
        title: "collage",
        client: "creative",
        cover: "images/editing/creative1.jpg",
        video: "videos/editing/creative1.mp4",
      },
      {
        title: "REELS",
        client: "Сreative",
        cover: "images/editing/creative2.jpg",
        video: "videos/editing/creative2.mp4",
      },
      {
        title: "visual effect",
        client: "art",
        cover: "images/editing/creative3.jpg",
        video: "videos/editing/creative3.mp4",
      },
      {
        title: "Сreative",
        client: "collage 2",
        cover: "images/editing/creative4.jpg",
        video: "videos/editing/creative4.mp4",
      },
      {
        title: "collage story",
        client: "crt",
        cover: "images/editing/creative5.jpg",
        video: "videos/editing/creative5.mp4",
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
        video: "videos/creative/project1.mp4",
      },
      {
        title: "Concept Two",
        client: "Nuteki",
        cover: "images/creative/project2.jpg",
        video: "videos/creative/project2.mp4",
      },
      {
        title: "Concept lll",
        client: "Sing",
        cover: "images/creative/project3.jpg",
        video: "videos/creative/project3.mp4",
      },
      {
        title: "Concept Four",
        client: "Visual artist",
        cover: "images/creative/project4.jpg",
        video: "videos/creative/project4.mp4",
      },
      {
        title: "Concept 5",
        client: "Artist in car",
        cover: "images/creative/project5.jpg",
        video: "videos/creative/project5.mp4",
      },
      {
        title: "Concept Six",
        client: "Artist",
        cover: "images/creative/project6.jpg",
        video: "videos/creative/project6.mp4",
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
        video: "videos/ai/project1.mp4",
      },
      {
        title: "AI CARTOON",
        client: "AI",
        cover: "images/ai/project2.jpg",
        video: "videos/ai/ai2.mp4",
      },
      {
        title: "AI",
        client: "AI ARTIST",
        cover: "images/ai/project3.jpg",
        video: "videos/ai/ai3.mp4",
      },
      {
        title: "AI",
        client: "ADS",
        cover: "images/ai/project4.jpg",
        video: "videos/ai/ai4.mp4",
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
        video: "videos/commercials/project1.mp4",
      },
      {
        title: "PROMO",
        client: "building",
        cover: "images/commercials/project2.jpg",
        video: "videos/commercials/project2.mp4",
      },
      {
        title: "S",
        client: "trend",
        cover: "images/commercials/project3.jpg",
        video: "videos/commercials/project3.mp4",
      },
      {
        title: "WORK",
        client: "WTC",
        cover: "images/commercials/project4.jpg",
        video: "videos/commercials/project4.mp4",
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
        onclick="playVideo('${project.video}')"
        style="cursor: pointer;"
      >
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.client}</p>
        <button onclick="playVideo('${project.video}')">▶ View Project</button>
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

function playVideo(video) {
  const gallery = document.getElementById("gallery");

  gallery.innerHTML = `

<div class="player-wrapper">

<video
id="portfolioVideo"
controls
autoplay
playsinline
class="compact-player">

<source src="${video}" type="video/mp4">

</video>

<div class="back-button">

<button onclick="backToProjects()">

← Back to Projects

</button>

</div>

</div>

`;
}

// =====================================
// BACK TO PROJECTS
// =====================================

function backToProjects() {
  openCategory(currentCategory);
}

// =====================================
// CLOSE MODAL
// =====================================

function closeModal() {
  const modal = document.getElementById("modal");
  const gallery = document.getElementById("gallery");
  const video = document.getElementById("portfolioVideo");

  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  gallery.innerHTML = "";
  modal.style.display = "none";
}

// =====================================
// CLICK OUTSIDE
// =====================================

window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
});

// =====================================
// ESC BUTTON
// =====================================

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// =====================================
// PAGE LOADED
// =====================================

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
