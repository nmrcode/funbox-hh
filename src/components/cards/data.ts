import cat from "../../assets/img/cat.png"
import { ICard } from "../../types/ICard"

export const cardsData: ICard[] = [
	{
		subName: "Сказочное заморское яство",
		name: "Нямушка",
		ingredient: "фуа-гра",
		imageUrl: `${cat}`,
		options: ["10 порций", "Мышь в подарок"],
		weight: "5",
	},

	{
		subName: "Сказочное заморское яство",
		name: "Нямушка",
		ingredient: "рыбой",
		imageUrl: `${cat}`,
		options: ["40 порций", "2 мыши в подарок"],
		weight: "2",
	},

	{
		subName: "Сказочное заморское яство",
		name: "Нямушка",
		ingredient: "курой",
		imageUrl: `${cat}`,
		options: ["100 порций", "5 мышей в подарок", "Заказчик доволен"],
		weight: "0,5",
	},
]
