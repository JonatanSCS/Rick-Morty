// Components
import Select from 'react-select'

// Utils
import { connect } from 'react-redux'

// Styles
import styles from './styles.scss'

// Actions
import { updateSearch } from 'containers/App/redux/actions'

const Header = props => {
  const _handleSearchChange = (e) => {
    props.changeSearch(e.target.value)
  }

  const _handleCategoryChange = category => {
    console.log(category)
  }


  const options = [
    { value: 'character', label: 'Personaje' },
    { value: 'location', label: 'Ubicación' },
    { value: 'episode', label: 'Episodio' }
  ]

  return (
    <div className={styles.Header}>
      <div className={styles.Form}>
        <img
          src="/static/logos/main.png"
          alt="Rick & Morty"
          className={styles.Logo}
        />
        <input
          className={styles.SearchBox}
          value={props.search}
          onChange={_handleSearchChange}
          placeholder={`Search by ${props.category.label}`}
        />
        <Select
          value={props.category}
          onChange={_handleCategoryChange}
          options={options}
          className={styles.CategoryBox}
          isSearchable={false}
        />
      </div>
      <div className={styles.List}>
        <ul>
          <li>Personajes</li>
          <li>Ubicación</li>
          <li>Episodio</li>
        </ul>
      </div>
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
