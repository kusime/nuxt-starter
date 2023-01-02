#NOTE -

1. server side script
2. work like reverse proxy
3. file base route (same as the file base page route)
4. the backend will not be automatically convert the javascript object , so we need to convert it by ourselves
5. use .[method] to match the request method (so we don't have to make a method logic check in ourselves code)
6. only $fetch (universe fetch method) , the server side will not supporting the useFetch ,useLazyFetch ...
7. $fetch (universe fetch method) will smartly handle if the url is matching our other file based route or will send the request to other site

#Rule: -  
1 .event.context is a meta data package , which will hold the request params,or the object which mounted from the server/middleware

```ts
export default defineEventHandler((event) => {
  return {
    api: 'works',
  }
})
```
