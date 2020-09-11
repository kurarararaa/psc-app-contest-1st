<template>
  <v-carousel-item key="idea">
    <v-sheet color="white" height="100%">
      <v-row class="fill-height" align="center">
        <ContestChart
          :chart-data="chartData"
          style="width: 30%; margin: 0 5% 0 10%;"
        />
        <TypographyIdea style="margin: 0 10% 0 5%;" />
      </v-row>
    </v-sheet>
  </v-carousel-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ChartData } from 'chart.js'
import ContestChart from '~/components/ContestChart.vue'
import TypographyIdea from '~/components/TypographyIdea.vue'

@Component({ components: { ContestChart } })
export default class CarouselIdea extends Vue {
  // チャートのデータ
  private chartData: ChartData = {
    // 横軸のラベル
    labels: ['完成度', 'アイデア', 'UX', '有益性'],
    // データのリスト
    datasets: [
      {
        label: '受賞アプリ',
        data: [7.72, 7.36, 7.18, 6.55],
        borderColor: '#fc636b',
        borderWidth: 1,
        backgroundColor: 'rgba(252, 99, 107, 0.6)',
      },
    ],
  }
}
</script>
