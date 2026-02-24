const mockProducts = [
  {
    id: 1,
    name: "Apple iPhone 15 (128GB)",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    amazonPrice: 72999,
    flipkartPrice: 71749,
    category: "Smartphone",
    rating: 4.8,
    lastUpdated: "2026-02-20T07:35:00",
    priceHistory: [
      { label: "Mon", amazon: 75999, flipkart: 74899 },
      { label: "Tue", amazon: 74999, flipkart: 73999 },
      { label: "Wed", amazon: 74499, flipkart: 73299 },
      { label: "Thu", amazon: 73999, flipkart: 72799 },
      { label: "Fri", amazon: 73499, flipkart: 72199 },
      { label: "Sat", amazon: 73199, flipkart: 71999 },
      { label: "Sun", amazon: 72999, flipkart: 71749 },
    ],
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
    amazonPrice: 67999,
    flipkartPrice: 68499,
    category: "Smartphone",
    rating: 4.6,
    lastUpdated: "2026-02-20T08:12:00",
    priceHistory: [
      { label: "Mon", amazon: 70199, flipkart: 69999 },
      { label: "Tue", amazon: 69499, flipkart: 69399 },
      { label: "Wed", amazon: 68999, flipkart: 69199 },
      { label: "Thu", amazon: 68699, flipkart: 68949 },
      { label: "Fri", amazon: 68399, flipkart: 68799 },
      { label: "Sat", amazon: 68199, flipkart: 68599 },
      { label: "Sun", amazon: 67999, flipkart: 68499 },
    ],
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    amazonPrice: 27990,
    flipkartPrice: 28699,
    category: "Audio",
    rating: 4.7,
    lastUpdated: "2026-02-20T06:55:00",
    priceHistory: [
      { label: "Mon", amazon: 29990, flipkart: 30599 },
      { label: "Tue", amazon: 29490, flipkart: 30199 },
      { label: "Wed", amazon: 29190, flipkart: 29899 },
      { label: "Thu", amazon: 28790, flipkart: 29599 },
      { label: "Fri", amazon: 28490, flipkart: 29299 },
      { label: "Sat", amazon: 28190, flipkart: 28999 },
      { label: "Sun", amazon: 27990, flipkart: 28699 },
    ],
  },
  {
    id: 4,
    name: "ASUS Vivobook 16X Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    amazonPrice: 56990,
    flipkartPrice: 55999,
    category: "Laptop",
    rating: 4.4,
    lastUpdated: "2026-02-20T09:02:00",
    priceHistory: [
      { label: "Mon", amazon: 58990, flipkart: 57999 },
      { label: "Tue", amazon: 58390, flipkart: 57399 },
      { label: "Wed", amazon: 57990, flipkart: 56999 },
      { label: "Thu", amazon: 57590, flipkart: 56599 },
      { label: "Fri", amazon: 57290, flipkart: 56299 },
      { label: "Sat", amazon: 57190, flipkart: 56099 },
      { label: "Sun", amazon: 56990, flipkart: 55999 },
    ],
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80",
    amazonPrice: 38999,
    flipkartPrice: 39499,
    category: "Wearables",
    rating: 4.5,
    lastUpdated: "2026-02-20T05:48:00",
    priceHistory: [
      { label: "Mon", amazon: 40999, flipkart: 41499 },
      { label: "Tue", amazon: 40399, flipkart: 40999 },
      { label: "Wed", amazon: 39999, flipkart: 40499 },
      { label: "Thu", amazon: 39699, flipkart: 40199 },
      { label: "Fri", amazon: 39399, flipkart: 39899 },
      { label: "Sat", amazon: 39199, flipkart: 39699 },
      { label: "Sun", amazon: 38999, flipkart: 39499 },
    ],
  },
  {
    id: 6,
    name: "LG 55-inch 4K Smart TV",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    amazonPrice: 49990,
    flipkartPrice: 49490,
    category: "Television",
    rating: 4.3,
    lastUpdated: "2026-02-20T07:58:00",
    priceHistory: [
      { label: "Mon", amazon: 52990, flipkart: 52490 },
      { label: "Tue", amazon: 52190, flipkart: 51790 },
      { label: "Wed", amazon: 51590, flipkart: 51290 },
      { label: "Thu", amazon: 50990, flipkart: 50690 },
      { label: "Fri", amazon: 50590, flipkart: 50290 },
      { label: "Sat", amazon: 50290, flipkart: 49890 },
      { label: "Sun", amazon: 49990, flipkart: 49490 },
    ],
  },
  {
    id: 7,
    name: "Canon EOS R50 Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    amazonPrice: 71990,
    flipkartPrice: 70699,
    category: "Camera",
    rating: 4.6,
    lastUpdated: "2026-02-20T08:25:00",
    priceHistory: [
      { label: "Mon", amazon: 74990, flipkart: 73899 },
      { label: "Tue", amazon: 74290, flipkart: 73299 },
      { label: "Wed", amazon: 73690, flipkart: 72699 },
      { label: "Thu", amazon: 72990, flipkart: 71999 },
      { label: "Fri", amazon: 72590, flipkart: 71399 },
      { label: "Sat", amazon: 72290, flipkart: 70999 },
      { label: "Sun", amazon: 71990, flipkart: 70699 },
    ],
  },
  {
    id: 8,
    name: "boAt Airdopes 413 ANC",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80",
    amazonPrice: 2299,
    flipkartPrice: 2199,
    category: "Audio",
    rating: 4.2,
    lastUpdated: "2026-02-20T06:20:00",
    priceHistory: [
      { label: "Mon", amazon: 2699, flipkart: 2599 },
      { label: "Tue", amazon: 2599, flipkart: 2499 },
      { label: "Wed", amazon: 2499, flipkart: 2399 },
      { label: "Thu", amazon: 2449, flipkart: 2349 },
      { label: "Fri", amazon: 2399, flipkart: 2299 },
      { label: "Sat", amazon: 2349, flipkart: 2249 },
      { label: "Sun", amazon: 2299, flipkart: 2199 },
    ],
  },
];

