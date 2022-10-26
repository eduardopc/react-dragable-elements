import { render, screen } from '@testing-library/react'

import Base from '..'

describe('<Base />', () => {
  it('should render children', () => {
    render(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
