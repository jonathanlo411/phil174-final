
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
