import { RestaurantList } from '../../components/RestaurantList'
import Hero from '../../components/Hero'
import { useRestaurants } from '../../hooks/useRestaurants'

const Home = () => {
  const { restaurants, loading, error } = useRestaurants()

  return (
    <>
      <Hero />
      {loading && <p className="container">Carregando restaurantes...</p>}
      {error && <p className="container">{error}</p>}
      {!loading && !error && <RestaurantList restaurants={restaurants} />}
    </>
  )
}

export default Home
