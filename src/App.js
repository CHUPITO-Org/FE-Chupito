import React, { Component } from 'react'
import Main from './components/Main/Main'

import ThemeProvider from './providers/ThemeProvider'
import ActionsProvider from './providers/ActionsProvider'
import UserProvider from './providers/UserProvider'
import Routes from './routes/Routes'

import { LayoutProvider } from './shared/contexts'

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <UserProvider>
          <ActionsProvider>
            <LayoutProvider>
              <Main>
                <Routes />
              </Main>
            </LayoutProvider>
          </ActionsProvider>
        </UserProvider>
      </ThemeProvider>
    )
  }
}

export default App
