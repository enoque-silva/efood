import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmao_claro: '#FFF8F2',
  salmao_escuro: '#FFEBD9',
  branco: '#FFFFFF',
  rosa: '#E66767'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.salmao_claro};
    color: ${colors.rosa};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
