import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
    theme: {
        primary: "#ef6c00ff",
        secondary: "#EF6C00"
    },
    customProperties:true
});

export default new Vuetify();
