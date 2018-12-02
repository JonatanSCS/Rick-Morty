// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'

// Components
import { ClipLoader } from 'react-spinners'
import { withAlert } from 'react-alert'
import Others from './Others'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

// Services
import { fetchCharacterById } from 'services/characters'

// Actions
import { updateCharacter } from 'pages/characterDetail/redux/actions'

// Styles
import styles from './styles.scss'

class CharacterPage extends BaseComponent {
  constructor() {
    super()

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const id = this.props.router.query.id
    fetchCharacterById(id).then(({ data }) => {
      this.props.setCharacter(data)
      if (data.status === 'Alive') {
        this.props.alert.success('Is Alive')
      } else if (data.status === 'Dead') {
        this.props.alert.error('Is Dead')
      } else {
        this.props.alert.show('No Data')
      }
      this.setState({ isLoading: false })
    })
  }

  _renderContent() {
    const { name, status, species, gender, image } = this.props.character
    return this.state.isLoading ? (
      <div className={styles.Loader}>
        <ClipLoader color="#bee5fd" />
      </div>
    ) : (
      <div className={styles.Content}>
        <div className={styles.Main}>
          <img src={image} alt={name} />
          <h1>{name}</h1>
        </div>
        <div className={styles.Data}>
          <h2>Datos</h2>
          <p>
            Status: <span>{status}</span>
          </p>
          <p>
            Especie: <span>{species}</span>
          </p>
          <p>
            Género: <span>{gender}</span>
          </p>
        </div>
        <Others />
      </div>
    )
  }

  render() {
    return <AppContainer>{this._renderContent()}</AppContainer>
  }
}

const mapStateToProps = state => {
  return {
    character: state.pageCharacterDetail.character
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCharacter: character => dispatch(updateCharacter(character))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withAlert(CharacterPage)))
