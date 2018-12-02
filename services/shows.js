// Dependencies
import axios from 'axios'

export const prueba = () => {
  return axios('https://rickandmortyapi.com/api/character/1')
}
