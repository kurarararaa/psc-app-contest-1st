<template>
  <div class="chart-container">
    <ChartRadar
      :chart-data="chartData"
      :options="chartOption"
      :styles="chartStyles"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ChartData, ChartOptions } from 'chart.js'
import ChartRadar from '~/components/parts/ChartRadar.vue'

@Component({ components: { ChartRadar } })
export default class ContestChart extends Vue {
  @Prop({ type: Object, required: true })
  chartData: ChartData

  // // チャートのデータ
  // private chartData: ChartData = {
  //   // 横軸のラベル
  //   labels: ['完成度', 'アイデア', 'UX', '有益性'],
  //   // データのリスト
  //   datasets: [
  //     {
  //       label: '受賞アプリ',
  //       data: [8.0, 7.88, 7.25, 7.0],
  //       borderColor: '#fccab3',
  //       borderWidth: 1,
  //       backgroundColor: 'rgba(252, 202, 179, 0.6)',
  //     },
  //   ],
  // }

  // チャートのオプション
  private chartOption: ChartOptions = {
    // アスペクト比を固定しないように変更
    maintainAspectRatio: false,
    scale: {
      ticks: {
        suggestedMax: 10,
        suggestedMin: 0,
        stepSize: 1,
      },
    },
  }

  // チャートのスタイル: <canvas>のstyle属性として設定
  private chartStyles = {
    height: '100%',
    width: '100%',
  }
}
</script>

<style lang="scss">
.chart-container {
  /**
   * vue-chartjsで生成する<canvas>がabsoluteのため、
   * relateveを設定
   */
  position: relative;

  /**
   * chartStylesを設定しているので、
   * height/wightが有効になる
   */
  height: 60vh;
  width: 80vw;
  margin: 0 auto;
}
</style>
