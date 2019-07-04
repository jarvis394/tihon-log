import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'

import { Layout } from './components'

import store from './store'

import "./styles/index.css"

ReactDOM.render(
  <Provider store={ store }>
    <Layout />
  </Provider>,
  document.getElementById("root")
)
