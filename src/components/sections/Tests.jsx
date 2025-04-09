import Section from "../Section";
import TextContent from "../TextContent";
import CodeTesting from "../../assets/testing.png";
import CodeBlock from "../CodeBlock";

import { forwardRef } from "react";

const Tests = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="left">
      <TextContent>
        <h2 className="text-3xl font-bold">Generating tests</h2>
        <p>
          You can generate tests for existing components by using{" "}
          <code>crab g test MyComponent</code>, or alongside a new component
          with the <code>--test</code> flag. This will only work if a test
          framework - Jest or Vitest - is already setup.
        </p>
        <CodeBlock>npx crab-cli g component SignupForm --test</CodeBlock>

        <div className="flex items-center justify-center">
          <img
            src={CodeTesting}
            alt="Testing generated code sample"
            className="w-full md:w-2/3"
          />
        </div>
      </TextContent>
    </Section>
  );
});

export default Tests;