const FALLBACK_PRODUCT_IMAGE = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
    <rect width="320" height="320" fill="#0f172a"/>
    <rect x="35" y="55" width="250" height="210" rx="22" fill="#1e293b" stroke="#334155" stroke-width="6"/>
    <circle cx="120" cy="115" r="20" fill="#22c55e"/>
    <path d="M70 220l55-65 45 45 30-30 50 50" fill="none" stroke="#38bdf8" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="160" y="287" fill="#e2e8f0" font-size="22" text-anchor="middle" font-family="Arial, sans-serif">Image unavailable</text>
  </svg>`
)}`;

const state = {
  comparison: new Set(),
  watchlist: new Map(),
  alertCount: 0,
  modalProductId: null,
  scrollObserver: null,
  charts: {},
};

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const ui = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  initializeState();
  bindEvents();
  initAOS();
  renderAll();
  initCharts();
  runComparison();
  initializeChatbot();
});

function cacheDom() {
  ui.searchInput = document.getElementById("searchInput");
  ui.sortSelect = document.getElementById("sortSelect");
  ui.productGrid = document.getElementById("productGrid");
  ui.totalProducts = document.getElementById("totalProducts");
  ui.amazonWins = document.getElementById("amazonWins");
  ui.flipkartWins = document.getElementById("flipkartWins");
  ui.avgGap = document.getElementById("avgGap");
  ui.momentumLabel = document.getElementById("momentumLabel");
  ui.comparisonPicker = document.getElementById("comparisonPicker");
  ui.compareBtn = document.getElementById("compareBtn");
  ui.clearCompareBtn = document.getElementById("clearCompareBtn");
  ui.insightList = document.getElementById("insightList");
  ui.watchlistContainer = document.getElementById("watchlistContainer");
  ui.simulateDropBtn = document.getElementById("simulateDropBtn");
  ui.alertBellBtn = document.getElementById("alertBellBtn");
  ui.alertBadge = document.getElementById("alertBadge");
  ui.priceAlertToast = document.getElementById("priceAlertToast");
  ui.toastBodyText = document.getElementById("toastBodyText");
  ui.chatbotToggle = document.getElementById("chatbotToggle");
  ui.chatbotPanel = document.getElementById("chatbotPanel");
  ui.closeChatbot = document.getElementById("closeChatbot");
  ui.chatMessages = document.getElementById("chatMessages");
  ui.chatInput = document.getElementById("chatInput");
  ui.chatSendBtn = document.getElementById("chatSendBtn");

  ui.productModal = document.getElementById("productModal");
  ui.modalProductImg = document.getElementById("modalProductImg");
  ui.modalProductName = document.getElementById("modalProductName");
  ui.modalCategory = document.getElementById("modalCategory");
  ui.modalAmazonPrice = document.getElementById("modalAmazonPrice");
  ui.modalFlipkartPrice = document.getElementById("modalFlipkartPrice");
  ui.modalGap = document.getElementById("modalGap");

  ui.toast = new bootstrap.Toast(ui.priceAlertToast, { delay: 3800 });
  ui.modalInstance = new bootstrap.Modal(ui.productModal);
}

function initializeState() {
  mockProducts.forEach((product) => {
    state.watchlist.set(product.id, {
      enabled: false,
      target: Math.round(minPrice(product) * 0.95),
      lastAlertPrice: null,
    });
  });

  state.comparison.add(mockProducts[0].id);
  state.comparison.add(mockProducts[1].id);
}

