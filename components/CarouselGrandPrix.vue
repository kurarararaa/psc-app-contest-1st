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
    <NicoModal
      title="グランプリ"
      name="Review Homework"
      author="kami_teru"
      icon="/icons/gp.png"
      url="https://sites.google.com/pscsrv.co.jp/flutter-app-contest-2020/review-homework"
      :coments="coments"
    />
  </v-carousel-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ChartData } from 'chart.js'
import ContestChart from '~/components/ContestChart.vue'
import TypographyGrandPrix from '~/components/TypographyGrandPrix.vue'

@Component({ components: { ContestChart } })
export default class CarouselGrandPrix extends Vue {
  coments = [
    '家庭学習を通して子供とのきっかけの一つになりそうな優しいアプリだと思った。',
    '「チェックされる人」のコンテンツの文字がひらがなだったのが、小さい子供にとってやさしいデザインだと思いました。',
    '画像から採点ができるということで離れていても親が宿題状況を確認してさぼってないかが分かるので、ニーズとしては大きいと思いました。',
    '自分の子供ができたときに、このアプリケーションがあると、勉強面でのコミュニケーションが取りやすそうだなと感じました。',
    '内容自体はあまり見たことのないようなものだったので 独創性があるように感じました。',
    'チェック側は漢字、登録側はひらがなになっていて、細かいところまで想定されている印象を受けました。',
    '誰かのために（お子さんのために）がテーマとなっていて、随分と作り込まれた優秀な作品と思います。',
  ]

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
