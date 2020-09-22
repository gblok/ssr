const guid = () =>
  [2, 1, 1, 1, 3].reduce((a, i, x) => {
    if (x) a += '-'
    while (i--) {
      a += Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return a
  }, '')

const NO_OP = () => null

// const delProp = obj => prop => obj[prop] && delete obj[prop]

const clearMeta = obj => {
  const _obj = Object.assign({}, obj)
  const { $loki, meta, ...rest } = _obj
  return rest
}

const clone = obj => JSON.parse(JSON.stringify(obj))

const isArray = i => i && Array.isArray(i)
const isObject = i => i && typeof i === 'object' && !Array.isArray(i) //  v => v != null && (typeof v == 'object' || typeof v == 'function'),
const isString = s => typeof s === 'string'
const isError = s => s instanceof Error

const nest = (t, ...ss) => {
  if (!ss.length) return t
  const s = ss.shift()
  if (isObject(t) && isObject(s)) {
    for (const k of Object.keys(s)) {
      if (isObject(s[k])) {
        !t[k] && Object.assign(t, { [k]: {} })
        nest(t[k], s[k])
      } else if (isArray(s[k])) {
        !t[k] && Object.assign(t, { [k]: [] })
        t[k] = t[k].concat(s[k])
      } else {
        Object.assign(t, { [k]: s[k] })
      }
    }
  }
  return nest(t, ...ss)
}

const toDataList = (obj, prop = 'code') => Array.from(Object.values(obj), v => v[prop])

export { guid, NO_OP, isError, isString, isObject, clone, nest, clearMeta, toDataList }
