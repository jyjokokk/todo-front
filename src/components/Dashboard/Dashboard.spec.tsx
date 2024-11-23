import { render, screen } from '@testing-library/react'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
  it('should render the Dashboard', () => {
    const { container } = render(<Dashboard />)

    expect(
      screen.getByRole('heading', {
        name: /Home/i,
        level: 1
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toBeInTheDocument()
  })
})
