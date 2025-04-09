import Section from "../Section";
import TextContent from "../TextContent";
import CodeBlock from "../CodeBlock";

import { forwardRef } from "react";

const Extends = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="right">
      <TextContent>
        <h2 className="text-3xl font-bold">More Options</h2>
        <p>
          Use <code>--forwardRef</code> to wrap the component in a forwardRef
          and pass in that ref to the element.
        </p>

        <p>
          Use <code>--css</code> to create an import a css module.
        </p>

        <CodeBlock>
          <span className="whitespace-nowrap">npx crab-cli g SubmitButton</span>
          <span className="whitespace-nowrap">
            {" "}
            --extends button --props children,...props --forwardRef --css
          </span>
        </CodeBlock>
      </TextContent>
    </Section>
  );
});

export default Extends;
