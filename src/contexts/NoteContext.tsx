import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useState
} from 'react'

type TNote = {
  id: string
  content?: string
}

type NotesContextData = {
  notes: TNote[]
  saveNotes(note: TNote): void
  updateNote(note: TNote): void
}

interface Props {
  children?: React.ReactNode
}

const NotesContext = createContext<NotesContextData>({} as NotesContextData)

export const NotesProvider: FC<Props> = ({ children }) => {
  const [notes, setNotes] = useState<Array<TNote>>([])

  const saveNotes = useCallback(
    (note: TNote): void => {
      setNotes([...notes, note])
    },
    [notes]
  )

  const updateNote = useCallback(
    (note: TNote): void => {
      notes.forEach((registeredNotes, index) => {
        if (registeredNotes.id === note.id) {
          notes[index] = { ...registeredNotes, content: note.content }
        }
      })
    },
    [notes]
  )

  return (
    <NotesContext.Provider
      value={{
        notes,
        saveNotes,
        updateNote
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = (): NotesContextData => useContext(NotesContext)
