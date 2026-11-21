// Select existing interactive elements
const themeToggleBtn = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const emptyProjectsMessage = document.getElementById("empty-projects");
const formStatus = document.getElementById("form-status");


// Select GitHub API elements
const githubLoading = document.getElementById("github-loading");
const githubError = document.getElementById("github-error");
const githubRepositories = document.getElementById("github-repositories");
const githubSort = document.getElementById("github-sort");

// Store repositories received from the API
let repositories = [];

// Load the saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.setAttribute("data-theme", "dark");
  themeToggleBtn.textContent = "☀️";
} else {
  themeToggleBtn.textContent = "🌙";
}

// Toggle dark and light themes
themeToggleBtn.addEventListener("click", () => {
  const isDark =
    document.body.getAttribute("data-theme") === "dark";

  if (isDark) {
    document.body.removeAttribute("data-theme");
    themeToggleBtn.textContent = "🌙";
    localStorage.setItem("portfolio-theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
    themeToggleBtn.textContent = "☀️";
    localStorage.setItem("portfolio-theme", "dark");
  }
});

// Filter the original project cards
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    let visibleProjects = 0;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
    });

    button.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow =
        selectedFilter === "all" ||
        card.dataset.category === selectedFilter;

      card.style.display = shouldShow ? "flex" : "none";

      if (shouldShow) {
        visibleProjects++;
      }
    });

    emptyProjectsMessage.hidden = visibleProjects > 0;
  });
});

// Validate and submit the contact form
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const emailInput = document.getElementById("email").value.trim();
  const messageInput = document.getElementById("message").value.trim();

  if (!nameInput || !emailInput || !messageInput) {
    formStatus.textContent =
      "Please complete all fields before sending your message.";
    formStatus.className = "form-status error";
    return;
  }

  formStatus.textContent =
    `Thank you, ${nameInput}! Your message has been received.`;
  formStatus.className = "form-status success";

  contactForm.reset();
});

// Fetch repositories from the GitHub API
async function loadRepositories() {
  githubLoading.hidden = false;
  githubError.hidden = true;

  try {
    const response = await fetch(
      "https://api.github.com/users/Rimas449/repos?per_page=100"
    );

    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }

    repositories = await response.json();

    githubLoading.hidden = true;
    renderRepositories();
  } catch (error) {
    githubLoading.hidden = true;
    githubError.hidden = false;
    githubRepositories.innerHTML = "";
  }
}

// Sort repositories based on the selected option
function sortRepositories(repositoryList) {
  const selectedSort = githubSort.value;

  return [...repositoryList].sort((repoA, repoB) => {
    if (selectedSort === "name") {
      return repoA.name.localeCompare(repoB.name);
    }

    if (selectedSort === "stars") {
      return repoB.stargazers_count - repoA.stargazers_count;
    }

    return new Date(repoB.updated_at) - new Date(repoA.updated_at);
  });
}

// Display repositories on the page
function renderRepositories() {
  githubRepositories.innerHTML = "";

  if (repositories.length === 0) {
    githubRepositories.textContent =
      "No public GitHub repositories were found.";
    return;
  }

  const sortedRepositories = sortRepositories(repositories);

  sortedRepositories.forEach((repository) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h3");
    title.textContent = repository.name;

    const description = document.createElement("p");
    description.textContent =
      repository.description || "No description available.";

    const details = document.createElement("p");
    details.textContent =
      `Language: ${repository.language || "Not specified"} | Stars: ${repository.stargazers_count}`;

    const link = document.createElement("a");
    link.href = repository.html_url;
    link.textContent = "View repository";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(details);
    cardBody.appendChild(link);
    card.appendChild(cardBody);

    githubRepositories.appendChild(card);
  });
}

// Re-render repositories when the sorting option changes
githubSort.addEventListener("change", renderRepositories);

// Start loading the GitHub repositories
loadRepositories();
