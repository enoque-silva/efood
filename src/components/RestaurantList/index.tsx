import { RestaurantCard } from '../RestaurantCard'
import { ListContainer } from './styles'

import { Restaurante } from '../../models/Restaurant'

export type Props = {
  restaurants: Restaurante[]
}

export const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <ListContainer>
      {restaurants.map((item) => (
        <RestaurantCard
          id={item.id}
          key={item.id}
          title={item.titulo}
          image={item.capa}
          description={item.descricao}
          rating={item.avaliacao}
          infos={
            item.destacado ? ['Destaque da semana', item.tipo] : [item.tipo]
          }
        />
      ))}
    </ListContainer>
  </div>
)
