import styled, { css } from 'styled-components'

type TColor = {
  color?: string
}

export const Sticker = styled.div<TColor>`
  ${({ theme, color }) => css`
    width: 240px;
    height: 240px;
    padding: ${theme.spacings.xsmall};
    background: ${color ? color : theme.colors.yellow};
    border-radius: 16px;
    margin: ${theme.spacings.xsmall};
    position: absolute;
    top: 100px;
    left: 100px;
    resize: both;
    overflow: hidden;
  `}
`

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: ${theme.spacings.small};

    > a {
      border: 1px solid ${theme.colors.black};
    }
  `}
`

export const ColorPicker = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Input = styled.textarea<TColor>`
  ${({ theme, color }) => css`
    min-width: 100%;
    padding: ${theme.spacings.xxsmall};
    min-height: 80%;
    border: 1px solid ${theme.colors.black};
    border-radius: 8px;
    background: ${color ? color : theme.colors.yellow};
    outline: none;
    resize: none;
  `}
`
