import { Component } from 'react'

export default class BaseCompoent extends Component {
  constructor() {
    super()
  }

  _bind(...methods) {
    methods.forEach(method => (this[method] = this[method].bind(this)))
  }
}
