<template>
  <v-carousel-item>
    <v-sheet color="white" height="100%">
      <v-row class="fill-height" align="center">
        <ContestChart
          :chart-data="chartData"
          style="width: 30%; margin: 0 5% 0 10%;"
        />
        <TypographyUsefulness style="margin: 0 10% 0 5%;" />
      </v-row>
    </v-sheet>
    <NicoModal
      title="有益で賞"
      name="Photra"
      author="Travelers"
      icon="/icons/usefulness.png"
      url="https://sites.google.com/pscsrv.co.jp/flutter-app-contest-2020/photra"
      :coments="coments"
    />
  </v-carousel-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ChartData } from 'chart.js'
import ContestChart from '~/components/ContestChart.vue'
import TypographyUsefulness from '~/components/TypographyUsefulness.vue'
import NicoModal from '~/components/parts/NicoModal.vue'

@Component({ components: { ContestChart } })
export default class CarouselUsefulness extends Vue {
  coments = [
    '旅行先の思い出を一覧が見れるのがとても便利だと思いました！',
    'アルバム整理が簡単になる良いアプリだと思いました。',
    '個人の旅行記録としては使いやすいのではないかと思いました。',
    'メモに感想などを書き残したり、事前に登録すると旅のしおりのような使い方もできたりして汎用性の高さも魅力の一つだと感じた。',
    '位置情報も登録できるので後で「あの時言った店どこだっけなぁ？」となることがあるので、いいなと思いました。',
    '旅行先の写真をフォルダ事に分けれるのは便利だと思いました。',
    '「旅行の事前準備として使う」「ダーツの旅のようなゲーム性を持たせる」という点が独自の視点で面白そうです。',
  ]

  // チャートのデータ
  private chartData: ChartData = {
    // 横軸のラベル
    labels: ['完成度', 'アイデア', 'UX', '有益性'],
    // データのリスト
    datasets: [
      {
        label: '受賞アプリ',
        data: [8.09, 6.27, 7.36, 7.27],
        borderColor: '#1aafd0',
        borderWidth: 1,
        backgroundColor: 'rgba(26, 175, 208, 0.6)',
      },
    ],
  }
}
</script>
