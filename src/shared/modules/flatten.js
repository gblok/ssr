const isValidObject = v => {
  if (!v) return false
  const isArray = Array.isArray(v)
  const isObject = Object.prototype.toString.call(v) === '[object Object]'
  return !isArray && isObject && !!Object.keys(v).length
}

const w = (obj, sep, path = []) =>
  Object.assign(
    {},
    ...Object.keys(obj).map(key =>
      isValidObject(obj[key]) ? w(obj[key], sep, path.concat([key])) : { [path.concat([key]).join(sep)]: obj[key] }
    )
  )

export const Flatten = (obj, sep = ':') => Object.assign({}, w(obj, sep))
