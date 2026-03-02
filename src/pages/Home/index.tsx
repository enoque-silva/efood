import { RestaurantList } from '../../components/RestaurantList'
import Hero from '../../components/Hero'
import { Restaurante } from '../../models/Restaurant'

import img_jardim_da_Terra from '../../assets/images/Jardim_da_Terra.png'
import img_sakura_sushi_house from '../../assets/images/Sakura_Sushi_House.jpeg'
import img_casa_das_Delicias_Arabes from '../../assets/images/Casa_das_Delicias_Arabes.jpeg'
import img_bella_Tavola_Italiana from '../../assets/images/Bella_Tavola_Italiana.jpeg'
import img_cantinho_Lusitano from '../../assets/images/Cantinho_Lusitano.jpeg'
import img_piazza_del_Forno from '../../assets/images/Piazza_del_Forno.png'

export const restaurants: Restaurante[] = [
  {
    id: 1,
    titulo: 'Piazza del Forno',
    destacado: false,
    tipo: 'Pizza',
    avaliacao: 4.6,
    descricao:
      'A Piazza del Forno é um restaurante especializado em pizzas artesanais, oferecendo uma variedade de sabores e combinações. Com um ambiente descontraído e uma equipe dedicada, é o local ideal para os amantes de pizza que buscam uma experiência gastronômica deliciosa e autêntica.',
    capa: img_piazza_del_Forno
  },

  {
    id: 2,
    titulo: 'Sakura Sushi House',
    destacado: false,
    tipo: 'Japonês',
    avaliacao: 4.0,
    descricao:
      'A Sakura Sushi House é um restaurante japonês que oferece uma variedade de pratos tradicionais, como sushi, sashimi e tempura. Com um ambiente moderno e uma equipe dedicada, é o local ideal para os amantes da culinária japonesa que buscam uma experiência gastronômica autêntica e saborosa.',
    capa: img_sakura_sushi_house
  },
  {
    id: 3,
    titulo: 'Casa das Delícias Árabes',
    destacado: false,
    tipo: 'Árabe',
    avaliacao: 4.2,
    descricao:
      'A Casa das Delícias Árabes é um restaurante que oferece uma variedade de pratos tradicionais árabes, como falafel, homus e kebabs. Com um ambiente acolhedor e uma equipe atenciosa, é o lugar perfeito para quem deseja experimentar a rica culinária do Oriente Médio.',
    capa: img_casa_das_Delicias_Arabes
  },
  {
    id: 4,
    titulo: 'Bella Tavola Italiana',
    destacado: true,
    tipo: 'Italiano',
    avaliacao: 4.8,
    descricao:
      'A Bella Tavola Italiana é um restaurante italiano que oferece uma variedade de pratos tradicionais, como massas, pizzas e risotos. Com um ambiente elegante e uma equipe dedicada, é o local ideal para os amantes da culinária italiana que buscam uma experiência gastronômica autêntica e saborosa.',
    capa: img_bella_Tavola_Italiana
  },
  {
    id: 5,
    titulo: 'Cantinho Lusitano',
    destacado: false,
    tipo: 'Português',
    avaliacao: 4.3,
    descricao:
      'O Cantinho Lusitano é um restaurante português que oferece uma variedade de pratos tradicionais, como bacalhau, caldo verde e pastéis de nata. Com um ambiente acolhedor e uma equipe atenciosa, é o lugar perfeito para quem deseja experimentar a rica culinária de Portugal.',
    capa: img_cantinho_Lusitano
  },
  {
    id: 6,
    titulo: 'Jardim da Terra',
    destacado: true,
    tipo: 'Vegetariano',
    avaliacao: 4.5,
    descricao:
      'O Jardim da Terra é um restaurante vegetariano que oferece pratos saborosos e saudáveis, feitos com ingredientes frescos e orgânicos. Com um ambiente acolhedor e uma equipe atenciosa, é o lugar perfeito para quem busca uma alimentação consciente e deliciosa.',
    capa: img_jardim_da_Terra
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantList restaurants={restaurants} />
  </>
)

export default Home
