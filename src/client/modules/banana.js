import { BANANA_ASCII, BANANA_COPY, BANANA_STYLE } from '../configs'

const ascii = `\n\n\n${BANANA_ASCII}\n\n\n`

const Banana = () => {
  console.clear()
  console.info('%c%s', BANANA_STYLE, ascii)
  console.info('%c%s', BANANA_STYLE, BANANA_COPY)
}

export { Banana }
