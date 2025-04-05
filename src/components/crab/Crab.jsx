import { useEffect, useReducer } from "react";
import {
  initialState,
  reducer,
  wiggleRight,
  wiggleLeft,
  waveAndClick,
  jump,
  getPupilOffset,
} from "./reducer";
const mainRed = "#f04e23";

const secondaryRed = "#c4371b";
const tertiaryRed = "#da3f1f";

export default function Crab({ action = null, timeout = 0 }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => wiggleRight(dispatch), []);

  useEffect(() => {
    if (!action) return;
    setTimeout(() => {
      switch (action) {
        case "wiggleRight":
          wiggleRight(dispatch);
          break;
        case "wiggleLeft":
          wiggleLeft(dispatch);
          break;
        case "waveAndClick":
          waveAndClick(dispatch);
          break;
        case "jump":
          jump(dispatch);
          break;
      }
    }, timeout);
  }, [action, timeout]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRca(Math.floor(Math.random() * 15));
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setOpen(Math.floor(Math.random() * 15));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     swim(dispatch);
  //   }, 2500);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     waveAndClick(dispatch);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <svg
        baseProfile="full"
        width="240px"
        height="150px"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:ev="http://www.w3.org/2001/xml-events"
        viewBox="-80 -50 160 100"
      >
        <defs></defs>
        <g id="crab">
          <ClawLeft position={state.claws.left} />
          <ClawRight position={state.claws.right} />

          <LegRight1 position={state.legs.right1} />
          <LegRight2 position={state.legs.right2} />
          <LegRight3 position={state.legs.right3} />

          <LegLeft1 position={state.legs.left1} />
          <LegLeft2 position={state.legs.left2} />
          <LegLeft3 position={state.legs.left3} />
          <CrabBody lookAngle={state.face.lookAngle} />
        </g>
      </svg>
    </>
  );
}

function CrabBody({ smileAmount = 90, lookAngle = 0 }) {
  const inverted = 101 - Math.abs(smileAmount);
  const smileDirection = smileAmount < 0 ? 1 : 0;

  const { dx, dy } = getPupilOffset(lookAngle, 4);

  return (
    <g id="body">
      <CrabEyeLeft x={dx} y={dy} />
      <CrabEyeRight x={dx} y={dy} />
      <ellipse cx="0" cy="0" fill={mainRed} rx="35" ry="20" />
      <ellipse cx="0" cy="10" fill="#f5c47885" rx="28" ry="10" />
      <path
        d={`M -10 -8 A ${inverted} ${inverted} 0 0 ${smileDirection} 10 -8`}
        stroke={secondaryRed}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* shadows */}
      <TinyShadow d="M -31.5 -8.5 A 10 10 0 0 0 -33.5 -4.5" />
      <TinyShadow d="M 31.5 -8.5 A 10 10 0 0 1 33.5 -4.5" />
      <TinyShadow d="M -35 2 A 20 20 0 0 0 -34 6" />
      <TinyShadow d="M 35 2 A 20 20 0 0 1 34 6" />
      {/* <TinyShadow d="M -32 9 A 20 20 0 0 0 -29.5 11" />
      <TinyShadow d="M 32 9 A 20 20 0 0 1 29.5 11" />
      <TinyShadow d="M -25 15 A 20 20 0 0 0 -21 16.5" />
      <TinyShadow d="M 25 15 A 20 20 0 0 1 21 16.5" /> */}
    </g>
  );
}

function TinyShadow({ d = "" }) {
  return (
    <path
      d={d}
      strokeWidth="2"
      stroke={tertiaryRed}
      strokeLinecap="square"
      fill="none"
    />
  );
}

function CrabEyeLeft({ x = 0, y = 0 }) {
  return (
    <g id="eye-left" transform="translate(-15, -30)">
      <path d="M 0 0 L 3 20" stroke={mainRed} strokeWidth="4" fill="none" />
      <circle cx="0" cy="0" fill="#fdf6e3" r="9" />
      <circle
        cx={x}
        cy={y}
        fill="black"
        style={{
          transition: "cx 0.2s ease, cy 0.2s ease",
        }}
        r="3.5"
      />
    </g>
  );
}

function CrabEyeRight({ x = 0, y = 0 }) {
  return (
    <g id="eye-right" transform="translate(15, -30)">
      <path d="M 0 0 L -3 20" stroke={mainRed} strokeWidth="4" fill="none" />
      <circle cx="0" cy="0" fill="#fdf6e3" r="9" />
      <circle
        cx={x}
        cy={y}
        fill="black"
        style={{
          transition: "cx 0.2s ease, cy 0.2s ease",
        }}
        r="3.5"
      />
    </g>
  );
}

