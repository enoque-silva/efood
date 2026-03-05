import { BotaoAdicionar, Card, Descricao, Foto, Titulo } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
  onSelect?: () => void
}

const ProductCard = ({ foto, nome, descricao, onSelect }: Props) => (
  <Card onClick={onSelect}>
    <Foto src={foto} alt={nome} />
    <Titulo>{nome}</Titulo>
    <Descricao>{descricao}</Descricao>
    <BotaoAdicionar type="button">Mais detalhes</BotaoAdicionar>
  </Card>
)

export default ProductCard
