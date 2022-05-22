export const koreanCharAt = (target: string) => {
  const firstCode = '가'.charCodeAt(0)
  const lastCode = '힣'.charCodeAt(0)
  const targetCode = target.charCodeAt(0)

  if (targetCode >= firstCode && targetCode <= lastCode) {
    if ((targetCode - firstCode) % 28 > 0) return target
    const start = targetCode
    const end = start + 27
    const regExpString = `[${target}\\u${start.toString(16)}-\\u${end.toString(16)}]`
    return regExpString
  }

  return target
}
