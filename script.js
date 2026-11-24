
const planets = [
    {
        name: "Mercury",
        type: "Terrestrial Planet",
        color: "#a9a49c",
        size: 8,
        orbit: 100,
        speed: 12,
        mass: "3.30 × 10²³ kg",
        diameter: "4,879 km",
        radius: "2,440 km",
        density: "5,429 kg/m³",
        gravity: "3.7 m/s²",
        sunDistance: "57.9 million km",
        au: "0.387 AU",
        earthDistance: "Varies with orbital position",
        moons: "0",
        day: "58.6 Earth days",
        year: "88 Earth days",
        temperature: "167°C (mean)",
        formation: "Approximately 4.6 billion years ago",
        atmosphere: "Extremely thin exosphere",
        features: [
            "Smallest planet in our solar system.",
            "Closest planet to the Sun.",
            "Has a heavily cratered surface.",
            "Experiences extreme temperature changes.",
            "Contains a large iron-rich core."
        ],
        description: "Mercury is a small rocky world with an ancient, heavily cratered surface. Despite being closest to the Sun, it is not the hottest planet."
    },
    {
        name: "Venus",
        type: "Terrestrial Planet",
        color: "#e5b66f",
        size: 13,
        orbit: 145,
        speed: 18,
        mass: "4.87 × 10²⁴ kg",
        diameter: "12,104 km",
        radius: "6,052 km",
        density: "5,243 kg/m³",
        gravity: "8.87 m/s²",
        sunDistance: "108.2 million km",
        au: "0.723 AU",
        earthDistance: "Varies with orbital position",
        moons: "0",
        day: "243 Earth days",
        year: "225 Earth days",
        temperature: "About 464°C",
        formation: "Approximately 4.6 billion years ago",
        atmosphere: "Mostly carbon dioxide",
        features: [
            "Hottest planet in the solar system.",
            "Thick atmosphere traps heat.",
            "Clouds contain sulfuric acid.",
            "Rotates in the opposite direction to most planets.",
            "Has extensive volcanic landscapes."
        ],
        description: "Venus is Earth's closest planetary neighbour in size. Its dense carbon dioxide atmosphere creates an extreme greenhouse effect."
    },
    {
        name: "Earth",
        type: "Terrestrial Planet",
        color: "#398cff",
        size: 14,
        orbit: 190,
        speed: 25,
        mass: "5.97 × 10²⁴ kg",
        diameter: "12,756 km",
        radius: "6,378 km",
        density: "5,514 kg/m³",
        gravity: "9.81 m/s²",
        sunDistance: "149.6 million km",
        au: "1 AU",
        earthDistance: "0 km (reference planet)",
        moons: "1",
        day: "23 hours 56 minutes",
        year: "365.25 days",
        temperature: "About 15°C (global mean)",
        formation: "Approximately 4.54 billion years ago",
        atmosphere: "78% nitrogen, 21% oxygen",
        features: [
            "Only known planet with life.",
            "Liquid water covers about 71% of its surface.",
            "Has a protective magnetic field.",
            "Contains seven major continents.",
            "Has one natural satellite: the Moon."
        ],
        description: "Earth is our home planet. Its atmosphere, liquid water, magnetic field and suitable temperatures support an extraordinary diversity of life."
    },
    {
        name: "Mars",
        type: "Terrestrial Planet",
        color: "#d66b4d",
        size: 11,
        orbit: 235,
        speed: 32,
        mass: "6.42 × 10²³ kg",
        diameter: "6,792 km",
        radius: "3,396 km",
        density: "3,934 kg/m³",
        gravity: "3.71 m/s²",
        sunDistance: "227.9 million km",
        au: "1.524 AU",
        earthDistance: "Varies with orbital position",
        moons: "2",
        day: "24 hours 37 minutes",
        year: "687 Earth days",
        temperature: "About -65°C (mean)",
        formation: "Approximately 4.6 billion years ago",
        atmosphere: "Mostly carbon dioxide",
        features: [
            "Known as the Red Planet.",
            "Home to Olympus Mons, a giant volcano.",
            "Contains the enormous Valles Marineris canyon system.",
            "Has two small moons: Phobos and Deimos.",
            "Shows evidence of ancient flowing water."
        ],
        description: "Mars is a cold, dusty desert world. Its surface preserves evidence of an ancient environment that may once have supported liquid water."
    },
    {
        name: "Jupiter",
        type: "Gas Giant",
        color: "#d6a47e",
        size: 29,
        orbit: 285,
        speed: 48,
        mass: "1.90 × 10²⁷ kg",
        diameter: "142,984 km",
        radius: "71,492 km",
        density: "1,326 kg/m³",
        gravity: "24.79 m/s²",
        sunDistance: "778.6 million km",
        au: "5.203 AU",
        earthDistance: "Varies with orbital position",
        moons: "101 (confirmed count; check current catalogue)",
        day: "9 hours 56 minutes",
        year: "11.86 Earth years",
        temperature: "About -110°C (cloud tops)",
        formation: "Approximately 4.6 billion years ago",
        atmosphere: "Hydrogen and helium",
        features: [
            "Largest planet in the solar system.",
            "Famous for its Great Red Spot storm.",
            "Has powerful magnetic fields.",
            "Has four famous Galilean moons.",
            "Its moon Europa may have a subsurface ocean."
        ],
        description: "Jupiter is a giant world made mostly of hydrogen and helium. Its enormous storms and fascinating moons make it one of the most interesting planets."
    },
    {
        name: "Saturn",
        type: "Gas Giant",
        color: "#e6cb91",
        size: 25,
        orbit: 345,
        speed: 65,
        mass: "5.68 × 10²⁶ kg",
        diameter: "120,536 km",
        radius: "60,268 km",
        density: "687 kg/m³",
        gravity: "10.44 m/s²",
        sunDistance: "1.434 billion km",
        au: "9.58 AU",
        earthDistance: "Varies with orbital position",
        moons: "285 (confirmed count; check current catalogue)",
        day: "10 hours 42 minutes",
        year: "29.45 Earth years",
        temperature: "About -140°C (cloud tops)",
        formation: "Approximately 4.6 billion years ago",
        atmosphere: "Hydrogen and helium",
        features: [
            "Famous for its spectacular ring system.",
            "Has hundreds of confirmed moons.",
            "Titan has lakes and seas of liquid methane and ethane.",
            "Enceladus has water-rich plumes.",
            "Has a very low average density."
        ],
        description: "Saturn is a magnificent gas giant surrounded by bright rings made of countless icy and rocky particles."
    },
    {
        name: "Uranus",
        type: "Ice Giant",
        color: "#80d9e4",
        size: 20,
        orbit: 405,
        speed: 85,
        mass: "8.68 × 10²⁵ kg",
        diameter: "51,118 km",
        radius: "25,559 km",
        density: "1,270 kg/m³",
        gravity: "8.69 m/s²",
        sunDistance: "2.872 billion km",
        au: "19.2 AU",
        earthDistance: "Varies with orbital position",
        moons: "29 (confirmed count; check current catalogue)",
        day: "17 hours 14 minutes",
        year: "84 Earth years",
        temperature: "About -195°C (cloud tops)",
        formation: "Approximately 4.6 billion years ago",
        atmosphere: "Hydrogen, helium and methane",
        features: [
            "Rotates on its side.",
            "Has a faint ring system.",
            "Appears blue-green due to atmospheric methane.",
            "Has extreme seasonal changes.",
            "Is classified as an ice giant."
        ],
        description: "Uranus is a distant ice giant with a remarkable sideways rotation. Its pale blue-green atmosphere gives it a distinctive appearance."
    },
    {
        name: "Neptune",
        type: "Ice Giant",
        color: "#426ce7",
        size: 19,
        orbit: 465,
        speed: 105,
        mass: "1.02 × 10²⁶ kg",
        diameter: "49,528 km",
        radius: "24,764 km",
        density: "1,638 kg/m³",
        gravity: "11.15 m/s²",
        sunDistance: "4.495 billion km",
        au: "30.05 AU",
        earthDistance: "Varies with orbital position",
        moons: "16",
        day: "16 hours 6 minutes",
        year: "164.8 Earth years",
        temperature: "About -200°C (cloud tops)",
        formation: "Approximately 4.6 billion years ago",
        atmosphere: "Hydrogen, helium and methane",
        features: [
            "Farthest recognised planet from the Sun.",
            "Has extremely powerful winds.",
            "Has a deep blue appearance.",
            "Its largest moon is Triton.",
            "Was discovered mathematically before being observed."
        ],
        description: "Neptune is a dark, cold and windy ice giant. It takes almost 165 Earth years to complete one orbit around the Sun."
    }
];

