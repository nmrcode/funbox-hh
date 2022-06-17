import { createGlobalStyle } from "styled-components"

import Exo from "../assets/fonts/Exo2.0-Thin.woff"
import TrebuchetBold from "../assets/fonts/TrebuchetMS-Bold.woff"
import Trebuchet from "../assets/fonts/TrebuchetMS.woff"

const FontsStyle = createGlobalStyle`
  @font-face {
    font-family: 'Exo';
    src: url(${Exo}) format('woff');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Trebuchet';
    src: url(${Trebuchet}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Trebuchet';
    src: url(${TrebuchetBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
	
`

export default FontsStyle
