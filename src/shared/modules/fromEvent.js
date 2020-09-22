const currentTime = scheduler => scheduler.currentTime()

const tryEvent = (t, data, sink) => {
  try {
    sink.event(t, data)
  }
  catch (err) {
    sink.error(t, err)
  }
}

export const fromEvent = (ev, em) => {
  const run = (sink, scheduler) => {
    const send = (...data) => tryEvent(currentTime(scheduler), data, sink)
    em.addListener(ev, send, { passive: true })
    return { dispose: () => em.removeListener(ev, send) }
  }
  return { run }
}
