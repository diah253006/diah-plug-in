(function () {

    let hidden = false;

    const Images = {

        toggle(target = "body") {
            const el = document.querySelector(target);
            if (!el) return;

            hidden = !hidden;

            el.classList.toggle("hide-images");

            console.log("Images:", hidden ? "HIDDEN" : "VISIBLE");

            // 🔊 Optional voice
            if (window.speechSynthesis) {
                const msg = new SpeechSynthesisUtterance(
                    hidden ? "Gambar disembunyikan" : "Gambar ditampilkan"
                );
                msg.lang = "id-ID";
                speechSynthesis.speak(msg);
            }
        }

    };

    // GLOBAL (optional)
    window.APR_IMAGES = Images;

    console.log("IMAGES READY");

    // 🔥 AUTO DETECT (ATRIBUT + TEXT)
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // ========================
        // PRIORITAS: ATRIBUT
        // ========================
        if (btn.hasAttribute("data-apr-images")) {
                console.log("CLICK IMAGE BUTTON"); 
            const target = btn.getAttribute("data-target") || "body";
            Images.toggle(target);
            return;
        }

        // ========================
        // FALLBACK: TEXT DETECT
        // ========================
        const text = (btn.innerText || "").toLowerCase();

        if (
            text.includes("sembunyikan gambar") ||
            text.includes("tampilkan gambar") ||
            text.includes("gambar")
        ) {
            Images.toggle("body");
        }

    });

})();
(function () {

    let isHighContrast = false;

    const Contrast = {

        toggle(target = "body") {
            const el = document.querySelector(target);
            if (!el) return;

            isHighContrast = !isHighContrast;

            el.classList.toggle("high-contrast");

            console.log("Contrast:", isHighContrast ? "ON" : "OFF");

            // 🔊 voice feedback
            if (window.speechSynthesis) {
                const msg = new SpeechSynthesisUtterance(
                    isHighContrast
                        ? "Mode kontras tinggi aktif"
                        : "Mode normal aktif"
                );
                msg.lang = "id-ID";
                speechSynthesis.speak(msg);
            }
        }

    };

    window.APR_CONTRAST = Contrast;

    console.log("CONTRAST READY");

    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // ========================
        // 1. PRIORITAS: ATRIBUT
        // ========================
        if (btn.hasAttribute("data-apr-contrast")) {
            console.log("Klik contrast (atribut)");

            const target = btn.getAttribute("data-target") || "body";
            Contrast.toggle(target);

            if (btn.hasAttribute("data-apr-auto-text")) {
                btn.innerText = isHighContrast
                    ? "🌗 Normal Mode"
                    : "🌓 High Contrast";
            }

            return;
        }

        // ========================
        // 2. FALLBACK: TEXT
        // ========================
        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("contrast") || text.includes("kontras")) {
            console.log("Klik contrast (auto)");
            Contrast.toggle("body");
        }

    });

})();
(function () {

    let isPaused = false;

    const Animation = {

        toggle(target = "body") {
            const el = document.querySelector(target);
            if (!el) return;

            isPaused = !isPaused;

            el.classList.toggle("reduce-motion");

            console.log("Animation:", isPaused ? "OFF" : "ON");

            // optional voice feedback
            if (window.speechSynthesis) {
                const msg = new SpeechSynthesisUtterance(
                    isPaused ? "Animasi dimatikan" : "Animasi diaktifkan"
                );
                msg.lang = "id-ID";
                speechSynthesis.speak(msg);
            }
        }

    };

    // GLOBAL
    window.APR_ANIMATION = Animation;

    console.log("ANIMATION READY");

    // AUTO DETECT CLICK
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("[data-apr-animation]");
        if (!btn) return;

        const target = btn.getAttribute("data-target") || "body";

        Animation.toggle(target);

        // update text tombol otomatis
        if (btn.hasAttribute("data-apr-auto-text")) {
            btn.innerText = isPaused
                ? "▶️ Aktifkan Animasi"
                : "⏸ Pause Animasi";
        }

    });

    // AUTO APPLY SYSTEM PREF
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add("reduce-motion");
        isPaused = true;
    }

})();
(function () {

    let isMono = false;
    let isCursorBig = false;

    const Visual = {

        toggleMono(target = "body") {
            const el = document.querySelector(target);
            if (!el) return;

            isMono = !isMono;
            el.classList.toggle("monochrome");

            console.log("Monochrome:", isMono ? "ON" : "OFF");
        },

        toggleCursor(target = "body") {
            const el = document.querySelector(target);
            if (!el) return;

            isCursorBig = !isCursorBig;
            el.classList.toggle("big-cursor");

            console.log("Cursor:", isCursorBig ? "BIG" : "NORMAL");
        }

    };

    // GLOBAL
    window.APR_VISUAL = Visual;

    console.log("VISUAL READY");

    // AUTO DETECT CLICK
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // ========================
        // 1. PRIORITAS: ATRIBUT
        // ========================

        if (btn.hasAttribute("data-apr-mono")) {
            const target = btn.getAttribute("data-target") || "body";
            Visual.toggleMono(target);
            return;
        }

        if (btn.hasAttribute("data-apr-cursor")) {
            const target = btn.getAttribute("data-target") || "body";
            Visual.toggleCursor(target);
            return;
        }

        // ========================
        // 2. FALLBACK: TEXT
        // ========================

        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("mono") || text.includes("hitam putih")) {
            Visual.toggleMono("body");
        }

        if (text.includes("cursor") || text.includes("kursor")) {
            Visual.toggleCursor("body");
        }

    });

})();
