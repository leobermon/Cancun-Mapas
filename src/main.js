import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'


const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBCx5eB3XkQfAONqFtE3z7gjqRrX37MnMA',
    },
}).mount('#app')


//createApp(App).mount('#app')
