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
  constructor() {
    super()

    this.filters = {
      text: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'species',
          placeholder: 'Species'
        },
        {
          name: 'type',
          placeholder: 'Type'
        }
      ],
      select: []
    }
  }

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
          height="1000px"
          renderItem={this._renderCharacter}
          filters={this.filters}
          path="characters"
        />
      </AppContainer>
    )
  }
}

export default withNamespaces()(withAlert(CharacterPage))

// select: [
//   {
//     placeholder: 'Status',
//     options: [
//       { value: 'alive', label: 'Alive', name: 'status' },
//       { value: 'dead', label: 'Dead', name: 'status' },
//       { value: 'unknow', label: 'unknow', name: 'status' },
//       { value: '', label: 'All', name: 'status' }
//     ]
//   },
//   {
//     placeholder: 'Gender',
//     options: [
//       { value: 'female', label: 'Female', name: 'gender' },
//       { value: 'male', label: 'Male', name: 'gender' },
//       { value: 'genderless', label: 'Genderless', name: 'gender' },
//       { value: 'unknown', label: 'Unknown', name: 'gender' },
//       { value: '', label: 'All', name: 'gender' }
//     ]
//   }
// ]
