import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import dynamic from 'next/dynamic'

// import Transaction from '../components/Transactions'

import createStore from '../store'

const DynamicTransaction = dynamic(import('../components/Transactions'))

class MyApp extends App {
  render () {
    const { store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <DynamicTransaction/>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
