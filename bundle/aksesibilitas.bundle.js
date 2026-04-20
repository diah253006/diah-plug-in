;(function () {

    const ARIA = {

        init() {

            // =========================
            // 1. KEYBOARD SUPPORT (Enter & Space)
            // =========================
            document.addEventListener("keydown", function (e) {

                const el = e.target.closest("[data-apr-clickable]");
                if (!el) return;

                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    el.click();
                }

            });

            // =========================
            // 2. FOCUS STYLE
            // =========================
            document.addEventListener("focusin", function (e) {

                const el = e.target.closest("[data-apr-clickable]");
                if (!el) return;

                el.classList.add("focus-visible");

            });

            document.addEventListener("focusout", function (e) {

                const el = e.target.closest("[data-apr-clickable]");
                if (!el) return;

                el.classList.remove("focus-visible");

            });

            // =========================
            // 3. ARIA EXPANDED TOGGLE
            // =========================

            // =========================
            // awal perubahan
            // =========================
            document.addEventListener("click", function (e) {

                const el = e.target.closest("[data-apr-toggle]");
                if (!el) return;

                const expanded = el.getAttribute("aria-expanded") === "true";
                el.setAttribute("aria-expanded", !expanded);

            });
            // =========================
            // akhir perubahan
            // =========================

            // =========================
            // 4. SKIP LINK
            // =========================
            document.addEventListener("click", function (e) {

                const link = e.target.closest("[data-apr-skip]");
                if (!link) return;

                const target = link.getAttribute("data-target") || "#mainContent";
                const el = document.querySelector(target);

                if (el) {
                    el.setAttribute("tabindex", "-1");
                    el.focus();
                }

            });

        }

    };

    // GLOBAL
    window.APR_ARIA = ARIA;

    console.log("ARIA READY");

    // AUTO INIT
    document.addEventListener("DOMContentLoaded", function () {
        ARIA.init();
    });

})();
;(function () {

    let fontSize = 16;

    //const PANEL = {
        // =========================
        // awal perubahan
        // =========================
        //toggle() {
        //    const panel = document.getElementById("accessibilityPanel");
        //    const tab = document.getElementById("accessibilityTab");

        //    if (!panel || !tab) {
        //        console.warn("Panel belum siap");
        //        return;
        //    }

        //    panel.classList.toggle("hide");
        //    //tab.classList.toggle("hide");
        //},

        //toggle() {
        //    const panel = document.getElementById("accessibilityPanel");
        //    const tab = document.getElementById("accessibilityTab");

        //    if (!panel || !tab) return;

        //    const isOpen = !panel.classList.contains("hide");

        //    if (isOpen) {
                // Tutup panel
        //        panel.classList.add("hide");
        //        tab.style.display = "flex";  // tampilkan icon
        //    } else {
                // Buka panel
        //        panel.classList.remove("hide");
        //        tab.style.display = "none";  // sembunyikan icon
        //    }
        //},
        // =========================
        // akhir perubahan
        // =========================
        //toggle() {
        //    const panel = document.getElementById("accessibilityPanel");
        //    const tab = document.getElementById("accessibilityTab");
            
        //    if (!panel || !tab) return;

        //    panel.classList.toggle("hide");
        //    tab.classList.toggle("hide");
        //},

        //fontIncrease() {
        //    fontSize += 2;
        //    document.body.style.fontSize = fontSize + "px";
        //},

        //fontDecrease() {
        //    fontSize -= 2;
        //    document.body.style.fontSize = fontSize + "px";
        //},

        //contrast() {
        //    document.body.classList.toggle("high-contrast");
        //},
    //};

    //window.APR_PANEL = PANEL;

    // =========================
    // awal perubahan
    // =========================
    //document.addEventListener("apr-ready", function () {

        //document.addEventListener("click", function (e) {

          //  const panel = document.getElementById("accessibilityPanel");
          //  const tab = document.getElementById("accessibilityTab");

          //  if (!panel || !tab) return;

            //const toggleBtn = e.target.closest("#accessibilityTab, [data-apr-panel-toggle]");
            //if (toggleBtn) {
            //    PANEL.toggle();
            //    return;
            //}

            //if (e.target.closest("[data-apr-font-increase]")) {
            //    PANEL.fontIncrease();
            //    return;
            //}

            //if (e.target.closest("[data-apr-font-decrease]")) {
            //    PANEL.fontDecrease();
            //    return;
            //}

            //if (e.target.closest("[data-apr-contrast]")) {
            //    PANEL.contrast();
            //    return;
            //}
        //});

    //});
})();

// =========================
// akhir perubahan
// =========================

