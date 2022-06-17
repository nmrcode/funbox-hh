import { FC } from "react"

import CardItem from "../card-item/CardItem"
import { cardsData } from "../data"

import * as S from "./CardsList.styled"

const CardsList: FC = () => {
	return (
		<S.Wrapper>
			{cardsData.map((card) => (
				<CardItem
					key={card.id}
					name={card.name}
					imageUrl={card.imageUrl}
					subName={card.subName}
					weight={card.weight}
					ingredient={card.ingredient}
					description={card.description}
					options={card.options}
				/>
			))}
		</S.Wrapper>
	)
}

export default CardsList
