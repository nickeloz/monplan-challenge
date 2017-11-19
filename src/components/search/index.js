import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import SearchInput from './input'
import SearchResults from './results'

class Search extends Component {
  render () {
    let body
    if (this.props.isFetching) {
      body = (
        <div>
          <div style={style.container}>
            <RefreshIndicator
              status='loading'
              top={0}
              left={0}
              size={100}
              style={style.indicator}
            />
          </div>
          <h1>MUSE is loading, we'll be ready in a moment!</h1>
        </div>
      )
    } else if (this.props.didInvalidate) {
      body = (
        <div>
          <h1>Something went wrong while loading MUSE, please check back later!</h1>
        </div>
      )
    } else {
      body = (
        <div>
          <SearchInput
            performSearch={newQuery => this.props.performSearch(newQuery)}
          />
          <SearchResults
            updateCurrentUnit={unitCode => this.props.updateCurrentUnit(unitCode)}
            results={this.props.results}
          />
        </div>
      )
    }
    return (
      <Paper className='App-search'>
        {body}
      </Paper>
    )
  }
}

const style = {
  container: {
    display: 'inline-block'
  },
  indicator: {
    position: 'relative'
  }
}

export default Search