function bindEvents() {
  ui.searchInput.addEventListener("input", renderAll);
  ui.sortSelect.addEventListener("change", renderAll);
  ui.compareBtn.addEventListener("click", runComparison);
  ui.clearCompareBtn.addEventListener("click", clearComparison);
  ui.simulateDropBtn.addEventListener("click", simulatePriceDrop);
  ui.alertBellBtn.addEventListener("click", showAlertSummary);

  ui.productGrid.addEventListener("click", (event) => {
    const detailsBtn = event.target.closest("[data-action='details']");
    const watchBtn = event.target.closest("[data-action='toggle-watch']");
    const compareBtn = event.target.closest("[data-action='toggle-compare']");

    if (detailsBtn) {
      openProductModal(Number(detailsBtn.dataset.id));
    }

    if (watchBtn) {
      toggleWatchlist(Number(watchBtn.dataset.id));
    }

    if (compareBtn) {
      toggleComparison(Number(compareBtn.dataset.id));
    }
  });

  ui.comparisonPicker.addEventListener("change", (event) => {
    const checkbox = event.target.closest(".compare-input");
    if (!checkbox) {
      return;
    }

    const id = Number(checkbox.dataset.id);
    if (checkbox.checked) {
      if (state.comparison.size >= 3) {
        checkbox.checked = false;
        pushBotMessage("You can select up to 3 products for compact comparison.");
        return;
      }
      state.comparison.add(id);
    } else {
      state.comparison.delete(id);
    }

    renderComparisonPicker();
    renderProductGrid();
    runComparison();
  });

  ui.watchlistContainer.addEventListener("change", (event) => {
    const toggle = event.target.closest(".watch-enable");
    if (!toggle) {
      return;
    }
    const id = Number(toggle.dataset.id);
    const entry = state.watchlist.get(id);
    entry.enabled = toggle.checked;
    if (entry.enabled) {
      checkProductAlert(findProductById(id), true);
    }
    renderWatchlist();
  });

  ui.watchlistContainer.addEventListener("click", (event) => {
    const saveBtn = event.target.closest("[data-action='save-alert']");
    if (!saveBtn) {
      return;
    }
    const id = Number(saveBtn.dataset.id);
    const input = ui.watchlistContainer.querySelector(
      `.alert-target[data-id='${id}']`
    );
    const nextValue = Number(input.value);
    if (!Number.isFinite(nextValue) || nextValue <= 0) {
      return;
    }
    const watch = state.watchlist.get(id);
    watch.target = Math.round(nextValue);
    checkProductAlert(findProductById(id), true);
    renderWatchlist();
  });

  ui.chatbotToggle.addEventListener("click", toggleChatbot);
  ui.chatbotToggle.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      toggleChatbot();
    }
  });
  ui.closeChatbot.addEventListener("click", toggleChatbot);
  ui.chatSendBtn.addEventListener("click", sendChatMessage);
  ui.chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendChatMessage();
    }
  });
}

function initAOS() {
  AOS.init({
    duration: 750,
    easing: "ease-out-cubic",
    offset: 22,
    once: false,
    mirror: true,
  });
}

function getVisibleProducts() {
  const searchTerm = ui.searchInput.value.trim().toLowerCase();
  const sortValue = ui.sortSelect.value;

  let list = mockProducts.filter((product) => {
    if (!searchTerm) {
      return true;
    }
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  });

  switch (sortValue) {
    case "nameAsc":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "nameDesc":
      list.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "amazonLow":
      list.sort((a, b) => a.amazonPrice - b.amazonPrice);
      break;
    case "flipkartLow":
      list.sort((a, b) => a.flipkartPrice - b.flipkartPrice);
      break;
    case "diffHigh":
      list.sort((a, b) => priceGap(b) - priceGap(a));
      break;
    case "ratingHigh":
      list.sort((a, b) => b.rating - a.rating);
      break;
    default:
      list.sort((a, b) => a.id - b.id);
      break;
  }

  return list;
}

function renderAll() {
  renderStats();
  renderProductGrid();
  renderComparisonPicker();
  renderWatchlist();
  refreshCharts();
  attachScrollFade();
}

function renderStats() {
  const total = mockProducts.length;
  const amazonWins = mockProducts.filter(
    (product) => bestPlatform(product) === "Amazon"
  ).length;
  const flipkartWins = mockProducts.filter(
    (product) => bestPlatform(product) === "Flipkart"
  ).length;
  const avgGap = Math.round(
    mockProducts.reduce((sum, product) => sum + priceGap(product), 0) /
      mockProducts.length
  );

  ui.totalProducts.textContent = String(total);
  ui.amazonWins.textContent = String(amazonWins);
  ui.flipkartWins.textContent = String(flipkartWins);
  ui.avgGap.textContent = formatCurrency(avgGap);
}

