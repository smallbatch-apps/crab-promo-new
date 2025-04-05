export const initialState = {
  float: 0,
  body: {
    rotate: 0,
    floatY: 0,
  },
  legs: {
    left1: { bend: 0, curl: 0 },
    left2: { bend: 0, curl: 0 },
    left3: { bend: 0, curl: 0 },
    right1: { bend: 0, curl: 0 },
    right2: { bend: 0, curl: 0 },
    right3: { bend: 0, curl: 0 },
  },
  claws: {
    left: { angle: 0, open: 0 },
    right: { angle: 0, open: 0 },
  },
  face: {
    smile: 90,
    lookAngle: null,
  },
};

function schedule(actions) {
  for (const [delay, fn] of actions) {
    setTimeout(fn, delay);
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    case "reset":
      return { ...initialState };
    case "SET_LEG":
      return {
        ...state,
        legs: {
          ...state.legs,
          [action.leg]: {
            bend: action.bend,
            curl: action.curl,
          },
        },
      };
    case "SET_CLAW":
      return {
        ...state,
        claws: {
          ...state.claws,
          [action.side]: {
            angle: action.angle,
            open: action.open,
          },
        },
      };
    case "":
      return {};
  }
};

export function wiggleRight(dispatch) {
  const bend = 20;
  const curl = 20;
  const type = "SET_LEG";
  schedule([
    [0, () => dispatch({ type, leg: "right1", bend, curl })],
    [300, () => dispatch({ type, leg: "right1", bend: 0, curl: 0 })],
    [600, () => dispatch({ type, leg: "right1", bend, curl })],
    [900, () => dispatch({ type, leg: "right1", bend: 0, curl: 0 })],
    [1200, () => dispatch({ type, leg: "right1", bend, curl })],
    [1500, () => dispatch({ type, leg: "right1", bend: 0, curl: 0 })],

    [100, () => dispatch({ type, leg: "right2", bend, curl })],
    [400, () => dispatch({ type, leg: "right2", bend: 0, curl: 0 })],
    [700, () => dispatch({ type, leg: "right2", bend, curl })],
    [1000, () => dispatch({ type, leg: "right2", bend: 0, curl: 0 })],
    [1300, () => dispatch({ type, leg: "right2", bend, curl })],
    [1600, () => dispatch({ type, leg: "right2", bend: 0, curl: 0 })],

    [200, () => dispatch({ type, leg: "right3", bend, curl })],
    [500, () => dispatch({ type, leg: "right3", bend: 0, curl: 0 })],
    [800, () => dispatch({ type, leg: "right3", bend, curl })],
    [1100, () => dispatch({ type, leg: "right3", bend: 0, curl: 0 })],
    [1400, () => dispatch({ type, leg: "right3", bend, curl })],
    [1700, () => dispatch({ type, leg: "right3", bend: 0, curl: 0 })],
  ]);
}

export function wiggleLeft(dispatch) {
  const bend = 20;
  const curl = 20;
  const type = "SET_LEG";
  schedule([
    [0, () => dispatch({ type, leg: "left1", bend, curl })],
    [300, () => dispatch({ type, leg: "left1", bend: 0, curl: 0 })],
    [600, () => dispatch({ type, leg: "left1", bend, curl })],
    [900, () => dispatch({ type, leg: "left1", bend: 0, curl: 0 })],
    [1200, () => dispatch({ type, leg: "left1", bend, curl })],
    [1500, () => dispatch({ type, leg: "left1", bend: 0, curl: 0 })],

    [100, () => dispatch({ type, leg: "left2", bend, curl })],
    [400, () => dispatch({ type, leg: "left2", bend: 0, curl: 0 })],
    [700, () => dispatch({ type, leg: "left2", bend, curl })],
    [1000, () => dispatch({ type, leg: "left2", bend: 0, curl: 0 })],
    [1300, () => dispatch({ type, leg: "left2", bend, curl })],
    [1600, () => dispatch({ type, leg: "left2", bend: 0, curl: 0 })],

    [200, () => dispatch({ type, leg: "left3", bend, curl })],
    [500, () => dispatch({ type, leg: "left3", bend: 0, curl: 0 })],
    [800, () => dispatch({ type, leg: "left3", bend, curl })],
    [1100, () => dispatch({ type, leg: "left3", bend: 0, curl: 0 })],
    [1400, () => dispatch({ type, leg: "left3", bend, curl })],
    [1700, () => dispatch({ type, leg: "left3", bend: 0, curl: 0 })],
  ]);
}

