import { Prato } from '../../models/Cardapio'
import ProductCard from '../ProductCard'
import { ListContainer } from './style'

type Props = {
  pratos: Prato[]
  onSelectProduct: (prato: Prato) => void
}

const ProductList = ({ pratos, onSelectProduct }: Props) => (
  <div className="container">
    <ListContainer>
      {pratos.map((item) => (
        <ProductCard
          key={item.id}
          foto={item.foto}
          nome={item.nome}
          descricao={
            item.descricao.length > 190
              ? item.descricao.slice(0, 190) + ' [...]'
              : item.descricao
          }
          onSelect={() => onSelectProduct(item)}
        />
      ))}
    </ListContainer>
  </div>
)

export default ProductList
