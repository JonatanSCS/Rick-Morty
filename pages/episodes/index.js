// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Components
import InfinitList from 'components/Lists/Infinity'
import EpisodeCard from 'components/Episode/Card'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Services
import { fetchEpisodesByPage } from 'services/episodes'

class LocationPage extends BaseComponent {
  _renderEpisode(episode) {
    const { id, name } = episode
    return <EpisodeCard key={id + name} {...episode} />
  }

  render() {
    return (
      <AppContainer>
        <InfinitList
          service={fetchEpisodesByPage}
          label="Episodes"
          height="900px"
          renderItem={this._renderEpisode}
        />
      </AppContainer>
    )
  }
}

export default withAlert(LocationPage)
