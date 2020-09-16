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
      <CarouselCompleteness />
      <CarouselIdea />
      <CarouselUx />
      <CarouselUsefulness />
      <CarouselGrandPrix />
    </v-carousel>
    <NicoModal />
  </v-container>
</template>

<script lang="ts">
import CarouselCompleteness from '~/components/CarouselCompleteness.vue'
import CarouselIdea from '~/components/CarouselIdea.vue'
import CarouselUx from '~/components/CarouselUx.vue'
import CarouselUsefulness from '~/components/CarouselUsefulness.vue'
import CarouselGrandPrix from '~/components/CarouselGrandPrix.vue'
import NicoModal from '~/components/parts/NicoModal.vue'
</script>
