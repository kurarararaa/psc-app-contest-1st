<template>
  <v-carousel-item>
    <v-sheet color="white" height="100%">
      <v-row class="fill-height" align="center">
        <ContestChart
          :chart-data="chartData"
          style="width: 30%; margin: 0 5% 0 10%;"
        />
        <TypographyIdea style="margin: 0 10% 0 5%;" />
      </v-row>
    </v-sheet>
    <NicoModal
      title="アイデア賞"
      name="App Manager"
      author="はらぺこ"
      icon="/icons/idea.png"
      url="https://sites.google.com/pscsrv.co.jp/flutter-app-contest-2020/app-manager"
      :coments="coments"
    />
  </v-carousel-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ChartData } from 'chart.js'
import ContestChart from '~/components/ContestChart.vue'
import TypographyIdea from '~/components/TypographyIdea.vue'
import NicoModal from '~/components/parts/NicoModal.vue'

@Component({ components: { ContestChart } })
export default class CarouselIdea extends Vue {
  coments = [
    '自分なりのアプリの説明を残すことができるアプリということで発想が面白いと感じた。',
    'たまにしか行かないお店のアプリも入っていて、アイコンがわかりにくいものの管理とかに使えそうで便利だなと思いました。',
    '今までメモ帖などはありましたが、アプリに対するメモが取れたり、検索できる機能は初めて見たので、利便性の点から使ってみたいと思いました。',
    '建物を選択するとその中の店舗もすぐに表示されることが良いと思いました。建物内にどんな店舗があるのか見るだけでも楽しいと思います。',
    '「アプリに位置情報やメモを登録できる」というアイディアもとても斬新で画期的だと思いました。',
    '端末内のアプリ検索を行ってくれる点は、最近自分がこれで悩んだので最高だと思いました！',
    '複数の店舗がある場合のときに、複数の位置情報を設定できるとより使いやすいなと思いました。',
  ]

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
