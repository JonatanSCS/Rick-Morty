// Dependencies
import React from 'react'

// Components
import InfiniteScroll from 'react-infinite-scroller'
import Filters from './Filters'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'

// Redux
import { fetchData } from './redux/actions'

// Styles
import styles from './styles.scss'

class InfinitList extends BaseComponent {
  constructor() {
    super()
    this._bind('_loadNextItems')
  }

  componentDidMount() {
    const { service } = this.props
    this.props.fetchData(service, 1)
  }

  componentDidUpdate(prevProps) {
    const { service, page, _filters } = this.props
    if (_filters !== prevProps._filters) {
      this.props.fetchData(service, page, this.props._filters)
    }
  }

  _loadNextItems(page) {
    const { service, _filters } = this.props
    this.props.fetchData(service, page, _filters)
  }

  render() {
    const { page, max, items, filters } = this.props
    return (
      <div
        className={styles.Page}
        style={{
          height: this.props.height,
          overflow: 'auto'
        }}
      >
        <h1>{this.props.label}</h1>
        <Filters filters={filters} />
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
      fetchData(service, page, filters, dispatch)
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(InfinitList)
)
