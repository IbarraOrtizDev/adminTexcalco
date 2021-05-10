<template>
  <v-container>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="cotizaciones2"
      :search="search"
    ></v-data-table>
  </v-container>
</template>
<script>
export default {
  props: {
    cotizaciones: Array,
  },
  data() {
    return {
      search: "",
      cotizaciones2: [],
      headers: [
        {
          text: "ID COTIZACIÓN",
          value: "idCotizacion", class:'orange darken-3 white--text'
        },
        {
          text: "FECHA",
          value: "fecha", class:'orange darken-3 white--text'
        },
        {
          text: "ESTADO",
          value: "estado", class:'orange darken-3 white--text'
        },
        {
          text: "ID REFERENCIAS",
          value: "idReferencias", class:'orange darken-3 white--text'
        },
        {
          text: "ADJUNTOS",
          value: "adjuntos", class:'orange darken-3 white--text'
        },
        {
          text: "MENSAJES",
          value: "canMensajes", class:'orange darken-3 white--text'
        },
        {
          text: "VALOR COTIZACIÓN",
          value: "valCotizacion", class:'orange darken-3 white--text'
        },
      ],
    };
  },
  created() {
    this.cotizaciones2 = this.$props.cotizaciones;
  },
};
</script>