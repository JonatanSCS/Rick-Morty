// Dependencies
import React from 'react'

// Components
import InfiniteScroll from 'react-infinite-scroller'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { withRouter } from 'next/router'

// Styles
import styles from './styles.scss'

class InfinitList extends BaseComponent {
  constructor() {
    super()

    this.state = {
      items: [],
      page: 1,
      max: null
    }

    this._bind('_fetchItems', '_loadNextItems')
  }

  componentDidMount() {
    this._fetchItems(this.state.page)
  }

  _fetchItems(page) {
    this.props.service(page).then(({ data }) => {
      this.setState(prevState => {
        return {
          items: [...prevState.items, ...data.results],
          max: data.pages,
          page: page
        }
      })
    })
  }

  _loadNextItems() {
    this._fetchItems(this.state.page + 1)
  }

  render() {
    const { page, max, items } = this.state
    return (
      <div
        className={styles.Page}
        style={{
          height: this.props.height,
          overflow: 'auto'
        }}
      >
        <h1>{this.props.label}</h1>
        <InfiniteScroll
          className={styles.List}
          hasMore={page !== max}
          initialLoad={false}
          loadMore={this._loadNextItems}
          useWindow={false}
        >
          {items.map(this.props.renderItem)}
        </InfiniteScroll>
      </div>
    )
  }
}

export default withRouter(InfinitList)
