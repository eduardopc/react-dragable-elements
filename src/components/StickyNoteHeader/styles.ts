import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row-reverse;
    padding: ${theme.spacings.xsmall};
  `}
`
