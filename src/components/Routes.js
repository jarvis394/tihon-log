import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import { withStyles } from '@material-ui/core/styles'
import { Hidden } from '@material-ui/core'

import NavBar from './NavBar'
import BottomNav from './BottomNav'
import { Home, Commands, Profile, Settings, Verify, Logout, NotFound } from '../pages'
import { DRAWER_WIDTH as drawerWidth } from '../config'

const styles = theme => ({
  content: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
      paddingTop: theme.spacing(10),
    }
  },
})

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      page: 'home'
    }
    this.handlePage = this.handlePage.bind(this)
  }
  
  handlePage(p) {
    this.setState({ page: p })
  }
  
  render() {
    const { classes, profile, history } = this.props
    
    return (
      <div className="App">
        
        { this.state.page !== 'notfound' && 
          <Hidden smDown>
            <NavBar history={ history } page={ this.state.page } /> }
          </Hidden>
        }

        <div className={ classes.content }>
          <Switch>
            <Route exact path="/" render={ () => <Home handlePage={ this.handlePage } /> } />
          </Switch>
        </div>
        
        { this.state.page !== 'notfound' && 
          <Hidden mdUp>
            <BottomNav history={ this.props.history } page={ this.state.page } />
          </Hidden>
        }
        
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(App))
