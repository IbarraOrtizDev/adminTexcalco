<template>
  <v-app>
    <app-bar></app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/appBar'
export default {
  name: 'App',
  components:{
    AppBar
  },
  data: () => ({
    //
  }),
  created(){
    this.$vuetify.theme.themes.dark.primary="#ef6c00ff"
    this.$vuetify.theme.themes.dark.secondary="#4d4d4d"
  }
};
</script>
