import React from 'react'
import { Provider } from 'react-redux'
import MainNavigator from './navigators'
import store from './store'

const App = () => (
    <Provider store={store}>
        <MainNavigator />
    </Provider>)

export default App