const isValidObject = v => {
  if (!v) return false
  const isArray = Array.isArray(v)
  const isObject = Object.prototype.toString.call(v) === '[object Object]'
  return !isArray && isObject && !!Object.keys(v).length
}

const Flatten = (obj, sep = ':', path = []) =>
  Object.keys(obj)
    .map(key =>
      isValidObject(obj[key])
        ? Flatten(obj[key], sep, path.concat([key]))
        : { [path.concat([key]).join(sep)]: obj[key] }
    )

export { Flatten }
