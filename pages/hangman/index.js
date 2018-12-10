// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import { ClipLoader } from 'react-spinners'
import Letters from './Letters'

// Containers
import AppContainer from 'containers/App'

// Services
import { fetchMultipleCharacters } from 'services/characters'

// Styles
import styles from './styles.scss'

export default class HangmanPage extends BaseComponent {
  constructor() {
    super()

    this.state = {
      character: null,
      isLoading: true,
      success: false
    }

    this._bind('_fetchData')
  }

  componentDidMount() {
    this._fetchData()
  }

  _fetchData() {
    this.setState({ isLoading: true })
    fetchMultipleCharacters(1).then(({ data }) => {
      this.setState({
        isLoading: false,
        character: data
      })
    })
  }

  _renderContent() {
    const { character, isLoading, success } = this.state
    const successClass = success ? 'success' : ''
    return isLoading ? (
      <div className={styles.Content}>
        <ClipLoader color="#b0e7e8" />
      </div>
    ) : (
      <div className={`${styles.Content} ${successClass}`}>
        <Letters {...character} handleOther={this._fetchData} />
        <button className={styles.Button} onClick={this._fetchData}>
          Other...
        </button>
      </div>
    )
  }

  render() {
    return <AppContainer>{this._renderContent()}</AppContainer>
  }
}
