import styled from "styled-components"

export const Wrapper = styled.main`
	position: relative;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
`

export const Background = styled.img`
	position: absolute;
	pointer-events: none;
	z-index: -1;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
`