function ClawRight({ position }) {
  return (
    <g transform="translate(30, -45)">
      <Claw position={position} size={"lg"} />
    </g>
  );
}

function ClawLeft({ position }) {
  return (
    <g transform="translate(-30, -45) scale(-1, 1)">
      <Claw position={position} size={"sm"} />
    </g>
  );
}

function Claw({ position, size = "sm" }) {
  const { angle, open } = position;
  const transform = size === "lg" ? "scale(1.2) translateY(-5px)" : "scale(1)";
  return (
    <g>
      <g
        style={{
          transform: `rotate(${angle}deg)`,
          transformOrigin: "0px 30px",
          transition: "transform 1s ease",
        }}
      >
        <path
          d="M 0 40 A 15 15 0 0 0 10 28"
          stroke={mainRed}
          strokeWidth="6"
          fill="none"
        />

        {/* Upper pincer */}
        <path
          d="M 7 30 A 10 10 0 0 0 12 30"
          stroke={secondaryRed}
          strokeWidth="1.5"
        />

        {/* Lower pincer */}
        <g
          style={{
            transform: `rotate(${open}deg)`,
            transformOrigin: "5px 20px",
            transition: "transform 0.2s ease",
          }}
        >
          <path
            d="M 3 7 A 10 8 90 1 0 12 27 A 4 4 0 0 0 14 25 A 25 25 0 0 1 6 7 A 2 2 0 0 0 3 7 Z "
            fill={mainRed}
          />
        </g>

        <path
          d="M 12 2 A 12 10 45 1 1 3 28 A 5 5 0 0 1 0 26 A 30 30 0 0 0 9 2 A 2 2 0 0 1 12 2 Z"
          fill={mainRed}
          style={{
            transform,
          }}
        />

        <path
          d="M 1 26 A 50 50 0 0 0 8 15"
          stroke={tertiaryRed}
          strokeWidth="1"
        />
      </g>
    </g>
  );
}

function Leg({ position }) {
  const { bend, curl } = position;
  return (
    <g>
      <g
        style={{
          transform: `rotate(${bend}deg)`,
          transition: "transform 0.3s ease",
        }}
      >
        {/* Upper leg */}

        <g transform="translate(16, -3)">
          <g
            style={{
              transform: `rotate(${curl}deg)`,
              transformOrigin: "0px 3px",
              transition: "transform 0.3s ease",
            }}
          >
            {/* Tip of the leg */}
            <g transform="translate(11, 8)">
              <path
                d="M 0 0 L 3 -1 Q 7 4 7 8 Q 7 11 5.5 9 Q 4 4 0 0 Z"
                fill={mainRed}
                style={{
                  transform: `rotate(${curl}deg)`,
                  transition: "transform 0.3s ease",
                }}
              />
            </g>

            <path
              d="M 0 0 L 12 8"
              strokeWidth="5"
              stroke={mainRed}
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M 14 7 A 2 2 0 0 1 12 10"
              strokeWidth="1"
              stroke={tertiaryRed}
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </g>

        <path
          d="M 0 0 L 16 -3"
          strokeWidth="6"
          stroke={mainRed}
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M 18 -5 A 5 5 0 0 1 16.5 -0.5"
          strokeWidth="1"
          stroke={tertiaryRed}
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </g>
  );
}

function LegRight1({ position }) {
  return (
    <g transform="translate(30, 5)">
      <Leg position={position} />
    </g>
  );
}

function LegRight2({ position }) {
  return (
    <g transform="translate(25, 10) rotate(10) scale(0.8)">
      <Leg position={position} />
    </g>
  );
}

function LegRight3({ position }) {
  return (
    <g transform="translate(20, 15) rotate(20) scale(0.6)">
      <Leg position={position} />
    </g>
  );
}

function LegLeft1({ position }) {
  return (
    <g transform="translate(-30, 5) scale(-1, 1)">
      <Leg position={position} />
    </g>
  );
}

function LegLeft2({ position }) {
  return (
    <g transform="translate(-25, 10) rotate(-10) scale(-0.8,0.8)">
      <Leg position={position} />
    </g>
  );
}

function LegLeft3({ position }) {
  return (
    <g transform="translate(-20, 15) rotate(-20) scale(-0.6, 0.6)">
      <Leg position={position} />
    </g>
  );
}
