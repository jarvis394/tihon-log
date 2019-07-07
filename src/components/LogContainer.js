import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const COLORS = {
  debug: '#536dfe',
  info: '#2979ff',
  warn: '#fdd835',
  error: '#ff3d00',
  success: '#00e676',
  command: '#00e5ff'
}

let levelsBorders = {}

for (let level in COLORS) {
  levelsBorders[level] = {
    borderLeft: '5px solid ' + COLORS[level],
    borderRadius: 4
  }

  if (level === 'error') {
    levelsBorders[level].background = '#ffccbc'
  } else {
    levelsBorders[level].background = '#fff'
  }
}

const styles = theme => ({
  content: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1)
  },
  margin: {
    marginTop: theme.spacing(1)
  },
  ...levelsBorders
})

class LogContainer extends Component {
  render() {
    const { classes, data } = this.props
    let link = ''

    if (data.level === 'command') {
      link = 'https://vk.com/im?sel='
      if (data.peerId - 2000000000 > 0) {
        link += 'c' + (data.peerId - 2000000000)
      } else {
        link += data.peerId
      }
    }

    return (
      <div className={classes[data.level] + ' ' + classes.content}>
        <Typography variant="caption">{data.timestamp}</Typography>
        {data.message.split('\n').map((l, i) => (
          <Typography variant="body1" key={i} className={classes.margin}>
            {l}
          </Typography>
        ))}
        {data.level === 'command' && (
          <Typography variant="caption">
            {'User: ' + data.senderId + ' | '}
            <a target="_blank" rel="noopener noreferrer" href={link}>
              {'Dialog: ' + data.peerId}
            </a>
            {' | '}
            {'ID: ' + data.id}
          </Typography>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(LogContainer)
