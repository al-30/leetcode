function minimumSteps(s: string): number {
  let swap = 0;
  let indice = s.length - 1;
  let blackBall = 0;
  while (s[indice] !== undefined) {
    if (s[indice] === '0') {
      blackBall++;
    } else {
      swap += blackBall;
    }
    indice--;
  }
  return swap;
}
