!(function (e) {
    "use strict";
    particlesJS("bubble-js", {
      particles: {
        number: { value: 10, density: { enable: !0, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000" },
          polygon: { nb_sides: 6 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.2,
          random: !0,
          anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
        },
        size: {
          value: 90,
          random: !1,
          anim: { enable: !0, speed: 10, size_min: 40, sync: !1 },
        },
        line_linked: {
          enable: !1,
          distance: 200,
          color: "#ffffff",
          opacity: 1,
          width: 2,
        },
        move: {
          enable: !0,
          speed: 8,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: { enable: !1, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !1, mode: "grab" },
          onclick: { enable: !1, mode: "push" },
          resize: !0,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: !0,
    });
  })(jQuery);