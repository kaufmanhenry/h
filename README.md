# :printer: react-basic-style-guide
A style guide component. Used to create flexible style guides.

## Install

```shell
$ yarn add react-basic-style-guide
```

## Usage
```jsx
import React from 'react'
import { Section, Wrapper } from 'react-basic-style-guide'

const App = () => (
  <Wrapper title="Style Guide">
    <Section name="Text 1">
      Some text here.
    </Section>
    <Section name="Text 2">
      Some text here.
    </Section>
  </Wrapper>
)

export default App
```

## License
MIT © [Henry Kaufman](https://github.com/hcjk)