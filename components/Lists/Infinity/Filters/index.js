// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { connect } from 'react-redux'
import { getNameValue } from 'utils/data'
import qs from 'query-string'

// Components
import Select from 'react-select'
import Router from 'next/router'

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
    this._bind('_renderTextField', '_renderSelectField', '_handleFilterChange')
  }

  _handleFilterChange(element) {
    const { name, value } = getNameValue(element)
    this.props.updateField(name, value, this.props._filters)
  }

  componentDidUpdate() {
    const params = qs.stringify(this.props._filters)
    const url = `/${this.props.path}?${params}`
    Router.replace(url, url, { shallow: true })
  }

  _renderTextField(field) {
    return (
      <input
        className={styles.Input}
        key={field.name}
        name={field.name}
        onChange={this._handleFilterChange}
        value={this.props._filters[field.name] || ''}
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
        onChange={this._handleFilterChange}
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
