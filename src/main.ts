import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import './style.css'
import globalComp from '@/components'
import App from '@/App.vue'
import '@/style/index.scss'
const app = createApp(App)
app.use(ElementPlus)
app.use(globalComp)
app.mount('#app')
