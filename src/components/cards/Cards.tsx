import { FC } from "react"

import * as S from "./Cards.styled"
import CardsList from "./CardsList/CardsList"

const Cards: FC = () => {
	return (
		<S.CardsSection>
			<CardsList />
		</S.CardsSection>
	)
}

export default Cards
