import { Categoria, Imagem, TituloBanner } from './styles'

type Props = {
  categoria: string
  nome: string
  capa: string
}

const Banner = ({ categoria, nome, capa }: Props) => (
  <Imagem foto={capa}>
    <div className="container">
      <Categoria>{categoria}</Categoria>
      <TituloBanner>{nome}</TituloBanner>
    </div>
  </Imagem>
)

export default Banner
