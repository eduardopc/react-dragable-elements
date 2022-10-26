import { screen } from '@testing-library/react'
import { Trash } from '@styled-icons/ionicons-outline/Trash'

import { renderWithTheme } from 'utils/tests/helpers'
import Button from '..'

describe('<Button />', () => {
  it('should render the medium size by default ', () => {
    const { container } = renderWithTheme(<Button>Notes</Button>)

    expect(screen.getByRole('button', { name: /Notes/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.2rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Notes</Button>)

    expect(screen.getByRole('button', { name: /Notes/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Notes</Button>)

    expect(screen.getByRole('button', { name: /Notes/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Notes</Button>)

    expect(screen.getByRole('button', { name: /Notes/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(<Button icon={<Trash data-testid="icon" />}>Notes</Button>)

    expect(screen.getByText(/Notes/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Notes
      </Button>
    )

    expect(screen.getByRole('link', { name: /Notes/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render a disabled button', () => {
    renderWithTheme(<Button disabled>Notes</Button>)

    expect(screen.getByRole('button', { name: /Notes/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
