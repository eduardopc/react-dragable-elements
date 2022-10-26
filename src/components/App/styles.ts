import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  position: fixed;
  grid-template-columns: 1fr 0.1rem 28rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const DropSection = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`
