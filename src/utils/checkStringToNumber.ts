export const checkStringToNumber = (str: string) => {
	const number = str.replace(/\D/g, "") // 👉️ '123'
	const words = str.replace(/[0-9]/g, "") // 👉️ '123'

	return { number, words }
}
