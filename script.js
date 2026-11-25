
/* ==========================================
   ORBIT 3.0 — PROFESSIONAL SOLAR SYSTEM
   SCIENTIFIC + CINEMATIC EDITION
========================================== */


/* ==========================================
   1. PLANET DATABASE
========================================== */

const planets = [

    {
        name: "Mercury",
        type: "Terrestrial Planet",
        color: "#a9a49c",
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
        description: "Mercury is a small rocky world with an ancient, heavily cratered surface. Despite being closest to the Sun, it is not the hottest planet.",
        features: [
            "Smallest planet in our solar system.",
            "Closest planet to the Sun.",
            "Has a heavily cratered surface.",
            "Experiences extreme temperature changes.",
            "Contains a large iron-rich core."
        ]
    },

    {
        name: "Venus",
        type: "Terrestrial Planet",
        color: "#e5b66f",
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
        description: "Venus is Earth's closest planetary neighbour in size. Its dense carbon dioxide atmosphere creates an extreme greenhouse effect.",
        features: [
            "Hottest planet in the solar system.",
            "Thick atmosphere traps heat.",
            "Clouds contain sulfuric acid.",
            "Rotates in the opposite direction to most planets.",
            "Has extensive volcanic landscapes."
        ]
    },

    {
        name: "Earth",
        type: "Terrestrial Planet",
        color: "#398cff",
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
        description: "Earth is our home planet. Its atmosphere, liquid water, magnetic field and suitable temperatures support an extraordinary diversity of life.",
        features: [
            "Only known planet with life.",
            "Liquid water covers about 71% of its surface.",
            "Has a protective magnetic field.",
            "Contains seven major continents.",
            "Has one natural satellite: the Moon."
        ]
    },

    {
        name: "Mars",
        type: "Terrestrial Planet",
        color: "#d66b4d",
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
        description: "Mars is a cold, dusty desert world. Its surface preserves evidence of an ancient environment that may once have supported liquid water.",
        features: [
            "Known as the Red Planet.",
            "Home to Olympus Mons, a giant volcano.",
            "Contains the Valles Marineris canyon system.",
            "Has two small moons: Phobos and Deimos.",
            "Shows evidence of ancient flowing water."
        ]
    },

    {
        name: "Jupiter",
        type: "Gas Giant",
        color: "#d6a47e",
        mass: "1.90 × 10²⁷ kg",
        diameter: "142,984 km",
        radius: "71,492 km",
        density: "1,326 kg/m³",
        gravity: "24.79 m/s²",
        sunDistance: "778.6 million km",
        au: "5.203 AU",
        earthDistance: "Varies with orbital position",
        moons: "101 (previous catalogue figure)",
        day: "9 hours 56 minutes",
        year: "11.86 Earth years",
        temperature: "About -110°C (cloud tops)",
        formation: "Approximately 4.6 billion years ago",
        atmosphere: "Hydrogen and helium",
        description: "Jupiter is a giant world made mostly of hydrogen and helium. Its enormous storms and fascinating moons make it one of the most interesting planets.",
        features: [
            "Largest planet in the solar system.",
            "Famous for its Great Red Spot storm.",
            "Has powerful magnetic fields.",
            "Has four famous Galilean moons.",
            "Its moon Europa may have a subsurface ocean."
        ]
    },

    {
        name: "Saturn",
        type: "Gas Giant",
        color: "#e6cb91",
        mass: "5.68 × 10²⁶ kg",
        diameter: "120,536 km",
        radius: "60,268 km",
        density: "687 kg/m³",
        gravity: "10.44 m/s²",
        sunDistance: "1.434 billion km",
        au: "9.58 AU",
        earthDistance: "Varies with orbital position",
        moons: "285 (previous catalogue figure)",
        day: "10 hours 42 minutes",
        year: "29.45 Earth years",
        temperature: "About -140°C (cloud tops)",
        formation: "Approximately 4.6 billion years ago",
        atmosphere: "Hydrogen and helium",
        description: "Saturn is a magnificent gas giant surrounded by bright rings made of countless icy and rocky particles.",
        features: [
            "Famous for its spectacular ring system.",
            "Has hundreds of confirmed moons.",
            "Titan has lakes and seas of liquid methane and ethane.",
            "Enceladus has water-rich plumes.",
            "Has a very low average density."
        ]
    },

    {
        name: "Uranus",
        type: "Ice Giant",
        color: "#80d9e4",
        mass: "8.68 × 10²⁵ kg",
        diameter: "51,118 km",
        radius: "25,559 km",
        density: "1,270 kg/m³",
        gravity: "8.69 m/s²",
        sunDistance: "2.872 billion km",
        au: "19.2 AU",
        earthDistance: "Varies with orbital position",
        moons: "29 (previous catalogue figure)",
        day: "17 hours 14 minutes",
        year: "84 Earth years",
        temperature: "About -195°C (cloud tops)",
        formation: "Approximately 4.6 billion years ago",
        atmosphere: "Hydrogen, helium and methane",
        description: "Uranus is a distant ice giant with a remarkable sideways rotation. Its pale blue-green atmosphere gives it a distinctive appearance.",
        features: [
            "Rotates on its side.",
            "Has a faint ring system.",
            "Appears blue-green due to atmospheric methane.",
            "Has extreme seasonal changes.",
            "Is classified as an ice giant."
        ]
    },

    {
        name: "Neptune",
        type: "Ice Giant",
        color: "#426ce7",
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
        description: "Neptune is a dark, cold and windy ice giant. It takes almost 165 Earth years to complete one orbit around the Sun.",
        features: [
            "Farthest recognised planet from the Sun.",
            "Has extremely powerful winds.",
            "Has a deep blue appearance.",
            "Its largest moon is Triton.",
            "Was discovered mathematically before being observed."
        ]
    }

];


