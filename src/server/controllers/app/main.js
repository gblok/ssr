import { loki } from '../../modules'

export const Main = (req, reply) => reply.send(loki.mr('test'))

// .type('text/html')
// .code(200)

// const Test = async (req, reply) => {
//
//   const select = 'SELECT * FROM test'
//
//   // const insert = `INSERT INTO test (name) VALUES ('${guid()}')`
//   // await pg.query(insert)
//   // const rows = await pg.query(select)
//
//   // const insert = `INSERT INTO test (id, name) VALUES (${guid()}, '${guid()}')`
//
//   // const rows = await scylla.query(select) // { prepare : true, fetchSize : 100}
//
//   reply.send({ rows: 'hay' })
//
// }
//
// export {Test}
