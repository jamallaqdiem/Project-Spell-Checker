import { getWordsToCheck, isCorrectWord, addingWords } from "./common.mjs";
import assert from "node:assert";
import {test, describe}from "node:test";

describe("SPell CHecker Logic", () => {
  test("Should split the text and remove special characters", () => {
    const input = "hello-world?";
    const expectedResult = ["hello", "world"];

    const result = getWordsToCheck(input);
    assert.deepStrictEqual(result, expectedResult);
  });

  test("Should check if the first letter upperCase or lowerCase", () => {
    const input = "Hello";
    const result = isCorrectWord(input);

    assert.strictEqual(result, true);
  });

  test("Should push the new words to the dictionary", () => {
    const input = "hi";

    assert.strictEqual(isCorrectWord(input), false);

    addingWords(input);

    const afterCheck = isCorrectWord(input);
    assert.strictEqual(afterCheck, true);
  });
});
