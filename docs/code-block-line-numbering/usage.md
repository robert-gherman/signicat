---
sidebar_position: 3
title: Usage Guide
---

# Usage Guide

## Default Behavior

With the wrapper installed, **all code blocks show line numbers by default**:

```js
function test(name) {
  return `Hello, ${name}!`;
}
```

No extra syntax needed, line numbers appear automatically.

## Opting Out with `noLineNumbering`

To disable line numbers on a specific code block, add `noLineNumbering` to the code fence:

````md
```js noLineNumbering
const simple = true;
```
````

Result:

```js noLineNumbering
const simple = true;
```

## Explicit `showLineNumbers`

If a code block explicitly sets `showLineNumbers`, that value is respected:

````md
```js showLineNumbers
// This also shows line numbers (explicit true)
```
````

The wrapper only defaults `showLineNumbers` when it is not already set, so explicit usage always wins.

## Combining with Other Metastring Options

`noLineNumbering` works alongside other code fence options like `title`:

````md
```py noLineNumbering title="config.py"
DEBUG = True
SECRET_KEY = "change-me"
```
````

Result:

```py noLineNumbering title="config.py"
DEBUG = True
SECRET_KEY = "change-me"
```

## Summary

| Scenario                      | Line Numbers?          |
| ----------------------------- | ---------------------- |
| Default (no options)          | Yes                    |
| `showLineNumbers`             | Yes                    |
| `noLineNumbering`             | No                     |
| `noLineNumbering title="..."` | No (title still works) |
