#  Payment Gatways project with SSR.

> This project is for save transaction and then get the transactions. In this project I have used Next.js for Server Side Rendering, 
React-Saga for redux-middleware(fetch the data) and React Hooks for the creation of Component. 
In the backend I have used Express.js as backend server and MongoDB for Database.

## How to use

### Download manually

Download the project:

download or clone the project from the link below.
https://github.com/amitrazorthink/PaymentTransactionProject

Install it and run through command line with below command:

```bash

$ npm install 
$ npm run dev
# or
yarn
yarn dev
```



## The idea behind the example

Usually splitting your app state into `pages` feels natural, but sometimes you'll want to have global state for your app. This is an example using `redux` and `redux-saga` that works with universal rendering. This is just one way it can be done. If you have any suggestions or feedback please submit an issue or PR.


## What changed with next-redux-saga


All pages are also being wrapped by `next-redux-saga` using a helper function from `store.js`:

```js
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import configureStore from './store'

export function withReduxSaga(BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent))
}


```

If you need to pass `react-redux` connect args to your page, you could use the following helper instead:

```js
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import configureStore from './store'

export function withReduxSaga(...connectArgs) {
  return BaseComponent =>
    withRedux(configureStore, ...connectArgs)(nextReduxSaga(BaseComponent))
}

```

Since `redux-saga` is like a separate thread in your application, we need to tell the server to END the running saga when all asynchronous actions are complete. This is automatically handled for you by wrapping your components in `next-redux-saga`. 

After introducing `redux-saga` there was too much code in `store.js`. For simplicity and readability, the actions, reducers, sagas, and store creators have been split into seperate files: `actions.js`, `reducer.js`, `saga.js`, `store.js`
