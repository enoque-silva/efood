import Estrela from '../../assets/images/estrela.png'
import {
  ButtonContainer,
  CardContainer,
  CardContent,
  CardImage,
  Descricao,
  TagsContainer,
  TituloContainer
} from './styles'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  id: number
  title: string
  rating: number
  image?: string
  description?: string
  infos: string[]
}

export const RestaurantCard = ({
  id,
  infos,
  rating,
  image,
  title,
  description
}: Props) => (
  <CardContainer>
    <CardImage src={image} alt={title} />
    <TagsContainer>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagsContainer>
    <CardContent>
      <TituloContainer>
        <h3>{title}</h3>
        <div>
          <span>{rating.toFixed(1)}</span>
          <img src={Estrela} alt="estrela" />
        </div>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <ButtonContainer>
        <Button type="link" to={`/perfil/${id}`} title={'Saiba mais'}>
          Saiba mais
        </Button>
      </ButtonContainer>
    </CardContent>
  </CardContainer>
)
