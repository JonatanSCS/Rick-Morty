// Dependencies
import React from 'react'

// Components
import Select from 'react-select'

// Utils
import { connect } from 'react-redux'
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Actions
import { updateSearch, updateCategory } from 'containers/App/redux/actions'

// Styles
import styles from './styles.scss'

class Form extends BaseComponent {
  constructor(props) {
    super(props)

    this._bind('_handleSearchChange', '_handleCategoryChange', '_handleSubmit')
  }

  _handleSearchChange(e) {
    this.props.changeSearch(e.target.value)
  }

  _handleCategoryChange(category) {
    this.props.changeCategory(category)
  }

  _handleSubmit(e) {
    e.preventDefault()
    console.log(this.props)
  }

  render() {
    const { t, search, category, options } = this.props
    const label = category ? category.label : ''
    return (
      <form className={styles.Form} onSubmit={this._handleSubmit}>
        <input className={styles.Submit} type="submit" />
        <img
          src="/static/logos/main.png"
          alt="Rick & Morty"
          className={styles.Logo}
        />
        <input
          className={styles.SearchBox}
          value={search}
          onChange={this._handleSearchChange}
          placeholder={`${t('SearchPlaceholder')} ${label}`}
        />
        <Select
          value={category}
          onChange={this._handleCategoryChange}
          options={options}
          className={styles.CategoryBox}
          isSearchable={false}
          placeholder={t('CategoryPlaceholder')}
        />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.containerApp.search,
    category: state.containerApp.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSearch: search => dispatch(updateSearch(search)),
    changeCategory: category => dispatch(updateCategory(category))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
)
