/* ==========================================================================
   Falling Walls Lab Spain · Madrid — componentes comunes.
   Cabecera, pie, cinta de partners y banner de cookies se definen AQUÍ
   una sola vez para todas las páginas.
   ========================================================================== */
(function () {
  "use strict";

  var CONFIG = {
    email: "fallingwallsspain@gmail.com",
    emailMuseo: "culturacientifica@mncn.csic.es",
    instagram: "https://www.instagram.com/falling_walls_lab_spain/",
    youtube: "https://www.youtube.com/@FallingWallsFoundation",
    labInternacional: "https://falling-walls.com/lab"
  };

  var NAV = [
    { href: "el-lab.html", label: "Lab" },
    { href: "ediciones.html", label: "Ediciones" },
    { href: "mapa.html", label: "Mapa" },
    { href: "partners.html", label: "Partners" }
  ];

  var PARTNERS = [
    { src: "assets/logos/ministerio-csic-mncn.png", alt: "Ministerio de Ciencia, Innovación y Universidades · CSIC · MNCN", wide: true },
    { src: "assets/logos/embajada-alemania.png", alt: "Embajada de la República Federal de Alemania" },
    { src: "assets/logos/daad.png", alt: "DAAD" },
    { src: "assets/logos/sebbm.png", alt: "SEBBM" },
    { src: "assets/logos/ajde.jpg", alt: "Academia Joven de España" },
    { src: "assets/logos/compluemprende.jpg", alt: "Compluemprende · UCM" },
    { src: "assets/logos/innogate.png", alt: "Innogate to Europe" },
    { src: "assets/logos/alsa.jpg", alt: "Alsa" }
  ];

  var current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  var ICONS = {
    ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.6a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4zm0 8.6a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8zm5.4-9.9a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/></svg>',
    yt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm10 8.2L3.6 6H3v.4l9 6.6 9-6.6V6h-.6L12 12.2z"/></svg>'
  };

  /* ---------- Cabecera ---------- */
  var header =
    '<a class="skip" href="#main">Saltar al contenido</a>' +
    '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="index.html"><img src="assets/logos/fwlab-madrid.png" alt="Falling Walls Lab Madrid" width="583" height="553"></a>' +
      '<button class="nav-toggle" aria-controls="nav" aria-expanded="false" aria-label="Abrir menú"><span></span><span></span><span></span></button>' +
      '<nav class="nav" id="nav" aria-label="Principal"><ul>' +
        NAV.map(function (n) { return '<li><a href="' + n.href + '"' + (n.href === current ? ' aria-current="page"' : "") + ">" + n.label + "</a></li>"; }).join("") +
      '</ul><a class="btn" href="inscripciones.html">Inscripciones</a></nav>' +
    "</div></header>";

  /* ---------- Cinta de partners + pie ---------- */
  var logoList = "<ul>" + PARTNERS.map(function (p) { return '<li' + (p.wide ? ' class="wide"' : "") + '><img src="' + p.src + '" alt="' + esc(p.alt) + '" loading="lazy"></li>'; }).join("") + "</ul>";
  var band =
    '<section class="partners-band" aria-label="Organizan y apoyan"><div class="wrap"><p class="partners-band__title">Organizan y apoyan</p></div>' +
    '<div class="marquee">' + logoList + logoList.replace(/<img /g, '<img aria-hidden="true" ').replace(/alt="[^"]*"/g, 'alt=""') + "</div></section>";

  var wallFade = '<div class="wall-fade" aria-hidden="true"><img src="assets/fotos/muro-1989-multitud.jpg" alt="" width="2000" height="1248" loading="lazy"></div>';
  var footer = band + wallFade +
    '<footer class="site-footer"><div class="wrap"><div class="footer-grid">' +
      "<div>" +
        '<h4>Falling Walls Lab Spain</h4>' +
        '<p class="footer-note">Falling Walls Lab Madrid, Spain es un evento organizado de manera independiente. Los organizadores son socios independientes de la Falling Walls Foundation. <a href="el-lab.html#about">Sobre Falling Walls Lab</a></p>' +
        '<div class="social">' +
          '<a href="' + CONFIG.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICONS.ig + "</a>" +
          '<a href="' + CONFIG.youtube + '" target="_blank" rel="noopener" aria-label="YouTube">' + ICONS.yt + "</a>" +
          '<a href="mailto:' + CONFIG.email + '" aria-label="Correo">' + ICONS.mail + "</a>" +
        "</div>" +
      "</div>" +
      '<div><h4>Lab</h4><ul><li><a href="el-lab.html#about">Sobre Falling Walls Lab</a></li><li><a href="el-lab.html#historia">Nuestra historia</a></li><li><a href="inscripciones.html">Inscripciones</a></li></ul></div>' +
      '<div><h4>Descubre</h4><ul><li><a href="ediciones.html">Ediciones</a></li><li><a href="mapa.html">Mapa de Labs</a></li><li><a href="partners.html">Hazte partner</a></li></ul></div>' +
      "<div><h4>Contacto</h4><ul>" +
        '<li><a href="mailto:' + CONFIG.email + '">' + CONFIG.email + "</a></li>" +
        '<li><a href="mailto:' + CONFIG.emailMuseo + '">' + CONFIG.emailMuseo + "</a></li>" +
        '<li><a href="' + CONFIG.labInternacional + '" target="_blank" rel="noopener">falling-walls.com/lab ↗</a></li>' +
      "</ul></div>" +
    "</div>" +
    '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " Falling Walls Lab Spain · Madrid</span>" +
    '<span>Foto inferior: Berlín, noviembre de 1989 · autoría pendiente de confirmar</span><span><a href="aviso-legal.html">Aviso legal</a> · <a href="privacidad.html">Privacidad</a> · <a href="cookies.html">Cookies</a> · <button type="button" data-consent-open>Configurar cookies</button></span></div>' +
    "</div></footer>";

  var h = document.getElementById("site-header"); if (h) h.outerHTML = header;
  var f = document.getElementById("site-footer"); if (f) f.outerHTML = footer;

  /* ---------- Menú móvil ---------- */
  var toggle = document.querySelector(".nav-toggle"), nav = document.getElementById("nav");
  if (toggle && nav) toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    if (!open) nav.style.top = document.querySelector(".site-header").getBoundingClientRect().bottom + "px";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Abrir menú" : "Cerrar menú");
    nav.classList.toggle("is-open", !open);
    document.body.style.overflow = open ? "" : "hidden";
  });

  /* ==========================================================================
     CONSENTIMIENTO DE COOKIES
     Esta web no usa cookies de analítica ni publicidad. Solo pide permiso para
     el contenido externo (vídeos de YouTube). La elección se guarda en el
     navegador (fwl-consent) durante 12 meses.
     ========================================================================== */
  var CONSENT_KEY = "fwl-consent";
  function getConsent() {
    try { var c = JSON.parse(store(CONSENT_KEY) || "null"); if (c && Date.now() - c.t < 365 * 864e5) return c; } catch (e) {}
    return null;
  }
  function setConsent(ext) { store(CONSENT_KEY, JSON.stringify({ externo: !!ext, t: Date.now() })); }
  function hasExternal() { var c = getConsent(); return !!(c && c.externo); }

  function showConsent(config) {
    var old = document.querySelector(".consent"); if (old) old.remove();
    var c = getConsent();
    var box = document.createElement("div");
    box.className = "consent" + (config ? " is-config" : "");
    box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "Preferencias de cookies");
    box.innerHTML =
      "<h4>Tu privacidad</h4>" +
      '<p>Solo usamos el almacenamiento técnico imprescindible. Los vídeos de YouTube se cargan únicamente si lo aceptas. <a href="cookies.html">Más información</a></p>' +
      '<div class="opts">' +
        '<label><input type="checkbox" checked disabled> Necesarias (siempre activas): recordar esta elección.</label>' +
        '<label><input type="checkbox" id="cExt"' + (c && c.externo ? " checked" : "") + "> Contenido externo: vídeos de YouTube.</label>" +
      "</div>" +
      '<div class="row">' +
        '<button class="btn" type="button" data-c="all">Aceptar todo</button>' +
        '<button class="btn btn--line" type="button" data-c="none">Solo necesarias</button>' +
        '<button class="btn btn--line" type="button" data-c="cfg">' + (config ? "Guardar selección" : "Configurar") + "</button>" +
      "</div>";
    document.body.appendChild(box);
    box.addEventListener("click", function (e) {
      var b = e.target.closest("[data-c]"); if (!b) return;
      var v = b.getAttribute("data-c");
      if (v === "cfg" && !box.classList.contains("is-config")) { box.classList.add("is-config"); b.textContent = "Guardar selección"; return; }
      setConsent(v === "all" ? true : v === "none" ? false : box.querySelector("#cExt").checked);
      box.remove();
    });
  }
  if (!getConsent()) showConsent(false);
  document.addEventListener("click", function (e) { if (e.target.closest("[data-consent-open]")) showConsent(true); });

  /* ---------- Vídeos de YouTube (con consentimiento) ---------- */
  function loadVideo(box) {
    var btn = box.querySelector(":scope > button");
    var ifr = document.createElement("iframe");
    ifr.src = "https://www.youtube-nocookie.com/embed/" + box.getAttribute("data-youtube") + "?autoplay=1&rel=0";
    ifr.title = (btn && btn.getAttribute("aria-label")) || "Vídeo";
    ifr.allow = "autoplay; encrypted-media; picture-in-picture"; ifr.allowFullscreen = true;
    box.innerHTML = ""; box.appendChild(ifr);
  }
  document.querySelectorAll("[data-youtube]").forEach(function (box) {
    var btn = box.querySelector(":scope > button"); if (!btn) return;
    btn.addEventListener("click", function () {
      if (hasExternal()) return loadVideo(box);
      var gate = document.createElement("div");
      gate.className = "video__consent";
      gate.innerHTML = "<p>Este vídeo se carga desde YouTube, que puede guardar datos de tu navegación. ¿Quieres verlo?</p>" +
        '<div><button class="btn" type="button" data-v="once">Sí, esta vez</button><button class="btn btn--white" type="button" data-v="always">Siempre</button></div>';
      box.appendChild(gate);
      gate.addEventListener("click", function (e) {
        var b = e.target.closest("[data-v]"); if (!b) return;
        if (b.getAttribute("data-v") === "always") setConsent(true);
        loadVideo(box);
      });
    });
  });

  /* ---------- Visor de imágenes (clic para ampliar) ---------- */
  var zoomables = Array.prototype.slice.call(document.querySelectorAll("img.zoom, .masonry img, .carousel img"));
  if (zoomables.length) {
    var lb = document.createElement("dialog");
    lb.className = "lightbox";
    lb.innerHTML = '<div class="lightbox__inner"><img alt=""><p></p></div>' +
      '<button class="lightbox__close" type="button" aria-label="Cerrar">×</button>' +
      '<button class="lightbox__prev" type="button" aria-label="Anterior">‹</button>' +
      '<button class="lightbox__next" type="button" aria-label="Siguiente">›</button>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img"), lbCap = lb.querySelector("p"), idx = 0;
    function caption(img) { var fc = img.closest("figure") && img.closest("figure").querySelector("figcaption"); return (fc && fc.textContent) || img.alt || ""; }
    function open(i) {
      idx = (i + zoomables.length) % zoomables.length;
      var img = zoomables[idx];
      lbImg.src = img.currentSrc || img.src; lbImg.alt = img.alt; lbCap.textContent = caption(img);
      if (!lb.open) { if (lb.showModal) lb.showModal(); else lb.setAttribute("open", ""); }
    }
    zoomables.forEach(function (img, i) {
      img.classList.add("zoom"); img.tabIndex = 0; img.setAttribute("role", "button");
      img.addEventListener("click", function () { open(i); });
      img.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i); } });
    });
    lb.addEventListener("click", function (e) {
      if (e.target.closest(".lightbox__prev")) return open(idx - 1);
      if (e.target.closest(".lightbox__next")) return open(idx + 1);
      if (e.target.closest(".lightbox__close") || e.target === lb || e.target.classList.contains("lightbox__inner")) lb.close();
    });
    lb.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") open(idx - 1); if (e.key === "ArrowRight") open(idx + 1); });
  }

  /* ---------- Comparador deslizante 1989 / hoy ---------- */
  document.querySelectorAll("[data-compare]").forEach(function (box) {
    var range = box.querySelector("input"), touched = false;
    function set(v) { box.style.setProperty("--pos", v + "%"); range.value = v; }
    range.addEventListener("input", function () { touched = true; set(range.value); });
    // Con ratón, la cortina sigue al cursor (como el modo "hover" de los sliders de comparación)
    box.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      touched = true;
      var r = box.getBoundingClientRect();
      set(Math.max(+range.min || 0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)).toFixed(1));
    });
    // Pequeña animación inicial para invitar a moverlo
    if ("IntersectionObserver" in window && !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches)) {
      var seen = new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting) return; seen.disconnect();
        var keys = [36, 26, 70, 36], i = 0;
        (function next() { if (touched || i >= keys.length) return; box.style.transition = "none"; animateTo(keys[i++], next); })();
      }, { threshold: 0.5 });
      seen.observe(box);
    }
    function animateTo(to, done) {
      var from = parseFloat(range.value), t0 = performance.now();
      (function step(t) {
        if (touched) return;
        var p = Math.min((t - t0) / 700, 1), e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        set((from + (to - from) * e).toFixed(1));
        if (p < 1) requestAnimationFrame(step); else setTimeout(done, 150);
      })(t0);
    }
  });

  /* ---------- Línea temporal interactiva ---------- */
  document.querySelectorAll("[data-ttl]").forEach(function (box) {
    var data = JSON.parse(box.querySelector("script[type='application/json']").textContent);
    var years = box.querySelector(".ttl__years"), panel = box.querySelector(".ttl__panel"), idx = 0, timer = null;
    years.innerHTML = '<span class="ttl__track"></span><span class="ttl__fill"></span>' + data.map(function (d, i) {
      return '<button type="button" role="tab" aria-selected="false" data-i="' + i + '">' + esc(d.year) + "</button>";
    }).join("");
    var btns = years.querySelectorAll("button"), fill = years.querySelector(".ttl__fill");
    function show(i, user) {
      idx = (i + data.length) % data.length;
      var d = data[idx];
      btns.forEach(function (b, k) { b.setAttribute("aria-selected", String(k === idx)); b.classList.toggle("is-past", k <= idx); b.tabIndex = k === idx ? 0 : -1; });
      var b = btns[idx]; fill.style.width = (b.offsetLeft + b.offsetWidth / 2) + "px";
      panel.innerHTML = '<div class="ttl__anim"><div class="ttl__year">' + esc(d.year) + "</div><h3>" + esc(d.title) + "</h3><p>" + esc(d.text) + "</p></div>" +
        '<div class="ttl__anim"><div class="ttl__media">' + (d.img ? '<img src="' + esc(d.img) + '" alt="' + esc(d.alt || d.title) + '" loading="lazy">' : "<span>" + esc(d.year) + "</span>") + "</div>" +
        (d.credit ? '<small class="ttl__credit">' + esc(d.credit) + "</small>" : "") + "</div>";
      if (user) { clearInterval(timer); timer = null; }
    }
    years.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) show(+b.getAttribute("data-i"), true); });
    years.addEventListener("keydown", function (e) {
      var k = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (!k) return;
      e.preventDefault(); show(idx + k, true); btns[idx].focus();
    });
    box.querySelectorAll("[data-step]").forEach(function (b) { b.addEventListener("click", function () { show(idx + +b.getAttribute("data-step"), true); }); });
    show(+(box.getAttribute("data-start") || 0));
    window.addEventListener("resize", function () { var b = btns[idx]; fill.style.width = (b.offsetLeft + b.offsetWidth / 2) + "px"; });

    // Modo scroll: la línea temporal se queda fija y avanza a medida que bajas
    if (box.hasAttribute("data-ttl-scroll")) {
      box.classList.add("ttl--scroll");
      var sticky = document.createElement("div"); sticky.className = "ttl__sticky";
      while (box.firstChild) sticky.appendChild(box.firstChild);
      box.appendChild(sticky);
      sticky.insertAdjacentHTML("beforeend", '<div class="ttl__progress" aria-hidden="true"><i></i></div>');
      var bar = sticky.querySelector(".ttl__progress i");
      var per = window.innerWidth < 760 ? 70 : 55; // vh de scroll por año
      box.style.height = "calc(" + (data.length * per) + "vh + 520px)";
      var onScroll = function () {
        var r = box.getBoundingClientRect(), total = box.offsetHeight - sticky.offsetHeight - 40;
        var p = Math.max(0, Math.min(1, (-r.top + 120) / Math.max(1, total)));
        bar.style.width = (p * 100) + "%";
        var i = Math.min(data.length - 1, Math.floor(p * data.length));
        if (i !== idx) show(i);
      };
      window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
      // Pulsar un año lleva al punto de scroll correspondiente
      years.addEventListener("click", function (e) {
        var b = e.target.closest("button"); if (!b) return;
        var total = box.offsetHeight - sticky.offsetHeight - 40;
        window.scrollTo({ top: box.getBoundingClientRect().top + scrollY - 120 + total * (+b.getAttribute("data-i") + 0.5) / data.length, behavior: "smooth" });
      });
      return;
    }
    // Avance automático hasta que la persona interactúa
    if (!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches)) timer = setInterval(function () { show(idx + 1); }, 5000);
  });

  /* ---------- Tres minutos: reloj de cuenta atrás + línea que se dibuja al bajar ---------- */
  document.querySelectorAll("[data-three]").forEach(function (sec) {
    var path = sec.querySelector(".three__line path");
    function draw() {
      var r = sec.getBoundingClientRect(), vh = window.innerHeight;
      var p = Math.max(0, Math.min(1, (vh - r.top) / (r.height + vh * 0.35)));
      path.style.strokeDashoffset = String(1 - p);
    }
    window.addEventListener("scroll", draw, { passive: true }); draw();
    var clock = sec.querySelector("[data-clock]"); if (!clock) return;
    var ring = clock.querySelector(".three__ring"), label = clock.querySelector(".three__time b");
    var DURATION = 12000; // los 180 s se muestran en 12 s
    function run() {
      clock.classList.remove("is-done");
      var t0 = performance.now();
      (function step(t) {
        var p = Math.min(1, (t - t0) / DURATION), left = Math.ceil(180 * (1 - p));
        ring.style.strokeDashoffset = String(p);
        label.textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0");
        if (p < 1) requestAnimationFrame(step);
        else { clock.classList.add("is-done"); setTimeout(run, 3000); }
      })(t0);
    }
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var seen = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { seen.disconnect(); run(); } }, { threshold: 0.4 });
    seen.observe(clock);
  });

  /* ---------- Línea temporal vertical: se rellena y avanza al bajar ---------- */
  document.querySelectorAll("[data-vt]").forEach(function (vt) {
    var fill = vt.querySelector(".vt__line i"), items = vt.querySelectorAll(".vt__item");
    if ("IntersectionObserver" in window) {
      var io3 = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io3.unobserve(e.target); } }); }, { rootMargin: "0px 0px -15% 0px" });
      items.forEach(function (it) { io3.observe(it); });
    } else items.forEach(function (it) { it.classList.add("is-in"); });
    function update() {
      var r = vt.getBoundingClientRect(), mark = window.innerHeight * 0.55;
      fill.style.height = Math.max(0, Math.min(r.height, mark - r.top)) + "px";
      var active = null;
      items.forEach(function (it) { var b = it.getBoundingClientRect(), past = b.top + b.height / 2 < mark; it.classList.toggle("is-past", past); if (past) active = it; });
      items.forEach(function (it) { it.classList.toggle("is-active", it === active); });
    }
    window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update); update();
  });

  /* ---------- Portadas interiores con efecto linterna ---------- */
  document.querySelectorAll(".page-head--photo").forEach(function (head) {
    var bg = head.querySelector(".page-head__bg"); if (!bg) return;
    var col = bg.cloneNode(); col.classList.add("page-head__color"); col.removeAttribute("style");
    if (bg.getAttribute("style")) col.setAttribute("style", bg.getAttribute("style"));
    bg.after(col);
    var last = 0, t0 = performance.now();
    function put(x, y) { col.style.setProperty("--x", x + "px"); col.style.setProperty("--y", y + "px"); }
    head.addEventListener("pointermove", function (e) { var r = head.getBoundingClientRect(); last = performance.now(); put(e.clientX - r.left, e.clientY - r.top); });
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    (function wander(t) {
      if (t - last > 2500) { var w = head.clientWidth, h = head.clientHeight, s = (t - t0) / 1000; put(w * (0.7 + 0.2 * Math.sin(s * 0.45)), h * (0.45 + 0.22 * Math.sin(s * 0.7 + 1))); }
      requestAnimationFrame(wander);
    })(t0);
  });

  /* ---------- Normas de marca: «Lab» nunca solo en mayúsculas ----------
     Si un texto con «Falling Walls Lab» está en un estilo en mayúsculas, se muestra tal cual. */
  window.FW_fixLab = function (root) {
    (root || document).querySelectorAll(".kicker, .card__label, .btn, .tag, .place, .podium .place, .brickwall__hint, .float-cta, figcaption").forEach(function (el) {
      if (/\bLab\b/.test(el.textContent) && getComputedStyle(el).textTransform === "uppercase") el.style.textTransform = "none";
    });
  };
  window.FW_fixLab();

  /* ---------- Muro de ladrillos que se derrumba ----------
     data-brickwall          → cae solo al verlo (y al pasar el ratón)
     data-brickwall="click"  → cae al hacer clic, desde el punto pulsado
     data-wall-img / data-wall-ratio → foto del muro (se ajusta sin deformarse) */
  document.querySelectorAll("[data-brickwall]").forEach(function (box) {
    var grid = box.querySelector(".brickwall__grid");
    var clickMode = box.getAttribute("data-brickwall") === "click";
    var img = box.getAttribute("data-wall-img"), ratio = parseFloat(box.getAttribute("data-wall-ratio")) || 1.5;
    var narrow = window.innerWidth < 700, cols = narrow ? 6 : 10, rows = narrow ? 5 : 4;
    grid.style.setProperty("--cols", cols); grid.style.setProperty("--rows", rows);
    var bricks = [];
    for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
      var b = document.createElement("span");
      b.className = "brick"; b.dataset.r = r; b.dataset.c = c;
      if (img) b.style.backgroundImage = 'url("' + img + '")';
      b.style.setProperty("--rot", (Math.random() * 50 - 25).toFixed(0) + "deg");
      b.style.setProperty("--fall", (120 + Math.random() * 120).toFixed(0) + "%");
      if (!clickMode) b.addEventListener("mouseenter", function () { this.classList.add("is-down"); });
      grid.appendChild(b); bricks.push(b);
    }
    // Recorta la foto como "cover": cada ladrillo muestra su trozo exacto, sin estirar
    function layout() {
      var W = box.clientWidth, H = box.clientHeight, cw = W / cols, ch = H / rows;
      var s = Math.max(W / ratio, H) , bw = s * ratio, bh = s;
      if (W / H > ratio) { bw = W; bh = W / ratio; } else { bh = H; bw = H * ratio; }
      var x0 = (W - bw) / 2, y0 = (H - bh) / 2;
      bricks.forEach(function (b) {
        b.style.backgroundSize = bw + "px " + bh + "px";
        b.style.backgroundPosition = (x0 - b.dataset.c * cw) + "px " + (y0 - b.dataset.r * ch) + "px";
      });
    }
    layout(); window.addEventListener("resize", layout);
    function knockDown(cx, cy) {
      box.classList.add("is-open");
      if (cx == null) { cx = (cols - 1) / 2; cy = (rows - 1) / 2; }
      bricks.forEach(function (b) {
        var d = Math.hypot(b.dataset.c - cx, (b.dataset.r - cy) * 1.6);
        setTimeout(function () { b.classList.add("is-down"); }, d * 130 + Math.random() * 160);
      });
    }
    function rebuild() { box.classList.remove("is-open"); bricks.forEach(function (b) { b.classList.remove("is-down"); }); if (!clickMode) setTimeout(knockDown, 1600); }
    box.querySelector(".brickwall__redo").addEventListener("click", function (e) { e.stopPropagation(); rebuild(); });
    if (clickMode) {
      box.addEventListener("click", function (e) {
        if (box.classList.contains("is-open") || e.target.closest(".brickwall__redo")) return;
        var rc = box.getBoundingClientRect();
        knockDown((e.clientX - rc.left) / rc.width * cols - .5, (e.clientY - rc.top) / rc.height * rows - .5);
      });
      return;
    }
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { bricks.forEach(function (b) { b.classList.add("is-down"); }); box.classList.add("is-open"); return; }
    var io2 = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io2.disconnect(); setTimeout(knockDown, 500); } }, { threshold: 0.55 });
    io2.observe(box);
  });

  /* ---------- Cuenta atrás hasta la apertura ---------- */
  document.querySelectorAll("[data-countdown]").forEach(function (box) {
    var end = new Date(box.getAttribute("data-countdown")).getTime();
    function tick() {
      var s = Math.max(0, Math.floor((end - Date.now()) / 1000));
      var v = { d: Math.floor(s / 86400), h: Math.floor(s % 86400 / 3600), m: Math.floor(s % 3600 / 60), s: s % 60 };
      Object.keys(v).forEach(function (k) { var el = box.querySelector('[data-u="' + k + '"]'); if (el) el.textContent = k === "d" ? v[k] : String(v[k]).padStart(2, "0"); });
    }
    tick(); setInterval(tick, 1000);
  });

  /* ---------- Foco de luz que sigue al cursor (Partners) ---------- */
  document.querySelectorAll("[data-spot]").forEach(function (box) {
    var col = box.querySelector(".spot__color"), last = 0, t0 = performance.now();
    function put(x, y) { col.style.setProperty("--x", x + "px"); col.style.setProperty("--y", y + "px"); }
    box.addEventListener("pointermove", function (e) { var r = box.getBoundingClientRect(); last = performance.now(); put(e.clientX - r.left, e.clientY - r.top); });
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    (function wander(t) {
      if (t - last > 2500) { // sin ratón: el foco recorre la foto despacio
        var w = box.clientWidth, h = box.clientHeight, s = (t - t0) / 1000;
        put(w * (0.62 + 0.28 * Math.sin(s * 0.45)), h * (0.42 + 0.22 * Math.sin(s * 0.7 + 1)));
      }
      requestAnimationFrame(wander);
    })(t0);
  });

  /* ---------- Carrusel ---------- */  document.querySelectorAll("[data-carousel]").forEach(function (c) {
    var t = c.querySelector(".carousel__track");
    // Flechas grandes sobre las fotos, como en falling-walls.com
    var stage = document.createElement("div"); stage.className = "carousel__stage";
    t.parentNode.insertBefore(stage, t); stage.appendChild(t);
    var chev = function (d) { return '<svg viewBox="0 0 20 40" aria-hidden="true"><path d="' + (d < 0 ? "M17 2 3 20l14 18" : "M3 2l14 18L3 38") + '" fill="none" stroke="#fff" stroke-width="2.5"/></svg>'; };
    [-1, 1].forEach(function (d) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "carousel__arrow carousel__arrow--" + (d < 0 ? "prev" : "next");
      b.setAttribute("aria-label", d < 0 ? "Anterior" : "Siguiente"); b.innerHTML = chev(d);
      b.addEventListener("click", function () { t.scrollBy({ left: d * t.clientWidth * 0.8, behavior: "smooth" }); });
      stage.appendChild(b);
    });
    var prev = stage.querySelector(".carousel__arrow--prev"), next = stage.querySelector(".carousel__arrow--next");
    function edges() { prev.disabled = t.scrollLeft < 8; next.disabled = t.scrollLeft + t.clientWidth > t.scrollWidth - 8; }
    t.addEventListener("scroll", edges, { passive: true }); window.addEventListener("resize", edges); edges();
  });

  /* ---------- Pestañas ---------- */
  document.querySelectorAll("[data-tabs]").forEach(function (box) {
    var btns = box.querySelectorAll('[role="tab"]');
    function show(b) {
      btns.forEach(function (x) { var on = x === b; x.setAttribute("aria-selected", String(on)); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute("aria-controls")).hidden = !on; });
      try { history.replaceState(null, "", "#" + b.id); } catch (e) {}
    }
    btns.forEach(function (b, i) {
      b.addEventListener("click", function () { show(b); });
      b.addEventListener("keydown", function (e) {
        var k = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (!k) return;
        var n = btns[(i + k + btns.length) % btns.length]; n.focus(); show(n);
      });
    });
    var start = location.hash && box.querySelector(location.hash + '[role="tab"]');
    if (start) show(start);
  });

  /* ---------- Aparición y contadores ---------- */
  function countUp(el) {
    var to = parseFloat(el.getAttribute("data-count")), pre = el.getAttribute("data-prefix") || "", suf = el.getAttribute("data-suffix") || "", t0 = performance.now();
    (function step(t) {
      var p = Math.min((t - t0) / 1600, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(to * e).toLocaleString("es-ES") + suf;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }
  var animated = document.querySelectorAll(".reveal, .slide-in, [data-count]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        if (e.target.hasAttribute("data-count")) countUp(e.target);
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -40px 0px" });
    animated.forEach(function (el) { io.observe(el); });
  } else animated.forEach(function (el) { el.classList.add("is-in"); });

  /* ---------- Formularios (abren el correo) ---------- */
  document.querySelectorAll("form[data-mailto]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); if (!form.reportValidity()) return;
      var lines = []; new FormData(form).forEach(function (v, k) { if (k !== "privacidad") lines.push(k + ": " + v); });
      location.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent(form.getAttribute("data-subject") || "Falling Walls Lab Madrid") + "&body=" + encodeURIComponent(lines.join("\n"));
      var m = form.querySelector(".form-msg"); if (m) m.classList.add("is-visible");
    });
  });

  /* ==========================================================================
     MAPA DE LABS (d3 + world-atlas)
     ========================================================================== */
  var mapBox = document.querySelector("[data-labmap]");
  if (mapBox && window.FW_LABS && window.d3 && window.topojson) {
    var labs = window.FW_LABS, compact = mapBox.hasAttribute("data-compact");
    var W = 960, H = 470, BERLIN = [13.405, 52.52];
    var svg = d3.select(mapBox).append("svg").attr("class", "map").attr("viewBox", "0 0 " + W + " " + H).attr("role", "img").attr("aria-label", "Mapa de Falling Walls Labs con rutas hacia Berlín");
    var tip = d3.select(mapBox).append("div").attr("class", "map-tip");
    var proj = d3.geoNaturalEarth1().scale(178).translate([W / 2 - 10, H / 2 + 30]);
    var path = d3.geoPath(proj);
    var gLand = svg.append("g"), gArc = svg.append("g"), gLab = svg.append("g"), gTop = svg.append("g");
    var listEl = document.getElementById("labList"), segEl = document.getElementById("labSeg");

    d3.json("assets/vendor/countries-110m.json").then(function (world) {
      var land = topojson.feature(world, world.objects.countries).features.filter(function (c) { return c.id !== "010"; });
      gLand.selectAll("path").data(land).join("path").attr("class", function (c) { return "land" + (c.id === "724" ? " is-spain" : ""); }).attr("d", path);
      draw(labs);
    }).catch(function () { draw(labs); });

    function arcD(l) { return path({ type: "LineString", coordinates: [[l.lon, l.lat], BERLIN] }); }
    function showTip(l) {
      if (!l) return;
      var p = proj([l.lon, l.lat]), r = mapBox.querySelector("svg").getBoundingClientRect(), k = r.width / W;
      tip.html(esc(l.nombre) + "<small>" + esc(l.pais) + "</small>").style("left", p[0] * k + "px").style("top", p[1] * k + "px").classed("is-on", true);
      gLab.selectAll(".lab").classed("is-active", function (d) { return d === l; });
      gArc.selectAll(".arc").style("opacity", function (d) { return d === l ? 1 : .15; }).style("stroke-width", function (d) { return d === l ? 2.5 : 1.2; });
      if (listEl) listEl.querySelectorAll("button").forEach(function (b) { b.classList.toggle("is-active", b.getAttribute("data-n") === l.nombre); });
    }
    function hideTip() { tip.classed("is-on", false); gLab.selectAll(".lab").classed("is-active", false); gArc.selectAll(".arc").style("opacity", null).style("stroke-width", null); }
    function draw(data) {
      var arcs = gArc.selectAll(".arc").data(data, function (d) { return d.nombre; });
      arcs.exit().transition().duration(300).style("opacity", 0).remove();
      arcs.enter().append("path").attr("class", "arc").attr("d", arcD)
        .each(function () { var L = this.getTotalLength(); d3.select(this).attr("stroke-dasharray", L).attr("stroke-dashoffset", L); })
        .transition().delay(function (d, i) { return 300 + i * 40; }).duration(1100).ease(d3.easeCubicOut).attr("stroke-dashoffset", 0);
      var dots = gLab.selectAll(".lab").data(data, function (d) { return d.nombre; });
      dots.exit().transition().duration(300).attr("r", 0).remove();
      dots.enter().append("circle").attr("class", function (d) { return "lab" + (d.es ? " is-es" : ""); })
        .attr("cx", function (d) { return proj([d.lon, d.lat])[0]; }).attr("cy", function (d) { return proj([d.lon, d.lat])[1]; }).attr("r", 0)
        .on("mouseenter", function (e, d) { showTip(d); }).on("mouseleave", hideTip).on("click", function (e, d) { if (!compact) e.stopPropagation(); showTip(d); showCard(d); })
        .transition().delay(function (d, i) { return i * 40; }).duration(400).attr("r", function (d) { return d.es ? 6 : 4.5; });
      gTop.selectAll("*").remove();
      var b = proj(BERLIN);
      gTop.append("circle").attr("class", "pulse").attr("cx", b[0]).attr("cy", b[1]).attr("r", 6);
      gTop.append("circle").attr("class", "berlin").attr("cx", b[0]).attr("cy", b[1]).attr("r", 7);
      gTop.append("text").attr("class", "berlin-label").attr("x", b[0] + 11).attr("y", b[1] - 8).text("Berlín · Global Finale");
      data.filter(function (d) { return d.es; }).forEach(function (d) { var p = proj([d.lon, d.lat]); gTop.append("circle").attr("class", "pulse").attr("cx", p[0]).attr("cy", p[1]).attr("r", 5); });
      if (listEl) listEl.innerHTML = data.slice().sort(function (a, b) { return (b.es ? 1 : 0) - (a.es ? 1 : 0) || a.pais.localeCompare(b.pais, "es"); })
        .map(function (l) { return '<button type="button" data-n="' + esc(l.nombre) + '">' + esc(l.nombre) + "<span>" + esc(l.pais) + "</span></button>"; }).join("");
      var n = document.getElementById("labCount"), c = document.getElementById("labCountries");
      if (n) n.textContent = data.length;
      if (c) c.textContent = new Set(data.map(function (d) { return d.pais; })).size;
    }
    function byName(b) { return labs.filter(function (l) { return l.nombre === b.getAttribute("data-n"); })[0]; }
    // Ficha del Lab: enlace a su página oficial (o al listado de Labs) y contacto
    var cardEl = document.getElementById("labCard");
    function showCard(l) {
      if (!cardEl || !l) return;
      var url = l.url || "https://falling-walls.com/lab/apply";
      cardEl.hidden = false;
      cardEl.innerHTML = "<h3>Falling Walls Lab " + esc(l.nombre) + "</h3>" +
        "<p>" + esc(l.pais) + " · " + esc(l.region) + (l.host ? " · " + esc(l.host) : "") + "</p>" +
        '<div class="cta-row" style="margin:0">' +
          '<a class="btn" href="' + esc(url) + '" target="_blank" rel="noopener">' + (l.url ? "Ver Lab" : "Ver Labs en falling-walls.com") + " ↗</a>" +
          (l.email ? '<a class="btn btn--line" href="mailto:' + esc(l.email) + '">Contactar</a>' : "") +
          (l.es && l.nombre.indexOf("Madrid") === 0 ? '<a class="btn btn--line" href="inscripciones.html">Inscripciones</a>' : "") +
        "</div>";
      if (window.FW_fixLab) window.FW_fixLab(cardEl);
    }
    if (listEl) {
      listEl.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) { showTip(byName(b)); showCard(byName(b)); } });
      listEl.addEventListener("mouseover", function (e) { var b = e.target.closest("button"); if (b) showTip(byName(b)); });
      listEl.addEventListener("focusin", function (e) { var b = e.target.closest("button"); if (b) showTip(byName(b)); });
      listEl.addEventListener("mouseleave", hideTip);
    }
    if (segEl) {
      var regions = ["Todas"].concat(Array.from(new Set(labs.map(function (l) { return l.region; }))));
      segEl.innerHTML = regions.map(function (r, i) { return '<button type="button" aria-pressed="' + (i === 0) + '" data-r="' + r + '">' + r + "</button>"; }).join("");
      segEl.addEventListener("click", function (e) {
        var b = e.target.closest("button"); if (!b) return;
        segEl.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        var r = b.getAttribute("data-r"); hideTip();
        draw(r === "Todas" ? labs : labs.filter(function (l) { return l.region === r; }));
      });
    }
    if (compact) svg.on("click", function () { location.href = "mapa.html"; }).style("cursor", "pointer");
  }
})();
