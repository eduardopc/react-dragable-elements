import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xsmall};
    color: ${theme.colors.black};
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    text-align: center;
    text-justify: auto;
  `}
`
