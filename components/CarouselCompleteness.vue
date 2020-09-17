<template>
  <v-carousel-item key="idea">
    <v-sheet color="white" height="100%">
      <v-row class="fill-height" align="center">
        <ContestChart
          :chart-data="chartData"
          style="width: 30%; margin: 0 5% 0 10%;"
        />
        <TypographyCompleteness style="margin: 0 10% 0 5%;" />
      </v-row>
    </v-sheet>
    <NicoModal
      title="完成度賞"
      name="逆日めくりカレンダー"
      author="岸野 大輔"
      icon="/icons/completeness.png"
      url="https://sites.google.com/pscsrv.co.jp/flutter-app-contest-2020/逆日めくりカレンダー"
      :coments="coments"
    />
  </v-carousel-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ChartData } from 'chart.js'
import ContestChart from '~/components/ContestChart.vue'
import TypographyCompleteness from '~/components/TypographyCompleteness.vue'
import NicoModal from '~/components/parts/NicoModal.vue'

@Component({ components: { ContestChart } })
export default class CarouselCompleteness extends Vue {
  coments = [
    '「次の楽しみまであと〇日」の一覧がアプリで確認できるので、毎日が楽しくなるアプリだと思いました！',
    '視覚的に記念日をイメージするというのもなかなかいいものだなぁと思うアプリでした。',
    '手動でめくるだけでなく、自動でもカレンダーをめくれる機能は良いなと思いました。',
    'カレンダーの画像をSNSでシェアする時にもスタイリッシュで良いと思った。',
    '今、発売まで期間のあるゲームが待ち遠しいので、この逆日めくり使えたらより楽しみになりそうです。',
    'デザインがシンプルで配色も多様で良いと思いました。',
    '日数の単位、テーマ、通知など細かいところまで設定できるため、シンプルでも楽しく使えそうな印象を受けました。',
  ]

  // チャートのデータ
  private chartData: ChartData = {
    // 横軸のラベル
    labels: ['完成度', 'アイデア', 'UX', '有益性'],
    // データのリスト
    datasets: [
      {
        label: '受賞アプリ',
        data: [8.55, 6.45, 7.73, 7.27],
        borderColor: '#3be8b0',
        borderWidth: 1,
        backgroundColor: 'rgba(59, 232, 176, 0.6)',
      },
    ],
  }
}
</script>
