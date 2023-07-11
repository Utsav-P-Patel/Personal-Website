function updateMousePosition(e) {
    let rect = document.documentElement.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    
    document.documentElement.style.setProperty("--mouse-x", mouseX + "px");
    document.documentElement.style.setProperty("--mouse-y", mouseY + "px");
  }

  window.addEventListener("mousemove", updateMousePosition);
