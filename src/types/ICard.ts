export interface ICard {
	id?: number
	subName: string
	name: string
	ingredient: string
	options: {
		count: number
		miceCount: number
		isSatisfied: boolean
	}
	imageUrl: string
	weight: string
	description: string
}
