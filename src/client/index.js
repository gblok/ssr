const Item = ({ name }) => <li>Hello {name}</li>
export const App = ({ style, name }) =>
  <ol $HasNonKeyedChildren style={style}>
    {Array.from({ length: 1000 }, () => Item({ name }))}
  </ol>
