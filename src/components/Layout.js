import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { CssBaseline } from "@material-ui/core"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

import App from './App'

class Layout extends Component {
  render() {    
    return (
      <MuiThemeProvider theme={ createMuiTheme(require('../theme')) }>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default Layout