import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    list-style: none;
    font-family: 'TrebuchetMS', sans-serif;
		font-weight: 400;
		font-size: 16px;
  }
`

export default GlobalStyle
