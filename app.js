
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


// Load graphs through Chart.js
function LoadChart(labels, label, data, canvas, title) {
    var chartData = {
        labels: labels,
        datasets: [{
            label: label,
            data: data,
            borderColor: 'red',
        }]
    };
    var chartOptions = {
        plugins: {
            title: {
                display: true, // defaults to false
                text: title,
                fontSize: 60,
                color: 'black',
            },
            legend: {
                fullSize: false,
            },
        },
        scales: {
            x: {
                title: {
                    text: 'Week Number',
                    display: true,
                    color: 'black',
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    text: label,
                    display: true,
                    color: 'black',
                }
            }
        },
        responsive: false,
        maintainAspectRatio: false,
    };
    var ctx = document.getElementById(canvas).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });
    myChart.update();
}

LoadChart("Label 1", "Label 2", [1, 2, 3], "chart1", "Title")