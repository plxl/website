// glass cards (light + other defaults)
document.querySelectorAll(".glass-card").forEach((card) => {
  // prevent dragging
  card.setAttribute("draggable", "false");

  // animated light that follows cursor (kinda clean ngl)
  const light = card.querySelector(".glass-light");
  let x,
    y = 0;
  let update = false;
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    update = true;
  });

  function animate() {
    if (update) {
      if (light)
        light.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      update = false;
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
});

// prevent reverse tabnabbing
document.querySelectorAll('a[target="_blank"]').forEach((a) => {
  a.setAttribute("rel", "noopener noreferrer");
});
