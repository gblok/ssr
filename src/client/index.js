const Item = ({color, name, idx}) => <div>Hello<b>{idx}</b><b>{color}</b><span>{name}</span><h1>fi33ne</h1></div>
export const App = props => Array.from({length: 100}, (i, idx) => Item({...props, idx}))
