import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import styled, {withTheme} from 'styled-components'
import {supplant} from '../utils/string'
import {rectangle} from '../utils/svg'

const Image = styled.img`
  display: ${props => props.hidden ? 'none' : 'block'};
  width: 100%;
  height: auto;
`

class ImageWithPlaceholder extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {loaded: false}

    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad () {
    this.setState({loaded: true})
  }

  render () {
    const {loaded} = this.state
    const {alt, src, width, height, theme} = this.props
    const opts = {width, height, fill: theme.colors.primary}

    return (
      <div>
        <Image
          alt={alt}
          src={`data:image/svg+xml;utf8,${rectangle(opts)}`}
          hidden={loaded}
        />
        <Image
          alt={alt}
          src={supplant(src, opts)}
          hidden={!loaded}
          onLoad={this.handleLoad}
        />
      </div>
    )
  }
}

ImageWithPlaceholder.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  theme: PropTypes.any.isRequired
}

ImageWithPlaceholder.defaultProps = {
  alt: ''
}

export default withTheme(ImageWithPlaceholder)
