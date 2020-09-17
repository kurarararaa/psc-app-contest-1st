<template>
  <v-row ref="nico" justify="center">
    <v-btn
      color="blue-grey"
      class="ma-2 white--text"
      fab
      @click="showNicoNico()"
    >
      <v-icon dark>mdi-cloud-upload</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" height="1000" max-width="500">
      <v-card v-if="displayable" class="nico-card">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">{{ title }}</div>
            <v-list-item-title class="headline mb-1">{{
              name
            }}</v-list-item-title>
            <v-list-item-subtitle>@{{ author }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar size="200">
            <img :src="icon" />
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn :href="url" target="_blank" text>
            Go Page!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import NicoJS from '@/plugins/nico.js'
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      displayable: false,
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
        setTimeout(() => this.nico.send(coment), index * 250)
      })

      setTimeout(() => (this.displayable = true), coments.length * 1500)
    },
  },
}
</script>

<style scoped>
.nico-card {
  opacity: 0;
  animation: 0.5s 0.5s open-card;
  animation-fill-mode: forwards;
}

.v-list-item__content > * {
  color: #333;
}

@keyframes open-card {
  0% {
    opacity: 0;
    transform: scale(0.5) rotateX(-270deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotateX(0deg);
  }
}
</style>