// Create animated solar system
const orbitContainer = document.getElementById("orbits");

planets.forEach((planet, index) => {
    const orbit = document.createElement("div");
    orbit.className = "orbit";

    orbit.style.setProperty("--orbit-size", planet.orbit + "px");
    orbit.style.setProperty("--orbit-speed", planet.speed + "s");

    const planetElement = document.createElement("div");
    planetElement.className = "planet";

    planetElement.style.setProperty("--planet-size", planet.size + "px");
    planetElement.style.setProperty("--planet-color", planet.color);

    planetElement.title = planet.name;

    planetElement.addEventListener("click", () => {
        showPlanet(index);
    });

    orbit.appendChild(planetElement);
    orbitContainer.appendChild(orbit);
});

// Create planet cards
const planetGrid = document.getElementById("planetGrid");

planets.forEach((planet, index) => {
    const card = document.createElement("div");
    card.className = "planet-card";

    card.innerHTML = `
        <div class="planet-icon"
             style="--planet-color:${planet.color}">
        </div>
        <h3>${planet.name}</h3>
        <p>${planet.type}</p>
    `;

    card.addEventListener("click", () => {
        showPlanet(index);
    });

    planetGrid.appendChild(card);
});

// Show planet information
function showPlanet(index) {
    const planet = planets[index];

    const details = document.getElementById("planetDetails");

    details.innerHTML = `
        <div class="detail-header">
            <div class="detail-planet"
                 style="--planet-color:${planet.color}">
            </div>

            <div>
                <p class="eyebrow">${planet.type}</p>
                <h2>${planet.name}</h2>
                <p>PLANET ${String(index + 1).padStart(2, "0")} / 08</p>
            </div>
        </div>

        <p class="detail-description">
            ${planet.description}
        </p>

        <div class="stats-grid">
            <div class="stat">
                <span>MASS</span>
                <strong>${planet.mass}</strong>
            </div>

            <div class="stat">
                <span>DIAMETER</span>
                <strong>${planet.diameter}</strong>
            </div>

            <div class="stat">
                <span>RADIUS</span>
                <strong>${planet.radius}</strong>
            </div>

            <div class="stat">
                <span>DENSITY</span>
                <strong>${planet.density}</strong>
            </div>

            <div class="stat">
                <span>SURFACE GRAVITY</span>
                <strong>${planet.gravity}</strong>
            </div>

            <div class="stat">
                <span>DISTANCE FROM SUN</span>
                <strong>${planet.sunDistance}</strong>
            </div>

            <div class="stat">
                <span>ASTRONOMICAL DISTANCE</span>
                <strong>${planet.au}</strong>
            </div>

            <div class="stat">
                <span>DISTANCE FROM EARTH</span>
                <strong>${planet.earthDistance}</strong>
            </div>

            <div class="stat">
                <span>CONFIRMED MOONS</span>
                <strong>${planet.moons}</strong>
            </div>

            <div class="stat">
                <span>ROTATION PERIOD</span>
                <strong>${planet.day}</strong>
            </div>

            <div class="stat">
                <span>ORBITAL PERIOD</span>
                <strong>${planet.year}</strong>
            </div>

            <div class="stat">
                <span>MEAN TEMPERATURE</span>
                <strong>${planet.temperature}</strong>
            </div>

            <div class="stat">
                <span>FORMATION ESTIMATE</span>
                <strong>${planet.formation}</strong>
            </div>

            <div class="stat">
                <span>ATMOSPHERE</span>
                <strong>${planet.atmosphere}</strong>
            </div>
        </div>

        <h3 class="features-title">SPECIAL FEATURES</h3>

        <ul class="feature-list">
            ${planet.features.map(feature => `<li>${feature}</li>`).join("")}
        </ul>

        <p class="footer-small" style="margin-top:25px;color:#929bb5">
            Formation dates are scientific estimates, not exact calendar dates.
            Earth distances change as planets orbit the Sun.
            Moon counts can change when new moons are confirmed.
        </p>
    `;

    document.querySelectorAll(".planet-card").forEach((card, i) => {
        card.classList.toggle("active", i === index);
    });

    details.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Create comparison table
const planetTable = document.getElementById("planetTable");

planets.forEach(planet => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${planet.name}</td>
        <td>${planet.mass}</td>
        <td>${planet.diameter}</td>
        <td>${planet.au}</td>
        <td>${planet.moons}</td>
    `;

    planetTable.appendChild(row);
});

// Pause and resume orbital animation
const pauseButton = document.getElementById("pauseBtn");

let isPaused = false;

pauseButton.addEventListener("click", () => {
    isPaused = !isPaused;

    document.querySelectorAll(".orbit").forEach(orbit => {
        orbit.classList.toggle("paused", isPaused);
    });

    pauseButton.textContent = isPaused
        ? "▶ RESUME ORBITS"
        : "Ⅱ PAUSE ORBITS";
});

console.log("ORBIT Solar System Explorer loaded successfully!");
