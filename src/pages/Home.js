import React, { Component } from 'react'
import { Typography, Container } from '@material-ui/core'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'

import { LogContainer } from './'
import { getLogs } from '../actions/logsAcrions'

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getLogs(200, 0))
  }

  render() {
    const { logs } = this.props

    return (
      <Container>
        <Typography variant="h3">Logs</Typography>

        {logs.fetching && <Typography variant="h5">loading...</Typography>}

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
          <InfiniteScroll
            style={{ marginTop: 16 }}
            pageStart={0}
            loadMore={(p) => this.props.dispatch(getLogs(200, 200 * p))}
            hasMore={true}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {logs.logs.map((l, i) => (
              <LogContainer key={i} data={JSON.parse(l)} />
            ))}
          </InfiniteScroll>
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
