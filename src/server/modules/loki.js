import Loki from 'lokijs'
import { LOKI_DB, LOKI_OPTS } from '../configs'
import { guid, LOG } from './index'

let db

let i = 1000

const rndInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
const events = ['INFO', 'RECIPIENT', 'BALANCE', 'PAYMENT']

const event = id => ({
  id,
  uuid: guid(),
  type: events[rndInt(0, 3)],
  body: { name: guid() },
  inserted_a: Date.now()
})

const init = async (opts, done) => {
  db = new Loki(LOKI_DB, LOKI_OPTS)
  const test = db.addCollection('test')
  while (i--) {
    test.insertOne(event(i), true)
  }
  // const dv = test.addDynamicView('xxx')
  // dv.applyFind({ 'id': { '$regex': ['777', 'i'] } })
  done(LOG('LOKI INIT'))
}

const close = (f, done) => done(LOG('LOKI CLOSE'))

const count = cid => {
  const coll = db.getCollection(cid)

  return coll.count()
}
const reduceFunction = v =>
  v.reduce((acc, curr) => {
    const { type, uuid } = curr
    acc[type] ? acc[type].push(uuid) : (acc[type] = [uuid])

    return acc
  }, {})

const tx = [
  // {
  //   type: 'limit',
  //   value: 50
  // },
  {
    type: 'mapReduce',
    mapFunction: i => i,
    reduceFunction
  }
]

const mr = cid => db.getCollection(cid).chain(tx)

// .data({removeMeta:true})
// .getDynamicView('xxx')
// .branchResultset(tx)
// .data({ removeMeta: true })

export const loki = {
  count,
  init,
  close,
  mr
}
