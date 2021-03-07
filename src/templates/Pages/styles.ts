import styled, { css } from 'styled-components'

export const Content = styled.section`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    max-width: ${theme.grid.container};
    margin: auto;
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.sizes.large};
    margin-bottom: ${theme.sizes.large};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`

  // serve para estilos do body
  // p, a, ul, li, blockquote
  p {
    font-size: ${theme.sizes.medium};
    line-height: ${theme.sizes.medium};
  `}
`
