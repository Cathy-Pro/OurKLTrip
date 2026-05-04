const tabs = [
  { id: "day-1", title: "Day 1", subtitle: "Thu · 14 May" },
  { id: "day-2", title: "Day 2", subtitle: "Fri · 15 May" },
  { id: "day-3", title: "Day 3", subtitle: "Sat · 16 May" },
  { id: "day-4", title: "Day 4", subtitle: "Sun · 17 May" },
  { id: "library", title: "Place Library", subtitle: "Food & places" }
];

const dayPlans = [
  {
    id: "day-1",
    date: "Thu, 14 May",
    mapCenter: [3.1456, 101.7102],
    mapZoom: 14,
    mapFitPadding: [54, 54],
    mapExtraZoomOut: 1,
    routeStopsData: [
      { name: "JW Marriott / The Westin", coords: [3.1488, 101.7142] },
      { name: "Ah Hei Bak Kut Teh", coords: [3.1466, 101.7114] },
      { name: "Grumpy Bagels", coords: [3.1476, 101.7139] },
      { name: "Hanami Reserve Onsen Spa", coords: [3.1438, 101.7157] },
      { name: "GMBB Mall / Perfume Lab", coords: [3.1452, 101.7058] },
      { name: "Broom / VCR Cafe", coords: [3.1444, 101.7051] },
      { name: "Jalan Alor Night Market", coords: [3.1459, 101.7084] },
      { name: "Changkat bar cluster", coords: [3.1469, 101.7094] }
    ],
    mapStops: "1. Hotel  2. Ah Hei  3. Grumpy Bagels  4. Hanami Spa  5. GMBB  6. Broom / VCR  7. Jalan Alor  8. Changkat bars",
    links: [
      { label: "Hanami Reserve Onsen Spa", url: "https://www.friendsofhanami.com/" },
      { label: "Jalan Alor Food Guide", url: "https://sethlui.com/jalan-alor-night-market-street-food-bukit-bintang-kuala-lumpur/" }
    ],
    timeline: [
      { time: "09:10-10:25", title: "Flight SIN to KUL", tags: ["✈️ Travel"] },
      { time: "11:30", title: "Check in at JW Marriott / The Westin", tags: ["🏨 Hotel"] },
      { time: "12:30", title: "Lunch at Ah Hei Bak Kut Teh", tags: ["🍽️ Food"] },
      { time: "14:00", title: "Chill at Grumpy Bagels", tags: ["🍽️ Food"] },
      { time: "14:45", title: "Optional stop at DurianBB Park", tags: ["🍽️ Food"] },
      { time: "15:30", title: "Spa at Hanami Reserve Onsen Spa", tags: ["🧖 Spa"] },
      { time: "17:30", title: "Walk around GMBB Mall / Perfume Lab", tags: ["🛍️ Shopping"] },
      { time: "18:30", title: "Cafe at Broom or VCR Cafe", tags: ["🍽️ Food"] },
      { time: "20:00", title: "Dinner at Jalan Alor Night Market", tags: ["🍽️ Food"] },
      { time: "22:00-late", title: "Bar hop around Changkat", tags: ["🍸 Bar"] }
    ]
  },
  {
    id: "day-2",
    date: "Fri, 15 May",
    mapCenter: [3.1454, 101.6976],
    mapZoom: 15,
    routeStopsData: [
      { name: "Ho Kow Kopitiam", coords: [3.1461, 101.6993] },
      { name: "Kwai Chai Hong", coords: [3.145, 101.6984] },
      { name: "Bunn Choon Restaurant", coords: [3.1453, 101.6989] },
      { name: "Petaling Street Market", coords: [3.1453, 101.6978] },
      { name: "RexKL", coords: [3.1441, 101.6991] },
      { name: "Lai Foong Lala Noodles", coords: [3.1459, 101.6971] },
      { name: "Central Market", coords: [3.1458, 101.6954] },
      { name: "Precious Old China", coords: [3.1459, 101.6952] },
      { name: "Chinatown bar cluster", coords: [3.1452, 101.6982] }
    ],
    mapStops: "1. Ho Kow  2. Kwai Chai Hong  3. Bunn Choon  4. Petaling Street  5. RexKL  6. Lai Foong  7. Central Market  8. Precious Old China  9. Chinatown bars",
    links: [
      { label: "Ho Kow Kopitiam", url: "https://sethlui.com/ho-kow-hainan-kopitiam-malaysia/" },
      { label: "Lai Foong Lala Noodles", url: "https://guide.michelin.com/sg/en/kuala-lumpur-region/kuala-lumpur/restaurant/lai-fong-lala-noodles" },
      { label: "Fung Wong Biscuit", url: "https://www.fungwong.my/contact/" },
      { label: "Kafei Dian", url: "https://sethlui.com/kafei-dian-malaysia/" },
      { label: "Something Bakery", url: "https://www.somethingbakery.com.my/" }
    ],
    timeline: [
      { time: "08:00", title: "Breakfast at Ho Kow Kopitiam", tags: ["🍽️ Food"] },
      { time: "09:30", title: "Walk through Kwai Chai Hong", tags: ["🛍️ Shopping"] },
      { time: "10:15", title: "Second breakfast at Bunn Choon Restaurant", tags: ["🍽️ Food"] },
      { time: "11:00", title: "Walk Petaling Street Market", tags: ["🛍️ Shopping"] },
      { time: "11:45", title: "Browse RexKL", tags: ["🛍️ Shopping"] },
      { time: "13:00", title: "Lunch at Lai Foong Lala Noodles", tags: ["🍽️ Food"] },
      { time: "14:30", title: "Dessert at Durian BB Cafe", tags: ["🍽️ Food"] },
      { time: "15:30", title: "Walk to Central Market", tags: ["🛍️ Shopping"] },
      { time: "19:00", title: "Dinner at Precious Old China", tags: ["🍽️ Food"] },
      { time: "21:00-late", title: "Bar hop around Chinatown", tags: ["🍸 Bar"] }
    ]
  },
  {
    id: "day-3",
    date: "Sat, 16 May",
    mapCenter: [3.1454, 101.7147],
    mapZoom: 13,
    routeStopsData: [
      { name: "ICC PUDU", coords: [3.1335, 101.7094] },
      { name: "Zhongshan Building / Good Times", coords: [3.1746, 101.6922] },
      { name: "Tommy le Baker", coords: [3.1743, 101.6927] },
      { name: "Restoran Kari Kepala Ikan", coords: [3.1362, 101.7114] },
      { name: "Pavilion / Bukit Bintang", coords: [3.1491, 101.7133] },
      { name: "Thai Odyssey / Oriental Signature", coords: [3.1484, 101.7141] },
      { name: "Lot 10 Hutong", coords: [3.1467, 101.7118] },
      { name: "Restoran New Kai Seng Seafood", coords: [3.1609, 101.7247] },
      { name: "Rooftop bar / durian finish", coords: [3.1511, 101.7104] }
    ],
    mapStops: "1. ICC PUDU  2. Zhongshan / Good Times  3. Tommy le Baker  4. Kari Kepala Ikan  5. Pavilion  6. Thai Odyssey / Oriental Signature  7. Lot 10 Hutong  8. New Kai Seng  9. Rooftop bar / durian buffet",
    links: [
      { label: "Lot 10 Hutong", url: "https://lot10hutong.com/" },
      { label: "Dury Dury Durian Buffet", url: "https://durydury.com/durian-buffet/dury-dury-store/" },
      { label: "Tip Top Durian Glamping", url: "https://www.facebook.com/klfoodie/posts/all-you-can-eat-durian-buffet-glamping-spot-in-kl-that-opens-till-2am-tip-top-du/902961235578022/" }
    ],
    timeline: [
      { time: "08:30", title: "Breakfast at ICC PUDU", tags: ["🍽️ Food"] },
      { time: "10:00", title: "Zhongshan Building and Tommy le Baker", tags: ["🛍️ Shopping", "🍽️ Food"] },
      { time: "10:00 / 14:00 / 17:00", title: "Or tufting workshop at Good Times DIY Pottery & Tufting Studio", tags: ["🛍️ Shopping"] },
      { time: "13:00", title: "Lunch at Restoran Kari Kepala Ikan", tags: ["🍽️ Food"] },
      { time: "15:00", title: "Walk around Pavilion / Bukit Bintang", tags: ["🛍️ Shopping"] },
      { time: "16:30", title: "Spa at Thai Odyssey or Oriental Signature", tags: ["🧖 Spa"] },
      { time: "17:45", title: "Food stop at Lot 10 Hutong", tags: ["🍽️ Food"] },
      { time: "19:30", title: "Dinner at Restoran New Kai Seng Seafood", tags: ["🍽️ Food"] },
      { time: "21:30-late", title: "Rooftop bar", tags: ["🍸 Bar"] },
      { time: "21:30-late", title: "Or durian buffet", tags: ["🍽️ Food"] }
    ]
  },
  {
    id: "day-4",
    date: "Sun, 17 May",
    mapCenter: [3.104, 101.694],
    mapZoom: 10,
    routeStopsData: [
      { name: "Yut Kee Restaurant", coords: [3.1542, 101.7005] },
      { name: "Dang Wangi Station", coords: [3.1594, 101.6988] },
      { name: "KL Sentral", coords: [3.1343, 101.6865] },
      { name: "KLIA", coords: [2.7456, 101.709] }
    ],
    mapStops: "1. Yut Kee  2. Dang Wangi  3. KL Sentral  4. KLIA",
    links: [
      { label: "Yut Kee Restaurant", url: "https://www.facebook.com/YutKee1928/" }
    ],
    transport: {
      flight: "11:55-13:00 · Flight KUL to SIN",
      options: [
        {
          title: "Option 1 · Taxi",
          text: "Estimated around 1 hour, with traffic risk."
        },
        {
          title: "Option 2 · Train",
          text: "Walk 6 minutes to Dang Wangi, change at KL Sentral, then continue to KLIA T1 / T2."
        }
      ]
    },
    timeline: [
      { time: "07:30", title: "Breakfast at Yut Kee Restaurant", tags: ["🍽️ Food"] },
      { time: "09:30-10:00", title: "Head to the airport", tags: ["✈️ Travel"] },
      { time: "11:55-13:00", title: "Flight KUL to SIN", tags: ["✈️ Travel"] }
    ]
  }
];

