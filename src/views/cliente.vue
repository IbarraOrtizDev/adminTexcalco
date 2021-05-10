<template>
  <v-container class="text-center">
    <v-container>
      <img :src="datosEmpresa.logo" width="200px" alt="" />
    </v-container>

    <h3>{{ datosEmpresa.nameProveedor }}</h3>
    <h3>{{ datosEmpresa.nit }}</h3>
    <h3>{{ datosEmpresa.email }}</h3>
    <br />

    <v-row no-gutters>
      <v-col cols="12" md="4" class="mb-4">
        <v-card class="pa-2" outlined tile>
          <div><b class="">Dirección: </b>{{ datosEmpresa.direccion }}</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="mb-4">
        <v-card class="pa-2" outlined tile>
          <div><b>Ciudad: </b>{{ datosEmpresa.ciudad }}</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="mb-4">
        <v-card class="pa-2" outlined tile>
          <div><b>Regimen: </b>{{ datosEmpresa.regimen }}</div>
        </v-card>
      </v-col>
    </v-row>

    <div v-if="this.$route.name !== 'Cliente'">
      <v-container>
        <v-row>
          <v-col cols="2">
            <div>Aprobados: <i>8</i></div>
          </v-col>
          <v-col cols="2">
            <div>Pendientes: <i>5</i></div>
          </v-col>
          <v-col cols="2">
            <div>Rechazados: <i>2</i></div>
            <div></div>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-btn x-large dark :color="this.$vuetify.theme.themes.dark.secondary">
          Productos
        </v-btn>
      </v-container>

      <v-container>
        <div class="d-flex justify-center flex-wrap">
          <lista-productos
            class="mb-6"
            v-for="producto in datosEmpresa.productos"
            :key="producto.idProducto"
            v-bind:productos="producto"
          />
        </div> </v-container
      >F
    </div>

    <div v-if="this.$route.name == 'Cliente'">

      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <span>Pedidos completados: </span><span>30</span>
          </v-col>
          <v-col cols="12" md="3">
            <span>Peidos pendientes: </span><span>1</span>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-btn x-large dark :color="this.$vuetify.theme.themes.dark.secondary">
          Pedidos
        </v-btn>
      </v-container>
      <tabla-pedido v-bind:pedidos="datosEmpresa.pedidos"></tabla-pedido>

      <v-container>
        <v-btn x-large dark :color="this.$vuetify.theme.themes.dark.secondary">
          Cotizaciones
        </v-btn>
      </v-container>
      <tabla-cotizacion v-bind:cotizaciones="datosEmpresa.cotizaciones"></tabla-cotizacion>
    </div>
  </v-container>
</template>
<script>
import ListaProductos from "../components/listaProductos.vue";
import TablaPedido from '../components/tablaPedidosCliente.vue';
import TablaCotizacion from '../components/tablaCotizacionesCliente.vue'
export default {
  components: {
    ListaProductos,
    TablaPedido,
    TablaCotizacion,
  },
  data() {
    return {
      datosEmpresa: {
        logo: "https://www.jnconfecciones.com/imagenes/general/logojn.png",
        nameProveedor: "JNcionecciones",
        nit: "71740309-3",
        email: "jnconfecciones@gmail.com",
        direccion: "Cra 51 # 83-113 Piso 3",
        ciudad: "Itagüí",
        regimen: "Común",
        pedidosAprobados: 3,
        pedidosPendientes: 1,
        pedidosRechazados: 2,
        productos: [
          {
            idProducto: 280,
            nameProducto: "Camisa manga larga",
            imagen: "",
            precio: 25000,
            estado: 1, //Estado = 1 pendiente, 2 aprobado y 3 rechazado
            calificacion: 4.5,
            estilo: "f",
          },
          {
            idProducto: 282,
            nameProducto: "Camisa manga larga",
            imagen: "",
            precio: 25000,
            estado: 1, //Estado = 1 pendiente, 2 aprobado y 3 rechazado
            calificacion: 4.5,
            estilo: "f",
          },
        ],
        pedidos:[
          {
            idPedido:214,
            fechaRecibido:'15-06-2021',
            idReferencias:[121,325,520],
            estadoPedido:1, //1 En proceso, 2 En bodega, 3 Enviado cliente, 4 rechazado
            numReferenciasEntregadasBodega: 4,
            fechaEntrega: '15-07-2021'
          }
        ],
        cotizaciones:[
          {
            idCotizacion:123,
            fecha:'04-05-2021',
            estado: 1, //1 entregado, 2 información pendiente
            idReferencias:[123,428],
            adjuntos:3,
            canMensajes:20,
            valCotizacion:3000000
          }
        ]
      },
    };
  },
  methods: {
    inicial() {
      //console.log(this.$route.params.idCliente);
    },
  },
  mounted() {
    this.inicial();
    console.log(this.$route.name);
  },
};
</script>
