const either = (c, l, r) => a => (c(a) ? l(a) : r(a))
const compose = (...fns) => x => fns.reduceRight((g, f) => f(g), x)
const composeAsync = (...fns) => x => fns.reduceRight((f, g) => f.then(g), Promise.resolve(x))

/*
 const pipe = (...fns) => compose.apply(null, fns.reverse())
 const pipeAsync = (...fns) => composeAsync.apply(null, fns.reverse())
 const curry = (f, ...a) => (a.length === f.length ? f(...a) : curry.bind(null, f, ...a))
 const uncurry = f => (...a) => {
    const r = a.reduce((f, g) => f(g), f)
    return r instanceof Function ? uncurry(r) : r
  }
*/

export { either, compose, composeAsync }