const libraryItems = [
  { name: "Ho Kow Kopitiam", type: "Food", cuisine: "Chinese", area: "Chinatown", url: "https://sethlui.com/ho-kow-hainan-kopitiam-malaysia/" },
  { name: "Lai Foong Lala Noodles", type: "Food", cuisine: "Chinese", area: "Chinatown", url: "https://guide.michelin.com/sg/en/kuala-lumpur-region/kuala-lumpur/restaurant/lai-fong-lala-noodles" },
  { name: "Fung Wong Biscuit", type: "Food", cuisine: "Chinese", area: "Chinatown", url: "https://www.fungwong.my/contact/" },
  { name: "Kafei Dian", type: "Food", cuisine: "Snacks", area: "Petaling Street", url: "https://sethlui.com/kafei-dian-malaysia/" },
  { name: "VCR Cafe", type: "Food", cuisine: "Western", area: "GMBB", url: "https://danielfooddiary.com/2024/08/17/vcr/" },
  { name: "Broom Cafe", type: "Food", cuisine: "Snacks", area: "GMBB", url: "" },
  { name: "Grumpy Bagels", type: "Food", cuisine: "Western", area: "Bukit Bintang", url: "" },
  { name: "Niko Neko Matcha 2.0", type: "Food", cuisine: "Desserts", area: "Kuala Lumpur", url: "" },
  { name: "Tommy Le Baker", type: "Food", cuisine: "Western", area: "Zhongshan Building", url: "" },
  { name: "KLCG Confectionary Bakery", type: "Food", cuisine: "Western", area: "Kuala Lumpur", url: "" },
  { name: "GIOIA Artisan Gelato", type: "Food", cuisine: "Desserts", area: "Kuala Lumpur", url: "" },
  { name: "Something Bakery", type: "Food", cuisine: "Western", area: "Kuala Lumpur", url: "https://www.somethingbakery.com.my/" },
  { name: "YEN, W Kuala Lumpur", type: "Food", cuisine: "Chinese", area: "KLCC", url: "" },
  { name: "Ah Hei Bak Kut Teh", type: "Food", cuisine: "Chinese", area: "Bukit Bintang", url: "https://danielfooddiary.com/2024/02/01/ahheibakkutteh/" },
  { name: "Village Park Restaurant", type: "Food", cuisine: "Malay", area: "Damansara Utama", url: "" },
  { name: "Restoran New Kai Seng Seafood", type: "Food", cuisine: "Chinese", area: "Ampang", url: "" },
  { name: "Restoran Kari Kepala Ikan", type: "Food", cuisine: "Indian", area: "Jalan Pudu", url: "" },
  { name: "Restoran Sai Woo", type: "Food", cuisine: "Chinese", area: "Jalan Alor", url: "" },
  { name: "TG's Bistro", type: "Food", cuisine: "Indian", area: "Jalan Alor", url: "" },
  { name: "W.A.W Restaurant", type: "Food", cuisine: "Western", area: "Jalan Alor", url: "" },
  { name: "Restoran Meng Kee Grill Fish", type: "Food", cuisine: "Chinese", area: "Jalan Alor", url: "" },
  { name: "Pinchos Tapas Bar", type: "Food", cuisine: "Western", area: "Bukit Bintang", url: "" },
  { name: "Chinatown Bunn Choon Restaurant", type: "Food", cuisine: "Chinese", area: "Chinatown", url: "" },
  { name: "Yut Kee Restaurant", type: "Food", cuisine: "Chinese", area: "Dang Wangi", url: "https://www.facebook.com/YutKee1928/" },
  { name: "Vertigo Rooftop Bar", type: "Food", cuisine: "Bar", area: "Bukit Bintang", url: "" },
  { name: "Helipad Rooftop Bar", type: "Food", cuisine: "Bar", area: "Bukit Bintang", url: "" },
  { name: "Chinatown / Kwai Chai Hong", type: "Place", cuisine: "Place", area: "Chinatown", url: "" },
  { name: "GMBB Mall", type: "Place", cuisine: "Place", area: "Bukit Bintang South", url: "" },
  { name: "Kompleks Selangor", type: "Place", cuisine: "Place", area: "Kuala Lumpur", url: "" },
  { name: "RexKL", type: "Place", cuisine: "Place", area: "Chinatown", url: "" },
  { name: "Zhongshan Building", type: "Place", cuisine: "Place", area: "Kampung Attap", url: "" },
  { name: "The Exchange TRX", type: "Place", cuisine: "Place", area: "TRX", url: "" },
  { name: "Pavilion Mall & KLCC", type: "Place", cuisine: "Place", area: "Bukit Bintang / KLCC", url: "" }
];

