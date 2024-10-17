$(document).ready(function() {
  // Pie Chart for Enrollment Distribution
  var ctx1 = document.getElementById('enrollmentChart').getContext('2d');
  var enrollmentChart = new Chart(ctx1, {
    type: 'pie', // Change from 'line' to 'pie'
    data: {
      labels: ['CS', ' Mechanical', ' IT', ' AIML', ' Electrical'], // You can customize this
      datasets: [{
        label: 'Enrollment Distribution',
        data: [450, 300, 250, 200, 150], // Number of students per department
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
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
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.label + ': ' + tooltipItem.raw; // Show the number of students
            }
          }
        }
      }
    }
  });

  // Doughnut Chart for Course Popularity
  var ctx2 = document.getElementById('popularityChart').getContext('2d');
  var popularityChart = new Chart(ctx2, {
    type: 'doughnut', // Change from 'bar' to 'doughnut'
    data: {
      labels: ['CS', ' Mechanical', ' IT', ' AIML', ' Electrical'],
      datasets: [{
        label: 'Number of Students',
        data: [450, 300, 250, 200, 150], // Use same data as before
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
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
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.label + ': ' + tooltipItem.raw; // Show the number of students
            }
          }
        }
      }
    }
  });

  // Tab Navigation
  $('.nav-link').click(function(e) {
    e.preventDefault();
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    var target = $(this).attr('href');
    $('.tab-content').removeClass('active');
    $(target).addClass('active');
  });
});
