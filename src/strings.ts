/** Convert a phrase to a URL slug: lowercase words joined by single hyphens. */
export function slugify(input: string): string {
  return input.toLowerCase().replaceAll(" ", "-");
}

/** Shorten text to at most `max` characters, ending with "…" when shortened. */
export function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max)}…` : text;
}
