import cat from "../../assets/img/cat.png"
import { ICard } from "../../types/ICard"

export const cardsData: ICard[] = [
	{
		subName: "Сказочное заморское яство",
		name: "Нямушка",
		ingredient: "фуа-гра",
		imageUrl: `${cat}`,
		options: {
			isSatisfied: false,
			miceCount: 1,
			count: 0,
		},
		weight: "5",
		description: "Печень утки разварная с артишоками.",
	},

	{
		subName: "Сказочное заморское яство",
		name: "Нямушка",
		ingredient: "рыбой",
		imageUrl: `${cat}`,
		options: {
			isSatisfied: false,
			miceCount: 2,
			count: 40,
		},
		weight: "2",
		description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
	},

	{
		subName: "Сказочное заморское яство",
		name: "Нямушка",
		ingredient: "курой",
		imageUrl: `${cat}`,
		options: {
			isSatisfied: true,
			miceCount: 5,
			count: 100,
		},
		weight: "0,5",
		description: "Филе из цыплят с трюфелями в бульоне.",
	},
]
