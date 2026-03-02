import { BotaoAdicionar, Card, Descricao, Foto, Titulo } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
}

const ProductCard = ({ foto, nome, descricao }: Props) => (
  <Card>
    <Foto src={foto} alt={nome} />
    <Titulo>{nome}</Titulo>
    <Descricao>{descricao}</Descricao>
    <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
  </Card>
)

export default ProductCard
