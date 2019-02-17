const pieChartData = {
    type: 'pie',
    data: {
        labels: ['Mercury', 'Earth', 'Mars', 'Uranus', 'Neptune'],
        datasets: [{ // one line graph
            label: '% of Life',
            type: 'pie',
            data: [3, 98, 40, 2, 1],
            backgroundColor: [
                'rgba(4,3,311,.5)',
                'rgba(14,223,93,.5)',
                'rgba(64,3,913,.5)',
                'rgba(14,3,93,.5)',
                'rgba(214,3,193,.5)',
            ],
            borderColor: [
                '#36314d',
                '#44a4a4',
                '#1d3d5d',
                '#2d4d5d',
                '#2e3e4e',
            ],
            borderWidth: 3
        }, ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25,
                }
            }]
        }
    }
};

export default pieChartData;