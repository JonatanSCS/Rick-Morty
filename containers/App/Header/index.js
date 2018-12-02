// Dependencies
import React from 'react'

// Components
import Form from './Form'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Styles
import styles from './styles.scss'

class Header extends BaseComponent {
  _renderLink(link) {
    return <li key={`${link.value}-${link.label}`}>{link.label}</li>
  }

  render() {
    const { t } = this.props
    const options = [
      { value: 'character', label: t('Character') },
      { value: 'location', label: t('Location') },
      { value: 'episode', label: t('Episode') }
    ]

    return (
      <div className={styles.Header}>
        <Form options={options} />
        <div className={styles.List}>
          <ul>{options.map(this._renderLink)}</ul>
        </div>
      </div>
    )
  }
}

export default withNamespaces()(Header)
