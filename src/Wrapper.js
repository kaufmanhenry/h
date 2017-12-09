import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const LeftNav = styled.div`
  width: 25%;
  height: calc(100% - 3rem);
  background-color: #eee;
  padding: 1.5rem;
`

const RightView = styled.div`
  width: 75%;
  height: 100%;
  background-color: #fff;
`

const SubComponentContainer = styled.div`
  margin: .75rem 0;
`

const SubComponent = styled.div`
  padding: ${props => props.active ? '.75rem' : '.75rem 0'};
  margin: ${props => props.active ? '0 -.75rem' : '.75rem 0'};
  &:hover {
    cursor: pointer;
  }
  border-radius: 4px;
  background-color: ${props => props.active ? '#ddd' : 'transparent'};
`

export default class Wrapper extends Component {
  constructor (props) {
    super(props)

    this.setActive = this.setActive.bind(this)

    this.state = {
      active: props.children[0] || props.children
    }
  }

  setActive (child) {
    this.setState({
      active: child
    })
  }

  render () {
    let sectionChildren = this.props.children
    if (!Array.isArray(sectionChildren)) sectionChildren = [sectionChildren]
    return (
      <Container>
        <LeftNav>
          <h3>{this.props.title}</h3>
          <br />
          <SubComponentContainer>
            {sectionChildren.map((child, index) =>
              <SubComponent
                key={index}
                onClick={() => this.setActive(child)}
                active={this.state.active === child}>{child.props.name}</SubComponent>)}
          </SubComponentContainer>
        </LeftNav>
        <RightView>
          {this.state.active}
        </RightView>
      </Container>
    )
  }
}

Wrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
