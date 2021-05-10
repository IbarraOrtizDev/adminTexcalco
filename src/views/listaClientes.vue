<template>
  <v-card>
    <v-card-title>
      {{this.$route.name}}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="clientes"
      :search="search"
    >
        <template v-slot:item.nameProveedor={item}>
            <router-link :to="`${tipoUsuario== 'Clientes' ? 'cliente' : 'proveedor'}/${item.idProveedor}`">{{item.nameProveedor}}</router-link>
        </template>
    </v-data-table>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        tipoUsuario:'',
        tipo:'',
        search: '',
        headers: [
          {
            text: '# ID',
            align: 'center',
            sortable: false,
            value: 'idProveedor',
          },
          { text: 'NOMBRE', value: 'nameProveedor' },
          { text: 'PRODUCTOS', value: 'numProductos',},
          { text: 'PEDIDOS EN PROCESO', value: 'pedidosProceso' },
          { text: 'PEDIDOS COMPLETADOS', value: 'pedidosCompletado' },
          { text: 'PEDIDOS SIN TOMAR', value: 'pedidoSinTomar' },
        ],
        clientes: [
          {
            idProveedor: 123,
            nameProveedor: 'JN confecciones',
            numProductos: 12,
            pedidosProceso: 3,
            pedidosCompletado: 50,
            pedidoSinTomar:2,
          },
          {
            idProveedor: 129,
            nameProveedor: 'Metropolitana de dotaciones',
            numProductos: 12,
            pedidosProceso: 3,
            pedidosCompletado: 50,
            pedidoSinTomar:2,
          },
        ],
      }
    },
    created(){
      this.tipoUsuario = this.$route.name
    }
  }
</script>