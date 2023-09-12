/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import store from './store'



/* add icons to the library */
library.add(faUserSecret)
library.add(faTwitter)
library.add(faHouse)
library.add(faFortAwesome)
library.add(faAddressCard)
library.add(faBookOpen)



createApp(App).use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')