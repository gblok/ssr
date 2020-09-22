export const { log: LOG, info: INF, debug: DBG, error: ERR, warn: WRN } = console
export const _ERR = pre => err => ERR(pre, err)
