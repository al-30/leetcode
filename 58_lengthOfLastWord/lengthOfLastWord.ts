// exercise link: https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
  const words = s.trim().split(' ');
  let last = words.length - 1;
  return words[last].length;
}

lengthOfLastWord('Hello World                           ');
