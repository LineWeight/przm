// VUE
// import vue
import Vue from 'vue'

// import tooling
import { rtdbPlugin } from 'vuefire'

// import components
import App from './App.vue'

// STYLE
// css reset
import 'reset-css/reset.css'
// main style file
import './style.css'

Vue.use(rtdbPlugin)

new Vue({
	el: '#app',
	render: h => h(App)
})
