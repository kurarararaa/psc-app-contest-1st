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
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center">
            <!-- <div class="display-3">{{ slide }} Slide</div> -->
            <ContestChart style="width: 30%; margin: 0 5% 0 10%;" />
            <TypographyIdea style="margin: 0 10% 0 5%;" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ContestChart from '~/components/ContestChart.vue'
import TypographyIdea from '~/components/TypographyIdea.vue'

@Component({ components: { ContestChart } })
export default class Index extends Vue {
  colors = [
    'white',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]

  slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth']
}
</script>
