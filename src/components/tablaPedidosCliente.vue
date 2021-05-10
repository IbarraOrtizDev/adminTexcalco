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
    :headers="headers" :items="ped" :search="search">
    </v-data-table>
  </v-container>
</template>
<script>
export default {
  props: {
    pedidos: Array,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "ID PEDIDO",
          align: "rigth",
          sortable: false,
          value: "idPedido", class:'orange darken-3 white--text'
        },
        {
          text: "FECHA RECIBIDO",
          value: "fechaRecibido", class:'orange darken-3 white--text'
        },
        {
          text: "ID REFERENCIAS",
          value: "idReferencias", class:'orange darken-3 white--text'
        },
        {
          text: "ESTADO DEL PEDIDO",
          value: "estadoPedido", class:'orange darken-3 white--text'
        },
        {
          text: "# REFERENCIAS ENTREGADAS EN BODEGA",
          value: "numReferenciasEntregadasBodega", class:'orange darken-3 white--text'
        },
        {
          text: "FECHA ENTREG",
          value: "fechaEntrega", class:'orange darken-3 white--text'
        },
      ],
      ped: [],
    };
  },
  created() {
    this.ped = this.$props.pedidos;
  },
};
</script>