const weatherDates = ["2026-05-14", "2026-05-15", "2026-05-16", "2026-05-17"];
const weatherCoordinates = { latitude: 3.139, longitude: 101.6869 };
const weatherCodeMap = {
  0: "Clear",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Overcast",
  51: "Light drizzle",
  53: "Drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  80: "Showers",
  95: "Thunderstorm"
};

const tabRow = document.getElementById("tab-row");
const panelHost = document.getElementById("panel-host");
const weatherGrid = document.getElementById("weather-grid");
const weatherStatus = document.getElementById("weather-status");
const maps = new Map();
const weatherDayTargets = {
  "2026-05-14": "day-1",
  "2026-05-15": "day-2",
  "2026-05-16": "day-3",
  "2026-05-17": "day-4"
};

let activeTab = "day-1";
let activeLibraryGroup = "All";
let activeFoodCuisine = "All";

renderTabs();
renderPanels();
activateTab(activeTab);
fetchWeather();

function renderTabs() {
  tabRow.innerHTML = tabs
    .map(
      (tab) => `
        <button
          class="tab-button"
          id="${tab.id}-tab"
          type="button"
          role="tab"
          aria-selected="${tab.id === activeTab}"
          aria-controls="${tab.id}-panel"
          data-tab="${tab.id}"
        >
          <span class="tab-title">${tab.title}</span>
          <span class="tab-subtitle">${tab.subtitle}</span>
        </button>
      `
    )
    .join("");

  tabRow.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
  });
}

