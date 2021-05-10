<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="items"
        ></v-data-table>
    </v-container>
</template>
<script>
export default{
    props:{
        itemsCotizacion:Array
    },
    data(){
        return{
            headers:[
                {
                    text:'REFERENCIA', value:'idReferencia', class:'orange darken-3 white--text'
                },
                {
                    text:'CANTIDAD', value:'cantidad', class:'orange darken-3 white--text'
                },
                {
                    text:'DESCRIPCIÓN DE PRODUCTO', value:'bordadoEstampado', class:'orange darken-3 white--text'
                },
                {
                    text:'VALOR', value:'valor', class:'orange darken-3 white--text'
                },
                {
                    text:'VALOR TOTAL', value:'valorTotal', class:'orange darken-3 white--text'
                }
            ],
            items:[]
        }
    },
    created(){
        this.items = this.$props.itemsCotizacion
    }
}
</script>
