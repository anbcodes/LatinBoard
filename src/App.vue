<template>
  <v-app>
    <v-toolbar app color="blue darken-3">
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Latin Board</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <Main/>
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    Main
  },
  data () {
    return {
      //
    }
  }
}
</script>
