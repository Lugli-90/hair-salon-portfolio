console.log("Welcome to Lugli's site!");

const topButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topButton.classList.add("visible");
  } else {
    topButton.classList.remove("visible");
  }
});

// ===== フェードイン（スクロールで出現） =====
const fadeEls = document.querySelectorAll('.fadein');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85; // 画面の85%位置で発火

  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('show');
    } 
  });
});