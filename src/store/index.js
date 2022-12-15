import { createStore } from 'vuex'
import dataMakanan from './data/data.js';
import authentication from './auth/auth.js';

const store = createStore({
  modules: {
      data: dataMakanan,
      auth: authentication
  },
  state() {
      return {
      }
  },
})

export default store;