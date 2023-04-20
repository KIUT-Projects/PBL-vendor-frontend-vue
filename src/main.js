import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'




/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee'

/* add icons to the library */
library.add(faUserSecret,faCoffee)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

 

