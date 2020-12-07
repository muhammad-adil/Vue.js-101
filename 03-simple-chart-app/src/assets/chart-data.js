// export 
const planetChartData = {
  type: 'bar',
  data: {
    labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    datasets: [{ // graph
        label: 'Number of Moons',
        type: 'line',
        data: [64, 100, 1, 31, 67, 62, 27, 14],
        backgroundColor: [
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)'
        ],
        borderColor: [
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
        ],
        borderWidth: 3
      },
      { // another graph
        label: 'Planet Mass (x1,000 km)',
        type: 'bar',
        data: [49.8, 112.1, 29.7, 20.7, 239.8, 116.4, 150.7, 199.2],
        backgroundColor: [
          'rgba(71, 183,132,.5)', // Green
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
        ],
        borderColor: [
          '#47b784',
          '#47b784',
          '#47b784',
          '#47b784',
          '#47b784',
          '#47b784',
          '#47b784',
          '#47b784',
        ],
        borderWidth: 3
      },
      { // another graph
        label: '$BN Investement',
        type: 'bubble',
        data: [40.8, 19, 245, 200.7, 89.8, 46.4, 5.7, 27.2],
        backgroundColor: [
          'rgba(41, 11,132,.5)',
          'rgba(255, 0, 0, 0.8)',
          'rgba(71, 1,132,.5)',
          'rgba(71, 421,132,.5)',
          'rgba(31, 101,132,.5)',
          'rgba(11, 88,832,.5)',
          'rgba(255, 0, 0, 0.8)',
          'rgba(71, 11,132,.5)',
        ],
        borderColor: [
          '#242224',
          '#622444',
          '#411784',
          '#411784',
          '#411784',
          '#411784',
          '#411784',
          '#411784',
        ],
        borderWidth: 3,
        radius: 7,
      }
    ]
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

export default planetChartData;