function renderProductGrid() {
  const products = getVisibleProducts();
  if (!products.length) {
    ui.productGrid.innerHTML =
      "<div class='col-12'><div class='comparison-panel text-secondary'>No products match your search.</div></div>";
    return;
  }

  ui.productGrid.innerHTML = products
    .map((product) => {
      const best = bestPlatform(product);
      const watch = state.watchlist.get(product.id);
      const selectedForCompare = state.comparison.has(product.id);
      const productImage = resolveProductImage(product.image);
      return `
        <div class="col-12 col-md-6 col-xl-4">
          <article class="product-card p-3">
            <div class="d-flex gap-3">
              <div class="product-img-wrap">
                <img src="${productImage}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_PRODUCT_IMAGE}';" />
              </div>
              <div class="flex-grow-1">
                <div class="d-flex justify-content-between gap-2 align-items-start">
                  <h3 class="h6 text-light mb-1">${product.name}</h3>
                  <span class="best-platform-badge ${bestBadgeClass(
                    best
                  )}">${best}</span>
                </div>
                <p class="text-secondary small mb-1">${product.category} | Rating ${
        product.rating
      }/5</p>
                <p class="text-secondary small mb-0">Updated ${relativeUpdated(
                  product.lastUpdated
                )}</p>
              </div>
            </div>
            <div class="d-flex flex-wrap gap-2 my-3">
              <span class="price-pill pill-amazon">Amazon ${formatCurrency(
                product.amazonPrice
              )}</span>
              <span class="price-pill pill-flipkart">Flipkart ${formatCurrency(
                product.flipkartPrice
              )}</span>
              <span class="price-pill pill-gap">Diff ${formatCurrency(
                priceGap(product)
              )}</span>
            </div>
            <div class="d-flex flex-wrap gap-2">
              <button class="btn btn-sm btn-outline-light" data-action="details" data-id="${
                product.id
              }">View Details</button>
              <button class="btn btn-sm ${
                watch.enabled ? "btn-warning" : "btn-outline-primary"
              }" data-action="toggle-watch" data-id="${product.id}">
                ${watch.enabled ? "Watching" : "Add Watch"}
              </button>
              <button class="btn btn-sm ${
                selectedForCompare ? "btn-primary" : "btn-outline-info"
              }" data-action="toggle-compare" data-id="${product.id}">
                ${selectedForCompare ? "Selected" : "Compare"}
              </button>
            </div>
          </article>
        </div>
      `;
    })
    .join("");
}

function renderComparisonPicker() {
  ui.comparisonPicker.innerHTML = mockProducts
    .map((product) => {
      const checked = state.comparison.has(product.id);
      const disabled = !checked && state.comparison.size >= 3;
      return `
        <div class="col-12 col-md-4">
          <label class="comparison-chip d-flex align-items-center gap-2 w-100 ${disabled ? "opacity-50" : ""}">
            <input class="compare-input" type="checkbox" data-id="${product.id}" ${checked ? "checked" : ""} ${
        disabled ? "disabled" : ""
      } />
            <span class="small">${product.name}</span>
          </label>
        </div>
      `;
    })
    .join("");
}

function runComparison() {
  const selectedProducts = mockProducts.filter((product) =>
    state.comparison.has(product.id)
  );

  if (selectedProducts.length < 2) {
    ui.insightList.innerHTML =
      "<li>Select at least 2 products to generate comparison analytics.</li>";
    if (state.charts.comparisonChart) {
      state.charts.comparisonChart.data.datasets = [];
      state.charts.comparisonChart.update();
    }
    return;
  }

  const palette = ["#38bdf8", "#22c55e", "#f59e0b"];
  const datasets = selectedProducts.map((product, index) => ({
    label: product.name,
    data: [product.amazonPrice, product.flipkartPrice],
    borderColor: palette[index % palette.length],
    backgroundColor: palette[index % palette.length],
    fill: false,
    tension: 0.2,
    pointRadius: 4,
    pointHoverRadius: 6,
  }));

  if (state.charts.comparisonChart) {
    state.charts.comparisonChart.data.labels = ["Amazon", "Flipkart"];
    state.charts.comparisonChart.data.datasets = datasets;
    state.charts.comparisonChart.update();
  }

  const insights = [];
  selectedProducts.forEach((product) => {
    const best = bestPlatform(product);
    insights.push(
      `${product.name}: ${best} gives best price by ${formatCurrency(
        priceGap(product)
      )}.`
    );
  });

  const bestDeal = selectedProducts.reduce((current, candidate) =>
    minPrice(candidate) < minPrice(current) ? candidate : current
  );
  insights.push(
    `Best absolute deal: ${bestDeal.name} at ${formatCurrency(
      minPrice(bestDeal)
    )}.`
  );

  const amazonCount = selectedProducts.filter(
    (product) => bestPlatform(product) === "Amazon"
  ).length;
  const flipkartCount = selectedProducts.filter(
    (product) => bestPlatform(product) === "Flipkart"
  ).length;
  insights.push(
    `Platform lead: Amazon ${amazonCount} | Flipkart ${flipkartCount} across selected products.`
  );

  ui.insightList.innerHTML = insights.map((text) => `<li>${text}</li>`).join("");
}

function clearComparison() {
  state.comparison.clear();
  renderComparisonPicker();
  renderProductGrid();
  runComparison();
}

