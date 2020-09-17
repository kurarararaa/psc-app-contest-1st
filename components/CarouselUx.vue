<template>
  <v-carousel-item>
    <v-sheet color="white" height="100%">
      <v-row class="fill-height" align="center">
        <ContestChart
          :chart-data="chartData"
          style="width: 30%; margin: 0 5% 0 10%;"
        />
        <TypographyUx style="margin: 0 10% 0 5%;" />
      </v-row>
    </v-sheet>
    <NicoModal
      title="UX賞"
      name="Gradation to you"
      author="よわよわ"
      icon="/icons/ux.png"
      url="https://sites.google.com/pscsrv.co.jp/flutter-app-contest-2020/gradation-to-you"
      :coments="coments"
    />
  </v-carousel-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ChartData } from 'chart.js'
import ContestChart from '~/components/ContestChart.vue'
import TypographyUx from '~/components/TypographyUx.vue'
import NicoModal from '~/components/parts/NicoModal.vue'

@Component({ components: { ContestChart } })
export default class CarouselUx extends Vue {
  coments = [
    '様々な写真加工アプリがありますが、「写真とグラデーションを重ねる」という発想が斬新で素敵だと思いました！',
    'このアプリで使ってみたい画像が多すぎて本当に楽しかった。',
    'グラデーションの作成がタップするだけで簡単に作成できる点がよかったと思いました。',
    'このアプリを使えば配色について悩む必要が無く直感で気に入るものを手軽に選ぶことができる点が良かった。',
    '簡単にきれいな画像を作れるのでいいと思いました。',
    'チュートリアルが丁寧だったのでUXを意識した良いアプリだと思いました。',
    'タップするだけで様々なグラデーションが表示されて見ていて楽しかったです。',
  ]

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
