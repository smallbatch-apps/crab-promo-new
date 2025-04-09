import { forwardRef } from "react";

import Section from "../Section";
import TextContent from "../TextContent";
import CodeState from "../../assets/code-state.png";
import CodeBlock from "../CodeBlock";

const State = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="right">
      <TextContent>
        <h2 className="text-3xl font-bold">State setting</h2>
        <p>
          You can use the same format for state as for props. Note that in the
          case of both state and props defaults are presumed, and types are
          defaulted to strings.
        </p>
        <CodeBlock>
          <span className="whitespace-nowrap">npx crab-cli g SignupForm</span>
          <span className="whitespace-nowrap">
            --state email,password,termsAgreement:boolean
          </span>
        </CodeBlock>

        <div className="flex items-center justify-center">
          <img
            src={CodeState}
            alt="setting state code sample"
            className="w-full"
          />
        </div>
      </TextContent>
    </Section>
  );
});

export default State;
