import { act, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'
import StickyNote from '..'

const mockUseNotes = {
  notes: [
    {
      id: '0',
      content: 'note 0'
    }
  ],
  saveNotes: jest.fn()
}

jest.mock('contexts/NoteContext.tsx', () => ({
  useNotes: () => mockUseNotes
}))

describe('<StickyNote />', () => {
  it('should click on the button to create a new note', () => {
    renderWithTheme(<StickyNote />)

    act(() => {
      userEvent.click(screen.getByRole('img', { name: /plus/i }))
    })

    expect(screen.getByText(/note 0/i)).toBeInTheDocument()
  })

  it('should edit the content of a note', async () => {
    renderWithTheme(<StickyNote />)

    act(() => {
      userEvent.dblClick(screen.getByText(/note 0/i))
    })

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
  })
})
