import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'

export default class LazilyLoad extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      mod: null
    }
  }

  componentWillMount () {
    this.load(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load (props) {
    this.setState({
      mod: null
    })
    props.load((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render () {
    return this.state.mod
      ? this.props.children(this.state.mod)
      : <Spinner />
  }
}

LazilyLoad.propTypes = {
  load: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
}
