/* ==========================================================================
   DATOS EDITABLES — Falling Walls Lab Spain · Madrid
   Fuentes: falling-walls.com, MNCN-CSIC, UCM (OTRI y Compluemprende).
   ========================================================================== */


/* ---------- Mapa de Labs ----------
   Labs publicados en falling-walls.com (temporada 2026 y finalistas recientes).
   La red completa 2026: 91 Labs en 65 países. es: true → sede española. */
window.FW_LABS = [
  { nombre: "Madrid, Spain", pais: "España", region: "Europa", lat: 40.42, lon: -3.70, es: true,
    host: "MNCN-CSIC · SEBBM · Embajada de Alemania · DAAD · AJdE · Compluemprende",
    url: "https://falling-walls.com/falling-walls-lab-madrid-spain", email: "fallingwallsspain@gmail.com" },
  { nombre: "Barcelona", pais: "España", region: "Europa", lat: 41.39, lon: 2.17, es: true },
  { nombre: "Western Switzerland", pais: "Suiza", region: "Europa", lat: 46.52, lon: 6.63 },
  { nombre: "Zurich", pais: "Suiza", region: "Europa", lat: 47.38, lon: 8.54 },
  { nombre: "Leuven", pais: "Bélgica", region: "Europa", lat: 50.88, lon: 4.70 },
  { nombre: "Münster", pais: "Alemania", region: "Europa", lat: 51.96, lon: 7.63 },
  { nombre: "Gothenburg", pais: "Suecia", region: "Europa", lat: 57.71, lon: 11.97 },
  { nombre: "Amsterdam", pais: "Países Bajos", region: "Europa", lat: 52.37, lon: 4.90 },
  { nombre: "Budapest", pais: "Hungría", region: "Europa", lat: 47.50, lon: 19.04 },
  { nombre: "Czech Republic", pais: "Chequia", region: "Europa", lat: 50.08, lon: 14.44 },
  { nombre: "South West Austria", pais: "Austria", region: "Europa", lat: 47.27, lon: 11.40 },
  { nombre: "Eastern Finland", pais: "Finlandia", region: "Europa", lat: 62.89, lon: 27.68 },
  { nombre: "Azerbaijan (DAAD)", pais: "Azerbaiyán", region: "Asia", lat: 40.41, lon: 49.87 },
  { nombre: "Armenia", pais: "Armenia", region: "Asia", lat: 40.18, lon: 44.51 },
  { nombre: "Tunis", pais: "Túnez", region: "África", lat: 36.81, lon: 10.18 },
  { nombre: "Cairo", pais: "Egipto", region: "África", lat: 30.04, lon: 31.24 },
  { nombre: "Accra", pais: "Ghana", region: "África", lat: 5.60, lon: -0.19 },
  { nombre: "Cotonou", pais: "Benín", region: "África", lat: 6.37, lon: 2.39 },
  { nombre: "Kigali & Khartoum", pais: "Ruanda · Sudán", region: "África", lat: -1.95, lon: 30.06 },
  { nombre: "Nairobi", pais: "Kenia", region: "África", lat: -1.29, lon: 36.82 },
  { nombre: "Harare", pais: "Zimbabue", region: "África", lat: -17.83, lon: 31.05 },
  { nombre: "Windhoek", pais: "Namibia", region: "África", lat: -22.56, lon: 17.08 },
  { nombre: "Pretoria", pais: "Sudáfrica", region: "África", lat: -25.75, lon: 28.19 },
  { nombre: "Gauteng", pais: "Sudáfrica", region: "África", lat: -26.20, lon: 28.05 },
  { nombre: "Cape Town", pais: "Sudáfrica", region: "África", lat: -33.92, lon: 18.42 },
  { nombre: "Madagascar", pais: "Madagascar", region: "África", lat: -18.88, lon: 47.51 },
  { nombre: "Riyadh", pais: "Arabia Saudí", region: "Oriente Medio", lat: 24.71, lon: 46.68 },
  { nombre: "Jeddah", pais: "Arabia Saudí", region: "Oriente Medio", lat: 21.54, lon: 39.17 },
  { nombre: "Nizwa", pais: "Omán", region: "Oriente Medio", lat: 22.93, lon: 57.53 },
  { nombre: "Oman", pais: "Omán", region: "Oriente Medio", lat: 23.59, lon: 58.41 },
  { nombre: "Ramallah", pais: "Palestina", region: "Oriente Medio", lat: 31.90, lon: 35.20 },
  { nombre: "Iraq (DAAD)", pais: "Irak", region: "Oriente Medio", lat: 33.31, lon: 44.36 },
  { nombre: "FCCU Lahore", pais: "Pakistán", region: "Asia", lat: 31.52, lon: 74.36 },
  { nombre: "Kathmandu", pais: "Nepal", region: "Asia", lat: 27.72, lon: 85.32 },
  { nombre: "Colombo", pais: "Sri Lanka", region: "Asia", lat: 6.93, lon: 79.86 },
  { nombre: "Bangkok", pais: "Tailandia", region: "Asia", lat: 13.76, lon: 100.50 },
  { nombre: "Singapore", pais: "Singapur", region: "Asia", lat: 1.35, lon: 103.82 },
  { nombre: "Tokyo", pais: "Japón", region: "Asia", lat: 35.68, lon: 139.69 },
  { nombre: "Sendai", pais: "Japón", region: "Asia", lat: 38.27, lon: 140.87 },
  { nombre: "Okinawa", pais: "Japón", region: "Asia", lat: 26.21, lon: 127.68 },
  { nombre: "Perth", pais: "Australia", region: "Oceanía", lat: -31.95, lon: 115.86 },
  { nombre: "Brisbane", pais: "Australia", region: "Oceanía", lat: -27.47, lon: 153.03 },
  { nombre: "Montreal", pais: "Canadá", region: "Norteamérica", lat: 45.50, lon: -73.57 },
  { nombre: "Atlantic Canada", pais: "Canadá", region: "Norteamérica", lat: 44.65, lon: -63.57 },
  { nombre: "Aggieland, Texas", pais: "Estados Unidos", region: "Norteamérica", lat: 30.63, lon: -96.33 },
  { nombre: "Arizona", pais: "Estados Unidos", region: "Norteamérica", lat: 33.42, lon: -111.93 },
  { nombre: "San Francisco Bay Area", pais: "Estados Unidos", region: "Norteamérica", lat: 37.77, lon: -122.42 },

  /* América Latina — Labs de temporadas recientes. Confirmar sedes y enlaces
     de la temporada 2027 en falling-walls.com/lab y añadir url / email. */
  { nombre: "Mexico", pais: "México", region: "América Latina", lat: 19.43, lon: -99.13 },
  { nombre: "Colombia", pais: "Colombia", region: "América Latina", lat: 4.71, lon: -74.07 },
  { nombre: "Peru", pais: "Perú", region: "América Latina", lat: -12.05, lon: -77.04 },
  { nombre: "Brazil", pais: "Brasil", region: "América Latina", lat: -23.55, lon: -46.63 },
  { nombre: "Chile", pais: "Chile", region: "América Latina", lat: -33.45, lon: -70.67 },
  { nombre: "Argentina", pais: "Argentina", region: "América Latina", lat: -34.60, lon: -58.38 }
];

