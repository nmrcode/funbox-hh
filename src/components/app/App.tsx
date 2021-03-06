import { FC } from "react"

import bg from "../../assets/img/bg.jpg"
import Cards from "../cards/Cards"
import Heading from "../heading/Heading"

import * as S from "./App.styled"

const App: FC = () => {
	return (
		<S.Wrapper style={{ backgroundImage: `url('${bg}')` }}>
			<Heading text="Ты сегодня покормил кота?" tag="h1" />
			<Cards />
		</S.Wrapper>
	)
}

export default App
