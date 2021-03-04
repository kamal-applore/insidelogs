import React from 'react'
import Routes from './Routes'
import { ThemeProvider } from '@material-ui/core'
import Theme from './theme/theme'

function App() {
  return (
    <div style={{ maxWidth: '1920px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default App
