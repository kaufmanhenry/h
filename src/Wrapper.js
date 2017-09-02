import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  max-width: 960px;
  width: 90%;
  margin: 0 auto;
`

const TextWrapper = styled.div`
  width: 25%;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  font-weight: 700;
  color: #aaa;
  text-transform: uppercase;
  @media (max-width: 40rem) {
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }
`

const ContentWrapper = styled.div`
  width: 75%;
  display: inline-block;
  vertical-align: top;
  @media (max-width: 40rem) {
    display: block;
    width: 100%;
  }
`

const Wrapper = ({ name, children }) => (
  <StyledWrapper>
    <TextWrapper>{name}</TextWrapper>
    <ContentWrapper>{children}</ContentWrapper>
  </StyledWrapper>
)

export default Wrapper
