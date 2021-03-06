const rndInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))

const users = [
  {
    name: 'Mr. Twister',
    role: 'admin',
    email: 'twister@example.com',
    isActive: true
  },
  {
    name: 'Boss',
    role: 'boss',
    email: 'boss@example.com',
    isActive: false
  },
  {
    name: 'Guest',
    role: 'guest',
    email: 'guest@example.com',
    isActive: false
  }
]

const Item = ({ idx }) => {
  const { name, role, email, isActive } = users[rndInt(0, 2)]
  const href = `mailto:${email}`

  return (
    <dl>
      <dd>{idx}</dd>
      <dt>{name}</dt>
      <dd>{role}</dd>
      <dd>
        <a href={href}>{email}</a>
      </dd>
      <dd>{isActive}</dd>
    </dl>
  )
}

export const App = ({ style, name }) => (
  <html>
    <head>
      <title>{name}</title>
    </head>
    <body>
      <section $HasNonKeyedChildren style={style}>
        {Array.from({ length: 250 }, (i, idx) => (
          <Item idx={idx} />
        ))}
      </section>
    </body>
  </html>
)
