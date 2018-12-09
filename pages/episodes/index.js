// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Components
import InfinitList from 'components/Lists/Infinity'
import EpisodeCard from 'components/Episode/Card'

// Internalization
import { withNamespaces } from 'react-i18next'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Services
import { fetchEpisodesByPage } from 'services/episodes'

class EpisodesPage extends BaseComponent {
  constructor() {
    super()

    this.filters = {
      text: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'episode',
          placeholder: 'Episode'
        }
      ],
      select: []
    }
  }

  _renderEpisode(episode) {
    const { id, name } = episode
    return <EpisodeCard key={id + name} {...episode} />
  }

  render() {
    const { t } = this.props
    return (
      <AppContainer>
        <InfinitList
          service={fetchEpisodesByPage}
          label={t('Episodes')}
          height="900px"
          renderItem={this._renderEpisode}
          filters={this.filters}
          path="episodes"
        />
      </AppContainer>
    )
  }
}

export default withNamespaces()(withAlert(EpisodesPage))
