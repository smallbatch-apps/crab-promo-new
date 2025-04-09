import Section from "../Section";
import TextContent from "../TextContent";
import CodeBlock from "../CodeBlock";

import { forwardRef } from "react";

const Extends = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="left">
      <TextContent>
        <h2 className="text-3xl font-bold">A Note on Paths</h2>
        <p>
          CRAB should be intelligent about the paths you provide. It can either
          be used in the root or inside your component directories. Either works
          fine.
        </p>

        <p>
          You can and should use paths to place your components anywhere you
          want them. So from the root directory you can do this and expect it to
          be placed in the component directory, in a ui/forms directory.
        </p>

        <CodeBlock>
          <span className="whitespace-nowrap">
            npx crab-cli g ui/forms/PasswordInput
          </span>
          <span className="whitespace-nowrap">
            {" "}
            --extends input --props ...props
          </span>
        </CodeBlock>

        <p>
          You can just do `g PasswordInput` if you're already in the
          components/ui/forms directory. Note that you should avoid doing
          something like ui/forms/PasswordInput from the ui/forms directory or
          it <span className="font-bold">will</span> make those directories.
        </p>
      </TextContent>
    </Section>
  );
});

export default Extends;
