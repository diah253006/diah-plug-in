(function () {

    console.log("ACCESSIBILITY PLUGIN INIT");

    
    // =============================
    // 1. LOAD CSS (AUTO)
    // =============================
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdn.jsdelivr.net/gh/diah253006/diah-plug-in@latest/aksesibilitas.css?v=9999";
    // =============================
    // awal perubahan
    // =============================
    //    css.onload = () => {
    //    console.log("CSS LOADED");
    //    injectPanel();
    //};

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectPanel);
    } else {
        injectPanel();
    }

    css.onerror = () => {
        console.error("CSS FAILED LOAD");
    };
    // =============================
    // akhir perubahan
    // =============================
    document.head.appendChild(css);

    // =============================
    // 2. LOAD BUNDLE JS (AUTO)
    // =============================

    const BASE = "https://cdn.jsdelivr.net/gh/diah253006/diah-plug-in@latest";

    const scripts = [
        BASE + "/bundle/tampilan.bundle.js?v=9999",
        BASE + "/bundle/teks.bundle.js?v=9999",
        BASE + "/bundle/aksesibilitas.bundle.js?v=9999"
    ];
    
    //const scripts = [
    //    "https://cdn.jsdelivr.net/gh/diah253006/diah-plug-in@latest/bundle/tampilan.bundle.js",
    //    "https://cdn.jsdelivr.net/gh/diah253006/diah-plug-in@latest/bundle/teks.bundle.js",
    //    "https://cdn.jsdelivr.net/gh/diah253006/diah-plug-in@latest/bundle/aksesibilitas.bundle.js"
    //];

    scripts.forEach(src => {
        const s = document.createElement("script");
        s.src = src;
        s.defer = true;
        document.body.appendChild(s);
    });

    // =============================
    // 3. INJECT HTML PANEL
    // =============================
    function injectPanel() {

        if (document.getElementById("accessibilityPanel")) return;

        const panel = document.createElement("div");
        panel.id = "accessibilityPanel";
        // =============================
        // awal perubahan
        // =============================
        panel.className = "diah-1303223025-panel hide";
        
        
        // =============================
        // akhir perubahan
        // =============================

        // =============================
        // awal perubahan
        // =============================
        panel.innerHTML = `
            <div class="diah-1303223025-header">
                <span>Aksesibilitas</span>
                <button data-apr-panel-toggle>✖</button>
            </div>

            <div class="diah-1303223025-body">

                <label>Tampilan</label>
                <button data-apr-images>🖼️ Gambar</button>
                <button data-apr-contrast>🌗 Contrast</button>
                <button data-apr-animation>⏸ Animasi</button>
                <button data-apr-mono>⚫ Mono</button>
                <button data-apr-cursor>🖱️ Cursor</button>

                <label>Teks</label>
                <button data-apr-font-increase>+</button>
                <button data-apr-font-decrease>-</button>
                <button data-apr-font="default">Default</button>
                <button data-apr-font="sans">Sans</button>
                <button data-apr-font="serif">Serif</button>
                <button data-apr-font="dyslexic">Dyslexic</button>

                <label>Spacing</label>
                <button data-apr-line="1">1x</button>
                <button data-apr-line="1.5">1.5x</button>
                <button data-apr-line="2">2x</button>

                <button data-apr-letter="0">Normal</button>
                <button data-apr-letter="2">Lebar</button>

                <button data-apr-spacing-reset>Reset</button>

                <label>Aks</label>
                <button data-apr-tts>🔊 Baca</button>
                <button data-apr-tts-stop>Stop</button>
                <button data-apr-voice>🎤 Voice</button>
                <button data-apr-voice-stop>Stop Voice</button>

                <button data-apr-zoom-in>Zoom +</button>
                <button data-apr-zoom-out>Zoom -</button>
                <button data-apr-zoom-reset>Reset Zoom</button>

                <button data-apr-magnifier>Magnifier</button>

            </div>
        `;
        
        
        // =============================
        // akhir perubahan
        // =============================

        //document.body.appendChild(panel);
        document.documentElement.appendChild(panel);

        // =============================
        // TAB
        // =============================
        const tab = document.createElement("div");
        tab.id = "accessibilityTab";
        // =============================
        // awal perubahan
        // =============================
        tab.className = "diah-1303223025-tab";
        
        // =============================
        // akhir perubahan
        // =============================
        tab.setAttribute("data-apr-panel-toggle", "");

        tab.innerHTML = `♿`;

        //document.body.appendChild(tab);
        document.documentElement.appendChild(tab);
        //document.dispatchEvent(new Event("apr-ready"));

        requestAnimationFrame(() => {
            document.dispatchEvent(new Event("apr-ready"));
        });
    }
    // =============================
    // awal perubahan
    // =============================
    
    // =============================
    // 4. INIT SAAT DOM READY
    // =============================
    //if (document.readyState === "loading") {
        //document.addEventListener("DOMContentLoaded", injectPanel);
    //} else {
        //injectPanel();
    //}
        // =============================
    // akhir perubahan
    // =============================
})();
