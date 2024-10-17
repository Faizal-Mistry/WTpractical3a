$(document).ready(function() {
    var ctx1 = document.getElementById('enrollmentChart').getContext('2d');
    var enrollmentChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Number of Students',
                data: [1200, 1300, 1400, 1450, 1500],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctx2 = document.getElementById('popularityChart').getContext('2d');
    var popularityChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['CS', 'Mechanical', 'IT', 'AIML', 'Electrical'],
            datasets: [{
                label: 'Number of Students',
                data: [450, 300, 250, 200, 150],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba....040Z") 75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    $('.nav-link').click(function(e) {
        e.preventDefault();
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        var target = $(this).attr('href');
        $('.tab-content').removeClass('active');
        $(target).addClass('active');
    });
});