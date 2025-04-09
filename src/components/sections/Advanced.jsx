import Section from "../Section";
import TextContent from "../TextContent";
import CardCodePropsDefaults from "../../assets/card-props-defaults.png";

import { forwardRef } from "react";

const Advanced = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="left">
      <TextContent>
        <h2 className="text-3xl font-bold">Advanced Example</h2>
        <p className="mt-4">
          You can generate complex components with fully typed props and state,
          plus testing and storybook files.
        </p>

        <pre className="bg-gray-200 p-4 rounded mt-4 text-sm">
          {[
            "npx crab-cli g forms/CustomInput",
            " --props label:string,value:string,onChange:Function,",
            "    error:string,disabled:boolean,required:boolean,",
            "    children,...props",
            " --state isFocused:boolean:false,touched:boolean:false",
            " --extends input",
            " --env client",
            " --test",
            " --storybook",
            " --css",
          ].join("/ \n")}
        </pre>
      </TextContent>
    </Section>
  );
});

export default Advanced;
