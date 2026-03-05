import { useEffect, useState } from 'react'
import { Restaurante } from '../models/Restaurant'
import { getRestaurants } from '../services/api'

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurante[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const loadRestaurants = async () => {
      try {
        const data = await getRestaurants()

        if (isMounted) {
          setRestaurants(data)
        }
      } catch (err) {
        if (isMounted) {
          setError('Nao foi possivel carregar os restaurantes.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadRestaurants()

    return () => {
      isMounted = false
    }
  }, [])

  return { restaurants, loading, error }
}