/* ==========================================
   2. PLANET TEXTURE DATABASE
========================================== */

const planetImages = [

    "./textures/2k_mercury.jpg",
    "./textures/2k_venus_surface.jpg",
    "./textures/2k_earth_daymap.jpg",
    "./textures/2k_mars.jpg",
    "./textures/2k_jupiter.jpg",
    "./textures/2k_saturn.jpg",
    "./textures/2k_uranus.jpg",
    "./textures/2k_neptune.jpg"

];


/* ==========================================
   3. CREATE PLANET CARDS
========================================== */

const planetGrid = document.getElementById("planetGrid");

if (planetGrid) {

    planetGrid.innerHTML = "";

    planets.forEach((planet, index) => {

        const card = document.createElement("div");

        card.className = "planet-card";

        card.innerHTML = `

            <span class="card-number">
                PLANET ${String(index + 1).padStart(2, "0")}
            </span>

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

}


/* ==========================================
   4. PLANET DETAILS
   ACTUAL TEXTURE IMAGES
========================================== */

function showPlanet(index) {

    const planet = planets[index];

    const details = document.getElementById("planetDetails");

    if (!details || !planet) return;

    details.innerHTML = `

        <div class="detail-header">

            <img
                class="detail-planet-image"
                src="${planetImages[index]}"
                alt="${planet.name}"
                style="
                    width:145px;
                    height:145px;
                    object-fit:cover;
                    border-radius:50%;
                    display:block;
                    flex-shrink:0;
                    background:#03040a;
                    box-shadow:0 0 35px ${planet.color}55;
                "
            >

            <div>

                <p class="eyebrow">
                    ${planet.type}
                </p>

                <h2>${planet.name}</h2>

                <p>
                    PLANET ${String(index + 1).padStart(2, "0")} / 08
                </p>

            </div>

        </div>

        <p class="detail-description">
            ${planet.description}
        </p>

        <div class="stats-grid">

            ${[
                ["MASS", planet.mass],
                ["DIAMETER", planet.diameter],
                ["RADIUS", planet.radius],
                ["DENSITY", planet.density],
                ["SURFACE GRAVITY", planet.gravity],
                ["DISTANCE FROM SUN", planet.sunDistance],
                ["ASTRONOMICAL DISTANCE", planet.au],
                ["DISTANCE FROM EARTH", planet.earthDistance],
                ["CONFIRMED MOONS", planet.moons],
                ["ROTATION PERIOD", planet.day],
                ["ORBITAL PERIOD", planet.year],
                ["MEAN TEMPERATURE", planet.temperature],
                ["FORMATION ESTIMATE", planet.formation],
                ["ATMOSPHERE", planet.atmosphere]
            ].map(stat => `

                <div class="stat">

                    <span>${stat[0]}</span>

                    <strong>${stat[1]}</strong>

                </div>

            `).join("")}

        </div>

        <h3 class="features-title">
            SPECIAL FEATURES
        </h3>

        <ul class="feature-list">

            ${planet.features.map(feature =>
                `<li>${feature}</li>`
            ).join("")}

        </ul>

        <p class="footer-small"
           style="margin-top:25px;color:#92939e">

            Formation dates are estimates. Earth distances change
            with orbital position. Moon counts should be checked
            against current astronomical catalogues.

        </p>

    `;


    document.querySelectorAll(".planet-card").forEach((card, i) => {

        card.classList.toggle("active", i === index);

    });


    if (window.innerWidth < 700) {

        details.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


/* ==========================================
   5. PLANET COMPARISON TABLE
========================================== */

const planetTable = document.getElementById("planetTable");

if (planetTable) {

    planetTable.innerHTML = "";

    planets.forEach((planet, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${planet.name}</td>

            <td>${planet.mass}</td>

            <td>${planet.diameter}</td>

            <td>${planet.au}</td>

            <td>${planet.moons}</td>

        `;

        row.addEventListener("click", () => {

            showPlanet(index);

            document.getElementById("details")?.scrollIntoView({

                behavior: "smooth"

            });

        });

        planetTable.appendChild(row);

    });

}


