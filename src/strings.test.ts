import { expect, test } from "bun:test";
import { slugify, truncate } from "./strings.ts";

test("slugify joins words with single hyphens and drops punctuation", () => {
  expect(slugify("Hello World")).toBe("hello-world");
  expect(slugify("  Hello,   World!  ")).toBe("hello-world");
  expect(slugify("Already-sluggy")).toBe("already-sluggy");
});

test("truncate keeps the result within max characters", () => {
  expect(truncate("short", 10)).toBe("short");
  expect(truncate("abcdefghij", 5)).toBe("abcd…");
  expect(truncate("abcdefghij", 5).length).toBe(5);
});
