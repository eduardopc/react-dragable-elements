import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import StickyNoteHeader from '..'

const mockUseNotes = {
  notes: [
    {
      id: '0',
      content: 'note 0'
    },
    {
      id: '1',
      content: 'note 1'
    }
  ],
  saveNotes: jest.fn()
}

jest.mock('contexts/NoteContext.tsx', () => ({
  useNotes: () => mockUseNotes
}))

describe('<StickyNoteHeader />', () => {
  it('should render the header', () => {
    renderWithTheme(<StickyNoteHeader />)

    expect(screen.getByRole('img', { name: /plus/i })).toBeTruthy()
  })
})
