// Services
import { fetchMultipleCharacters } from './characters'
import { fetchMultipleLocations } from './locations'
import { fetchMultipleEpisodes } from './episodes'

export const fetchGeneralItems = number => {
  const characters = fetchMultipleCharacters(number)
  const locations = fetchMultipleLocations(number)
  const episodes = fetchMultipleEpisodes(number)
  return Promise.all([characters, locations, episodes]).then(values => {
    return {
      characters: values[0].data,
      locations: values[1].data,
      episodes: values[2].data
    }
  })
}
