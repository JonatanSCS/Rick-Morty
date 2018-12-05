// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { connect } from 'react-redux'

// Components
import Select from 'react-select'

// Redux
import {
  updateFilter,
  fetchData
} from 'components/Lists/Infinity/redux/actions'

// Styles
import styles from './styles.scss'

class Filters extends BaseComponent {
  constructor() {
    super()
    this.timeout = 0
    this._bind(
      '_renderTextField',
      '_renderSelectField',
      '_handleTextChange',
      '_handleSelectChange'
    )
  }

  _handleTextChange(e) {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    const { name, value } = e.target
    this.timeout = setTimeout(() => {
      this.props.updateField(name, value)
    }, 300)
  }

  _handleSelectChange(option) {
    this.props.updateField(option.name, option.value)
  }

  _renderTextField(field) {
    return (
      <input
        className={styles.Input}
        key={field.name}
        name={field.name}
        onChange={this._handleTextChange}
        placeholder={field.placeholder}
        type="text"
      />
    )
  }

  _renderSelectField(field) {
    return (
      <Select
        className={styles.Select}
        key={field.placeholder}
        onChange={this._handleSelectChange}
        options={field.options}
        placeholder={field.placeholder}
      />
    )
  }

  render() {
    const { text, select } = this.props.filters
    return (
      <div className={styles.Filters}>
        {text.map(this._renderTextField)}
        {select.map(this._renderSelectField)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    _filters: state.componentListInfinity.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateField: (name, value) => dispatch(updateFilter(name, value)),
    fetchData: (service, page, filters) =>
      fetchData(service, page, dispatch, filters)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)
