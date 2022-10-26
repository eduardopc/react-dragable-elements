import React from 'react'
import { Trash } from '@styled-icons/ionicons-outline/Trash'

import * as S from './styles'

function DropArea() {
  return (
    <S.Container>
      <Trash title="trash" size={48} />
      <S.Description>Drag and drop here to exclude the note</S.Description>
    </S.Container>
  )
}

export default DropArea