//    document.addEventListener("click", function (e) {
//        const toggleBtn = e.target.closest("#accessibilityTab, [data-apr-panel-toggle]");
//        if (toggleBtn) {
//            PANEL.toggle();
//            return;
//        }

//        if (e.target.closest("[data-apr-font-increase]")) {
//            PANEL.fontIncrease();
//            return;
//        }

//        if (e.target.closest("[data-apr-font-decrease]")) {
//            PANEL.fontDecrease();
//            return;
//        }
//        // =========================
//        // awal perubahan
//        // =========================
//        if (e.target.closest("[data-apr-contrast]"))
//        //if (e.target.closest("[data-apr-contrast-toggle]")) {
//        // =========================
//        // akhir perubahan
//        // =========================
//            PANEL.contrast();
//            return;
//        }
//    });

        

;(function () {

    const TTS = {
        speech: null,

        start(target = "body") {
            this.stop();

            const el = document.querySelector(target);
            if (!el) {
                console.warn("Target tidak ditemukan:", target);
                return;
            }

            const text = el.innerText.substring(0, 3000);
            if (!text) {
                console.warn("Tidak ada teks");
                return;
            }

            this.speech = new SpeechSynthesisUtterance(text);
            this.speech.lang = "id-ID";

            const speakNow = () => {
                console.log("Mulai bicara...");
                speechSynthesis.speak(this.speech);
            };

            if (speechSynthesis.getVoices().length === 0) {
                speechSynthesis.onvoiceschanged = speakNow;
            } else {
                speakNow();
            }
        },

        stop() {
            console.log("Stop bicara");
            speechSynthesis.cancel();
        }
    };

    console.log("TTS READY");

   document.addEventListener("click", function (e) {

    const btn = e.target.closest("button");
    if (!btn) return;

    const text = btn.innerText
    .toLowerCase()
    .replace(/[^\w\s]/gi, "") // hapus emoji & simbol
    .trim();

    // ========================
    // 1. PRIORITAS: ATRIBUT
    // ========================
    if (btn.matches("[data-apr-tts]")) {
        console.log("Klik baca (atribut)");
        const target = btn.getAttribute("data-target") || "body";
        TTS.start(target);
        return;
    }

    if (btn.matches("[data-apr-tts-stop]")) {
        console.log("Klik stop (atribut)");
        TTS.stop();
        return;
    }

    // ========================
    // 2. FALLBACK: AUTO DETECT
    // ========================
    if (text.includes("baca")) {
        console.log("Klik baca (auto)");
        const target = document.querySelector("#mainContent") ? "#mainContent" : "body";
TTS.start(target);
    }

    if (text.includes("stop") || text.includes("berhenti")) {
        console.log("Klik stop (auto)");
        TTS.stop();
    }

});

})();
;(function () {

    let recognition = null;
    let isListening = false;

    const VOICE = {

        start() {
            if (!('webkitSpeechRecognition' in window)) {
                alert("Browser tidak mendukung voice command");
                return;
            }

            recognition = new webkitSpeechRecognition();
            recognition.lang = "id-ID";
            recognition.continuous = true;
            recognition.interimResults = false;

            recognition.onstart = () => {
                isListening = true;
                console.log("🎤 Voice aktif");
            };

            recognition.onend = () => {
                isListening = false;
                console.log("🎤 Voice berhenti");
            };

            recognition.onresult = (event) => {
                let transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
                console.log("Perintah:", transcript);

                this.handleCommand(transcript);
            };

            recognition.start();
        },

        stop() {
            if (recognition) recognition.stop();
        },

        handleCommand(command) {

            // 🔍 SEARCH
            if (command.includes("cari")) {

                let keyword = command
                    .replace("cari", "")
                    .replace(/[^\w\s]/gi, "")
                    .trim();

                let input = document.querySelector("#searchInput");

                if (input) {
                    input.value = keyword;
                    input.dispatchEvent(new Event('input'));
                }

                this.speak("Mencari " + keyword);
            }

            // ⬇️ SCROLL
            else if (command.includes("scroll bawah")) {
                window.scrollBy({ top: 500, behavior: 'smooth' });
            }
            else if (command.includes("scroll atas")) {
                window.scrollBy({ top: -500, behavior: 'smooth' });
            }

            // 📂 FILTER
            else if (command.includes("buka filter")) {
                document.getElementById("filterCollapse")?.classList.add("show");
                this.speak("Filter dibuka");
            }

            // 🔊 TTS (integrasi otomatis)
            else if (command.includes("baca")) {
                if (window.APR_TTS) {
                    window.APR_TTS.start("#mainContent");
                }
            }
            else if (command.includes("stop")) {
                if (window.APR_TTS) {
                    window.APR_TTS.stop();
                }
            }

            else {
                this.speak("Perintah tidak dikenali");
            }
        },

        speak(text) {
            let msg = new SpeechSynthesisUtterance(text);
            msg.lang = "id-ID";
            speechSynthesis.speak(msg);
        }
    };

    // 🔥 EXPORT GLOBAL
    window.APR_VOICE = VOICE;

    console.log("VOICE READY");

    // 🔥 AUTO BUTTON DETECT
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // PRIORITAS: ATRIBUT
        if (btn.hasAttribute("data-apr-voice")) {
            console.log("Start Voice");
            VOICE.start();
            return;
        }

        if (btn.hasAttribute("data-apr-voice-stop")) {
            console.log("Stop Voice");
            VOICE.stop();
            return;
        }

        // 🔥 FALLBACK AUTO TEXT
        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("voice") || text.includes("mic")) {
            VOICE.start();
        }

        if (text.includes("stop voice")) {
            VOICE.stop();
        }

    });

})();
;(function () {

    let zoomLevel = 1;

    const ZOOM = {

        in() {
            if (zoomLevel < 2) {
                zoomLevel += 0.25;
                this.apply();
            }
        },

        out() {
            if (zoomLevel > 1) {
                zoomLevel -= 0.25;
                this.apply();
            }
        },

        reset() {
            zoomLevel = 1;
            this.apply();
        },

        apply() {
            document.body.style.transform = `scale(${zoomLevel})`;
            document.body.style.transformOrigin = "top left";
            document.body.style.width = (100 / zoomLevel) + "%";
        }
    };

    // 🔥 EXPORT GLOBAL (optional)
    window.APR_ZOOM = ZOOM;

    console.log("ZOOM READY");

    // 🔥 AUTO DETECT BUTTON
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // PRIORITAS: ATRIBUT
        if (btn.hasAttribute("data-apr-zoom-in")) {
            console.log("Zoom In");
            ZOOM.in();
            return;
        }

        if (btn.hasAttribute("data-apr-zoom-out")) {
            console.log("Zoom Out");
            ZOOM.out();
            return;
        }

        if (btn.hasAttribute("data-apr-zoom-reset")) {
            console.log("Zoom Reset");
            ZOOM.reset();
            return;
        }

        // 🔥 FALLBACK AUTO TEXT (opsional)
        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("zoom +") || text.includes("perbesar")) {
            ZOOM.in();
        }

        if (text.includes("zoom -") || text.includes("perkecil")) {
            ZOOM.out();
        }

        if (text.includes("reset")) {
            ZOOM.reset();
        }

    });

})();
;(function () {

    let active = false;
    let lens = null;

    const MAGNIFIER = {

        init() {
            // buat lens otomatis
            lens = document.createElement("div");
            lens.id = "apr-magnifier-lens";

            Object.assign(lens.style, {
                position: "fixed",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "2px solid #000",
                overflow: "hidden",
                pointerEvents: "none",
                display: "none",
                zIndex: "9999",
                transform: "scale(2)",
                transformOrigin: "top left",
                background: "#fff"
            });

            document.body.appendChild(lens);
        },

        toggle() {
            active = !active;

            if (active) {
                lens.style.display = "block";
                document.addEventListener("mousemove", this.move);
                console.log("Magnifier ON");
            } else {
                lens.style.display = "none";
                document.removeEventListener("mousemove", this.move);
                console.log("Magnifier OFF");
            }
        },

       move(e) {
    const x = e.clientX;
    const y = e.clientY;

    lens.style.left = (x - 75) + "px";
    lens.style.top = (y - 75) + "px";

    // ambil element di bawah cursor
    const element = document.elementFromPoint(x, y);
    if (!element || element === lens) return;

    const rect = element.getBoundingClientRect();

    lens.innerHTML = element.outerHTML;

    const inner = lens.firstChild;

    inner.style.transform = "scale(2)";
    inner.style.transformOrigin = `${x - rect.left}px ${y - rect.top}px`;
    inner.style.pointerEvents = "none";
}

    };

    // 🔥 INIT AUTO
    document.addEventListener("DOMContentLoaded", () => {
        MAGNIFIER.init();
    });

    // 🔥 EXPORT GLOBAL
    window.APR_MAGNIFIER = MAGNIFIER;

    console.log("MAGNIFIER READY");

    // 🔥 AUTO BUTTON DETECT
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // PRIORITAS: ATRIBUT
        if (btn.hasAttribute("data-apr-magnifier")) {
            MAGNIFIER.toggle();
            return;
        }

        // 🔥 FALLBACK AUTO TEXT
        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("magnifier") || text.includes("zoom kaca")) {
            MAGNIFIER.toggle();
        }

    });

})();
