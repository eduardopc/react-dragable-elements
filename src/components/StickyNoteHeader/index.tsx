import React from 'react'
import { Plus } from '@styled-icons/fa-solid/Plus'
import { v4 as uuid } from 'uuid'

import Button from 'components/Button'
import { useNotes } from 'contexts/NoteContext'

import * as S from './styles'

function StickyNoteHeader() {
  const { notes, saveNotes } = useNotes()

  const addNewNote = () => {
    saveNotes({ id: uuid() })
  }

  return (
    <S.Container>
      <Button
        as="a"
        icon={<Plus title="plus" size={48} />}
        withoutBackground
        size="large"
        onClick={addNewNote}
      >
        Add new note ({notes.length})
      </Button>
    </S.Container>
  )
}

export default StickyNoteHeader