function renderPanels() {
  panelHost.innerHTML = `${dayPlans.map(renderDayPanel).join("")}${renderLibraryPanel()}`;
  initializeLibraryControls();
}

function renderDayPanel(day) {
  return `
    <section
      class="tab-panel ${day.id === activeTab ? "active" : ""}"
      id="${day.id}-panel"
      role="tabpanel"
      aria-labelledby="${day.id}-tab"
    >
      <div class="day-layout">
        <div class="day-main">
          <header class="day-header">
            <p class="eyebrow">${day.date}</p>
          </header>

          <section class="timeline-card">
            <p class="eyebrow">Timeline</p>
            <ol class="timeline-list">
              ${day.timeline
                .map(
                  (item) => `
                    <li class="timeline-item">
                      <span class="timeline-dot" aria-hidden="true"></span>
                      <span class="time-label">${item.time}</span>
                      <div class="timeline-content">
                        <h3>${item.title}</h3>
                        <div class="tag-row">
                          ${item.tags.map((tag) => `<span class="tag-chip">${tag}</span>`).join("")}
                        </div>
                      </div>
                    </li>
                  `
                )
                .join("")}
            </ol>
          </section>
        </div>

        <div class="side-stack">
          <section class="map-card">
            <p class="eyebrow">Map</p>
            <div class="map-frame">
              <div id="map-${day.id}" aria-label="${day.date} map"></div>
            </div>
            <p class="route-note"><strong>Stop order:</strong> ${day.mapStops}</p>
          </section>

          <section class="links-card">
            <p class="eyebrow">Links</p>
            <div class="link-grid">
              ${day.links.map((link) => `<a class="link-button" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
            </div>
          </section>

          ${
            day.transport
              ? `
                <section class="transport-card">
                  <p class="eyebrow">Flight & Transfer</p>
                  <p class="transport-text">${day.transport.flight}</p>
                  <div class="transport-grid">
                    ${day.transport.options
                      .map(
                        (option) => `
                          <article class="transport-option">
                            <strong>${option.title}</strong>
                            <span>${option.text}</span>
                          </article>
                        `
                      )
                      .join("")}
                  </div>
                </section>
              `
              : ""
          }
        </div>
      </div>
    </section>
  `;
}

function renderLibraryPanel() {
  return `
    <section
      class="tab-panel ${activeTab === "library" ? "active" : ""}"
      id="library-panel"
      role="tabpanel"
      aria-labelledby="library-tab"
    >
      <section class="library-card">
        <div class="library-header">
          <div>
            <p class="eyebrow">Place Library</p>
            <h2>Recommended food and places</h2>
          </div>
          <div class="library-controls">
            <input id="library-search" class="search-input" type="search" placeholder="Search by name or area" />
            <div id="group-filter-row" class="filter-row"></div>
            <div id="food-filter-row" class="filter-row cuisine-row"></div>
          </div>
        </div>
        <div id="library-results" class="library-grid"></div>
      </section>
    </section>
  `;
}

function activateTab(tabId) {
  activeTab = tabId;

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.tab === tabId));
  });

  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `${tabId}-panel`);
  });

  if (tabId !== "library") {
    initializeMap(tabId);
  }
}

function goToDayFromWeather(date) {
  const targetTab = weatherDayTargets[date];
  if (!targetTab) return;

  activateTab(targetTab);

  const planner = document.querySelector(".tabs-shell");
  if (planner) {
    planner.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function initializeMap(dayId) {
  if (typeof L === "undefined" || maps.has(dayId)) {
    if (maps.has(dayId)) {
      window.setTimeout(() => maps.get(dayId).invalidateSize(), 40);
    }
    return;
  }

  const day = dayPlans.find((item) => item.id === dayId);
  if (!day) return;

  const map = L.map(`map-${dayId}`, {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView(day.mapCenter, day.mapZoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const routeCoords = day.routeStopsData.map((stop) => stop.coords);
  L.polyline(routeCoords, {
    color: "#73836d",
    weight: 4,
    opacity: 0.85
  }).addTo(map);

  day.routeStopsData.forEach((stop, index) => {
    const icon = L.divIcon({
      className: "",
      html: `<div class="map-marker">${index + 1}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    L.marker(stop.coords, { icon })
      .addTo(map)
      .bindPopup(`<strong>${index + 1}. ${stop.name}</strong>`);
  });

  if (routeCoords.length > 1) {
    const padding = day.mapFitPadding || [24, 24];
    map.fitBounds(routeCoords, { padding });
    if (day.mapExtraZoomOut) {
      map.setZoom(Math.max(1, map.getZoom() - day.mapExtraZoomOut));
    }
  }

  maps.set(dayId, map);
  window.setTimeout(() => map.invalidateSize(), 40);
}

