<template>
  <div>
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
    <NicoModal
      title="UX賞"
      name="Gradation to you"
      author="よわよわ"
      icon="/icons/ux.png"
      url="https://sites.google.com/pscsrv.co.jp/flutter-app-contest-2020/gradation-to-you"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ChartData } from 'chart.js'
import ContestChart from '~/components/ContestChart.vue'
import TypographyUx from '~/components/TypographyUx.vue'
import NicoModal from '~/components/parts/NicoModal.vue'

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
        data: [8.27, 6.27, 8.36, 6.27],
        borderColor: '#6a67ce',
        borderWidth: 1,
        backgroundColor: 'rgba(106, 103, 206, 0.6)',
      },
    ],
  }
}
</script>
