# [REFERENCE](https://nuxt.com/docs/guide/directory-structure/plugins)

### Only files at the top level of the plugins/ directory (or index files within any subdirectories) will be registered as plugins.

1. | - myPlugin.ts (ok)
2. | - myOtherPlugin
3. | --- supportingFile.ts
4. | --- componentToRegister.vue
5. | --- index.ts (ok)

## If a composable depends on another plugin registered later, it might not work.

## Reason: Plugins are called in order sequentially and before everything else. You might use a composable that depends on another plugin which has not been called yet.

# Summary

the most useful things of plugins are inject the vue-plugin or define some helper functions
which will be available in vue-template , or can used in the composition API with $call = useNuxtApp()

# By the way

you can also to register some global middleware functions, but you can also defined in the middleware folders too..

```ts
export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'global-test',
    () => {
      console.log(
        'this global middleware was added in a plugin and will be run on every route change'
      )
    },
    { global: true }
  )
  addRouteMiddleware('dummy', () => {
    console.log(
      'this named middleware was added in a plugin and would override any existing middleware of the same name'
    )
  })
})
```
