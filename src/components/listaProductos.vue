<template>
  <v-card class="mx-auto" max-width="374">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title class="">{{ productos.nameProducto }}</v-card-title>
    <v-card-subtitle class="">
      <div style="text-align: left">
        <b>Estilo: </b> {{ productos.estilo == "f" ? "Femenino" : "Hombre" }}
      </div>
    </v-card-subtitle>
    <div >
      <v-card-text>
        <v-row class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-10">4.5 (413)</div>
        </v-row>
      </v-card-text>
    </div>
    <div>
      <v-card-text class="ml-4">
        <v-row>
          {{ productos.precio }}
        </v-row>
      </v-card-text>
    </div>

    <v-card-actions>
      <v-btn
        :color="
          productos.estado == 1 ? this.$vuetify.theme.themes.dark.primary : ''
        "
        text
      >
        {{ productos.estado == 1 ? "Aprobar" : "Aprobado" }}
      </v-btn>
      <v-btn color="deep-purple lighten-2" text v-if="productos.estado == 1">
        Rechazar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="mx-2" fab small :color="this.$vuetify.theme.themes.dark.primary">
        <router-link :to="'/cliente/'+this.$route.params.idCliente+'/'+productos.idProducto">
          <v-icon color="#ffffff"> mdi-plus </v-icon>
        </router-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    productos: Object,
  },
  mounted() {
  },
};
</script>
