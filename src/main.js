import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faBars, faHome, faQuestion, faSearch, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import YouTube from "vue3-youtube";
import VueMobileDetection from 'vue-mobile-detection'
import ClickOutsideDirective from "@/composables/clickOutsideDirective";



library.add(faBars, faGithub, faHome, faQuestion, faSearch, faHeart, faEye)

const viewtube = createApp(App)

// makes every component with App prefix as global component
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
    let baseComponentConfig = requireComponent(fileName)
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig
    const baseComponentName = baseComponentConfig.name || (
        fileName
            .replace(/^.+\//, '')
            .replace(/\.\w+$/, '')
    )
    viewtube.component(baseComponentName, baseComponentConfig)
})


viewtube
    .use(store)
    .use(router)
    .use(VueMobileDetection)
    .use(ClickOutsideDirective)
    .component('yt', YouTube)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
