import React from 'react'
import styled from 'styled-components'

import { Wrapper } from '../src'

const Container = styled.div`
  padding: 100px 0;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

const App = () => (
  <Container>
    <Wrapper name="purpose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta turpis elementum tortor rutrum, at rutrum odio egestas. Etiam porta nulla sit amet aliquet aliquet. Vestibulum venenatis sit amet leo a sollicitudin. Etiam fermentum ligula eu purus condimentum hendrerit eu nec mi. Nunc dapibus tincidunt venenatis. Maecenas efficitur lorem eget leo consequat dignissim. Quisque laoreet est erat, efficitur dignissim est sagittis vel. Praesent suscipit tincidunt quam, at auctor nisl convallis vitae.</Wrapper>
  </Container>
)

export default App
