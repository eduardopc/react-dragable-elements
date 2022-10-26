import { renderHook, act } from '@testing-library/react-hooks'

import { NotesProvider, useNotes } from '../NoteContext'

const notes = [
  {
    id: '0',
    content: 'new note'
  },
  {
    id: '1',
    content: 'new note1'
  }
]

describe('NoteContext', () => {
  describe('Create a new note', () => {
    it('should save a new note', () => {
      const { result } = renderHook(useNotes, {
        wrapper: NotesProvider
      })

      act(() => {
        result.current.saveNotes(notes[0])
      })

      expect(result.current.notes).toHaveLength(1)
    })
  })

  describe('Update an existing note', () => {
    it('should update a note', () => {
      const { result } = renderHook(useNotes, {
        wrapper: NotesProvider
      })

      act(() => {
        result.current.saveNotes(notes[1])
      })

      act(() => {
        result.current.updateNote({ ...notes[1], content: 'updated note' })
      })

      expect(result.current.notes).toMatchObject([
        {
          id: '1',
          content: 'updated note'
        }
      ])
    })
  })
})
