<template>
  <v-app>
    <v-app-bar
      app
      :clipped-left="clipped"
      color="light-blue lighten-4"
      rounded="true"
      class="text-center rounded-b-xl"
    >
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer absolute app height="100" padless class="base-background">
      <v-container>
        <v-card
          height="5vh"
          width="80vw"
          class="text-center rounded-xl base-background-flat-shadow"
        >
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} - ©PEOPLE SOFTWARE CORPORATION
          </v-col>
        </v-card>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
