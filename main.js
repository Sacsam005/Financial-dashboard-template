const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart')
const dailyCanvas = document.getElementById('daily-chart')
const mobileCanvas = document.getElementById('mobile-chart')

const user = document.getElementById('userField')
const message = document.getElementById('messageField')
const send = document.getElementById('send')


alertBanner.innerHTML = 
`<div class='alert-banner'>
  <p><strong>Alert:</strong> You have unread messages</p>
  <p class='alert-banner-close'>X</p>
  </div>
`

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains('alert-banner-close')) {
    alertBanner.style.display = 'none'
  }
})

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
  backgroundColor: 'rgba(133, 126, 231, 0.3)',
  borderWidth: 2,
  fill: 'origin',
  tension: 0.4
   }]
}

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    y: { 
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

const dailyData = {
  labels : ["S", "M","T","W","T","F","S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477bF',
    borderWidth: 1
  }]
}

const dailyOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  }, 
  plugins: {
    legend: {
      display: false
    }
  }
}

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
})


// Doughnut chart
const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477Bf',
      '#78CF82',
      '#51B6C8'
    ],
    hoverOffset: 4
  }]
}

const mobileOptions = {
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    }
  }
};

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

send.addEventListener('click', () => {
  if(user.value === "" && message.value === "") {
    alert('Please fill out user and message fields before sneding')
  } else if (user.value === "") {
    alert('Please fill out user field before sending')
  } else if (message.value === "") {
    alert('Please fill out message field before sending')
  } else {
    alert(`Message successfully sent to: ${user.value}`)
  }
})