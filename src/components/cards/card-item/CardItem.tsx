import { FC } from "react"

import { useHover } from "../../../hooks/useHover"
import { useToggle } from "../../../hooks/useToggle"
import { ICard } from "../../../types/ICard"

import * as S from "./CardItem.styled"

const CardItem: FC<ICard> = ({
	options,
	name,
	subName,
	weight,
	imageUrl,
	ingredient,
	description,
}) => {
	const [isCardSelected, setIsCardSelected] = useToggle()
	const [cardRef, isCardHovered] = useHover()

	return (
		<>
			<S.Wrapper>
				<S.Card
					ref={cardRef}
					onClick={setIsCardSelected}
					selected={isCardSelected}
					disabled={!options.count}
				>
					<S.TextBox>
						<S.Subname>
							<span>
								{isCardHovered && isCardSelected ? (
									<span className="delete">Котэ не одобряет?</span>
								) : (
									<span>{subName}</span>
								)}
							</span>
						</S.Subname>
						<S.Name>{name}</S.Name>
						<S.Ingridient>с {ingredient}</S.Ingridient>
						<S.OptionsList>
							{options.count ? (
								<li>
									<span>{options.count}</span> порций
								</li>
							) : (
								<li>Товар закончился 😔</li>
							)}
							<li>
								<span>{options.miceCount}</span>{" "}
								{options.miceCount === 1
									? "мышь"
									: options.miceCount <= 4
									? "мыши"
									: "мышей"}{" "}
								в подарок
							</li>
							<li>{options.isSatisfied ? "Заказчик доволен" : null}</li>
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
					{isCardSelected ? (
						description
					) : (
						<>
							{options.count ? (
								<>
									Чего сидишь? Порадуй котэ,
									<button onClick={setIsCardSelected}>купи.</button>
								</>
							) : (
								<span>Печалька, с {ingredient} закончился.</span>
							)}
						</>
					)}
				</S.BottomLink>
			</S.Wrapper>
		</>
	)
}

export default CardItem
