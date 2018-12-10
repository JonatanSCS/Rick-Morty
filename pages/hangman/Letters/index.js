// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { removeDuplicateCharacters } from 'utils/data'

// Components
import Form from './Form'

// Styles
import styles from './styles.scss'

export default class Letters extends BaseComponent {
  constructor(props) {
    super(props)
    const _spaceName = props.name
      .toLowerCase()
      .split(' ')
      .join('')

    const letters = props.name.toLowerCase().split('')

    this.state = {
      attempt: '',
      letters,
      corrects: [],
      attempts: Math.floor(_spaceName.length * 1.5),
      fail: false,
      success: false,
      successCount: removeDuplicateCharacters(_spaceName).length
    }

    this._bind('_handleLetter', '_handleTry')
  }

  _handleLetter(e) {
    this.setState({ attempt: e.target.value })
  }

  _handleTry(e) {
    e.preventDefault()
    const { attempt, letters, corrects } = this.state
    const _attempt = attempt.toLowerCase()

    if (letters.includes(_attempt) && !corrects.includes(_attempt)) {
      this.setState(prevState => {
        const newCorrects = [...prevState.corrects, _attempt]
        return {
          corrects: newCorrects,
          success: newCorrects.length === prevState.successCount
        }
      })
    } else {
      const newAttepts = this.state.attempts - 1
      this.setState({
        attempts: newAttepts,
        fail: !newAttepts
      })
    }
    this.setState({ attempt: '' })
  }

  render() {
    const { name, image } = this.props
    const { fail, success } = this.state
    const _name = name.split('')
    const finishClass = fail || success ? 'Finished' : ''
    return (
      <div className={`${styles.Letters} ${styles[finishClass]}`}>
        <img src={image} />
        <Form
          name={_name}
          {...this.state}
          handleLetter={this._handleLetter}
          handleTry={this._handleTry}
        />
      </div>
    )
  }
}
