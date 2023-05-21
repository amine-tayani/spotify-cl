export function classNames<T extends string>(
  ...classes: (T | undefined | null)[]
) {
  return classes.filter(Boolean).join(" ");
}
