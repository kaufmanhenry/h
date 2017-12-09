import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SectionWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  height: calc(100% - 4rem);
  overflow-y: scroll;
`

const SectionTitle = styled.h1`
  font-size: 2rem;
  color: #111;
  padding-bottom: 1rem;
  margin-bottom: 1rem;  
  border-bottom: solid 1px #ddd;
`

const Section = ({ name, children }) => (
  <SectionWrapper>
    <SectionTitle>{name}</SectionTitle>
    {children}
  </SectionWrapper>
)

Section.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Section
