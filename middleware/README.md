```ts
// NOTE : the middle ware will only useable when the page is defined the middleware field in the pageMeta
export default defineNuxtRouteMiddleware((page, _) => {
  if (page.params.id === '1') {
    return abortNavigation({
      statusCode: 401,
      message: 'You are not allowed to access this page',
      stack: 'access denied',
    })
  }
  return navigateTo('/')
})
```
