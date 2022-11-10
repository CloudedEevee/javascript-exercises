const ftoc = function(f) {
  let c = (f - 32) * (5/9);
  let cRounded = Math.round(c * 10) / 10;
  return cRounded;
};

const ctof = function(c) {
  let f = (c * (9/5) + 32);
  let fRounded = Math.round(f *10) / 10;
  return fRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
