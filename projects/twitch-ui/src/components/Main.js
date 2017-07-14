import styled from 'styled-components'

export default styled.main`
  margin-left: ${props => props.theme.layout.widths.navCollapsed};

  *[dir='rtl'] & {
    margin-right: ${props => props.theme.layout.widths.navCollapsed};
    margin-left: auto;
  }
`
