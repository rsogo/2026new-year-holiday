/* eslint-disable no-console */

// #region snippet
// ./snippets/external.ts の埋め込み
export function emptyArray<T>(length: number) {
  return Array.from<T>({ length });
}
// #endregion snippet

export function sayHello() {
  console.log("Hello from snippets/external.ts");
}
