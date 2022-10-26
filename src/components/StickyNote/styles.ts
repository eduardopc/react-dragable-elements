import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: ${theme.spacings.xsmall};
  `}
`
