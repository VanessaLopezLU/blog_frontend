
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'


// Composables
import { createApp } from 'vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'

const app = createApp(App)

app.use(VueAxios,axios)
app.use(router);

registerPlugins(app)

app.mount('#app')
