import { createApp } from 'vue'
import './library.scss'
import App from './App.vue'
import VueKinesis from "vue-kinesis";

createApp(App)
.use(VueKinesis)
.mount('#app')
