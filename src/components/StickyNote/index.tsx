import React from 'react'

import StickyNoteHeader from 'components/StickyNoteHeader'
import Sticky from 'components/Sticky'
import { useNotes } from 'contexts/NoteContext'

import * as S from './styles'

function StickyNote() {
  const { notes } = useNotes()

  return (
    <section>
      <StickyNoteHeader />
      <S.Container>
        {notes &&
          notes.map((note) => (
            <Sticky key={note.id} id={note.id} content={note.content} />
          ))}
      </S.Container>
    </section>
  )
}

export default StickyNote
