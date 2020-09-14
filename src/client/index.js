const Item = ({ name }) => <li>Hello {name}</li>
export const App = ({ style, name }) =>
  <ol $HasNonKeyedChildren style={style}>
    {Array.from({ length: 1000 }, () => Item({ name }))}
    <h1>test</h1>
  </ol>
