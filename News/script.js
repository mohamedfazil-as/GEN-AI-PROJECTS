/* =========================
   GNEWS CONFIG
========================= */
const API_KEY = "a6b6ec60f4a92cf264512e78ecb4d68e"; // add your key here

const newsContainer = document.getElementById("newsContainer");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

let articles = [];

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeUrl(url) {
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "#";
  } catch {
    return "#";
  }
}

/* =========================
   API URL BUILDER
========================= */
function getApiUrl(category = "all") {
  if (category === "all") {
    return `https://gnews.io/api/v4/top-headlines?lang=en&country=us&max=12&token=${API_KEY}`;
  }
  return `https://gnews.io/api/v4/top-headlines?lang=en&country=us&topic=${category}&max=12&token=${API_KEY}`;
}

/* =========================
   FETCH NEWS
========================= */
fetchNews();

async function fetchNews(category = "all") {
  try {
    showSkeletons();

    const res = await fetch(getApiUrl(category));
    const data = await res.json();

    articles = data.articles || [];

    // Small delay = smoother UX
    setTimeout(() => {
      displayNews(articles);
    }, 400);

  } catch (error) {
    console.error(error);
    newsContainer.innerHTML =
      `<p class="text-danger text-center">Failed to load news</p>`;
  }
}

/* =========================
   SKELETON LOADER
========================= */
function showSkeletons() {
  newsContainer.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="news-card skeleton" style="height:320px"></div>
    `;
    newsContainer.appendChild(col);
  }
}

/* =========================
   DISPLAY NEWS (STAGGERED)
========================= */
function displayNews(news) {
  newsContainer.innerHTML = "";

  if (news.length === 0) {
    newsContainer.innerHTML =
      `<p class="text-center text-muted">No news found</p>`;
    return;
  }

  news.forEach((article, index) => {
    const sourceName = escapeHtml(article.source?.name || "Unknown Source");
    const title = escapeHtml(article.title || "Untitled article");
    const description = escapeHtml(article.description || "");
    const imageUrl = safeUrl(article.image || "https://via.placeholder.com/400");
    const articleUrl = safeUrl(article.url);

    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.style.animationDelay = `${index * 80}ms`;
    col.classList.add("fade-up");

    col.innerHTML = `
      <a
        href="${articleUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="news-card news-card-link h-100 d-flex flex-column"
      >
        <img
          src="${imageUrl}"
          class="w-100"
          alt="${title}"
        >
        <div class="p-3 d-flex flex-column">
          <span class="badge badge-category mb-2">
            ${sourceName}
          </span>
          <h6>${title}</h6>
          <p class="small text-muted flex-grow-1">
            ${description}
          </p>
          <span class="read-more mt-auto">Read Full Article ↗</span>
        </div>
      </a>
    `;

    newsContainer.appendChild(col);
  });
}

/* =========================
   SEARCH FILTER (LIVE)
========================= */
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = articles.filter(article =>
    (article.title || "").toLowerCase().includes(value)
  );

  displayNews(filtered);
});

/* =========================
   CATEGORY BUTTONS (ACTIVE FX)
========================= */
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    searchInput.value = "";
    fetchNews(btn.dataset.category);
  });
});
