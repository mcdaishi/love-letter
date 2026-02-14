$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("zoomOverlay");
  const zoomedImg = document.getElementById("zoomedImg");

  // Écouteur global (fonctionne même pour nouvelles images)
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".letter img");

    if (img) {
      zoomedImg.src = img.src;
      overlay.style.display = "flex";
    }
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });
});


const letterContent = document.querySelector(".letter-content");

window.addEventListener("wheel", (e) => {
  if (!letterContent) return;

  const rect = letterContent.getBoundingClientRect();

  // Vérifie que la souris est sur la lettre
  if (
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom
  ) {
    e.preventDefault(); // empêche le scroll de la page
    letterContent.scrollTop += e.deltaY;
  }
}, { passive: false });


document.querySelectorAll(".insta-video").forEach(container => {
  const video = container.querySelector("video");

  container.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      container.classList.add("playing");
    } else {
      video.pause();
      container.classList.remove("playing");
    }
  });

  video.addEventListener("ended", () => {
    container.classList.remove("playing");
  });
});

const videos = document.querySelectorAll(".insta-video");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const container = entry.target;
    const video = container.querySelector("video");

    if (entry.isIntersecting) {
      video.play().catch(() => {});
      container.classList.add("playing");
    } else {
      video.pause();
      container.classList.remove("playing");
    }
  });
}, {
  threshold: 0.6
});

videos.forEach(video => observer.observe(video));


