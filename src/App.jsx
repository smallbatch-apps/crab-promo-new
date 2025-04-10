import "./App.css";

import { useState, useRef, useEffect } from "react";
import { motion, animate } from "motion/react";

import Rock from "./assets/rock.svg";
import Shell from "./assets/shell.svg";
import Bubbles from "./assets/bubbles.svg";

import Crab from "./components/crab/Crab";
import Kelp from "./components/Kelp";

// import Home from "./components/sections/Home";
import GettingStarted from "./components/sections/GettingStarted";
import Props from "./components/sections/Props";
import ComplexProps from "./components/sections/ComplexProps";
import MagicProps from "./components/sections/MagicProps";
import State from "./components/sections/State";
import Extends from "./components/sections/Extends";
import ForwardRef from "./components/sections/ForwardRef";
import Tests from "./components/sections/Tests";
import Storybook from "./components/sections/Storybook";
import PathResolution from "./components/sections/PathResolution";
import Config from "./components/sections/Config";
import Advanced from "./components/sections/Advanced";
import About from "./components/sections/About";

function App() {
  const crabRef = useRef(null);
  const rockRef = useRef(null);
  const kelpRef = useRef(null);
  const sceneRef = useRef(null);

  const crabLocationRef = useRef("rock");

  // section refs
  const gettingStartedRef = useRef(null);
  const propsRef = useRef(null);
  const complexPropsRef = useRef(null);
  const magicPropsRef = useRef(null);
  const stateRef = useRef(null);
  const extendsRef = useRef(null);
  const forwardRef = useRef(null);
  const testsRef = useRef(null);
  const storybookRef = useRef(null);
  const pathResolutionRef = useRef(null);
  const configRef = useRef(null);
  const advancedRef = useRef(null);
  const aboutRef = useRef(null);

  const [crabTarget, setCrabTarget] = useState({ x: 0, y: 0 });
  const [crabAction, setCrabAction] = useState(null);
  const [crabTimeout, setCrabTimeout] = useState(0);

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

    setCrabAction("wiggleRight");
    setCrabTimeout(1000);

    arcTo(start, end, arc, setCrabTarget);

    crabLocationRef.current = "kelp";

    setTimeout(() => {
      setCrabAction(null);
      setCrabTimeout(0);
    }, 4000);
  };

  const goToRock = (arc = 100, leftOrRight = "left") => {
    if (!rockRef.current || !crabRef.current) return;

    const rockBox = rockRef.current.getBoundingClientRect();
    const crabBox = crabRef.current.getBoundingClientRect();
    const sceneBox = sceneRef.current.getBoundingClientRect();

    const start = {
      x: crabBox.left - sceneBox.left,
      y: crabBox.top - sceneBox.top,
    };

    setCrabAction(leftOrRight === "left" ? "wiggleLeft" : "wiggleRight");
    setCrabTimeout(500);

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

  useEffect(() => {
    // move crab to rock when component mounts
    goToRock(100, "right");
    setTimeout(() => setCrabAction("waveAndClick"), 4500);

    const sectionEntries = [
      { ref: gettingStartedRef, target: "rock" },
      { ref: propsRef, target: "kelp" },
      { ref: complexPropsRef, target: "rock" },
      { ref: magicPropsRef, target: "kelp" },
      { ref: stateRef, target: "rock" },
      { ref: extendsRef, target: "kelp" },
      { ref: forwardRef, target: "rock" },
      { ref: pathResolutionRef, target: "kelp" },
      { ref: testsRef, target: "rock" },
      { ref: storybookRef, target: "kelp" },
      { ref: configRef, target: "rock" },
      { ref: advancedRef, target: "kelp" },
      { ref: aboutRef, target: "rock" },
    ];

    const observers = sectionEntries.map(({ ref, target }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
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

  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory relative">
        <div
          ref={sceneRef}
          className="flex h-screen w-full items-stretch justify-center pointer-events-none fixed bottom-0 p-20 z-0 border"
        >
          <div className="absolute top-0 left-0 w-full h-[100px] overflow-hidden z-0 pointer-events-none bg-white">
            <div className="relative w-[200%] h-full ">
              <svg
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
                className="absolute top-0 left-0 w-full h-[100px] animate-waveSlow z-0"
              >
                <path
                  d="
      M0 50
      Q 30 30, 60 50
      T 120 50
      T 180 50
      T 240 50
      T 300 50
      T 360 50
      T 420 50
      T 480 50
      T 540 50
      T 600 50
      T 660 50
      T 720 50
      T 780 50
      T 840 50
      T 900 50
      T 960 50
      T 1020 50
      T 1080 50
      T 1140 50
      T 1200 50
      V100 H0 Z
    "
                  fill="#3490dc"
                />
              </svg>

              <svg
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
                className="absolute top-0 left-0 w-[150%] h-[100px] z-0 opacity-70"
              >
                <path
                  d="
      M0 50
      Q 30 30, 60 50
      T 120 50
      T 180 50
      T 240 50
      T 300 50
      T 360 50
      T 420 50
      T 480 50
      T 540 50
      T 600 50
      T 660 50
      T 720 50
      T 780 50
      T 840 50
      T 900 50
      T 960 50
      T 1020 50
      T 1080 50
      T 1140 50
      T 1200 50
      V100 H0 Z
    "
                  fill="#3490dc"
                />
              </svg>
            </div>
          </div>

          <div className="sand absolute h-1/2 md:h-1/4 w-full bottom-0">
            <div className="sand-shimmer" />
          </div>

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

            <div className="bubble-sway">
              <div className="bubble size-12 bottom-32">
                <img src={Bubbles} alt="bubbles" className="w-full" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col items-center justify-end relative hidden lg:flex">
            <Kelp className="bottom-3 left-10 scale-x-[-0.60] scale-60 origin-bottom sway sway-delayed" />
            <Kelp className="bottom-0 right-10 scale-x-[-0.40] scale-40 origin-bottom sway sway-delayed" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-end relative">
            <img
              src={Shell}
              alt="shell decoration"
              className="absolute -bottom-5 -left-10 z-15 rotate-[-70deg]"
            />

            <Kelp className="bottom-3 right-0 sway" />
            <Kelp className="-bottom-1 left-20 z-15 scale-x-[-1] sway" />
            <Kelp className="bottom-0 right-10 scale-50 origin-bottom sway" />
            <Kelp className="bottom-2 left-2 scale-75 origin-bottom sway-slow" />
            <Kelp className="bottom-0 left-10 scale-x-[-0.25] scale-25 origin-bottom sway sway-delayed" />

            <div ref={kelpRef} className="p-4"></div>
          </div>
        </div>

        {/* Section 1: Overview */}
        <section className="h-screen snap-start flex flex-col items-center justify-center px-12 relative z-20">
          <div className="w-3/5 text-center relative -top-40">
            <h1 className="text-6xl">CRAB 2 - Tokyo Driftnet</h1>
            <p className="mt-4 text-white font-light text-2xl">
              A modern CLI for React inspired by EmberCLI, NestJS and Adonis.
              Create components faster, and more consistently.
            </p>
          </div>
        </section>

        {/* Section 2: getting started */}
        <GettingStarted ref={gettingStartedRef} />
        <Props ref={propsRef} />
        <ComplexProps ref={complexPropsRef} />
        <MagicProps ref={magicPropsRef} />
        <State ref={stateRef} />
        <Extends ref={extendsRef} />
        <ForwardRef ref={forwardRef} />
        <Tests ref={testsRef} />
        <Storybook ref={storybookRef} />
        <PathResolution ref={pathResolutionRef} />
        <Config ref={configRef} />
        <Advanced ref={advancedRef} />
        <About ref={aboutRef} />
      </div>
    </>
  );
}

export default App;
