// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Components
import InfinitList from 'components/Lists/Infinity'
import LocationCard from 'components/Location/Card'

// Internalization
import { withNamespaces } from 'react-i18next'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Services
import { fetchLocationsByPage } from 'services/locations'

class LocationPage extends BaseComponent {
  _renderLocation(location) {
    return <LocationCard key={location.id + location.name} {...location} />
  }

  render() {
    const { t } = this.props
    return (
      <AppContainer>
        <InfinitList
          service={fetchLocationsByPage}
          label={t('Locations')}
          height="900px"
          renderItem={this._renderLocation}
        />
      </AppContainer>
    )
  }
}

export default withNamespaces()(withAlert(LocationPage))
