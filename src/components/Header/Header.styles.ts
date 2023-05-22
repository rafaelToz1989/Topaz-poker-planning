import styled from 'styled-components'

const HeaderContainer = styled.header`
  align-items: center;
  color: ${({ theme }) => theme.blue};
  display: flex;
  height: 5rem;
  justify-content: center;
  margin: 5rem 2rem;
`

const LogoImage = styled.img`
  padding-top: 0.9375rem;
`

export { HeaderContainer, LogoImage }
