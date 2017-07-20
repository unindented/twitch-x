import React from 'react'
import styled from 'styled-components'
import {storiesOf} from '@storybook/react'
import LazilyLoad from './LazilyLoad'

const LazilyLoadContainer = styled.div`
  display: flex;
  width: 240px;
  height: 240px;
  align-items: center;
  justify-content: center;
`

const FakeComponent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #828282;
`

const loadFunc = (callback) => {
  setTimeout(callback.bind(null, FakeComponent), 5000)
}

storiesOf('LazilyLoad', module)
  .add('default', () => (
    <LazilyLoadContainer>
      <LazilyLoad load={loadFunc}>
        {(FakeComponent) => <FakeComponent />}
      </LazilyLoad>
    </LazilyLoadContainer>
  ))
