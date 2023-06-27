export function isTruthy<T>(value?: T | undefined | null | false): value is T {
  return !!value
}

export function isNotFalse<T>(value?: T | false): value is T {
  return value !== false
}