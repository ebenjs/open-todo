import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Kriterion from '@ebenjs/kriterion'

const app = createApp(App)

app.config.globalProperties.$truncate = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text
    } else {
        return text.slice(0, maxLength) + '…'
    }
};

app.use(createPinia())
app.use(Kriterion);
app.use(router)

app.mount('#app')
