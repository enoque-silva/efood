import { Prato } from '../../models/Cardapio'
import {
  ModalOverlay,
  ModalContainer,
  ProductImage,
  ProductInfo,
  CloseButton,
  AddButton
} from './styles'

type Props = {
  produto: Prato
  onClose: () => void
}

const ProductModal = ({ produto, onClose }: Props) => {
  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <CloseButton type="button" onClick={onClose}>
          X
        </CloseButton>

        <ProductImage src={produto.foto} alt={produto.nome} />

        <ProductInfo>
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p>Serve: {produto.porcao}</p>
          <AddButton type="button">
            Adicionar ao carrinho - {precoFormatado}
          </AddButton>
        </ProductInfo>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default ProductModal
