// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Components
import Section from './Section'
import CharacterCard from 'components/Character/Card'
import LocationCard from 'components/Location/Card'
import EpisodeCard from 'components/Episode/Card'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Services
import { fetchGeneralItems } from 'services/general'

// Styles
import styles from './styles.scss'

class Home extends BaseComponent {
  constructor() {
    super()

    this.state = {
      characters: [],
      locations: [],
      episodes: [],
      isLoading: true
    }

    this._bind('_renderMask')
  }

  componentDidMount() {
    fetchGeneralItems(12).then(data => {
      console.log(data)
      this.setState({
        ...data,
        isLoading: false
      })
    })
  }

  _renderMask() {
    return this.state.isLoading ? (
      <div className={styles.Mask}>
        <img src="/static/logos/main.png" alt="Rick & Morty" />
      </div>
    ) : null
  }

  _renderCharacter(character) {
    return <CharacterCard key={character.id + character.name} {...character} />
  }

  _renderLocation(location) {
    return <LocationCard key={location.id + location.name} {...location} />
  }

  _renderEpisode(episode) {
    const { id, name } = episode
    return <EpisodeCard key={id + name} {...episode} />
  }

  render() {
    return (
      <AppContainer>
        {this._renderMask()}
        <Section>{this.state.characters.map(this._renderCharacter)}</Section>
        <Section>{this.state.locations.map(this._renderLocation)}</Section>
        <Section>{this.state.episodes.map(this._renderEpisode)}</Section>
      </AppContainer>
    )
  }
}

export default withAlert(Home)
