import { FC } from "react"

import { ICard } from "../../../types/ICard"
import { checkStringToNumber } from "../../../utils/checkStringToNumber"

import * as S from "./CardItem.styled"

const CardItem: FC<ICard> = ({
	options,
	name,
	subName,
	weight,
	imageUrl,
	ingredient,
}) => {
	return (
		<>
			<S.Wrapper>
				<S.Card>
					<S.TextBox>
						<S.Subname>{subName}</S.Subname>
						<S.Name>{name}</S.Name>
						<S.Ingridient>с {ingredient}</S.Ingridient>
						<S.OptionsList>
							{options.map((option) => {
								const { words, number } = checkStringToNumber(option)
								return (
									<li>
										{number && <span>{number}</span>} {words}
									</li>
								)
							})}
						</S.OptionsList>
					</S.TextBox>

					<S.Weight>
						<div>
							{weight}
							<span>кг</span>
						</div>
					</S.Weight>
					<S.Image src={imageUrl} />
				</S.Card>{" "}
				<S.BottomLink>
					Чего сидишь? Порадуй котэ, <button>купи.</button>
				</S.BottomLink>
			</S.Wrapper>
		</>
	)
}

export default CardItem
