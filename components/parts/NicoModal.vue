<template>
  <v-row ref="nico" justify="center">
    <v-btn color="primary" dark @click.stop="showNicoNico()">
      Open Dialog
    </v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline"
          >Use Google's location service?</v-card-title
        >

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import NicoJS from '@/plugins/nico.js'
export default {
  data() {
    return {
      dialog: false,
      nico: null,
    }
  },
  mounted() {
    this.nico = new NicoJS({
      app: document.getElementById('app'),
      width: 2195,
      height: 1100,
      /* eslint-disable */
      font_size: 50,
      /* eslint-enable */
    })

    this.nico.listen()
  },
  methods: {
    showNicoNico() {
      this.dialog = true
      const coments = [
        '様々な写真加工アプリがありますが、「写真とグラデーションを重ねる」という発想が斬新で素敵だと思いました！',
        'このアプリで使ってみたい画像が多すぎて本当に楽しかった。',
        'グラデーションの作成がタップするだけで簡単に作成できる点がよかったと思いました。',
        'このアプリを使えば配色について悩む必要が無く直感で気に入るものを手軽に選ぶことができる点が良かった。',
        '簡単にきれいな画像を作れるのでいいと思いました。',
        'チュートリアルが丁寧だったのでUXを意識した良いアプリだと思いました。',
        'タップするだけで様々なグラデーションが表示されて見ていて楽しかったです。',
      ]
      coments.forEach((coment, index) => {
        setTimeout(() => this.nico.send(coment), index * 500)
      })
    },
  },
}
</script>
