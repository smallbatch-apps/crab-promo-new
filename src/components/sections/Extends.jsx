import Section from "../Section";
import TextContent from "../TextContent";
import CodeExtends from "../../assets/code-extends.png";
import CodeBlock from "../CodeBlock";

import { forwardRef } from "react";

const Extends = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="left">
      <TextContent>
        <h2 className="text-3xl font-bold">Extending elements</h2>
        <p>
          The most useful flag is <code>--extends</code> or <code>-x</code>.
          This allows you to create a component that extends an existing
          element.
        </p>
        <CodeBlock>
          <span className="whitespace-nowrap">npx crab-cli g SubmitButton</span>
          <span className="whitespace-nowrap">
            --extends button --props children,...props
          </span>
        </CodeBlock>

        <div className="flex items-center justify-center">
          <img
            src={CodeExtends}
            alt="setting state code sample"
            className="w-full"
          />
        </div>
      </TextContent>
    </Section>
  );
});

export default Extends;