function initializeLibraryControls() {
  const groupFilterRow = document.getElementById("group-filter-row");
  const foodFilterRow = document.getElementById("food-filter-row");
  const searchInput = document.getElementById("library-search");

  renderLibraryFilters(groupFilterRow, foodFilterRow);
  renderLibraryItems();

  groupFilterRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeLibraryGroup = button.dataset.filter;
    if (activeLibraryGroup !== "Food") {
      activeFoodCuisine = "All";
    }
    renderLibraryFilters(groupFilterRow, foodFilterRow);
    renderLibraryItems();
  });

  foodFilterRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cuisine]");
    if (!button) return;
    activeFoodCuisine = button.dataset.cuisine;
    renderLibraryFilters(groupFilterRow, foodFilterRow);
    renderLibraryItems();
  });

  searchInput.addEventListener("input", renderLibraryItems);
}

function renderLibraryFilters(groupContainer, cuisineContainer) {
  const groups = ["All", "Place", "Food"];
  groupContainer.innerHTML = groups
    .map(
      (group) => `
        <button class="filter-button ${group === activeLibraryGroup ? "active" : ""}" type="button" data-filter="${group}">
          ${group}
        </button>
      `
    )
    .join("");

  if (activeLibraryGroup !== "Food") {
    cuisineContainer.innerHTML = "";
    cuisineContainer.hidden = true;
    return;
  }

  const cuisines = ["All", "Chinese", "Indian", "Western", "Malay", "Snacks", "Desserts", "Bar"];
  cuisineContainer.hidden = false;
  cuisineContainer.innerHTML = cuisines
    .map(
      (cuisine) => `
        <button class="filter-button ${cuisine === activeFoodCuisine ? "active" : ""}" type="button" data-cuisine="${cuisine}">
          ${cuisine}
        </button>
      `
    )
    .join("");
}

