import { HeaderContainer, LogoImage } from './Header.styles'
import logoTopaz from '../../assets/logo-topaz.png'

export function Header() {
  return (
    <HeaderContainer>
      <h1>Planning Poker App by &nbsp;</h1>
      <LogoImage src={logoTopaz} alt="Topaz Evolution logo" />
    </HeaderContainer>
  )
}
