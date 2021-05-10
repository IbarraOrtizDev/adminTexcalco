<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                {{cotizacion.fechaCotizacion}}
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="4" class="text-right">Cotización N°: {{cotizacion.idCotizacion}}</v-col>
        </v-row>
        <v-row class="font-weight-bold">
            <v-col cols="11">
                {{cotizacion.nameEmpresa}}
            </v-col>
            <v-col cols="12"> {{cotizacion.nameSolicitante}} </v-col>
            <v-col cols="12"> {{cotizacion.email}} </v-col>
            <v-col cols="12">{{cotizacion.telefono}}</v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <b>Asunto: </b> cotización dotación
            </v-col>
        </v-row>
        <v-row>
            <tabla-solicitud-cotizacion v-bind:itemsCotizacion="cotizacion.items"></tabla-solicitud-cotizacion>
        </v-row>
        <v-row>
            <v-col cols="4">
                <h3>VALOR TOTAL {{cotizacion.valorTotal}}</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <b>CONDICIONES</b>
            </v-col>
            <v-col cols="11" offset="1">
                <v-list-item-group>
                <v-list-item v-for="(condicione, i) in condiciones" :key="i">
                    <v-list-item-icon>
                        <v-icon>mdi-cards-diamond</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-titel v-text="condicione"></v-list-item-titel>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import TablaSolicitudCotizacion from '../components/tablaSolicitudCotizacion.vue'
export default{
    components:{
        TablaSolicitudCotizacion
    },
    data(){
        return{
           cotizacion:{
               idCotizacion:125,
               fechaCotizacion:'12-05-2021',
               nameEmpresa:'Carnes Bolivar',
               nameSolicitante:'Julian Ortiz',
               email:'gestion@carnesbolivar.com',
               telefono:'1321323422',
               valorTotal:120,
               items:[
                   {
                       idReferencia:254,
                       cantidad:12,
                       descripcionProducto:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don',
                       bordadoEstampado:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in',
                       valor:100,
                       valorTotal:1200
                   }
               ]
           },
           condiciones:[
               'There are many variations of passages of Lorem Ipsum available, but the ',
               'There are many variations of passages of Lorem Ipsum available, but the ',
               'There are many variations of passages of Lorem Ipsum available, but the '
           ]
        }
    }
}
</script>