function renderLibraryItems() {
  const resultsEl = document.getElementById("library-results");
  const searchInput = document.getElementById("library-search");
  const query = searchInput.value.trim().toLowerCase();

  const filtered = libraryItems.filter((item) => {
    const groupMatch =
      activeLibraryGroup === "All" ||
      item.type === activeLibraryGroup;
    const cuisineMatch =
      activeLibraryGroup !== "Food" ||
      activeFoodCuisine === "All" ||
      item.cuisine === activeFoodCuisine;
    const text = `${item.name} ${item.area} ${item.type} ${item.cuisine}`.toLowerCase();
    const queryMatch = !query || text.includes(query);
    return groupMatch && cuisineMatch && queryMatch;
  });

  if (!filtered.length) {
    resultsEl.innerHTML = `<div class="empty-state">No matches found. Try a broader search or switch the filter.</div>`;
    return;
  }

  resultsEl.innerHTML = filtered
    .map(
      (item) => `
        <article class="library-item">
          <div class="library-item-top">
            <span class="tag-chip">${
              item.type === "Place" ? "📍 Place" : `🍽️ ${item.cuisine}`
            }</span>
            <span class="route-area">${item.area}</span>
          </div>
          <h3>${item.name}</h3>
          ${item.url ? `<div class="link-grid"><a class="link-button" href="${item.url}" target="_blank" rel="noreferrer">Open link</a></div>` : ""}
        </article>
      `
    )
    .join("");
}

