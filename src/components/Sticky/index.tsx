import React, { useState } from 'react'
import { Check } from '@styled-icons/fa-solid/Check'
import { ColorPicker } from '@styled-icons/evaicons-solid/ColorPicker'

import Button from 'components/Button'
import { useNotes } from 'contexts/NoteContext'
import * as S from './styles'

type TSticky = {
  id: string
  content?: string
}

function Sticky({ id, content = '' }: TSticky) {
  const { updateNote } = useNotes()
  const [toggle, setToggle] = useState(true)
  const [text, setText] = useState(content)
  const [color, setColor] = useState('')

  function toggleInput() {
    setToggle((prevState) => !prevState)
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value)
  }

  function handleUpdateNote(id: string) {
    updateNote({ id, content: text })
    toggleInput()
  }

  function handleSortColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    setColor(randomColor)
  }

  const dropNote = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.style.left = `${event.pageX - 50}px`
    event.currentTarget.style.top = `${event.pageY - 50}px`
  }

  return (
    <S.Sticker
      color={color}
      id={id}
      draggable={true}
      onDragEnd={dropNote}
      onDoubleClick={toggleInput}
    >
      {toggle ? (
        <div>
          <S.ColorPicker>
            <ColorPicker size={24} onClick={handleSortColor} id={'picker'} />
          </S.ColorPicker>
          {text}
        </div>
      ) : (
        <>
          <S.Input value={text} onChange={handleChange} color={color} />
          <S.ButtonContainer>
            <Button
              as="a"
              icon={<Check size={18} />}
              withoutBackground
              onClick={() => handleUpdateNote(id)}
            />
          </S.ButtonContainer>
        </>
      )}
    </S.Sticker>
  )
}

export default Sticky
