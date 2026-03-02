import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_efood.png'
import { Background, Logo, Title } from './styles'

const Hero = () => (
  <Background>
    <div className="container">
      <Link to="/" title="Logo Efood">
        <Logo src={logo} />
      </Link>
      <Title>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Title>
    </div>
  </Background>
)

export default Hero
