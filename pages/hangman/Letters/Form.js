// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import styles from './styles.scss'

export default class Form extends BaseComponent {
  constructor() {
    super()

    this._bind('_renderStatus', '_renderField', '_renderForm')
  }

  _renderStatus() {
    return this.props.success ? (
      <p className={styles.Success}>Congrats!</p>
    ) : (
      <p className={styles.Fail}>
        You fail, the answer was: <span>{this.props.name}</span>
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
    const { success, fail, attempt, handleLetter, handleTry } = this.props
    return fail || success ? (
      this._renderStatus()
    ) : (
      <form onSubmit={handleTry}>
        <p>Enter a letter...</p>
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
    const { name, attempts } = this.props
    return (
      <div className={styles.Form}>
        <div className={styles.Corrects}>{name.map(this._renderField)}</div>
        {this._renderForm()}
        <p>Attempts left: {attempts}</p>
      </div>
    )
  }
}
