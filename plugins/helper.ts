export default defineNuxtPlugin(() => {
  return {
    provide: {
      // then this can be called in the template with $hello
      hello: (msg: string) => `Hello ${msg}!`
      // or use const {$hello}  = useNuxtApp()
    }
  }
})
