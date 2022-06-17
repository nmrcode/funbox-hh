import styled, { css } from "styled-components"

import { ICardProps } from "../../../types/ICardProps"

export const Wrapper = styled.div``

export const Card = styled.article<ICardProps>`
	cursor: pointer;
	font-family: "Trebuchet", sans-serif;
	font-weight: 700;
	position: relative;
	z-index: 2;
	border-radius: 12px;
	min-width: 300px;
	background-image: linear-gradient(
		135deg,
		transparent 5%,
		${(props) =>
				props.selected
					? props.theme.accentSecondary
					: props.theme.accentPrimary}
			5% 95%
	);
	overflow: hidden;
	min-height: 480px;
	margin-bottom: 14px;
	&::before {
		z-index: -1;
		content: "";
		position: absolute;
		left: 3px;
		right: 3px;
		top: 3px;
		bottom: 3px;
		border-radius: 7px;
		background: linear-gradient(
			135deg,
			transparent 5%,
			#f2f2f2 5% 95%,
			#f2f2f2 95%
		);
	}

	pointer-events: ${(props) => (props.disabled ? "none" : "all")};
	user-select: none;
	filter: ${(props) => (props.disabled ? "grayscale()" : "none")};

	${(props) =>
		props.disabled &&
		css`
			${Weight} {
				background-color: #b3b3b3;
			}
		`}

	${(props) =>
		props.selected &&
		css`
			${Weight} {
				background-color: ${(props) => props.theme.accentSecondary};
			}
		`}
`
export const TextBox = styled.div`
	padding: 21px 61px 21px 48px;
	@media (max-width: 768px) {
		padding: 21px 41px 21px 38px;
	}
`
export const Subname = styled.div`
	span {
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		color: ${(props) => props.theme.grayFont};
	}

	.delete {
		color: ${(props) => props.theme.accentSecondary};
	}
`
export const Name = styled.h3`
	font-size: 48px;
	line-height: 56px;
	color: ${(props) => props.theme.blackFont};
`
export const Ingridient = styled.p`
	font-size: 24px;
	line-height: 28px;
	color: ${(props) => props.theme.blackFont};
	margin-bottom: 15px;
`
export const OptionsList = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	color: ${(props) => props.theme.grayFont};
	span {
		font-weight: 700;
	}

	li:not(:last-child) {
		margin-bottom: 3px;
	}
`

export const Weight = styled.div`
	position: absolute;
	bottom: 12px;
	right: 12px;
	z-index: 3;

	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	width: 80px;
	height: 80px;

	background-color: ${(props) => props.theme.accentPrimary};

	div {
		font-weight: 400;
		font-size: 42px;
		line-height: 1;
		color: ${(props) => props.theme.lightFont};
		span {
			display: block;
			text-align: center;
			font-size: 21px;
			line-height: 1;
		}
	}
`

export const Image = styled.img`
	position: absolute;
	bottom: -90px;
	left: -30px;
`
export const BottomLink = styled.div`
	font-family: "Trebuchet", sans-serif;
	font-weight: 400;
	font-size: 13px;
	line-height: 15px;
	text-align: center;
	color: ${(props) => props.theme.lightFont};
	max-width: 300px;

	button {
		cursor: pointer;
		background-color: transparent;
		border: none;
		outline: none;
		font: inherit;
		color: ${(props) => props.theme.accentPrimary};
		text-decoration: underline;
		text-decoration-style: dashed;
	}

	span {
		font-family: "Trebuchet", sans-serif;
		font-weight: 400;
		font-size: 13px;
		line-height: 15px;
		text-align: center;
		color: #ffff66;
	}
`
