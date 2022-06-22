import Vue from 'vue'
import VuexPersistence from 'vuex-persist'
export default ({ store }) => {
  new VuexPersistence({
    /* your options */
    storage: window.localStorage,
  }).plugin(store)
}
