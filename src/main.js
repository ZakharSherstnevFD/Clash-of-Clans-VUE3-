import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import '../assets/css/style.css'

const app = createApp(App);

app.use(routes);

app.mount('#app');
