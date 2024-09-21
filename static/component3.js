const clientsCtx = document.getElementById('activeClientsChart').getContext('2d');
const activeClientsChart = new Chart(clientsCtx, {
    type: 'line',
    data: {
        labels: ['2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],
        datasets: [
            {
                label: 'Zerodha',
                data: [2, 3, 5, 7, 15, 45, 65, 78], // Replace with your data
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false,
                tension: 0.1
            },
            {
                label: 'Angel One',
                data: [1, 2, 3, 5, 10, 20, 35, 50], // Replace with your data
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                fill: false,
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Clients (in Lakhs)'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
});

// Complaints Chart
const complaintsCtx = document.getElementById('complaintsChart').getContext('2d');
const complaintsChart = new Chart(complaintsCtx, {
    type: 'line',
    data: {
        labels: ['2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],
        datasets: [
            {
                label: 'Angel One',
                data: [200, 300, 350, 500, 700, 1500, 1000, 500], // Replace with your data
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                fill: false,
                tension: 0.1
            },
            {
                label: 'Zerodha',
                data: [100, 150, 200, 400, 800, 1200, 700, 400], // Replace with your data
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false,
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Complaints'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
});

// Share Holding - Angel One
const shareHoldingAngelCtx = document.getElementById('shareHoldingAngelOne').getContext('2d');
const shareHoldingAngelOneChart = new Chart(shareHoldingAngelCtx, {
    type: 'bar',
    data: {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'], // Replace with your labels
        datasets: [
            {
                label: 'Angel One',
                data: [40, 25, 15, 10, 5], // Replace with your data
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Share Holding (%)'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
});

// Share Holding - Zerodha
const shareHoldingZerodhaCtx = document.getElementById('shareHoldingZerodha').getContext('2d');
const shareHoldingZerodhaChart = new Chart(shareHoldingZerodhaCtx, {
    type: 'bar',
    data: {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'], // Replace with your labels
        datasets: [
            {
                label: 'Zerodha',
                data: [30, 25, 20, 10, 5], // Replace with your data
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 2,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Share Holding (%)'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
});

// Financials Chart
const financialsCtx = document.getElementById('financialsChart').getContext('2d');
const financialsChart = new Chart(financialsCtx, {
    type: 'bar',
    data: {
        labels: ['Revenue', 'Profit/Loss'], // Labels for the X-axis
        datasets: [
            {
                label: 'Angel One - 2019-20',
                data: [500, 200], // Replace with your data
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2
            },
            {
                label: 'Zerodha - 2019-20',
                data: [2500, 1000], // Replace with your data
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            },
            {
                label: 'Angel One - 2020-21',
                data: [3000, 1500], // Replace with your data
                backgroundColor: 'rgba(255, 159, 64, 0.4)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2
            },
            {
                label: 'Zerodha - 2020-21',
                data: [4500, 2500], // Replace with your data
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            },
            {
                label: 'Angel One - 2021-22',
                data: [3500, 1800], // Replace with your data
                backgroundColor: 'rgba(255, 159, 64, 0.3)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2
            },
            {
                label: 'Zerodha - 2021-22',
                data: [4000, 2200], // Replace with your data
                backgroundColor: 'rgba(54, 162, 235, 0.3)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            },
            {
                label: 'Angel One - 2022-23',
                data: [4000, 2500], // Replace with your data
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2
            },
            {
                label: 'Zerodha - 2022-23',
                data: [4500, 3000], // Replace with your data
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount (in Crores)' // Y-axis title
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
});