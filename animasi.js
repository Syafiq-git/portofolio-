  // script.js
  document.addEventListener("DOMContentLoaded", () => {
      const intro = document.querySelector(".intro");
      const kantin = document.querySelector(".kantin");
      const lagiContainer = document.querySelector(".lagi-container");
      const lagiText = document.querySelector(".lagi-text");

      const tl = gsap.timeline();

      // Logo Animation
      tl.to(lagiContainer, {
              duration: 0.5,
              scale: 1,
              opacity: 1,
              ease: "bounce.out",
          })
          .to(lagiContainer, {
              duration: 0.5,
              rotation: 360,
              scale: 1.1,
              ease: "power2.out",
          }, "+=0.25")

      // Teks di bawah logo
      .to(lagiText, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.out",
      })

      // Transition to Main Content
      .to(".intro", {
          duration: 0, // No opacity change here
          onComplete: () => {
              intro.style.display = "none"; // Remove intro from view
              kantin.classList.remove("hidden"); // Show content
          },
      });
  });