async function fetchWeather() {
  weatherGrid.innerHTML = weatherDates
    .map(
      (date) => `
        <button class="weather-item" type="button" data-weather-date="${date}">
          <strong>${formatForecastDate(date)}</strong>
          <span>Forecast loading...</span>
        </button>
      `
    )
    .join("");

  bindWeatherDayClicks();

  const params = new URLSearchParams({
    latitude: String(weatherCoordinates.latitude),
    longitude: String(weatherCoordinates.longitude),
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    timezone: "Asia/Kuala_Lumpur",
    start_date: weatherDates[0],
    end_date: weatherDates[weatherDates.length - 1]
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`Weather request failed with ${response.status}`);
    }

    const data = await response.json();
    weatherGrid.innerHTML = data.daily.time
      .map((date, index) => {
        const code = data.daily.weather_code[index];
        const high = Math.round(data.daily.temperature_2m_max[index]);
        const low = Math.round(data.daily.temperature_2m_min[index]);
        const rain = data.daily.precipitation_probability_max[index];
        return `
          <button class="weather-item" type="button" data-weather-date="${date}">
            <strong>${formatForecastDate(date)}</strong>
            <span>${weatherCodeMap[code] || "Variable conditions"}</span>
            <span>${low}°C - ${high}°C · Rain ${rain}%</span>
          </button>
        `;
      })
      .join("");
    bindWeatherDayClicks();
    weatherStatus.textContent = "Live forecast";
  } catch (error) {
    weatherStatus.textContent = "Forecast unavailable";
    weatherGrid.innerHTML = weatherDates
      .map(
        (date) => `
          <button class="weather-item" type="button" data-weather-date="${date}">
            <strong>${formatForecastDate(date)}</strong>
            <span>Unable to load live data right now.</span>
          </button>
        `
      )
      .join("");
    bindWeatherDayClicks();
    console.error(error);
  }
}

function bindWeatherDayClicks() {
  weatherGrid.querySelectorAll("[data-weather-date]").forEach((button) => {
    button.addEventListener("click", () => {
      goToDayFromWeather(button.dataset.weatherDate);
    });
  });
}

function formatForecastDate(dateString) {
  const date = new Date(`${dateString}T12:00:00+08:00`);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });
}

function buildRouteUrl(stops) {
  if (stops.length < 2) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stops[0] || "Kuala Lumpur")}`;

  const origin = encodeURIComponent(stops[0]);
  const destination = encodeURIComponent(stops[stops.length - 1]);
  const waypoints = encodeURIComponent(stops.slice(1, -1).join("|"));
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving&waypoints=${waypoints}`;
}
