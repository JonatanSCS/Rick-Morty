// Dependencies
import React from 'react'

// Components
import InfiniteScroll from 'react-infinite-scroller'
import Filters from './Filters'
import { ClipLoader } from 'react-spinners'

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
    this._bind('_loadNextItems', '_renderList')
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

  _renderList() {
    const { page, max, items } = this.props
    return items.length ? (
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
    ) : (
      <p className={styles.NoResults}>No results</p>
    )
  }

  _renderContent() {
    return this.props.isLoading ? (
      <div className={styles.Spinner}>
        <ClipLoader color="#b0e7e8" />
      </div>
    ) : (
      <div
        className={styles.ListParent}
        style={{
          height: this.props.height,
          overflow: 'auto'
        }}
      >
        {this._renderList()}
      </div>
    )
  }

  render() {
    const { filters, path } = this.props
    return (
      <div className={styles.Page}>
        <h1>{this.props.label}</h1>
        <Filters filters={filters} path={path} />
        <div className={styles.Content}>{this._renderContent()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.componentListInfinity.isLoading,
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
