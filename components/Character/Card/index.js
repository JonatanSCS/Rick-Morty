// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'

// Actions
import { updateCharacter } from 'pages/character/redux/actions'

// Styles
import styles from './styles.scss'

class Card extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleClick')
  }

  _handleClick() {
    const { router, id } = this.props
    this.props.setCharacter(this.props)
    router.push(`/character?id=${id}`)
  }

  render() {
    const { name, image } = this.props
    return (
      <div className={styles.Card} onClick={this._handleClick}>
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCharacter: character => dispatch(updateCharacter(character))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Card))
