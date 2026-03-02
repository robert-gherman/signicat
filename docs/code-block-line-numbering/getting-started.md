---
slug: /
sidebar_position: 1
title: Getting Started
---

# Getting Started

## Prerequisites

- **Node.js** version 18 or above
- A **Docusaurus** project (v3 recommended)

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Project Structure

The key files for the line numbering feature:

```
src/
  theme/
    CodeBlock/
      index.tsx        # Swizzled CodeBlock wrapper
docs/
  code-block-line-numbering/
    getting-started.md # This page
    how-it-works.md    # Technical explanation
    usage.md           # Usage guide
```

The `src/theme/CodeBlock/index.tsx` file is a **swizzled wrapper** around the original Docusaurus `CodeBlock` component. Docusaurus automatically picks it up, no extra configuration needed.

## Running the Dev Server

Start the development server to see the feature in action:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Navigate to any page with code blocks, they will all display line numbers by default.