/* ==========================================
   6. SMOOTH SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.12

    });

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* ==========================================
   7. AMBIENT SPACE SOUND
========================================== */

let audioContext = null;

let audioNodes = [];

let soundPlaying = false;

const musicButton = document.getElementById("musicBtn");

if (musicButton) {

    musicButton.addEventListener("click", async () => {

        if (!soundPlaying) {

            try {

                const AudioContextClass =
                    window.AudioContext || window.webkitAudioContext;

                if (!AudioContextClass) {

                    musicButton.textContent = "SOUND UNAVAILABLE";

                    return;

                }

                audioContext = new AudioContextClass();

                await audioContext.resume();

                const master = audioContext.createGain();

                master.gain.value = 0.025;

                master.connect(audioContext.destination);


                [55, 82.41, 110].forEach((frequency, index) => {

                    const oscillator = audioContext.createOscillator();

                    const gain = audioContext.createGain();

                    oscillator.type = "sine";

                    oscillator.frequency.value = frequency;

                    gain.gain.value = index === 0 ? 0.55 : 0.20;

                    oscillator.connect(gain);

                    gain.connect(master);

                    oscillator.start();

                    audioNodes.push(oscillator, gain);

                });

                audioNodes.push(master);

                soundPlaying = true;

                musicButton.innerHTML = "<span>♫</span> SOUND ON";

                musicButton.classList.add("active");

            } catch (error) {

                console.error("Audio could not start:", error);

                musicButton.textContent = "SOUND UNAVAILABLE";

            }

        } else {

            audioNodes.forEach(node => {

                if (node.stop) {

                    try {
                        node.stop();
                    } catch (error) {
                        // Already stopped
                    }

                }

                if (node.disconnect) {
                    node.disconnect();
                }

            });

            audioNodes = [];

            if (audioContext) {

                audioContext.close();

                audioContext = null;

            }

            soundPlaying = false;

            musicButton.innerHTML = "<span>♫</span> SOUND OFF";

            musicButton.classList.remove("active");

        }

    });

}


