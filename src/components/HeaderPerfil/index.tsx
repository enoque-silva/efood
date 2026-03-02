import { Link } from 'react-router-dom'
import { HeaderContainer } from './styles'
import Logo from '../../assets/images/logo_efood.png'

const HeaderPerfil = () => (
  <HeaderContainer>
    <div className="container">
      <Link to="/">Restaurantes</Link>
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo eFood" />
      </Link>
      <a href="#">0 - produto(s) no carrinho</a>
    </div>
  </HeaderContainer>
)

export default HeaderPerfil
