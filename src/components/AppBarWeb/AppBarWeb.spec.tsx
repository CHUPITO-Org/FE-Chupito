import { render, screen } from '@testing-library/react'

import AppBarWeb, { AppBarWebProps } from './AppBarWeb'

const renderComponent = (props: AppBarWebProps) =>
  render(<AppBarWeb {...props} />)

describe('AppBarWeb component', () => {
  it('should render all elements', () => {
    const props: AppBarWebProps = {
      title: 'Super title',
      version: '1.2',
    }
    renderComponent(props)
    const title = screen.getByText(/super title/i)
    expect(title).toBeInTheDocument()

    const version = screen.getByText(/v1.2/i)
    expect(version).toBeInTheDocument()
  })
  it('should render email when user is authenticated', () => {
    const props: AppBarWebProps = {
      title: 'Super title',
      version: '1.2',
    }
    const mockState = {
      isAuth: true,
      user: {
        email: 'test@example.com',
      },
    }
    const mockTitle = 'Test Title'
    const mockVersion = '1.0.0'

    const mockState = {
      isAuth: false,
    }

    renderComponent(props)
    const emailElement = getByText(mockState.user.email)
    expect(emailElement).toBeInTheDocument()
  })
  it('should render login button when isAuth is false', () => {
    const props: AppBarWebProps = {
      title: 'Super title',
      version: '1.2',
    }

    const mockState = {
      isAuth: false,
    }

    renderComponent(props)

    const loginButton = screen.getByText('Login')
    expect(loginButton).toBeInTheDocument()
  })
})
