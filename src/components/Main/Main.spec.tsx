import { render, screen } from '@testing-library/react'
import useMediaQuery from '@mui/material/useMediaQuery'

import Main from './Main'
import { MainProps } from '../../types/types'

// TODO: Make a research to handle unit tests with context
//describe('Main component', () => {
const renderMainComponent = (props: MainProps) => render(<Main {...props} />)

describe('with no authentication', () => {
  beforeEach(() => {
    it('should render AppBarWeb header when device is WEB', () => {
      jest.mock('useMediaQuery', () =>
        jest.fn().mockImplementation((query) => {
          return true
        })
      )
      const props: MainProps = {
        version: 'v14',
      }

      renderMainComponent(props)
      const webAppBarVersion = screen.getByText(/v14/)
      expect(webAppBarVersion).toBeInTheDocument()
    })
    it('should redirect to login', () => {})
  })
})

describe('with authentication', () => {
  it('should render all elements', () => {})
})
//})
