import Section from "../Section";
import TextContent from "../TextContent";
import CardCodeChildrenSpread from "../../assets/card-children-spread.png";
import CodeBlock from "../CodeBlock";
import { forwardRef } from "react";

const MagicProps = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="left">
      <TextContent>
        <h2 className="text-3xl font-bold">
          Magic Props: Children and ...props
        </h2>
        <p>
          Crab allows you to pass{" "}
          <span className="font-mono text-gray-700">children</span> and{" "}
          <span className="font-mono text-gray-700">...props</span> to
          components, and treats those as special props with explicit handling.
        </p>
        <CodeBlock>
          <span className="whitespace-nowrap">npx crab-cli g SubmitButton</span>
          <span className="whitespace-nowrap">--props children,...props</span>
        </CodeBlock>

        <div className="flex items-center justify-center">
          <img
            src={CardCodeChildrenSpread}
            alt="card generated with children and spread props"
            className="w-full"
          />
        </div>
      </TextContent>
    </Section>
  );
});

export default MagicProps;
