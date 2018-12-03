// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Components
import InfinitList from 'components/Lists/Infinity'
import CharacterCard from 'components/Character/Card'

// Internalization
import { withNamespaces } from 'react-i18next'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Services
import { fetchCharactersByPage } from 'services/characters'

class CharacterPage extends BaseComponent {
  _renderCharacter(character) {
    return <CharacterCard key={character.id + character.name} {...character} />
  }

  render() {
    const { t } = this.props
    return (
      <AppContainer>
        <InfinitList
          service={fetchCharactersByPage}
          label={t('Characters')}
          height="950px"
          renderItem={this._renderCharacter}
        />
      </AppContainer>
    )
  }
}

export default withNamespaces()(withAlert(CharacterPage))