function renderWatchlist() {
  ui.watchlistContainer.innerHTML = mockProducts
    .map((product) => {
      const watch = state.watchlist.get(product.id);
      const current = minPrice(product);
      const alertReady = watch.enabled && current <= watch.target;
      return `
        <div class="col-12 col-lg-6">
          <div class="watch-item ${alertReady ? "border-danger" : ""}" data-watch-id="${
        product.id
      }">
            <div class="d-flex justify-content-between gap-3 align-items-start">
              <div>
                <h6 class="text-light">${product.name}</h6>
                <p class="text-secondary small mb-2">Current Best: ${formatCurrency(
                  current
                )} (${bestPlatform(product)})</p>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input watch-enable" data-id="${
                  product.id
                }" type="checkbox" role="switch" ${watch.enabled ? "checked" : ""}>
              </div>
            </div>
            <div class="d-flex gap-2 align-items-center">
              <input type="number" min="1" class="form-control form-control-dark alert-target" data-id="${
                product.id
              }" value="${watch.target}" />
              <button class="btn btn-outline-primary btn-sm" data-action="save-alert" data-id="${
                product.id
              }">Set Alert</button>
            </div>
            <small class="${
              alertReady ? "text-warning" : "text-secondary"
            } d-block mt-2">
              ${
                alertReady
                  ? "Target met. Alert triggered for this product."
                  : `Alert triggers when best price goes below ${formatCurrency(
                      watch.target
                    )}.`
              }
            </small>
          </div>
        </div>
      `;
    })
    .join("");
  attachScrollFade();
}

function toggleWatchlist(id) {
  const watch = state.watchlist.get(id);
  watch.enabled = !watch.enabled;
  if (watch.enabled) {
    checkProductAlert(findProductById(id), true);
  }
  renderProductGrid();
  renderWatchlist();
}

function checkAllAlerts() {
  mockProducts.forEach((product) => checkProductAlert(product));
}

function checkProductAlert(product, force = false) {
  const watch = state.watchlist.get(product.id);
  if (!watch || !watch.enabled) {
    return;
  }

  const current = minPrice(product);
  if (current <= watch.target) {
    if (
      force ||
      watch.lastAlertPrice === null ||
      current < watch.lastAlertPrice
    ) {
      watch.lastAlertPrice = current;
      triggerAlert(product, current, watch.target);
    }
  }
}

function triggerAlert(product, current, target) {
  state.alertCount += 1;
  updateAlertBadge();
  ui.toastBodyText.textContent = `${product.name} dropped to ${formatCurrency(
    current
  )} (target ${formatCurrency(target)}).`;
  ui.toast.show();

  const watchCard = ui.watchlistContainer.querySelector(
    `[data-watch-id='${product.id}']`
  );
  if (watchCard) {
    watchCard.classList.add("alert-active");
    setTimeout(() => watchCard.classList.remove("alert-active"), 1300);
  }
}

function updateAlertBadge() {
  if (state.alertCount > 0) {
    ui.alertBadge.classList.remove("d-none");
    ui.alertBadge.textContent = String(state.alertCount);
  } else {
    ui.alertBadge.classList.add("d-none");
  }
}

function showAlertSummary() {
  if (state.alertCount === 0) {
    ui.toastBodyText.textContent = "No new price drops yet. Alerts are active.";
    ui.toast.show();
    return;
  }
  ui.toastBodyText.textContent = `${state.alertCount} alert(s) detected. Scroll to Watchlist for details.`;
  ui.toast.show();
}

function simulatePriceDrop() {
  const shuffled = [...mockProducts].sort(() => Math.random() - 0.5);
  const impacted = shuffled.slice(0, 2);

  impacted.forEach((product) => {
    const amazonDrop = randomInt(150, 1200);
    const flipDrop = randomInt(150, 1200);
    const changeAmazon = Math.random() > 0.35;
    const changeFlipkart = Math.random() > 0.35;

    if (changeAmazon) {
      product.amazonPrice = Math.max(499, product.amazonPrice - amazonDrop);
    }
    if (changeFlipkart) {
      product.flipkartPrice = Math.max(499, product.flipkartPrice - flipDrop);
    }
    if (!changeAmazon && !changeFlipkart) {
      product.flipkartPrice = Math.max(499, product.flipkartPrice - flipDrop);
    }

    product.lastUpdated = new Date().toISOString();
    appendPriceHistory(product);
  });

  renderAll();
  runComparison();
  checkAllAlerts();

  ui.toastBodyText.textContent = `Price movement detected for ${impacted
    .map((product) => product.name.split(" ").slice(0, 2).join(" "))
    .join(" and ")}.`;
  ui.toast.show();
}

function openProductModal(id) {
  const product = findProductById(id);
  if (!product) {
    return;
  }

  state.modalProductId = id;
  ui.modalProductImg.src = resolveProductImage(product.image);
  ui.modalProductImg.onerror = () => {
    ui.modalProductImg.onerror = null;
    ui.modalProductImg.src = FALLBACK_PRODUCT_IMAGE;
  };
  ui.modalProductName.textContent = product.name;
  ui.modalCategory.textContent = `${product.category} | Rating ${product.rating}/5 | Updated ${relativeUpdated(
    product.lastUpdated
  )}`;
  ui.modalAmazonPrice.textContent = `Amazon ${formatCurrency(product.amazonPrice)}`;
  ui.modalFlipkartPrice.textContent = `Flipkart ${formatCurrency(
    product.flipkartPrice
  )}`;
  ui.modalGap.textContent = `Difference ${formatCurrency(priceGap(product))}`;
  renderModalHistoryChart(product);
  ui.modalInstance.show();
}

