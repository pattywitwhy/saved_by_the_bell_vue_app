<!-- <template>
  <div class="graphs">
    <div class="container">
      <h1 id="headline">Graphs</h1>

      <div>
        Some Graph
        <div id="weeklyGraph" style="width:100%; height:400px;"></div>
        <div id="monthlyGraph" style="width:100%; height:400px;"></div>
      </div>
    </div>
  </div>
</template>

<style>
#headline{
  text-align: center;
}
</style>

<script>
var axios = require('axios')

export default {
  data: function() {
    return {
      temptations: []
    };
  },
  created: function() {
    axios.get('/api/temptations')
      .then(response => {
        this.temptations = response.data
      });
  },
  methods: {}
}

var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('weeklyGraph', {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Weekly Savings'
      },
      xAxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      },
      yAxis: {
        title: {
          text: 'Money ($)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: true
        }
      },
      series: [{
        color: 'rgba(255,0,0,0.1)',
        name: 'Savings Schedule',
        data: [5, 10, 15, 20, 25, 30, 35], 

      }, {
        color: 'rgba(0,0,255,0.9)',
        name: 'Actual Savings',
        data: [10, 12, 17, 22, 22, 22, 33]
      }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('monthlyGraph', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Monthly Savings'
      },
      xAxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
      },
      yAxis: {
        title: {
          text: 'Money ($)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: true
        }
      },
      series: [{
        name: 'Savings Schedule',
        data: [5, 10, 15, 20, 25, 30, 35]
      }, {
        name: 'Actual Savings',
        data: [10, 12, 17, 22, 22, 22, 33]
      }]
    });
});
</script> -->