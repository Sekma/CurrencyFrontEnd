import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SmartTable from 'vuejs-smart-table'
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

const app = createApp(App)

app.use(router)

app.use(SmartTable)
app.mount('#app')



