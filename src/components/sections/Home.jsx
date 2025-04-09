import Section from "../Section";
import TextContent from "../TextContent";
import { forwardRef } from "react";

const Home = forwardRef(({}, ref) => {
  return (
    <Section sectionRef={ref} side="right">
      <TextContent></TextContent>
    </Section>
  );
});

export default Home;
