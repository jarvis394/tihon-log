import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { LogContainer } from './'
import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@material-ui/core'

class Logs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: {
        error: true,
        warn: true,
        info: true,
        success: true,
        command: true
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({
      filter: {
        ...this.state.filter,
        [value]: !this.state.filter[value]
      }
    })
  }

  render() {
    const { logs, next, refresh, index, changeIndex } = this.props
    const { handleChange, state } = this
    const filteredLogs = logs.logs.filter(l => state.filter[JSON.parse(l).level])

    return (
      <div>
        <FormGroup row>
          <FormControlLabel
            style={{ borderRight: '1px solid #aaa', paddingRight: 16 }}
            control={
              <Checkbox
                checked={state.filter.error}
                onChange={() => handleChange('error')}
                value="error"
              />
            }
            label="Errors"
          />
          <FormControlLabel
            style={{ borderRight: '1px solid #aaa', paddingRight: 16 }}
            control={
              <Checkbox
                checked={state.filter.warn}
                onChange={() => handleChange('warn')}
                value="warn"
              />
            }
            label="Warns"
          />
          <FormControlLabel
            style={{ borderRight: '1px solid #aaa', paddingRight: 16 }}
            control={
              <Checkbox
                checked={state.filter.info}
                onChange={() => handleChange('info')}
                value="info"
              />
            }
            label="Infos"
          />
          <FormControlLabel
            style={{ borderRight: '1px solid #aaa', paddingRight: 16 }}
            control={
              <Checkbox
                checked={state.filter.success}
                onChange={() => handleChange('success')}
                value="success"
              />
            }
            label="Successes"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.filter.command}
                onChange={() => handleChange('command')}
                value="command"
              />
            }
            label="Commands"
          />
        </FormGroup>

        <InfiniteScroll
          style={{ marginTop: 16 }}
          dataLength={filteredLogs.length}
          next={() => {
            changeIndex(index + 1)
            next(index)
          }}
          hasMore={true}
          loader={
            <Typography
              style={{ marginTop: 24, marginBottom: 24 }}
              variant="h5"
            >
              <b>Loading...</b>
            </Typography>
          }
          endMessage={<Typography variant="h4">end of logs.</Typography>}
          refreshFunction={refresh}
          pullDownToRefresh
          pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>
              &#8595; Pull down to refresh
            </h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          }
        >
          {filteredLogs.map((l, i) => (
            <LogContainer key={i} data={JSON.parse(l)} />
          ))}
        </InfiniteScroll>
      </div>
    )
  }
}

export default Logs
