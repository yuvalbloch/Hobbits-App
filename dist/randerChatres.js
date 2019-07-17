const paint= function (dates , numbers,canvas) {
    var ctx = document.getElementById(canvas).getContext('2d');
    var myChart = new Chart(ctx, {
        animationEnabled: true,
        type: 'bar',
        data: {
            labels: dates,
            datasets: [{
                label: '# of healthy lifestyle',
                data: numbers,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255,1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                gridLines : {color : "rgba(0, 0, 0, 1)"},
                yAxes: [{

                    ticks: {
                        fontColor: "black",
                        fontSize : 17,
                        beginAtZero: true,
                        lineHeight : 1.5,
                        major :{}
                    }
                }]
            }
        }
    });

}