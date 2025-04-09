import Section from "../Section";
import TextContent from "../TextContent";
import CardCode from "../../assets/card-code.png";
import CodeBlock from "../CodeBlock";

import { forwardRef } from "react";

const GettingStarted = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="right">
      <TextContent>
        <h2 className="text-4xl text-white">Getting Started</h2>

        <p>
          Crab has a core command based on generating components and other
          elements.
        </p>
        <CodeBlock>npx crab-cli generate component Card</CodeBlock>

        <p>This will generate a component with this simple code.</p>

        <div className="flex items-center justify-center">
          <img
            src={CardCode}
            alt="card generated code sample"
            className="w-full md:w-2/3"
          />
        </div>

        <p className="mt-4">
          It doesn't really look like much at the moment, but let's add some
          more powerful functionality and see what we get.
        </p>
      </TextContent>
    </Section>
  );
});

export default GettingStarted;
