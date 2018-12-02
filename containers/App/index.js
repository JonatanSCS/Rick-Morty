// Dependencies
import React from 'react'

// Components
import Header from './Header'

// Styles
import './styles.scss'

export default props => (
  <div id="HomeContainer">
    <Header />
    {props.children}
  </div>
)