export function waveAndClick(dispatch) {
  const open = 0;
  const angle = 40;
  const type = "SET_CLAW";
  schedule([
    [0, () => dispatch({ type, side: "right", open, angle })],
    [500, () => dispatch({ type, side: "right", open, angle: 0 })],
    [1000, () => dispatch({ type, side: "right", open, angle })],
    [1500, () => dispatch({ type, side: "right", open, angle: 0 })],
    [2000, () => dispatch({ type, side: "right", open, angle })],
    [2200, () => dispatch({ type, side: "right", open: 20, angle: 0 })],
    [2600, () => dispatch({ type, side: "right", open, angle: 0 })],
    [2800, () => dispatch({ type, side: "right", open: 20, angle: 0 })],
    [3000, () => dispatch({ type, side: "right", open, angle: 0 })],
    [3200, () => dispatch({ type, side: "right", open: 20, angle: 0 })],
    [3400, () => dispatch({ type, side: "right", open, angle: 0 })],
  ]);
}

export function swim(dispatch) {
  const bend = 0;
  const curl = 0;
  const type = "SET_LEG";
  schedule([
    [0, () => dispatch({ type, leg: "right3", bend, curl: 40, curl: 40 })],
    [0, () => dispatch({ type, leg: "left3", bend: 40, curl: 40 })],
    [300, () => dispatch({ type, leg: "right3", bend: 40, curl: 40 })],
    [300, () => dispatch({ type, leg: "left3", bend: 40, curl: 40 })],
    [600, () => dispatch({ type, leg: "right3", bend, curl })],
    [600, () => dispatch({ type, leg: "left3", bend, curl })],
    [900, () => dispatch({ type, leg: "right3", bend: 40, curl: 40 })],
    [900, () => dispatch({ type, leg: "left3", bend: 40, curl: 40 })],
  ]);
}

export function jump(dispatch) {
  const bend = 0;
  const curl = 0;
  const type = "SET_LEG";
  schedule([
    [0, () => dispatch({ type, leg: "right1", bend: 40, curl: 40 })],
    [0, () => dispatch({ type, leg: "right2", bend: 40, curl: 40 })],
    [0, () => dispatch({ type, leg: "right3", bend: 40, curl: 40 })],
    [0, () => dispatch({ type, leg: "left1", bend: 40, curl: 40 })],
    [0, () => dispatch({ type, leg: "left2", bend: 40, curl: 40 })],
    [0, () => dispatch({ type, leg: "left3", bend: 40, curl: 40 })],
    [500, () => dispatch({ type, leg: "right1", bend, curl })],
    [500, () => dispatch({ type, leg: "right2", bend, curl })],
    [500, () => dispatch({ type, leg: "right3", bend, curl })],
    [500, () => dispatch({ type, leg: "left1", bend, curl })],
    [500, () => dispatch({ type, leg: "left2", bend, curl })],
    [500, () => dispatch({ type, leg: "left3", bend, curl })],
  ]);
}

export function getPupilOffset(degrees, radius = 2) {
  if (degrees == null) return { dx: 0, dy: 0 }; // centered
  const radians = (degrees * Math.PI) / 180;
  const dx = Math.cos(radians) * radius;
  const dy = Math.sin(radians) * radius;
  return { dx, dy };
}
