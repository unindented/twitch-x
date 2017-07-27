import styled from 'styled-components'

export default styled.h2`
  padding-bottom: 5px;
  border-bottom: 1px solid ${props => props.theme.colors.highlight};
  margin: 20px 10px 5px;
  color: ${props => props.theme.colors.highlight};
  font-size: ${props => props.theme.font.sizes.secondary};
  font-weight: 500;
  text-transform: uppercase;
`
