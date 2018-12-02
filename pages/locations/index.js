// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Components
import InfinitList from 'components/Lists/Infinity'
import LocationCard from 'components/Location/Card'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Services
import { fetchLocationsByPage } from 'services/locations'

class LocationPage extends BaseComponent {
  _renderLocation(location) {
    return <LocationCard key={location.id + location.name} {...location} />
  }

  render() {
    return (
      <AppContainer>
        <InfinitList
          service={fetchLocationsByPage}
          label="Locations"
          height="900px"
          renderItem={this._renderLocation}
        />
      </AppContainer>
    )
  }
}

export default withAlert(LocationPage)
