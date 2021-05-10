<template>
  <div>
    <v-app-bar :color="this.$vuetify.theme.themes.dark.primary">
      <v-app-bar-nav-icon @click="drawer = true" dark></v-app-bar-nav-icon>
      <v-toolbar-title>
        <img
          src="../../public/TEXCALCO elegido gorro blanco.svg"
          width="150px"
          alt=""
        />
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link v-for="(link, i) in listaLinks" :key="i" :to="link.ruta">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{link.icono}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{link.nombre}}</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    listaLinks:[
      {
        ruta:'/clientes',
        nombre:'Clientes',
        icono:'mdi-view-list'
      },
      {
        ruta:'/proveedores',
        nombre:'Proveedores',
        icono:'mdi-view-list'
      },
      {
        ruta:'/agregarProveedor',
        nombre:'Agregar proveedor',
        icono:'mdi-account-plus'
      },
      {
        ruta:'/secciones',
        nombre:'Secciones',
        icono:'mdi-briefcase'
      }
    ]
  }),
};
</script>
