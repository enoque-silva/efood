import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import { restaurants } from '../Home'
import ProductList from '../../components/ProductList'
import type { Prato } from '../../models/Cardapio'

import pizza from '../../assets/images/pizza.png'

const pratos: Prato[] = [
  {
    id: 1,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Porção para 1 pessoa',
    foto: pizza,
    preco: 29.9
  },
  {
    id: 2,
    nome: 'Pizza Pepperoni',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Porção para 1 pessoa',
    foto: pizza,
    preco: 34.9
  },
  {
    id: 3,
    nome: 'Pizza Pepperoni',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Porção para 1 pessoa',
    foto: pizza,
    preco: 29.9
  },
  {
    id: 4,
    nome: 'Pizza Pepperoni',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Porção para 1 pessoa',
    foto: pizza,
    preco: 29.9
  },
  {
    id: 5,
    nome: 'Pizza Pepperoni',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Porção para 1 pessoa',
    foto: pizza,
    preco: 29.9
  },
  {
    id: 6,
    nome: 'Pizza Pepperoni',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Porção para 1 pessoa',
    foto: pizza,
    preco: 29.9
  }
]

const Perfil = () => {
  const { id } = useParams()

  const restaurante = restaurants.find((r) => r.id === Number(id))
  return (
    <>
      <HeaderPerfil />
      {restaurante && (
        <Banner
          categoria={restaurante.tipo}
          nome={restaurante.titulo}
          capa={restaurante.capa}
        />
      )}
      <ProductList pratos={pratos} />
    </>
  )
}

export default Perfil
