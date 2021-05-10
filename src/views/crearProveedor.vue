<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-center">CREAR PROVEEDOR</h2>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="10" md="6" offset-md="3" offset="1">
        <v-text-field label="Nombre">Nombre</v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" md="6" offset-md="3" offset="1">
        <v-text-field label="Nit">Nit</v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" md="6" offset-md="3" offset="1">
        <v-text-field label="Dirección">Dirección</v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" md="6" offset-md="3" offset="1">
        <v-text-field label="Telefono">Nombre</v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" md="6" offset-md="3" offset="1">
        <v-text-field label="Correo">Nombre</v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" md="6" offset-md="3" offset="1">
        <v-text-field label="Contacto">Nombre</v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" md="6" offset-md="3" offset="1">
        <v-select :items="regimen" filled label="Filled style"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
          <v-btn x-large :color="this.$vuetify.theme.themes.dark.primary" dark>
            Enviar
            <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      regimen: ["Regimen simplificado", "Regimen común", "Gran contribuyente"],
    };
  },
};
</script>
