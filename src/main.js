import { createApp } from 'vue'
import './library.scss'
import App from './App.vue'
import VueKinesis from "vue-kinesis"
import Parallax from 'vue-parallaxy'
import router from './router'

createApp(App)
.use(VueKinesis)
.use(Parallax)
.use(router)
.mount('#app')
