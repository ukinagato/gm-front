import type { App } from 'vue'
import Page from '@/components/pagination/Page.vue'
import SvgIcon from '@/components/svgIcons/SvgIcon.vue'
const components = { SvgIcon, Page }
export default {
  install(app: App) {
    console.log('install1')
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}
