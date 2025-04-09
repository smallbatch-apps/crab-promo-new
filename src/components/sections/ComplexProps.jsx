import Section from "../Section";
import TextContent from "../TextContent";
import CardCodePropsDefaults from "../../assets/card-props-defaults.png";
import CodeBlock from "../CodeBlock";
import { forwardRef } from "react";

const ComplexProps = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="right">
      <TextContent>
        <h2 className="text-4xl font-bold">More complex props</h2>
        <p>
          The pattern for props is <code>name:type:default</code>. If the
          default isn't set presumed default is used for the type. If the type
          isn't set it's presumed to be a string.
        </p>
        <CodeBlock>
          <span className="whitespace-nowrap">
            npx crab-cli g component Card
          </span>
          <span className="whitespace-nowrap">
            --props variant:CardVariant:primary,size:CardSize:md
          </span>
        </CodeBlock>

        <div className="flex items-center justify-center">
          <img
            src={CardCodePropsDefaults}
            alt="card generated with props code sample including defaults"
            className="w-full"
          />
        </div>
      </TextContent>
    </Section>
  );
});

export default ComplexProps;
