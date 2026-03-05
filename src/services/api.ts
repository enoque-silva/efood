import { Restaurante } from '../models/Restaurant'

const API_BASE_URL = 'https://api-ebac.vercel.app/api/efood'

const getJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Falha ao carregar dados da API')
  }

  return response.json() as Promise<T>
}

export const getRestaurants = () =>
  getJson<Restaurante[]>(`${API_BASE_URL}/restaurantes`)

export const getRestaurantById = (id: string | number) =>
  getJson<Restaurante>(`${API_BASE_URL}/restaurantes/${id}`)
