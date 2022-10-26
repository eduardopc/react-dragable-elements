import { renderWithTheme } from 'utils/tests/helpers'

import { Divider } from '..'

describe('<Divider />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Divider />)

    const { container } = renderWithTheme(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="sc-bcXHqe iHSfUJ"
      />
    `)
  })
})
