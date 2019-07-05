import React, { Component } from 'react'
import { Typography, Container } from '@material-ui/core'
import { connect } from 'react-redux'

import { getLogs } from '../actions/logsAcrions'
import Logs from './Logs'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0
    }

    this.getNext = this.getNext.bind(this)
    this.refreshLogs = this.refreshLogs.bind(this)
    this.changeIndex = this.changeIndex.bind(this)
  }

  componentDidMount() {
    return this.getNext(0)
  }

  changeIndex(i) {
    return this.setState({ index: i })
  }

  getNext(i) {
    return this.props.dispatch(getLogs(25, 25 * i))
  }

  refreshLogs() {
    return this.getNext(0)
  }

  render() {
    const { logs } = this.props

    return (
      <Container>
        <Typography variant="h3">Logs</Typography>

        {logs.error && (
          <div>
            <Typography variant="h5" style={{ color: '#ff2222' }}>
              Fetching error
            </Typography>
            <Typography variant="body1">
              {JSON.stringify(logs.error)}
            </Typography>
          </div>
        )}

        {logs.fetched && (
          <Logs
            logs={logs}
            next={this.getNext}
            index={this.state.index}
            changeIndex={this.changeIndex}
            refresh={this.refreshLogs}
          />
        )}
      </Container>
    )
  }
}

export default connect(store => {
  return {
    logs: store.logs
  }
})(Home)
