import { createGlobalStyle } from "styled-components"

const FontsStyle = createGlobalStyle`
    @font-face {
      font-family: 'Exo';
      src: local('Exo'), local('Exo'),
      url(${"Exo2.0-Thin"}) format('woff2'),
      url(${"Exo2.0-Thin"}) format('woff');
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: 'TrebuchetMS';
      src: local('TrebuchetMS'), local('TrebuchetMS'),
      url(${"TrebuchetMS"}) format('woff2'),
      url(${"TrebuchetMS"}) format('woff');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'TrebuchetMS';
      src: local('TrebuchetMS-Bold'), local('TrebuchetMS-Bold'),
      url(${"TrebuchetMS-Bold"}) format('woff2'),
      url(${"TrebuchetMS-Bold"}) format('woff');
      font-weight: 700;
      font-style: normal;
    }
`

export default FontsStyle
