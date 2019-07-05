import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { LogContainer } from './'

class Logs extends Component {
  render() {
    const { logs, next, refresh, index, changeIndex } = this.props

    return (
      <InfiniteScroll
        style={{ marginTop: 16 }}
        dataLength={logs.logs.length} 
        next={() => {
          changeIndex(index + 1)
          next(index)
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
      >
        {logs.logs.map((l, i) => (
          <LogContainer key={i} data={JSON.parse(l)} />
        ))}
      </InfiniteScroll>
    )
  }
}

export default Logs
