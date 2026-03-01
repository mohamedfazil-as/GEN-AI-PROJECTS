const API_KEY = "30ec9d683b054eb48c7135602262402";
const API_BASE = "https://api.weatherapi.com/v1/forecast.json";
const DEFAULT_CITY = "Chennai";

const state = {
  city: DEFAULT_CITY,
  unit: "C",
  weatherData: null,
};

const refs = {
  form: document.getElementById("searchForm"),
  cityInput: document.getElementById("cityInput"),
  refreshBtn: document.getElementById("refreshBtn"),
  celsiusBtn: document.getElementById("celsiusBtn"),
  fahrenheitBtn: document.getElementById("fahrenheitBtn"),
  loadingState: document.getElementById("loadingState"),
  errorState: document.getElementById("errorState"),
  errorMessage: document.getElementById("errorMessage"),
  weatherContent: document.getElementById("weatherContent"),
  cityName: document.getElementById("cityName"),
  localTime: document.getElementById("localTime"),
  conditionIcon: document.getElementById("conditionIcon"),
  currentTemp: document.getElementById("currentTemp"),
  conditionText: document.getElementById("conditionText"),
  feelsLike: document.getElementById("feelsLike"),
  humidity: document.getElementById("humidity"),
  windSpeed: document.getElementById("windSpeed"),
  lastUpdated: document.getElementById("lastUpdated"),
  insightText: document.getElementById("insightText"),
  insightIcon: document.getElementById("insightIcon"),
  hourlyContainer: document.getElementById("hourlyContainer"),
  dailyContainer: document.getElementById("dailyContainer"),
};

function setLoading(isLoading) {
  refs.loadingState.classList.toggle("d-none", !isLoading);
  refs.weatherContent.classList.toggle("d-none", isLoading || !state.weatherData);
}

function setError(message = "") {
  const hasError = Boolean(message);
  refs.errorState.classList.toggle("d-none", !hasError);
  refs.errorMessage.textContent = message;
}

function formatTemp(celsius, fahrenheit) {
  return state.unit === "C"
    ? `${Math.round(celsius)}°C`
    : `${Math.round(fahrenheit)}°F`;
}

function formatWind(kph, mph) {
  return state.unit === "C"
    ? `${Math.round(kph)} km/h`
    : `${Math.round(mph)} mph`;
}

function formatTime(localTimeString) {
  const date = new Date(localTimeString.replace(" ", "T"));
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function formatDateLabel(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });
}

function getUpcomingHours(forecastDays, locationLocaltimeEpoch) {
  const hoursFlat = forecastDays.flatMap((day) => day.hour);
  const nextHours = hoursFlat
    .filter((hour) => hour.time_epoch >= locationLocaltimeEpoch)
    .slice(0, 12);

  if (nextHours.length >= 8) {
    return nextHours;
  }

  return hoursFlat.slice(0, 12);
}

function getInsight(data) {
  const { current, forecast } = data;
  const today = forecast.forecastday?.[0]?.day;
  const condition = current.condition.text.toLowerCase();
  const uv = current.uv;
  const windKph = current.wind_kph;
  const chanceOfRain = today?.daily_chance_of_rain ?? 0;
  const humidity = current.humidity;

  if (condition.includes("rain") || chanceOfRain >= 60) {
    return { icon: "☔", text: "Carry an umbrella today. Rain chances are high." };
  }

  if (uv >= 8) {
    return { icon: "🧴", text: "High UV levels today. Use sunscreen and stay hydrated." };
  }

  if (windKph >= 28) {
    return { icon: "🌬️", text: "Windy conditions expected. Keep lightweight layers handy." };
  }

  if (humidity >= 80) {
    return { icon: "💧", text: "Humid weather today. Choose breathable clothing and drink water." };
  }

  if (condition.includes("clear") || condition.includes("sunny")) {
    return { icon: "🌤️", text: "Great weather for outdoor activities and a pleasant walk." };
  }

  if (condition.includes("cloud")) {
    return { icon: "☁️", text: "Comfortable cloudy skies. A good day for a calm commute." };
  }

  return { icon: "🌡️", text: "Stable weather through the day. Refresh later for updates." };
}

function renderCurrent(data) {
  const { location, current } = data;
  refs.cityName.textContent = `${location.name}, ${location.country}`;
  refs.localTime.textContent = `Local time ${formatTime(location.localtime)}`;
  refs.conditionIcon.src = current.condition.icon.startsWith("//")
    ? `https:${current.condition.icon}`
    : current.condition.icon;
  refs.conditionIcon.alt = current.condition.text;
  refs.currentTemp.textContent = formatTemp(current.temp_c, current.temp_f);
  refs.conditionText.textContent = current.condition.text;
  refs.feelsLike.textContent = formatTemp(current.feelslike_c, current.feelslike_f);
  refs.humidity.textContent = `${current.humidity}%`;
  refs.windSpeed.textContent = formatWind(current.wind_kph, current.wind_mph);
  refs.lastUpdated.textContent = formatTime(current.last_updated);
}

