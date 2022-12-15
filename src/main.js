import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/index.css'
import JwPagination from 'jw-vue-pagination';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAngleUp, faStopwatch, faCalendarDays, faBell, faCertificate, faUtensils, faFire, faHeart, faStar, faCartShopping, faClipboard, faAngleLeft, faBasketShopping, faTrash, faMoneyBillWave, faPencil, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add( faAngleUp, faStopwatch, faCalendarDays, faBell ,faCertificate, faUtensils, faFire, faHeart, faStar, faCartShopping, faClipboard, faAngleLeft, faBasketShopping, faTrash, faMoneyBillWave, faPencil, faClockRotateLeft)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.component('jw-pagination', JwPagination);

app.mount('#app')