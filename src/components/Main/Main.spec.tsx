import { render, screen } from '@testing-library/react'
import useMediaQuery from '@mui/material/useMediaQuery'

import Main from './Main'

// TODO: Make a research to handle unit tests with context
//describe('Main component', () => {

describe('with no authentication', () => {
  beforeEach(() => {
    // Mock useMediaQuery for sm size
    // useMediaQuery.mockImplementation((query) => {
    //   if (query === '(sm)') {
    //     return true
    //   } else {
    //     return false
    //   }
    // })
    afterEach(() => {
      // Reset the mock implementation after each test
      // useMediaQuery.mockReset()
    })
    it('should render AppBarMobile header when device is mobile', () => {
      jest.mock('@mui/material/useMediaQuery', () =>
        jest.fn().mockImplementation((query) => {
          // if (query === '(sm)') {
          //   return true
          // } else {
          //   return false
          // }
          return true
        })
      )

      const { getByText } = render(
        <Main>
          {' '}
          <div />
        </Main>
      )
      const mobileAppBar = screen.getByText(/mobile-app-bar/)
      expect(mobileAppBar).toBeInTheDocument()
    })
    it('should redirect to login', () => {})
  })
})

describe('with authentication', () => {
  it('should render all elements', () => {})
})
//})
