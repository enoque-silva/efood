import { Prato } from '../../models/Cardapio'
import ProductCard from '../ProductCard'
import { ListContainer } from './style'

type Props = {
  pratos: Prato[]
}

const ProductList = ({ pratos }: Props) => (
  <div className="container">
    <ListContainer>
      {pratos.map((item) => (
        <ProductCard
          key={item.id}
          foto={item.foto}
          nome={item.nome}
          descricao={
            item.descricao.length > 190
              ? item.descricao.slice(0, 190) + '...'
              : item.descricao
          }
        />
      ))}
    </ListContainer>
  </div>
)

export default ProductList
