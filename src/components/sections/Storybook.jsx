import Section from "../Section";
import TextContent from "../TextContent";
import CodeExtends from "../../assets/card-code.png";

import CodeBlock from "../CodeBlock";

import { forwardRef } from "react";

const Storybook = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="right">
      <TextContent>
        <h2 className="text-3xl font-bold">Generating Storybook files</h2>
        <p>
          With the <code>--storybook</code> flag, you can generate a Storybook
          storyfile to accompany your component.
        </p>
        <CodeBlock>
          <span className="whitespace-nowrap">
            npx crab-cli g SubmitButton --storybook
          </span>
          <span className="whitespace-nowrap">
            --extends button --props children,...props
          </span>
        </CodeBlock>

        <div className="flex items-center justify-center">
          <img
            src={CodeExtends}
            alt="setting state code sample"
            className="w-full md:w-2/3"
          />
        </div>
      </TextContent>
    </Section>
  );
});

export default Storybook;
