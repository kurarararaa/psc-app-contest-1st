<template>
  <v-carousel-item key="idea">
    <v-sheet color="white" height="100%">
      <v-row class="fill-height" align="center">
        <ContestChart
          :chart-data="chartData"
          style="width: 30%; margin: 0 5% 0 10%;"
        />
        <TypographyUx style="margin: 0 10% 0 5%;" />
      </v-row>
    </v-sheet>
  </v-carousel-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ChartData } from 'chart.js'
import ContestChart from '~/components/ContestChart.vue'
import TypographyUx from '~/components/TypographyUx.vue'

@Component({ components: { ContestChart } })
export default class CarouselUx extends Vue {
  // チャートのデータ
  private chartData: ChartData = {
    // 横軸のラベル
    labels: ['完成度', 'アイデア', 'UX', '有益性'],
    // データのリスト
    datasets: [
      {
        label: '受賞アプリ',
        data: [8.38, 6.75, 8.75, 6.75],
        borderColor: '#fccab3',
        borderWidth: 1,
        backgroundColor: 'rgba(252, 202, 179, 0.6)',
      },
    ],
  }
}
</script>
