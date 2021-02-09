import React from 'react'
import Routes from './Routes'
import { ThemeProvider } from '@material-ui/core'
import Theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
