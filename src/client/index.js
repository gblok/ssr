const Item = ({ color, name, idx }) => <div>Hello<b>{idx}</b><b>{color}</b><span>{name}</span></div>
export const App = props => Array.from({ length: 100 }, (i, idx) => Item({ ...props, idx }))
