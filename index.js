// Code your solution in this file
let distance;
function distanceFromHqInBlocks(pickup) {
  const blocks = 42;
  return Math.abs(pickup - blocks);
}

function distanceFromHqInFeet(pickup) {
  const feetPerBlock =264
  return distanceFromHqInBlocks(pickup) * feetPerBlock;
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs(start - finish) * 264;
}

function calculatesFarePrice(start, finish) {
  if (distanceTravelledInFeet(start, finish) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, finish) >= 400) {
    if (distanceTravelledInFeet(start, finish) <= 2000) {
      return (Math.abs(start - finish) * 264 - 400) * 0.02;
    } else if (distanceTravelledInFeet(start, finish) < 2500) {
      return 25;
    } else if (distanceTravelledInFeet(start, finish) >= 2500) {
      return "cannot travel that far";
    }
  }
}
