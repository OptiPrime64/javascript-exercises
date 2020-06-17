function ftoc(far){
  let cel = (far - 32) * 5 / 9;
  if (cel % 2 === 0){
      return cel;
  }else{
  return +cel.toFixed(1);
  };
}

function ctof(cel){
  let far = (cel * 9 / 5) + 32;
  if (far % 2 === 0){
      return far;
  }else{
  return +far.toFixed(1);
  };
}

module.exports = {
  ftoc,
  ctof
}
