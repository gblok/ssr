import EventEmitter from 'eventemitter3'
import { fromEvent } from './fromEvent'

const hub = new EventEmitter()

const app$ = fromEvent('APP', hub)
const notify$ = fromEvent('NOTIFY', hub)
const rpc$ = fromEvent('RPC', hub)
const ws$ = fromEvent('WS', hub)
const spark$ = fromEvent('SPARK', hub)

export { hub, app$, notify$, rpc$, ws$, spark$ }

// const error$ = fromEvent('ERROR', hub)
// const search$ = fromEvent('SEARCH', hub)
//
// const send$ = fromEvent('SEND', hub)
// const receive$ = fromEvent('RECEIVE', hub)
// const sync$ = fromEvent('SYNC', hub)