function renderModalHistoryChart(product) {
  const context = document.getElementById("modalHistoryChart");
  if (state.charts.modalHistoryChart) {
    state.charts.modalHistoryChart.destroy();
  }
  state.charts.modalHistoryChart = new Chart(context, {
    type: "line",
    data: {
      labels: product.priceHistory.map((point) => point.label),
      datasets: [
        {
          label: "Amazon",
          data: product.priceHistory.map((point) => point.amazon),
          borderColor: "#38bdf8",
          backgroundColor: "rgba(56,189,248,0.2)",
          tension: 0.35,
          fill: false,
        },
        {
          label: "Flipkart",
          data: product.priceHistory.map((point) => point.flipkart),
          borderColor: "#22c55e",
          backgroundColor: "rgba(34,197,94,0.2)",
          tension: 0.35,
          fill: false,
        },
      ],
    },
    options: baseChartOptions(),
  });
}

function initCharts() {
  initMiniLineChart();
  initLineChart();
  initBarChart();
  initPieChart();
  initDonutChart();
  initComparisonChart();
}

function refreshCharts() {
  refreshMiniLineChart();
  refreshLineChart();
  refreshBarChart();
  refreshPieChart();
  refreshDonutChart();
}

function initMiniLineChart() {
  const context = document.getElementById("miniLineChart");
  state.charts.miniLineChart = new Chart(context, {
    type: "line",
    data: buildMomentumSeries(),
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(ctx) {
              return formatCurrency(Math.round(ctx.parsed.y));
            },
          },
        },
      },
      scales: {
        x: { display: false },
        y: { display: false },
      },
      elements: {
        line: { borderWidth: 2.2 },
        point: { radius: 0 },
      },
      animation: {
        duration: 1300,
        easing: "easeOutQuart",
      },
    },
  });
  updateMomentumLabel();
}

function refreshMiniLineChart() {
  if (!state.charts.miniLineChart) {
    return;
  }
  state.charts.miniLineChart.data = buildMomentumSeries();
  state.charts.miniLineChart.update();
  updateMomentumLabel();
}

function buildMomentumSeries() {
  const labels = mockProducts[0].priceHistory.map((point) => point.label);
  const values = labels.map((_, index) => {
    const sum = mockProducts.reduce(
      (total, product) =>
        total +
        Math.min(
          product.priceHistory[index].amazon,
          product.priceHistory[index].flipkart
        ),
      0
    );
    return Math.round(sum / mockProducts.length);
  });

  return {
    labels,
    datasets: [
      {
        label: "Average Best Price",
        data: values,
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56,189,248,0.28)",
        fill: true,
        tension: 0.38,
      },
    ],
  };
}

function updateMomentumLabel() {
  const series = buildMomentumSeries().datasets[0].data;
  const first = series[0];
  const last = series[series.length - 1];
  const delta = ((first - last) / first) * 100;
  const symbol = delta >= 0 ? "+" : "-";
  const value = `${symbol}${Math.abs(delta).toFixed(1)}%`;
  ui.momentumLabel.textContent = value;
  ui.momentumLabel.classList.toggle("text-success", delta >= 0);
  ui.momentumLabel.classList.toggle("text-warning", delta < 0);
}

function initLineChart() {
  const context = document.getElementById("lineChart");
  state.charts.lineChart = new Chart(context, {
    type: "line",
    data: buildLineData(),
    options: baseChartOptions(),
  });
}

function refreshLineChart() {
  if (!state.charts.lineChart) {
    return;
  }
  state.charts.lineChart.data = buildLineData();
  state.charts.lineChart.update();
}

function buildLineData() {
  const labels = mockProducts[0].priceHistory.map((point) => point.label);
  const palette = ["#38bdf8", "#22c55e", "#f59e0b", "#fb7185"];
  const products = mockProducts.slice(0, 4);
  const datasets = products.map((product, index) => ({
    label: product.name.split(" ").slice(0, 3).join(" "),
    data: product.priceHistory.map((point) => Math.min(point.amazon, point.flipkart)),
    borderColor: palette[index],
    backgroundColor: "transparent",
    fill: false,
    tension: 0.3,
    pointRadius: 2,
    pointHoverRadius: 5,
  }));

  return { labels, datasets };
}

function initBarChart() {
  const context = document.getElementById("barChart");
  state.charts.barChart = new Chart(context, {
    type: "bar",
    data: buildBarData(),
    options: baseChartOptions(),
  });
}

function refreshBarChart() {
  if (!state.charts.barChart) {
    return;
  }
  state.charts.barChart.data = buildBarData();
  state.charts.barChart.update();
}

