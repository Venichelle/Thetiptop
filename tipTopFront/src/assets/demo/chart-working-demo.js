window.onload = function () {
// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// récuperer le token 

var token = JSON.parse(localStorage.getItem('chaimae')).token;




fetch('https://api.dev.dsp-archiweb020-vm.fr/api/Admin/statistiquesGainParClient', {method: 'GET',
  headers: {
    'Authorization': 'Bearer ' +  token
  }
}).then((res) => res.json())
.then((response) => {
  var lots = ["infuseur à thé", "boite de 100g d’un thé détox", "boite de 100g d’un thé détox d’infusion", "boite de 100g d’un thé signature", 
               "coffret découverte d’une valeur de 39€", "coffret découverte d’une valeur de 69€"];
  var infusionThe = 0;
  var boite100g = 0;
  var boite100gInfusion = 0;
  var boite100gSignature = 0;
  var coffret39 = 0;
  var coffret69 = 0;
  
  var count = {}
  response.forEach(element => {
    if (element.count === lots[0]) {
      infusionThe++;
    } else if (element.count === lots[1]) {
      boite100g++;
    } else if (element.count === lots[2]) {
      boite100gInfusion++;
    } else if (element.count === lots[3]) {
      boite100gSignature++;
    } else if (element.count === lots[4]) {
      coffret39++;
    } else {
      coffret69++;
    }
  
  });
  console.log("toto", infusionThe);

  var ctx = document.getElementById("myAreaChart");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [lots[0], lots[1], lots[2], lots[3], lots[4], lots[5]],
      datasets: [{
        label: "",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [infusionThe, boite100g, boite100gInfusion, boite100gSignature, coffret39, coffret69],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 20,
            maxTicksLimit: 5
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });
})
// Area Chart Example

 



fetch('https://api.dev.dsp-archiweb020-vm.fr/api/Admin/StatistiqueTicket', {method: 'GET',
  headers: {
    'Authorization': 'Bearer ' +  token
  }
})
  .then(response => response.json())
  .then(json =>  {
    var ctx1 = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ["Distribué", "Gain récupérer", "Non distribué", , "Gain à récuperer"],
    datasets: [{
      label: "Revenue",
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(12, 45, 255, 0.7)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: "rgba(2,117,216,1)",
      data: [json.destribue, json.gainaRecuperer, json.nonDestribue, json.gainaRecuperer],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 1500,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
  })

// Bar Chart Example

}