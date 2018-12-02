// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Components
import InfiniteScroll from 'react-infinite-scroller'
import CharacterCard from 'components/Character/Card'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import styles from './styles.scss'

// Services
import { fetchCharactersByPage } from 'services/characters'

class CharacterPage extends BaseComponent {
  constructor() {
    super()

    this.state = {
      characters: [],
      page: 1,
      max: null
    }

    this._bind('_fetchCharacters', '_loadNextCharacters')
  }

  componentDidMount() {
    this._fetchCharacters(this.state.page)
  }

  _fetchCharacters(page) {
    fetchCharactersByPage(page).then(({ data }) => {
      this.setState(prevState => {
        return {
          characters: [...prevState.characters, ...data.results],
          max: data.pages,
          page: page
        }
      })
    })
  }

  _loadNextCharacters() {
    this._fetchCharacters(this.state.page + 1)
  }

  _renderCharacter(character) {
    return <CharacterCard key={character.id + character.name} {...character} />
  }

  render() {
    const { page, max, characters } = this.state
    return (
      <AppContainer>
        <div
          className={styles.Page}
          style={{
            height: '800px',
            overflow: 'auto'
          }}
        >
          <h1>Characters </h1>
          <InfiniteScroll
            loadMore={this._loadNextCharacters}
            hasMore={page !== max}
            className={styles.List}
            initialLoad={false}
            useWindow={false}
          >
            {characters.map(this._renderCharacter)}
          </InfiniteScroll>
        </div>
      </AppContainer>
    )
  }
}

export default withAlert(CharacterPage)
