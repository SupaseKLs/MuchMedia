// @/lib/utils.js or @/lib/utils.ts
export function cn(...classNames) {
  return classNames.filter(Boolean).join(' ');
}
