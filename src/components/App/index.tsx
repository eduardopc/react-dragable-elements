import React from 'react'

import { Divider } from 'components/Divider'

import Base from 'components/Base'
import DropArea from 'components/DropArea'
import StickyNote from 'components/StickyNote'

import * as S from './styles'

function App() {
  return (
    <Base>
      <S.Container>
        <StickyNote />
        <Divider />
        <S.DropSection>
          <DropArea />
        </S.DropSection>
      </S.Container>
    </Base>
  )
}

export default App
