import './assets/main.css'

import 'vuetify/styles'


import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createVuetify } from 'vuetify/lib/framework.mjs'

const vuetify = createVuetify({
    components,
    directives
    
})

const app = createApp(App)
app.use(vuetify);
app.use(createPinia())

app.mount('#app')
