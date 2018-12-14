// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Styles
import styles from './styles.scss'

class Form extends BaseComponent {
  constructor() {
    super()

    this._bind('_renderStatus', '_renderField', '_renderForm')
  }

  _renderStatus() {
    const { t, success, name } = this.props
    return success ? (
      <p className={styles.Success}>{`${t('Congrats')}!`}</p>
    ) : (
      <p className={styles.Fail}>
        {t('YouFail')} <span>{name}</span>
      </p>
    )
  }

  _renderField(field, index) {
    const { corrects } = this.props
    return corrects.includes(field.toLowerCase()) || field === ' ' ? (
      <span key={field + index}>{field}</span>
    ) : (
      <span key={field + index} className="Unerscore">
        _
      </span>
    )
  }

  _renderForm() {
    const { success, fail, attempt, handleLetter, handleTry, t } = this.props
    return fail || success ? (
      this._renderStatus()
    ) : (
      <form onSubmit={handleTry}>
        <p>{`${t('EnterChar')}...`}...</p>
        <input
          name="letter"
          type="text"
          onChange={handleLetter}
          value={attempt}
          maxLength="1"
        />
      </form>
    )
  }

  render() {
    const { name, attempts, t } = this.props
    return (
      <div className={styles.Form}>
        <div className={styles.Corrects}>{name.map(this._renderField)}</div>
        {this._renderForm()}
        <p>{`${t('Attempts')}: ${attempts}`}</p>
      </div>
    )
  }
}

export default withNamespaces()(Form)
