//your JS code here. If required.
const panels = document.querySelectorAll('.panel');

// Add click event listener to each panel
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    // Remove active class from all panels
    panels.forEach(p => p.classList.remove('active'));
    // Add active class to clicked panel
    panel.classList.add('active');
    // Make clicked panel wider
    panel.style.flex = 5;
    // Make other panels narrower
    panels.forEach(p => {
      if (p !== panel) {
        p.style.flex = 1;
      }
    });
  });
});

