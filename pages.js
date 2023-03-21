
// Card Animates when in viewport (via IntersectionObserver API)
const cards = document.getElementsByClassName('member')

const animateCard = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        const img = entry.target;

        img.classList.add('member-down-animate');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};
for (let i = 0; i < cards.length; i++) {
    animateCard(cards[i])
}


// Side Nav Animate
const nav = document.getElementById("side-nav")
const process = document.getElementById("process")
const animateNav = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        nav.classList.add('animate-sidebar-pop');
      }
      else {
        nav.classList.remove('animate-sidebar-pop');
        nav.classList.add('.animate-sidebar-pop-reverse')
      }

    });
  });
  io.observe(target)
};
animateNav(process)


// Close bar after waiting a bit
const buttons = document.getElementsByClassName("sidebar-content");
let flagActivated = false;
const timeThreshold = 2000;
setTimeout(() => {
  if (!flagActivated) {
    flagActivated = true;
    for (var i = 0; i < buttons.length; i ++) {
      flagActivated = true;
      buttons[i].children[1].style.display = "none";
    }
  }
}, timeThreshold);

// Add hover effects
for (var i = 0; i < buttons.length; i ++) {
  let bt = buttons[i]
  bt.addEventListener("mouseover", () => {
    bt.children[1].style.display = "block";
  })
  bt.addEventListener("mouseleave", () => {
    if (flagActivated) bt.children[1].style.display = "none";
  })
}
