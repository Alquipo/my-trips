import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100%;
      background: ${theme.colors.background};
      color: ${theme.colors.white};
    }

    body {
      font-family: ${theme.font.family};
    }

    p,
    a {
      font-size: 2rem;
      line-height: ${theme.sizes.medium};
    }

    a {
      color: ${theme.colors.highlight};
    }
  `}

`
export default GlobalStyles
