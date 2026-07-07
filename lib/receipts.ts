export function makeReceipt(name: string, payload: unknown) {
  return {
    name,
    timestamp: new Date().toISOString(),
    payload
  };
}
