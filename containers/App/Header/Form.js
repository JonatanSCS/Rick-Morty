// Dependencies
import React from 'react'

// Components
import Select from 'react-select'
import Link from 'next/link'

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
        <Link href="/">
          <img
            alt="Rick & Morty"
            className={styles.Logo}
            src="/static/logos/main.png"
          />
        </Link>
        <input
          className={styles.SearchBox}
          name="search"
          onChange={this._handleChange}
          placeholder={`${t('SearchPlaceholder')} ${label}`}
          value={search}
        />
        <Select
          className={styles.CategoryBox}
          isSearchable={false}
          name="category"
          onChange={this._handleChange}
          options={options}
          placeholder={t('CategoryPlaceholder')}
          value={category}
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
