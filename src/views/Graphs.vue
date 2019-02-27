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
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});
</script>