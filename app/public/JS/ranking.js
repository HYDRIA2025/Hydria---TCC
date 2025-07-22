window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  const backgrounds = {
    "/ranking25": "url('../images/img-ranking25.jpg')",
    "/ranking24": "url('../images/img-ranking24.jpg')",
    "/ranking23": "url('../images/img-ranking23.jpg')",
    "/ranking22": "url('../images/img-ranking22.jpg')",
    "/ranking21": "url('../images/img-ranking21.jpg')",
    "/ranking20": "url('../images/img-ranking20.png')"
  };

  const container = document.querySelector('.home-container');

  if (backgrounds[path] && container) {
    requestAnimationFrame(() => {
      container.style.backgroundImage = backgrounds[path];
    });
  }
});
