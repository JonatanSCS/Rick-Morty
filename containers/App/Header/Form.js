// Dependencies
import React from 'react'

// Components
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
