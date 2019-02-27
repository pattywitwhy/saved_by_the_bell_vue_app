<template>
  <div class="graphs">
    <div class="container">
      <h1 id="headline">Graphs</h1>

      <div>
        Some Graph
        <div id="weeklyGraph" style="width:100%; height:400px;"></div>
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

    };
  },
  created: function() {},
  methods: {}
}

var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('weeklyGraph', {
      chart: {
        type: 'line'
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
        name: 'Savings Schedule',
        data: [5, 10, 15, 20, 25, 30, 35]
      }, {
        name: 'Actual Savings',
        data: [10, 12, 17, 22, 22, 22, 33]
      }]
    });
});
</script>