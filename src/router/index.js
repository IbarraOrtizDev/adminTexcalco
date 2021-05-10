import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import crearProveedor from '../views/crearProveedor.vue'
import clientes from '../views/listaClientes.vue'
import cliente from '../views/cliente.vue'
import producto from '../views/producto.vue'
import detalleCotizacion from '../views/detalleCotizacion.vue'
import secciones from '../views/secciones.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/secciones',
    name:'Secciones',
    component:secciones
  },
  {
    path:'/clientes',
    name:'Clientes',
    component: clientes
  },
  {
    path: '/cliente/:idCliente',
    name:"Cliente",           
    component: cliente
  },
  {
    path: '/cliente/:idCliente/:idPedido',
    name:"Pedido",
    component: producto
  },
  {
    path:'/cotizacion/:idCotizacion',
    name:"Cotizacion",
    component:detalleCotizacion
  },
  {
    path:'/proveedores',
    name:'Proveedores',
    component: clientes
  },
  {
    path: '/proveedor/:idProveedor',
    name:"Proveedor",           
    component: cliente
  },
  {
    path: '/proveedor/:idProveedor/:idProducto',
    name:"Proveedor",
    component: producto
  },
  {
    path:'/agregarProveedor',
    name:'addProveedor',
    component: crearProveedor
  }
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
