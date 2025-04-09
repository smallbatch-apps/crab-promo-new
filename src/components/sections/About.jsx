import Section from "../Section";
import TextContent from "../TextContent";
import CardCodePropsDefaults from "../../assets/card-props-defaults.png";

import { forwardRef } from "react";

const Advanced = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="right">
      <TextContent>
        <h2 className="text-3xl font-bold">About Me & contributing</h2>
        <p className="mt-4">
          This is a tool I've been working on for a long time. You can get more
          information about it on{" "}
          <a href="https://github.com/smallbatch-apps/crab">GitHub</a> on the
          readme.
        </p>

        <p>
          If you want to contribute to the project, go to the GitHub repo and
          open a PR, or raise an issue.
        </p>

        <p>
          If you want to know more about me, go to{" "}
          <a href="https://mattburgess.info">mattburgess.info</a>.
        </p>
      </TextContent>
    </Section>
  );
});

export default Advanced;
