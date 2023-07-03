import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main/Main'
import ThemeProvider from './providers/ThemeProvider'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { LayoutProvider, UserProvider } from './shared/contexts'
// import store from './redux/store'
// import { Provider } from 'react-redux'

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <LayoutProvider>
            <Main>
              <AppRoutes />
            </Main>
          </LayoutProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
    // </Provider> */>
  )
}

export default App
