
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


// Side Nav Scroll Navigation
const buttons = document.getElementsByClassName("sidebar-content");
for (let i = 0; i < buttons.length; i++) {
    bt = buttons[i]
    bt.addEventListener("click", () => {
        it = document.getElementById(`sec${i}`)
        it.scrollIntoView({behavior: "smooth"});
    })
}

// Get Items
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var vertOpt = document.getElementById('vert-opt')
var pageOpt = document.getElementById('page-opt')

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
vertOpt.onclick = function() {
  modal.style.display = "none";
}
pageOpt.onclick = function() {
  window.location.href = 'intro.html'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Close bar after scrolled a bit
let flagActivated = false;
const scrollThreshold = 500; 
window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold && !flagActivated) {
    for (var i = 0; i < buttons.length; i ++) {
      flagActivated = true;
      buttons[i].children[1].style.display = "none";
    }
  }
});

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
