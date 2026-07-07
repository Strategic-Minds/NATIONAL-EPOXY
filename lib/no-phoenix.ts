export function scanForForbiddenBranding(text: string) {
  return /phoenix/i.test(text);
}
