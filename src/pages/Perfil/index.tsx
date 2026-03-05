import { useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import ProductModal from '../../components/ProductModal'
import type { Prato } from '../../models/Cardapio'
import { useRestaurant } from '../../hooks/useRestaurant'

const Perfil = () => {
  const { id } = useParams()
  const { restaurante, loading, error } = useRestaurant(id)
  const [selectedPrato, setSelectedPrato] = useState<Prato | null>(null)

  return (
    <>
      <HeaderPerfil />

      {loading && <p className="container">Carregando restaurante...</p>}
      {error && <p className="container">{error}</p>}

      {!loading && !error && restaurante && (
        <>
          <Banner
            categoria={restaurante.tipo}
            nome={restaurante.titulo}
            capa={restaurante.capa}
          />

          <ProductList
            pratos={restaurante.cardapio}
            onSelectProduct={setSelectedPrato}
          />
        </>
      )}

      {selectedPrato && (
        <ProductModal
          produto={selectedPrato}
          onClose={() => setSelectedPrato(null)}
        />
      )}
    </>
  )
}

export default Perfil
