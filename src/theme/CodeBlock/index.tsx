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
