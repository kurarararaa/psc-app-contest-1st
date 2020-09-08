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
      <CarouselIdea />
      <CarouselUx />
    </v-carousel>
  </v-container>
</template>

<script lang="ts">
import CarouselIdea from '~/components/CarouselIdea.vue'
import CarouselUx from '~/components/CarouselUx.vue'
</script>
