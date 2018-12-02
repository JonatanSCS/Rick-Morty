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
import { updateForm } from 'containers/App/redux/actions'

// Styles
import styles from './styles.scss'

class Form extends BaseComponent {
  constructor(props) {
    super(props)

    this._bind('_handleChange', '_handleSubmit')
  }

  _handleChange(e) {
    if (e.target) {
      const { name, value } = e.target
      this.props.changeForm(name, value)
    } else {
      this.props.changeForm('category', e)
    }
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
          onChange={this._handleChange}
          placeholder={`${t('SearchPlaceholder')} ${label}`}
          name="search"
        />
        <Select
          name="category"
          value={category}
          onChange={this._handleChange}
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
    changeForm: (name, value) => dispatch(updateForm(name, value))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
)
