---
sidebar_position: 2
title: How It Works
---

# How It Works

## Docusaurus Code Block Line Numbering

By default, Docusaurus code blocks do **not** show line numbers. You can enable them per block by adding `showLineNumbers` to the code fence:

````md
```js showLineNumbers
const x = 1;
```
````

But there is no built-in way to enable line numbers **globally** for all code blocks.

## Swizzling

Docusaurus supports [swizzling](https://docusaurus.io/docs/swizzling), replacing or wrapping built-in theme components with your own. By creating a file at `src/theme/CodeBlock/index.tsx`, Docusaurus uses our wrapper **instead** of the original `CodeBlock`.

We use the **wrapping** approach: our component imports the original and passes modified props to it.

## The Wrapper Component

```tsx title="src/theme/CodeBlock/index.tsx "
import React from "react";
import CodeBlock from "@theme-original/CodeBlock";
import type { WrapperProps } from "@docusaurus/types";
import type CodeBlockType from "@theme/CodeBlock";

type Props = WrapperProps<typeof CodeBlockType>;

export default function CodeBlockWrapper(props: Props): React.JSX.Element {
  const noLineNumbering = props.metastring?.includes("noLineNumbering");
  return (
    <CodeBlock {...props} showLineNumbers={noLineNumbering ? false : true} />
  );
}
```

### Walkthrough

1. Check for `noLineNumbering`: We check `props.metastring` for the keyword `noLineNumbering` and store the result in a boolean.

2. Set `showLineNumbers`: We pass `showLineNumbers` as a ternary `false` if `noLineNumbering` is present, `true` otherwise. This means every code block gets line numbers by default.

3. Spread all props: We spread `{...props}` to forward everything (including `metastring`, `title`, language, children, etc.) unchanged to the original `CodeBlock`. The explicit `showLineNumbers` prop after the spread overrides whatever the original value was.

## Why `metastring`?

In Markdown code fences, everything after the language identifier goes into the `metastring` prop:

````md
```js title="example.js" noLineNumbering
// metastring = 'title="example.js" noLineNumbering'
```
````

Custom keywords like `noLineNumbering` are not parsed into separate React props by Docusaurus, they stay inside `metastring` as a raw string. This is why our wrapper parses `metastring` directly rather than looking for a dedicated prop.
