import {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

class ScrollToTop extends PureComponent {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return this.props.children
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default withRouter(ScrollToTop)