/* ==========================================
   8. CINEMATIC 3D SOLAR SYSTEM
========================================== */

async function createSolarSystem() {

    const container = document.getElementById("threeScene");

    if (!container) {

        console.error("3D container #threeScene not found!");

        return;

    }

    try {

        // THREE.JS IMPORT

        const THREE = await import("three");

        const { OrbitControls } = await import(
            "three/addons/controls/OrbitControls.js"
        );


        // SCENE

        const scene = new THREE.Scene();

        scene.background = new THREE.Color("#03040a");


        // CAMERA

        const camera = new THREE.PerspectiveCamera(

            48,

            container.clientWidth / container.clientHeight,

            0.1,

            1500

        );

        camera.position.set(0, 15, 23);


        // RENDERER

        const renderer = new THREE.WebGLRenderer({

            antialias: true,

            powerPreference: "high-performance"

        });

        renderer.setPixelRatio(

            Math.min(window.devicePixelRatio, 1.75)

        );

        renderer.setSize(

            container.clientWidth,

            container.clientHeight

        );

        renderer.outputColorSpace = THREE.SRGBColorSpace;

        renderer.toneMapping = THREE.ACESFilmicToneMapping;

        renderer.toneMappingExposure = 1.25;

        container.innerHTML = "";

        container.appendChild(renderer.domElement);


        // ORBIT CONTROLS

        const controls = new OrbitControls(

            camera,

            renderer.domElement

        );

        controls.enableDamping = true;

        controls.dampingFactor = 0.045;

        controls.minDistance = 6;

        controls.maxDistance = 65;

        controls.maxPolarAngle = Math.PI * 0.85;


        // LIGHTING

        scene.add(

            new THREE.AmbientLight(0xffffff, 0.38)

        );

        const sunlight = new THREE.PointLight(

            0xffffff,

            260,

            180

        );

        sunlight.position.set(0, 0, 0);

        scene.add(sunlight);


        // TEXTURE LOADER

        const textureLoader = new THREE.TextureLoader();

        const textureURL = "./textures/";


        // BACKGROUND STARS

        const starPositions = [];

        for (let i = 0; i < 3500; i++) {

            starPositions.push(

                (Math.random() - 0.5) * 180,

                (Math.random() - 0.5) * 120,

                (Math.random() - 0.5) * 180

            );

        }

        const starGeometry = new THREE.BufferGeometry();

        starGeometry.setAttribute(

            "position",

            new THREE.Float32BufferAttribute(starPositions, 3)

        );

        const starMaterial = new THREE.PointsMaterial({

            color: 0xffffff,

            size: 0.075,

            transparent: true,

            opacity: 0.85,

            sizeAttenuation: true

        });

        const stars = new THREE.Points(

            starGeometry,

            starMaterial

        );

        scene.add(stars);


        // SUN GLOW

        const glowCanvas = document.createElement("canvas");

        glowCanvas.width = 256;

        glowCanvas.height = 256;

        const glowContext = glowCanvas.getContext("2d");

        const gradient = glowContext.createRadialGradient(

            128, 128, 5,

            128, 128, 128

        );

        gradient.addColorStop(

            0,

            "rgba(255,190,90,0.55)"

        );

        gradient.addColorStop(

            0.3,

            "rgba(255,130,40,0.18)"

        );

        gradient.addColorStop(

            1,

            "rgba(255,100,20,0)"

        );

        glowContext.fillStyle = gradient;

        glowContext.fillRect(0, 0, 256, 256);

        const glowTexture = new THREE.CanvasTexture(glowCanvas);

        const sunGlow = new THREE.Sprite(

            new THREE.SpriteMaterial({

                map: glowTexture,

                transparent: true,

                blending: THREE.AdditiveBlending,

                depthWrite: false

            })

        );

        sunGlow.scale.set(6, 6, 1);

        scene.add(sunGlow);


        // SUN

        const sunGeometry = new THREE.SphereGeometry(

            0.9,

            64,

            64

        );

        const sunMaterial = new THREE.MeshBasicMaterial({

            color: "#ffbd59"

        });

        const sun = new THREE.Mesh(

            sunGeometry,

            sunMaterial

        );

        scene.add(sun);


        // SUN TEXTURE

        textureLoader.load(

            textureURL + "2k_sun.jpg",

            texture => {

                texture.colorSpace = THREE.SRGBColorSpace;

                sunMaterial.map = texture;

                sunMaterial.color.set("#ffffff");

                sunMaterial.needsUpdate = true;

                console.log("Sun texture loaded!");

            },

            undefined,

            error => console.warn(

                "Sun texture unavailable:",

                error

            )

        );


        // PLANET TEXTURES

        const textureFiles = [

            "2k_mercury.jpg",

            "2k_venus_surface.jpg",

            "2k_earth_daymap.jpg",

            "2k_mars.jpg",

            "2k_jupiter.jpg",

            "2k_saturn.jpg",

            "2k_uranus.jpg",

            "2k_neptune.jpg"

        ];


        // PLANET SIZES

        const planetSizes = [

            0.19, 0.24, 0.27, 0.22,

            0.68, 0.59, 0.43, 0.42

        ];


        // PLANET DISTANCES

        const planetDistances = [

            2.2, 3.1, 4.1, 5.2,

            7.1, 9.0, 10.9, 12.8

        ];


        // ORBIT SPEEDS

        const planetSpeeds = [

            0.00032,

            0.00024,

            0.00020,

            0.00016,

            0.00009,

            0.00007,

            0.00005,

            0.00004

        ];


        const planetMeshes = [];

        const orbitGroups = [];


        // CREATE PLANETS

        planets.forEach((planet, index) => {

            const distance = planetDistances[index];

            const pivot = new THREE.Group();

            scene.add(pivot);

            orbitGroups.push(pivot);


            // ORBIT PATH

            const orbitPoints = [];

            for (let i = 0; i < 180; i++) {

                const angle = (i / 180) * Math.PI * 2;

                orbitPoints.push(

                    new THREE.Vector3(

                        Math.cos(angle) * distance,

                        0,

                        Math.sin(angle) * distance

                    )

                );

            }

            const orbitGeometry =

                new THREE.BufferGeometry().setFromPoints(

                    orbitPoints

                );

            const orbitMaterial = new THREE.LineBasicMaterial({

                color: 0x8b9bb8,

                transparent: true,

                opacity: 0.24

            });

            const orbit = new THREE.LineLoop(

                orbitGeometry,

                orbitMaterial

            );

            scene.add(orbit);


            // PLANET MATERIAL

            const material = new THREE.MeshStandardMaterial({

                color: planet.color,

                roughness: 0.92,

                metalness: 0.02

            });


            // LOAD PLANET TEXTURE

            textureLoader.load(

                textureURL + textureFiles[index],

                texture => {

                    texture.colorSpace = THREE.SRGBColorSpace;

                    material.map = texture;

                    material.color.set("#ffffff");

                    material.needsUpdate = true;

                    console.log(planet.name + " texture loaded!");

                },

                undefined,

                error => {

                    console.warn(

                        planet.name + " texture unavailable:",

                        error

                    );

                }

            );


            // PLANET SPHERE

            const geometry = new THREE.SphereGeometry(

                planetSizes[index],

                64,

                64

            );

            const mesh = new THREE.Mesh(

                geometry,

                material

            );

            mesh.position.x = distance;

            pivot.add(mesh);

            mesh.userData.planetIndex = index;

            planetMeshes.push(mesh);


            // SATURN RINGS

            if (planet.name === "Saturn") {

                const ringGeometry = new THREE.RingGeometry(

                    planetSizes[index] * 1.35,

                    planetSizes[index] * 2.35,

                    128

                );

                const ringMaterial = new THREE.MeshStandardMaterial({

                    color: "#d8c39a",

                    side: THREE.DoubleSide,

                    transparent: true,

                    opacity: 0.9,

                    roughness: 0.85

                });

                const ring = new THREE.Mesh(

                    ringGeometry,

                    ringMaterial

                );

                ring.rotation.x = -Math.PI / 2;

                ring.position.x = distance;

                pivot.add(ring);


                // SATURN RING TEXTURE

                textureLoader.load(

                    textureURL + "2k_saturn_ring_alpha.png",

                    texture => {

                        texture.colorSpace = THREE.SRGBColorSpace;

                        ringMaterial.map = texture;

                        ringMaterial.needsUpdate = true;

                        console.log("Saturn ring texture loaded!");

                    },

                    undefined,

                    error => console.warn(

                        "Saturn ring texture unavailable:",

                        error

                    )

                );

            }

        });


        // PLANET CLICK INTERACTION

        const raycaster = new THREE.Raycaster();

        const pointer = new THREE.Vector2();

        let pointerStartX = 0;

        let pointerStartY = 0;


        renderer.domElement.addEventListener(

            "pointerdown",

            event => {

                pointerStartX = event.clientX;

                pointerStartY = event.clientY;

            }

        );


        renderer.domElement.addEventListener(

            "pointerup",

            event => {

                const moved = Math.hypot(

                    event.clientX - pointerStartX,

                    event.clientY - pointerStartY

                );

                if (moved > 8) return;

                const rect =

                    renderer.domElement.getBoundingClientRect();

                pointer.x =

                    ((event.clientX - rect.left) / rect.width) * 2 - 1;

                pointer.y =

                    -((event.clientY - rect.top) / rect.height) * 2 + 1;

                raycaster.setFromCamera(pointer, camera);

                const hits = raycaster.intersectObjects(

                    planetMeshes

                );

                if (hits.length > 0) {

                    showPlanet(

                        hits[0].object.userData.planetIndex

                    );

                }

            }

        );


        // PAUSE AND RESUME

        let paused = false;

        const pauseButton =

            document.getElementById("pauseBtn");

        if (pauseButton) {

            pauseButton.addEventListener("click", () => {

                paused = !paused;

                pauseButton.textContent = paused

                    ? "▶ RESUME ORBITS"

                    : "Ⅱ PAUSE ORBITS";

            });

        }


        // ANIMATION

        function animate() {

            requestAnimationFrame(animate);

            if (!paused) {

                orbitGroups.forEach((group, index) => {

                    group.rotation.y += planetSpeeds[index];

                });

                planetMeshes.forEach(mesh => {

                    mesh.rotation.y += 0.0018;

                });

                sun.rotation.y += 0.0007;

                stars.rotation.y += 0.000025;

            }

            controls.update();

            renderer.render(scene, camera);

        }

        animate();


        // RESPONSIVE RESIZING

        const resizeObserver = new ResizeObserver(() => {

            const width = container.clientWidth;

            const height = container.clientHeight;

            if (!width || !height) return;

            camera.aspect = width / height;

            camera.updateProjectionMatrix();

            renderer.setSize(width, height);

        });

        resizeObserver.observe(container);


        console.log("ORBIT PROFESSIONAL 3D loaded!");

    } catch (error) {

        console.error(

            "3D system could not load:",

            error

        );

        container.innerHTML = `

            <div class="loading-message">

                The 3D experience could not load.
                Please refresh the page.

            </div>

        `;

    }

}


/* ==========================================
   9. START SOLAR SYSTEM
========================================== */

createSolarSystem();

console.log("ORBIT PROFESSIONAL EDITION loaded!");
