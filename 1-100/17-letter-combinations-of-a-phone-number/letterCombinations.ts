function letterCombinations(digits: string): string[] {
  const lettersMap: Record<string, string[]> = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  const result: string[] = [];

  function combine(start: number = 0, word: string = '') {
    if (!digits[start]) {
      result.push(word);
      return;
    }

    const letters = lettersMap[digits[start]];

    for (const letter of letters) {
      combine(start + 1, word + letter);
    }
  }

  combine();

  return result;
}

letterCombinations('232');
