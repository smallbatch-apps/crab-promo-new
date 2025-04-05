import "./App.css";

import { useState, useRef, useEffect } from "react";
import { motion, animate } from "motion/react";

import CardCode from "./assets/card-code.png";
import CardCodeProps from "./assets/card-with-props.png";
import CardCodePropsDefaults from "./assets/card-props-defaults.png";
import CardCodeChildrenSpread from "./assets/card-children-spread.png";
import CodeState from "./assets/code-state.png";
import CodeExtends from "./assets/code-extends.png";
import Rock from "./assets/rock.svg";
import Shell from "./assets/shell.svg";

import Crab from "./components/crab/Crab";
import Kelp from "./components/Kelp";

function App() {
  const crabRef = useRef(null);
  const rockRef = useRef(null);
  const kelpRef = useRef(null);
  const sceneRef = useRef(null);

  const crabLocationRef = useRef("rock");

  // section refs
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);
  const section10Ref = useRef(null);
  const section11Ref = useRef(null);

  const [crabTarget, setCrabTarget] = useState({ x: 0, y: 0 });
  const [crabAction, setCrabAction] = useState(null);
  const [crabTimeout, setCrabTimeout] = useState(0);
  // const [activeSection, setActiveSection] = useState(null);

  // function goTo(targetRef) {
  //   if (!targetRef?.current || !crabRef.current) return;

  //   const targetBox = targetRef.current.getBoundingClientRect();
  //   const crabBox = crabRef.current.getBoundingClientRect();

  //   const x = targetBox.left - crabBox.left;
  //   const y = targetBox.top - crabBox.top;

  //   setCrabTarget({ x, y });
  // }

  const goToKelp = (arc = 100) => {
    if (!kelpRef.current || !crabRef.current) return;

    const kelpBox = kelpRef.current.getBoundingClientRect();
    const crabBox = crabRef.current.getBoundingClientRect();
    const sceneBox = sceneRef.current.getBoundingClientRect();

    const start = {
      x: crabBox.left - sceneBox.left,
      y: crabBox.top - sceneBox.top,
    };

    const end = {
      x: kelpBox.left - sceneBox.left - 100,
      y: kelpBox.bottom - sceneBox.top - 120,
    };

    console.log("goToKelp");

    setCrabAction("wiggleRight");
    setCrabTimeout(1000);

    arcTo(start, end, arc, setCrabTarget);

    crabLocationRef.current = "kelp";

    setTimeout(() => {
      setCrabAction(null);
      setCrabTimeout(0);
    }, 4000);
  };

  const goToRock = (arc = 100) => {
    if (!rockRef.current || !crabRef.current) return;
    console.log("goToRock");

    const rockBox = rockRef.current.getBoundingClientRect();
    const crabBox = crabRef.current.getBoundingClientRect();
    const sceneBox = sceneRef.current.getBoundingClientRect();

    const start = {
      x: crabBox.left - sceneBox.left,
      y: crabBox.top - sceneBox.top,
    };

    setCrabAction("wiggleLeft");
    setCrabTimeout(1000);

    const end = {
      x: rockBox.left - sceneBox.left + 20,
      y: rockBox.bottom - sceneBox.top - 220,
    };

    crabLocationRef.current = "rock";
    arcTo(start, end, arc, setCrabTarget);

    setTimeout(() => {
      setCrabAction(null);
      setCrabTimeout(0);
    }, 4000);
  };

  function arcTo(start, end, arcHeight = 80, setCrabTarget) {
    animate(0, 1, {
      duration: 4,
      ease: [0.33, 0.0, 0.2, 1],
      onUpdate: (t) => {
        const x = start.x + (end.x - start.x) * t;
        const y =
          start.y + (end.y - start.y) * t - arcHeight * Math.sin(Math.PI * t);

        setCrabTarget({ x, y });
      },
    });
  }
  // bottom: 596.5714569091797
  // height: 154.0803680419922
  // left: 80.5714340209961
  // right: 390.85717010498047
  // top: 442.4910888671875
  // width: 310.2857360839844
  // x: 80.5714340209961
  // y: 442.4910888671875
  useEffect(() => {
    // move crab to rock when component mounts
    goToRock(100);
    setTimeout(() => setCrabAction("waveAndClick"), 4500);

    const sectionEntries = [
      { ref: section2Ref, target: "rock" },
      { ref: section3Ref, target: "kelp" },
      { ref: section4Ref, target: "rock" },
      { ref: section5Ref, target: "kelp" },
      { ref: section6Ref, target: "rock" },
      { ref: section7Ref, target: "kelp" },
      { ref: section8Ref, target: "rock" },
      { ref: section9Ref, target: "kelp" },
      { ref: section10Ref, target: "rock" },
      { ref: section11Ref, target: "kelp" },
    ];

    const observers = sectionEntries.map(({ ref, target }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("entry.isIntersecting", entry.isIntersecting);
            console.log("target", target);
            console.log("crabLocation", crabLocationRef.current);
            if (target === "kelp" && crabLocationRef.current === "rock") {
              goToKelp();
            } else if (
              target === "rock" &&
              crabLocationRef.current === "kelp"
            ) {
              goToRock();
            }
          }
        },
        { threshold: 0.6 }
      );

      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  // useEffect(() => {
  //   // This runs after the first render, so all refs are now valid

  //   const rockBox = rockRef.current.getBoundingClientRect();
  //   const kelpBox = kelpRef.current.getBoundingClientRect();

  //   const start = {
  //     x: rockBox.left + rockBox.width / 2,
  //     y: rockBox.top + rockBox.height / 2,
  //   };

  //   const end = {
  //     x: kelpBox.left + kelpBox.width / 2,
  //     y: kelpBox.top + kelpBox.height / 2,
  //   };

  //   // Then animate however you want
  //   setCrabTarget({ x: end.x - start.x, y: end.y - start.y - 50 }); // lift Y a bit
  // }, []);

  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory relative">
        <div
          ref={sceneRef}
          className="flex h-screen w-full items-stretch justify-center pointer-events-none fixed bottom-0 p-20 z-0 border"
        >
          <motion.div
            ref={crabRef}
            initial={{ x: -400, y: 600 }}
            animate={crabTarget}
            transition={{ duration: 0 }}
            className="absolute top-0 left-0 z-10"
          >
            <Crab action={crabAction} timeout={crabTimeout} />
          </motion.div>

          <div className="relative flex-1 flex flex-col items-center justify-end">
            <Kelp className="absolute bottom-0 left-20 scale-25 origin-bottom" />
            <Kelp className="absolute -bottom-1 left-1 z-15 scale-x-[-0.75] scale-75 origin-bottom sway-slow" />
            <Kelp className="absolute bottom-1 left-52 scale-25 origin-bottom sway" />
            <div className="w-[300px]">
              <img ref={rockRef} src={Rock} alt="rock" className="w-full" />
            </div>
          </div>
          <div className="flex-1 flex-col items-center justify-end relative hidden lg:flex">
            <Kelp className="absolute bottom-3 left-10 scale-x-[-0.60] scale-60 origin-bottom sway sway-delayed" />
            <Kelp className="absolute bottom-0 right-10 scale-x-[-0.40] scale-40 origin-bottom sway sway-delayed" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-end relative">
            <img
              src={Shell}
              alt="shell decoration"
              className="absolute -bottom-5 -left-10 z-15 rotate-[-70deg]"
            />

            <Kelp className="absolute bottom-3 right-0 sway" />
            <Kelp className="absolute -bottom-1 left-20 z-15 scale-x-[-1] sway" />
            <Kelp className="absolute bottom-0 right-10 scale-50 origin-bottom sway" />
            <Kelp className="absolute bottom-2 left-2 scale-75 origin-bottom sway-slow" />
            <Kelp className="absolute bottom-0 left-10 scale-x-[-0.25] scale-25 origin-bottom sway sway-delayed" />

            <div ref={kelpRef} className="p-4"></div>
          </div>
        </div>

        {/* Section 1: Overview */}
        <section className="h-screen snap-start flex flex-col items-center justify-center px-12 relative z-20">
          <div className="w-3/5 text-center relative -top-40">
            <h1 className="text-3xl">CRAB 2 - Tokyo Driftnet</h1>
            <p className="mt-4">
              A modern CLI for React inspired by EmberCLI, NestJS and Adonis.
              Rewritten from scratch, it focuses on generating components in
              React/NextJS.
            </p>
          </div>
        </section>

        {/* Section 2: getting started */}
        <section
          ref={section2Ref}
          className="h-screen snap-start flex lg:items-center p-12 relative z-20"
        >
          <div className="hidden lg:block w-2/5" />
          <div className="w-full lg:w-3/5">
            <h2 className="text-3xl text-white">Getting Started</h2>

            <p className="mt-4">
              Crab has a core command based on generating components and other
              elements.
            </p>
            <pre className="bg-gray-200 p-4 rounded mt-4">
              crab generate component Card
            </pre>

            <p className="mt-4">
              This will generate a component with this simple code.
            </p>
            <div className="flex items-center justify-center">
              <img
                src={CardCode}
                alt="card generated code sample"
                className="w-96 -m-10"
              />
            </div>

            <p className="mt-4">
              It doesn't really look like much at the moment, but let's add some
              more powerful functionality and see what we get.
            </p>
          </div>
        </section>

        <section
          ref={section3Ref}
          className="h-screen snap-start flex items-center justify-between px-12 relative z-20"
        >
          <div className="w-3/5">
            <h2 className="text-3xl font-bold">Usage with props</h2>
            <p className="mt-4">
              Use <code>crab g</code> (or generate) to generate components
              including supporting props. Props are separated by commas, and
              must not have spaces. This functionality is particularly useful
              with TypeScript.
            </p>
            <pre className="bg-gray-200 p-4 rounded mt-4">
              crab g component Card --props variant,size
            </pre>

            <div className="flex items-center justify-center">
              <img
                src={CardCodeProps}
                alt="card generated with props code sample"
                className="w-96"
              />
            </div>
          </div>
          <div className="w-2/5" />
        </section>

        <section
          ref={section4Ref}
          className="h-screen snap-start flex items-center justify-between px-12 relative z-20"
        >
          <div className="w-2/5" />
          <div className="w-3/5">
            <h2 className="text-3xl font-bold">More complex props</h2>
            <p className="mt-4">
              The pattern for props is <code>name:type:default</code>. If the
              default isn't set presumed default is used for the type. If the
              type isn't set it's presumed to be a string.
            </p>
            <pre className="bg-gray-200 p-4 rounded mt-4">
              {[
                "crab g component Card ",
                " --props variant:CardVariant:primary,size:CardSize:md",
              ].join("\n")}
            </pre>

            <div className="flex items-center justify-center">
              <img
                src={CardCodePropsDefaults}
                alt="card generated with props code sample including defaults"
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section
          ref={section5Ref}
          className="h-screen snap-start flex items-center justify-between px-12 relative z-20"
        >
          <div className="w-3/5">
            <h2 className="text-3xl font-bold">
              Magic Props: Children and ...props
            </h2>
            <p className="mt-4">
              Crab allows you to pass <code>children</code> and{" "}
              <code>...props</code> to components, and treats those as special
              props with explicit handling.
            </p>
            <pre className="bg-gray-200 p-4 rounded mt-4">
              crab g component SubmitButton --props children,...props
            </pre>

            <div className="flex items-center justify-center">
              <img
                src={CardCodeChildrenSpread}
                alt="card generated with children and spread props"
                className="w-full"
              />
            </div>
          </div>
          <div className="w-2/5" />
        </section>

        <section
          ref={section6Ref}
          className="h-screen snap-start flex items-center justify-between px-12 relative z-20"
        >
          <div className="w-2/5" />
          <div className="w-3/5">
            <h2 className="text-3xl font-bold">State setting</h2>
            <p className="mt-4">
              You can use the same format for state as for props. Note that in
              the case of both state and props defaults are presumed, and types
              are defaulted to strings.
            </p>
            <pre className="bg-gray-200 p-4 rounded mt-4">
              {[
                "crab g component SignupForm",
                " --state email,password,termsAgreement:boolean",
              ].join("\n")}
            </pre>

            <div className="flex items-center justify-center">
              <img
                src={CodeState}
                alt="setting state code sample"
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section
          ref={section7Ref}
          className="h-screen snap-start flex items-center justify-between px-12 relative z-20"
        >
          <div className="w-3/5">
            <h2 className="text-3xl font-bold">Extending elements</h2>
            <p className="mt-4">
              The most useful flag is <code>--extends</code> or <code>-x</code>.
              This allows you to create a component that extends an existing
              element.
            </p>
            <pre className="bg-gray-200 p-4 rounded mt-4">
              {[
                "crab g component SubmitButton",
                " --extends button --props children,...props",
              ].join("\n")}
            </pre>

            <div className="flex items-center justify-center">
              <img
                src={CodeExtends}
                alt="setting state code sample"
                className="w-full"
              />
            </div>
          </div>
          <div className="w-2/5" />
        </section>

        <section
          ref={section8Ref}
          className="h-screen snap-start flex items-center justify-between px-12 relative z-20"
        >
          <div className="w-2/5" />
          <div className="w-3/5">
            <h2 className="text-3xl font-bold">Generating tests</h2>
            <p className="mt-4">
              You can generate tests for existing components by using{" "}
              <code>crab g test MyComponent</code>, or alongside a new component
              with the <code>--test</code> flag. This will only work if a test
              framework - Jest or Vitest - is already setup.
            </p>
            <pre className="bg-gray-200 p-4 rounded mt-4">
              crab g component SignupForm --test
            </pre>

            <div className="flex items-center justify-center">
              <img
                src={CodeState}
                alt="setting state code sample"
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section
          ref={section9Ref}
          className="h-screen snap-start flex items-center justify-between px-12 relative z-20"
        >
          <div className="w-3/5">
            <h2 className="text-3xl font-bold">Extending elements</h2>
            <p className="mt-4">
              The most useful flag is <code>--extends</code> or <code>-x</code>.
              This allows you to create a component that extends an existing
              element.
            </p>
            <pre className="bg-gray-200 p-4 rounded mt-4">
              {[
                "crab g component SubmitButton",
                " --extends button --props children,...props",
              ].join("\n")}
            </pre>

            <div className="flex items-center justify-center">
              <img
                src={CodeExtends}
                alt="setting state code sample"
                className="w-full"
              />
            </div>
          </div>
          <div className="w-2/5" />
        </section>

        <section
          ref={section10Ref}
          className="h-screen snap-start flex items-center justify-between px-12 relative z-20"
        >
          <div className="w-2/5" />
          <div className="w-3/5">
            <h2 className="text-3xl font-bold">Configuration</h2>
            <p className="mt-4">
              Not everyone uses the same standards, so you can run{" "}
              <code>crab init</code> to generate a <code>crab.json</code>{" "}
              configuration file to customize output. All but the last two
              default to false.
            </p>

            <dl className="text-xs grid mx-auto grid-cols-[auto_1fr] w-4/5 gap-x-4 gap-y-1 border bg-white rounded-lg p-4 mt-4">
              <dt className="font-bold">arrowFunction</dt>
              <dl>Use arrow function syntax</dl>
              <dt className="font-bold">importReact</dt>
              <dl>import React is not required since React 17</dl>
              <dt className="font-bold">typeProps</dt>
              <dd>use type instead of interface for props</dd>
              <dt className="font-bold">exportNamed</dt>
              <dd>
                export function Button (vs export default function Button)
              </dd>
              <dt className="font-bold">readonlyProps</dt>
              <dd>: Readonly&lt;ButtonProps&gt;</dd>
              <dt className="font-bold">reactFC</dt>
              <dd>const Button: React.FC&lt;ButtonProps&gt;</dd>
              <dt className="font-bold">inlineExport</dt>
              <dd>export default function Button</dd>
              <dt className="font-bold">returnType</dt>
              <dd>include the return type JSX.Element on the function</dd>
              <dt className="font-bold">cssModuleRoot</dt>
              <dd>"container" by default</dd>
              <dt className="font-bold">componentDir</dt>
              <dd>"src/components" by default</dd>
            </dl>
          </div>
        </section>

        <section
          ref={section9Ref}
          className="h-screen snap-start flex items-center justify-between px-12 relative z-20"
        >
          <div className="w-3/5">
            <h2 className="text-3xl font-bold">Advanced Example</h2>
            <p className="mt-4">
              You can generate complex components with fully typed props and
              state, plus testing and storybook files.
            </p>

            <pre className="bg-gray-200 p-4 rounded mt-4 text-sm">
              {[
                "crab g component forms/CustomInput",
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
          </div>
          <div className="w-2/5" />
        </section>
      </div>
    </>
  );
}

export default App;
