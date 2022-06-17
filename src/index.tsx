import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"

import App from "./components/app/App"

import FontsStyle from "./styled-components/fonts"
import GlobalStyle from "./styled-components/global"
import { theme } from "./styled-components/theme"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<FontsStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
