import Section from "../Section";
import TextContent from "../TextContent";
import CodeBlock from "../CodeBlock";
import CardCodeProps from "../../assets/card-with-props.png";

import { forwardRef } from "react";

const Props = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="left">
      <TextContent>
        <h2 className="text-4xl font-bold">Usage with props</h2>
        <p>
          Use <code>npx crab-cli g</code> (or generate) to generate components
          including supporting props. Props are separated by commas, and must
          not have spaces. This functionality is particularly useful with
          TypeScript.
        </p>
        <CodeBlock>
          <span className="whitespace-nowrap">
            npx crab-cli g component Card
          </span>
          <span className="whitespace-nowrap"> --props variant,size</span>
        </CodeBlock>

        <img
          src={CardCodeProps}
          alt="card generated with props code sample"
          className="w-full md:w-2/3 mx-auto"
        />
      </TextContent>
    </Section>
  );
});

export default Props;
