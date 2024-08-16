import { createApp } from 'vue';
import App from './App.vue';

<<<<<<< HEAD
createApp(App).mount('#app');
=======

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
>>>>>>> bd5b11b0e6a9fc2722197d5688f79c329075c18c
