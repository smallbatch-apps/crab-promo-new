import Section from "../Section";
import TextContent from "../TextContent";

import { forwardRef } from "react";

const Config = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="right">
      <TextContent>
        <h2 className="text-3xl font-bold">Configuration</h2>
        <p className="mt-4">
          Not everyone uses the same standards, so you can run{" "}
          <code>crab init</code> to generate a <code>crab.json</code>{" "}
          configuration file to customize output. All but the last two default
          to false.
        </p>

        <dl className="text-xs grid mx-auto grid-cols-[auto_1fr] w-4/5 gap-x-4 gap-y-1 border bg-white rounded-lg p-4 mt-4">
          <dt className="font-bold">arrowFunction</dt>
          <dl>Use arrow function syntax</dl>
          <dt className="font-bold">importReact</dt>
          <dl>import React is not required since React 17</dl>
          <dt className="font-bold">typeProps</dt>
          <dd>use type instead of interface for props</dd>
          <dt className="font-bold">exportNamed</dt>
          <dd>export function Button (vs export default function Button)</dd>
          <dt className="font-bold">readonlyProps</dt>
          <dd>: Readonly&lt;ButtonProps&gt;</dd>
          <dt className="font-bold">reactFC</dt>
          <dd>const Button: React.FC&lt;ButtonProps&gt;</dd>
          <dt className="font-bold">inlineExport</dt>
          <dd>export default function Button</dd>
          <dt className="font-bold">returnType</dt>
          <dd>include the return type JSX.Element on the function</dd>
          <dt className="font-bold">cssModuleRoot</dt>
          <dd>"container" by default</dd>
          <dt className="font-bold">componentDir</dt>
          <dd>"src/components" by default</dd>
          <dt className="font-bold">lowercaseFilename</dt>
          <dd>Make "submit-button.tsx" not "SubmitButton.tsx"</dd>
        </dl>
      </TextContent>
    </Section>
  );
});

export default Config;
