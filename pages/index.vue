<template>
  <v-container
    class="pa-8 text-center rounded-xl base-background-pressed-shadow"
  >
    <v-carousel
      height="70vh"
      hide-delimiter-background
      show-arrows-on-hover
      class="rounded-xl"
    >
      <v-carousel-item>
        <v-sheet color="white" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <v-col class="typography font-l">Flutterアプリコンテスト</v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet color="white" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <v-col class="typography font-xl">趣旨</v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <CarouselCompleteness />
      <CarouselIdea />
      <CarouselUx />
      <CarouselUsefulness />
      <CarouselGrandPrix />
      <v-carousel-item>
        <v-sheet color="white" height="100%">
          <v-container class="fill-height px-12" align="center">
            <v-row align="center" justify="center">
              <v-col class="typography font-m">スペシャルサンクス</v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="typography">川植沙由理</v-col>
              <v-col class="typography">宮崎広哉</v-col>
              <v-col class="typography">高林竜也</v-col>
              <v-col class="typography">黒木ゆみ</v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="typography">曽根望</v-col>
              <v-col class="typography">谷本有紗</v-col>
              <v-col class="typography">末盛智也</v-col>
              <v-col class="typography">石平あんり</v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="typography">高本智晶</v-col>
              <v-col class="typography">末房伸也</v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="typography">児玉朱里</v-col>
              <v-col class="typography">岸野大輔</v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="typography">役員のみなみなさま</v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet color="white" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <v-col class="typography font-xl">次回</v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang="ts">
import CarouselCompleteness from '~/components/CarouselCompleteness.vue'
import CarouselIdea from '~/components/CarouselIdea.vue'
import CarouselUx from '~/components/CarouselUx.vue'
import CarouselUsefulness from '~/components/CarouselUsefulness.vue'
import CarouselGrandPrix from '~/components/CarouselGrandPrix.vue'
</script>

<style scoped>
.typography {
  color: black;
  font-weight: bold;
  font-family: serif;
  font-size: 2em;
}

.font-l {
  font-size: 16em;
}

.font-xl {
  font-size: 20em;
}

.font-m {
  font-size: 5em;
}
</style>
