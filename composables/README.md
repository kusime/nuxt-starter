Nuxt3 will automatically import all resources here , and I would like to make this feature available of the automatically import the state ,
so , just define any useful state in the store directory

If a composable depends on the Vue.js lifecycle, it won't work.
Reason: Normally, Vue.js composables are 绑定到 the current component instance while plugins are only bound to nuxtApp instance.
