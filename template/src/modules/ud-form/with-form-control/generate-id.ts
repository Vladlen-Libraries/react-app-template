export function generateId(name?: string, id?: string): string {
  if (!id) {
    const shortId = Math.random().toString(36).substring(7);
    return !name ? shortId : `${shortId}_${name}`;
  }
  return id;
}
