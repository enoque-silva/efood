import { useEffect, useState } from 'react'
import { Restaurante } from '../models/Restaurant'
import { getRestaurantById } from '../services/api'

export const useRestaurant = (id?: string) => {
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) {
      setError('Restaurante invalido.')
      setLoading(false)
      return
    }

    let isMounted = true

    const loadRestaurant = async () => {
      try {
        const data = await getRestaurantById(id)

        if (isMounted) {
          setRestaurante(data)
        }
      } catch (err) {
        if (isMounted) {
          setError('Nao foi possivel carregar o restaurante.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadRestaurant()

    return () => {
      isMounted = false
    }
  }, [id])

  return { restaurante, loading, error }
}
