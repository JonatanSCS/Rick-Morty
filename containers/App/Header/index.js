// Dependencies
import React from 'react'

// Components
import Form from './Form'
import Link from 'next/link'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Styles
import styles from './styles.scss'

class Header extends BaseComponent {
  _renderLink(link) {
    const { value, label, route } = link
    return (
      <Link key={`${value}-${label}`} href={route}>
        <li>{label}</li>
      </Link>
    )
  }

  render() {
    const { t } = this.props
    const options = [
      { value: 'character', label: t('Character'), route: 'characters' },
      { value: 'location', label: t('Location'), route: 'characters' },
      { value: 'episode', label: t('Episode'), route: 'characters' }
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
