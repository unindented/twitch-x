import styled from 'styled-components'

export default styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.foreground};
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.sizes.base};
  line-height: ${props => props.theme.font.height};
`
