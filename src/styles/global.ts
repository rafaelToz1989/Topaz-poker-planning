import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
			box-sizing: border-box;
    }

		:focus{
			outline: 0;
			box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
		}

		body {
			background: ${({ theme }) => theme.lightGray};
			-webkit-font-smoothing: antialiased;
		}

		body, button, text-area, input {
			font-family: 'Montserrat', sans-serif;
			font-size: 1rem;
			font-weight: 400;
		}
`
