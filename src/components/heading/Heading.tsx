import { FC } from "react"
import styled from "styled-components"

import { IHeadingProps } from "../../types/IHeadingProps"

const HeadingText = styled.div`
	font-family: "Exo", sans-serif;
	font-size: 36px;
	line-height: 44px;
	text-align: center;
	color: #ffffff;
	text-shadow: 0 1px 1px #000000;
`

const Heading: FC<IHeadingProps> = ({ text, tag = "div" }) => {
	return <HeadingText as={tag}>{text}</HeadingText>
}

export default Heading
