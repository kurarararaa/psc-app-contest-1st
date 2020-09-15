<template>
  <v-carousel-item key="idea">
    <v-sheet color="white" height="100%">
      <v-row class="fill-height" align="center">
        <ContestChart
          :chart-data="chartData"
          style="width: 30%; margin: 0 5% 0 10%;"
        />
        <TypographyGrandPrix style="width: 40%; margin: 0 10% 0 5%;" />
      </v-row>
    </v-sheet>
  </v-carousel-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ChartData } from 'chart.js'
import ContestChart from '~/components/ContestChart.vue'
import TypographyGrandPrix from '~/components/TypographyGrandPrix.vue'

@Component({ components: { ContestChart } })
export default class CarouselGrandPrix extends Vue {
  // チャートのデータ
  private chartData: ChartData = {
    // 横軸のラベル
    labels: ['完成度', 'アイデア', 'UX', '有益性'],
    // データのリスト
    datasets: [
      {
        label: '受賞アプリ',
        data: [8.09, 7.91, 6.73, 7.64],
        borderColor: '#ffb900',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 185, 0, 0.6)',
      },
    ],
  }
}
</script>
