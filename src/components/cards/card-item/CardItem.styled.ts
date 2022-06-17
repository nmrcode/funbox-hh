import styled from "styled-components"

export const Wrapper = styled.div``

export const Card = styled.article`
	cursor: pointer;
	font-family: "Trebuchet", sans-serif;
	font-weight: 700;

	position: relative;
	z-index: 2;

	//background-color: #f2f2f2;
	//border: 4px solid #1698d9;
	border-radius: 12px;

	background-image: linear-gradient(135deg, transparent 5%, #1698d9 5% 95%);

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
`
export const TextBox = styled.div`
	padding: 21px 61px 21px 48px;
`
export const Subname = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: ${(props) => props.theme.grayFont};
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
	font-family: "Trebuchet";
	font-weight: 400;
	font-size: 13px;
	line-height: 15px;
	text-align: center;
	color: ${(props) => props.theme.lightFont};

	button {
		cursor: pointer;
		background-color: transparent;
		border: none;
		outline: none;
		color: inherit;
		font: inherit;
		color: ${(props) => props.theme.accentPrimary};
		border-bottom: 1px dashed;
	}
`
