<template>
  <v-container
    class="pa-12 text-center rounded-xl base-background-pressed-shadow"
  >
    <v-carousel
      height="60vh"
      hide-delimiter-background
      show-arrows-on-hover
      class="rounded-xl"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang="ts">

type Data = {
  colors: string[]
  slides: string[]
}

export default {
  data(): Data {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    }
  },
}
</script>
