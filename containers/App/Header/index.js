// Utils
import { connect } from 'react-redux'

// Styles
import styles from './styles.scss'

// Actions
import { updateSearch } from 'containers/App/redux/actions'

const Header = props => {
  const _handleChange = (e) => {
    props.changeSearch(e.target.value)
  }

  return (
    <div className={styles.Header}>
      <img
        src="/static/logos/main.png"
        alt="Rick & Morty"
        className={styles.Logo}
      />
      <input
        className={styles.SearchBox}
        value={props.search}
        onChange={_handleChange}
        placeholder={`Search by ${props.category}`}
      />
    </div>
  )
}


const mapStateToProps = state => {
  return {
    search: state.containerApp.search,
    category: state.containerApp.category,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSearch: search => dispatch(updateSearch(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
