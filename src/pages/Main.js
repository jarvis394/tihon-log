import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Button } from '@material-ui/core'

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h3" style={{ marginBottom: 24 }}>Main</Typography>

        <Button variant="contained" color="primary" component={AdapterLink} to="/logs">
          Logs
        </Button>
      </Container>
    )
  }
}
