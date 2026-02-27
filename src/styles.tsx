import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink_white: '#FFF8F2',
  light_orange: '#FFEBD9',
  white: '#FFFFFF',
  red: '#E66767',
  yellow: '#FFB930'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.pink_white};
    color: ${colors.red};
  }
`
