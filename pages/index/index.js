// Containers
import HomeContainer from 'containers/Home'
import { withAlert } from 'react-alert'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import './styles.scss'

class Home extends BaseComponent {
  componentDidMount() {
    this.props.alert.success('Init')
  }


  render() {
    return (
      <HomeContainer>
        <h1>My Home</h1>
      </HomeContainer>
    )
  }
}

export default withAlert(Home)