function buildBarData() {
  return {
    labels: mockProducts.map((product) =>
      product.name.split(" ").slice(0, 2).join(" ")
    ),
    datasets: [
      {
        label: "Amazon",
        data: mockProducts.map((product) => product.amazonPrice),
        backgroundColor: "rgba(56,189,248,0.72)",
        borderRadius: 6,
      },
      {
        label: "Flipkart",
        data: mockProducts.map((product) => product.flipkartPrice),
        backgroundColor: "rgba(34,197,94,0.68)",
        borderRadius: 6,
      },
    ],
  };
}

function initPieChart() {
  const context = document.getElementById("pieChart");
  state.charts.pieChart = new Chart(context, {
    type: "pie",
    data: buildPieData(),
    options: {
      ...baseChartOptions(),
      scales: undefined,
    },
  });
}

function refreshPieChart() {
  if (!state.charts.pieChart) {
    return;
  }
  state.charts.pieChart.data = buildPieData();
  state.charts.pieChart.update();
}

function buildPieData() {
  const categoryMap = new Map();
  mockProducts.forEach((product) => {
    categoryMap.set(product.category, (categoryMap.get(product.category) || 0) + 1);
  });

  return {
    labels: [...categoryMap.keys()],
    datasets: [
      {
        data: [...categoryMap.values()],
        backgroundColor: [
          "#38bdf8",
          "#22c55e",
          "#f59e0b",
          "#fb7185",
          "#34d399",
          "#60a5fa",
        ],
      },
    ],
  };
}

function initDonutChart() {
  const context = document.getElementById("donutChart");
  state.charts.donutChart = new Chart(context, {
    type: "doughnut",
    data: buildDonutData(),
    options: {
      ...baseChartOptions(),
      cutout: "64%",
      scales: undefined,
    },
  });
}

function refreshDonutChart() {
  if (!state.charts.donutChart) {
    return;
  }
  state.charts.donutChart.data = buildDonutData();
  state.charts.donutChart.update();
}

function buildDonutData() {
  const amazon = mockProducts.filter(
    (product) => bestPlatform(product) === "Amazon"
  ).length;
  const flipkart = mockProducts.filter(
    (product) => bestPlatform(product) === "Flipkart"
  ).length;
  const tie = mockProducts.filter((product) => bestPlatform(product) === "Equal").length;

  return {
    labels: ["Amazon Better", "Flipkart Better", "Equal"],
    datasets: [
      {
        data: [amazon, flipkart, tie],
        backgroundColor: ["#38bdf8", "#22c55e", "#94a3b8"],
      },
    ],
  };
}

function initComparisonChart() {
  const context = document.getElementById("comparisonChart");
  state.charts.comparisonChart = new Chart(context, {
    type: "line",
    data: {
      labels: ["Amazon", "Flipkart"],
      datasets: [],
    },
    options: baseChartOptions(),
  });
}

function baseChartOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 9,
        },
      },
      tooltip: {
        backgroundColor: "rgba(15,23,42,0.95)",
        borderColor: "rgba(148,163,184,0.28)",
        borderWidth: 1,
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        callbacks: {
          label(context) {
            const value = Number(context.raw);
            const label = context.dataset.label || context.label || "Value";
            return `${label}: ${formatCurrency(value)}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#ffffff" },
        grid: { color: "rgba(148,163,184,0.14)" },
      },
      y: {
        ticks: {
          color: "#ffffff",
          callback(value) {
            return shortCurrency(Number(value));
          },
        },
        grid: { color: "rgba(148,163,184,0.11)" },
      },
    },
    animation: {
      duration: 1150,
      easing: "easeOutQuart",
    },
  };
}

function initializeChatbot() {
  pushBotMessage(
    "Hello. I can share product prices, explain analytics, and guide comparison or watchlist alerts."
  );
}

function toggleChatbot() {
  ui.chatbotPanel.classList.toggle("open");
  if (ui.chatbotPanel.classList.contains("open")) {
    ui.chatInput.focus();
  }
}

function sendChatMessage() {
  const query = ui.chatInput.value.trim();
  if (!query) {
    return;
  }

  pushUserMessage(query);
  ui.chatInput.value = "";
  const response = getBotResponse(query);
  window.setTimeout(() => pushBotMessage(response), 260);
}

function getBotResponse(input) {
  const query = input.toLowerCase();

  if (includesAny(query, ["hi", "hello", "hey"])) {
    return "Hello. Ask me about any product, chart type, comparison insights, or price alerts.";
  }

  if (query.includes("list") && query.includes("product")) {
    return `Tracked products: ${mockProducts.map((product) => product.name).join(", ")}.`;
  }

  if (includesAny(query, ["analytics", "line graph", "bar chart", "pie", "donut"])) {
    return "Analytics module: line graph tracks price trend, bar chart compares platform prices, pie chart shows category share, donut chart shows platform advantage, and mini line shows momentum.";
  }

  if (includesAny(query, ["compare", "comparison"])) {
    return "Open Product Comparison, select 2-3 products, then click Compare Now. The line graph shows each product across Amazon and Flipkart, and Insights highlights the best platform.";
  }

  if (includesAny(query, ["watchlist", "alert", "notification"])) {
    return "Enable a product in Watchlist, set a target price, and save. When the best platform price drops below your target, badge and toast alerts are triggered.";
  }

  if (includesAny(query, ["best price", "cheapest", "lowest"])) {
    const best = mockProducts.reduce((current, product) =>
      minPrice(product) < minPrice(current) ? product : current
    );
    return `Current best overall deal is ${best.name} at ${formatCurrency(
      minPrice(best)
    )} on ${bestPlatform(best)}.`;
  }

  if (includesAny(query, ["difference", "price gap"])) {
    const largestGap = mockProducts.reduce((current, product) =>
      priceGap(product) > priceGap(current) ? product : current
    );
    return `Largest platform gap: ${largestGap.name} with a difference of ${formatCurrency(
      priceGap(largestGap)
    )}.`;
  }

  const matched = findProductsInQuery(query);
  if (matched.length) {
    const lines = matched.slice(0, 2).map((product) => {
      return `${product.name}: Amazon ${formatCurrency(
        product.amazonPrice
      )}, Flipkart ${formatCurrency(product.flipkartPrice)}. Best: ${bestPlatform(product)}.`;
    });
    return lines.join(" ");
  }

  return "I can help with product prices, analytics charts, comparison workflow, and watchlist alerts. Try: 'price of iPhone', 'explain donut chart', or 'how to compare products'.";
}

function pushUserMessage(text) {
  appendChatMessage(text, "user");
}

function pushBotMessage(text) {
  appendChatMessage(text, "bot");
}

function appendChatMessage(text, type) {
  const message = document.createElement("div");
  message.className = `chat-msg ${type} animate__animated animate__fadeInUp`;
  message.textContent = text;
  ui.chatMessages.appendChild(message);
  ui.chatMessages.scrollTop = ui.chatMessages.scrollHeight;
}

function attachScrollFade() {
  if (!state.scrollObserver) {
    state.scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  const targets = document.querySelectorAll(
    ".dashboard-card, .product-card, .comparison-chip, .watch-item"
  );
  targets.forEach((target) => {
    if (target.dataset.fadeBound === "1") {
      return;
    }
    target.dataset.fadeBound = "1";
    target.classList.add("scroll-fade");
    state.scrollObserver.observe(target);
  });
}

function toggleComparison(id) {
  if (state.comparison.has(id)) {
    state.comparison.delete(id);
  } else if (state.comparison.size < 3) {
    state.comparison.add(id);
  } else {
    pushBotMessage("Comparison limit reached. Please keep only 3 products.");
  }

  renderComparisonPicker();
  renderProductGrid();
  runComparison();
}

function findProductById(id) {
  return mockProducts.find((product) => product.id === id);
}

function findProductsInQuery(query) {
  return mockProducts.filter((product) => {
    const words = product.name.toLowerCase().split(" ");
    return (
      query.includes(product.name.toLowerCase()) ||
      words.some((word) => word.length > 3 && query.includes(word))
    );
  });
}

function resolveProductImage(imageUrl) {
  if (typeof imageUrl !== "string" || !imageUrl.trim()) {
    return FALLBACK_PRODUCT_IMAGE;
  }
  return imageUrl;
}

function formatCurrency(value) {
  return currencyFormatter.format(value);
}

function shortCurrency(value) {
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(1)}L`;
  }
  if (value >= 1000) {
    return `₹${Math.round(value / 1000)}k`;
  }
  return `₹${value}`;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function minPrice(product) {
  return Math.min(product.amazonPrice, product.flipkartPrice);
}

function priceGap(product) {
  return Math.abs(product.amazonPrice - product.flipkartPrice);
}

function bestPlatform(product) {
  if (product.amazonPrice < product.flipkartPrice) {
    return "Amazon";
  }
  if (product.flipkartPrice < product.amazonPrice) {
    return "Flipkart";
  }
  return "Equal";
}

function bestBadgeClass(best) {
  if (best === "Amazon") {
    return "best-amazon";
  }
  if (best === "Flipkart") {
    return "best-flipkart";
  }
  return "best-equal";
}

function includesAny(text, values) {
  return values.some((value) => text.includes(value));
}

function relativeUpdated(dateString) {
  const current = new Date();
  const updated = new Date(dateString);
  const diffMinutes = Math.max(1, Math.round((current - updated) / 60000));
  if (diffMinutes < 60) {
    return `${diffMinutes} min ago`;
  }
  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours} hr ago`;
  }
  const diffDays = Math.round(diffHours / 24);
  return `${diffDays} day ago`;
}

function appendPriceHistory(product) {
  const nextLabel = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  product.priceHistory.push({
    label: nextLabel,
    amazon: product.amazonPrice,
    flipkart: product.flipkartPrice,
  });
  if (product.priceHistory.length > 7) {
    product.priceHistory.shift();
  }
}
