// Dependencies
import React from 'react'

// Components
import InfiniteScroll from 'react-infinite-scroller'
import Filters from './Filters'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import qs from 'query-string'

// Redux
import { fetchData, updateFilters } from './redux/actions'

// Styles
import styles from './styles.scss'

class InfinitList extends BaseComponent {
  constructor() {
    super()
    this._bind('_loadNextItems')
  }

  componentDidMount() {
    this.props.updateFilters(qs.parse(location.search))
  }

  componentDidUpdate(prevProps) {
    const { service, page, _filters } = this.props
    const filters = qs.parse(location.search)
    if (_filters !== prevProps._filters) {
      this.props.fetchData(service, page, filters)
    }
  }

  _loadNextItems(page) {
    const { service, _filters } = this.props
    this.props.fetchData(service, page, _filters)
  }

  render() {
    const { page, max, items, filters, path } = this.props
    return (
      <div
        className={styles.Page}
        style={{
          height: this.props.height,
          overflow: 'auto'
        }}
      >
        <h1>{this.props.label}</h1>
        <Filters filters={filters} path={path} />
        <InfiniteScroll
          pageStart={1}
          className={styles.List}
          hasMore={page !== max}
          loadMore={this._loadNextItems}
          useWindow={false}
          initialLoad={false}
        >
          {items.map(this.props.renderItem)}
        </InfiniteScroll>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.componentListInfinity.items,
    page: state.componentListInfinity.page,
    max: state.componentListInfinity.max,
    _filters: state.componentListInfinity.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (service, page, filters) =>
      fetchData(service, page, filters, dispatch),
    updateFilters: filters => dispatch(updateFilters(filters))
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(InfinitList)
)
