<!-- Template Tag can not be merged... -->

<script lang="ts">
import { Component, Vue, Prop, Watch, mixins } from 'nuxt-property-decorator'
import Chart from 'chart.js'
import VueChart from 'vue-chartjs'
const Radar = VueChart.Radar
const reactiveProp = VueChart.mixins.reactiveProp

@Component
export default class ChartRadar extends mixins(Radar, reactiveProp) {
  @Prop({ default: {} }) chartData: Chart.ChartData
  @Prop({ default: {} }) options: Chart.ChartOptions

  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
