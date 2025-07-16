function toggleMore() {
    const content = document.getElementById("more-content");
    const button = event.target;
    
    if (content.style.display === "none") {
      content.style.display = "inline";
      button.textContent = "Ver menos";
    } else {
      content.style.display = "none";
      button.textContent = "Ver mais";
    }
  }