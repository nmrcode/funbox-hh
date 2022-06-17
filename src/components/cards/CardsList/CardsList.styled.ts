import styled from "styled-components"

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 80px;

	@media (max-width: 768px) {
		gap: 30px;
	}
`
