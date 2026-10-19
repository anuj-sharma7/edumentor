/** URL slug for chapter and subject names. Kept dependency-free so client code can import it cheaply. */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
