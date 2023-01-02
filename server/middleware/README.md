Middleware handlers should not return anything (nor close or respond to the request) and only inspect or extend the request context or throw an error.

1. Server side middleware is used to provide some meta data to the request
2. or perform some checks on the request. then throw an error if not passed
3. should not return anything (nor close or respond to the request) and only inspect or extend the request context

```
export default defineEventHandler((event) => {
  event.context.auth = { user: 123 }
})
```
