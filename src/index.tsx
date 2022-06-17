import React from "react"
import ReactDOM from "react-dom/client"

import App from "./components/app/App"

import FontsStyle from "./styled-components/fonts"
import GlobalStyle from "./styled-components/global"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<FontsStyle />
		<App />
	</React.StrictMode>
)
