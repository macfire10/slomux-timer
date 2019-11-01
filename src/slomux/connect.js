import React, { Component } from 'react'
import StoreContext from './context'

// assign defaults to connect arguments in case functions are not passed
export const connect = (mapStateToProps = () => {}, mapDispatchToProps = () => {}) => (WrappedComponent) => {
  class Connect extends Component {
    // assign context to class properties directly in connect function
    store = this.context

    componentDidMount() {
      this.unsubscribe = this.store.subscribe(this.handleChange)
    }

    // Cleanup
    componentWillUnmount() {
      if (this.unsubscribe) this.unsubscribe()
    }

    // Remove forceUpdate in favor of setState
    handleChange = () => {
      this.setState({})
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...mapStateToProps(this.store.getState(), this.props)}
          {...mapDispatchToProps(this.store.dispatch, this.props)}
        />
      )
    }
  }

  Connect.contextType = StoreContext

  return Connect
}