function renderHourly(data) {
  const { forecast, location } = data;
  const hours = getUpcomingHours(forecast.forecastday, location.localtime_epoch);

  refs.hourlyContainer.innerHTML = hours
    .map((hour) => {
      const icon = hour.condition.icon.startsWith("//")
        ? `https:${hour.condition.icon}`
        : hour.condition.icon;

      return `
        <article class="hour-card">
          <p class="hour-time mb-2">${formatTime(hour.time)}</p>
          <img src="${icon}" alt="${hour.condition.text}">
          <p class="hour-temp mt-2 mb-0">${formatTemp(hour.temp_c, hour.temp_f)}</p>
        </article>
      `;
    })
    .join("");
}

function renderDaily(data) {
  const { forecast } = data;

  refs.dailyContainer.innerHTML = forecast.forecastday
    .slice(0, 7)
    .map((day) => {
      const icon = day.day.condition.icon.startsWith("//")
        ? `https:${day.day.condition.icon}`
        : day.day.condition.icon;
      return `
        <article class="day-card">
          <div>
            <p class="day-label mb-1">${formatDateLabel(day.date)}</p>
            <p class="mb-0 text-muted small">${day.day.condition.text}</p>
          </div>
          <div class="day-icon-wrap">
            <img src="${icon}" alt="${day.day.condition.text}">
          </div>
          <p class="day-temp mb-0">
            ${formatTemp(day.day.mintemp_c, day.day.mintemp_f)}
            /
            ${formatTemp(day.day.maxtemp_c, day.day.maxtemp_f)}
          </p>
        </article>
      `;
    })
    .join("");
}

function renderInsight(data) {
  const insight = getInsight(data);
  refs.insightIcon.textContent = insight.icon;
  refs.insightText.textContent = insight.text;
}

function renderAll() {
  if (!state.weatherData) {
    return;
  }
  renderCurrent(state.weatherData);
  renderHourly(state.weatherData);
  renderDaily(state.weatherData);
  renderInsight(state.weatherData);
  refs.weatherContent.classList.remove("d-none");
}

function applyUnitButtons() {
  const isCelsius = state.unit === "C";
  refs.celsiusBtn.classList.toggle("active", isCelsius);
  refs.fahrenheitBtn.classList.toggle("active", !isCelsius);
}

async function fetchWeather(city) {
  if (!API_KEY || API_KEY === "YOUR_WEATHERAPI_KEY") {
    throw new Error("Set your WeatherAPI key in app.js before running.");
  }

  const url = `${API_BASE}?key=${encodeURIComponent(API_KEY)}&q=${encodeURIComponent(city)}&days=7&aqi=no&alerts=no`;
  const response = await fetch(url);

  if (!response.ok) {
    let message = "Unable to fetch weather data.";
    try {
      const errorData = await response.json();
      message = errorData?.error?.message || message;
    } catch (_error) {
      // Ignore parse error and keep default message.
    }
    throw new Error(message);
  }

  return response.json();
}

async function loadWeather(city, keepInput = false) {
  try {
    setError("");
    setLoading(true);

    const data = await fetchWeather(city);
    state.weatherData = data;
    state.city = data.location.name;

    if (!keepInput) {
      refs.cityInput.value = data.location.name;
    }

    renderAll();
  } catch (error) {
    setError(error.message || "Could not load weather data.");
  } finally {
    setLoading(false);
  }
}

function bindEvents() {
  refs.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = refs.cityInput.value.trim();
    if (!query) {
      return;
    }
    loadWeather(query, true);
  });

  refs.refreshBtn.addEventListener("click", () => {
    loadWeather(state.city || DEFAULT_CITY, true);
  });

  refs.celsiusBtn.addEventListener("click", () => {
    if (state.unit !== "C") {
      state.unit = "C";
      applyUnitButtons();
      renderAll();
    }
  });

  refs.fahrenheitBtn.addEventListener("click", () => {
    if (state.unit !== "F") {
      state.unit = "F";
      applyUnitButtons();
      renderAll();
    }
  });
}

function init() {
  applyUnitButtons();
  bindEvents();
  refs.cityInput.value = DEFAULT_CITY;
  loadWeather(DEFAULT_CITY);
}

init();
