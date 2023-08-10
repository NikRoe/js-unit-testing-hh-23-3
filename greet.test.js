import { greet } from "./greet.js";

// from jest: test(), expect(), .toBe()

test("return 'Hello Jane!' ", () => {
  const result = greet("Jane");
  expect(result).toBe("Hello Jane!");
});

// test function, takes a string and a callback function as parameters
// the string is a helper for us developer (to know what the test is about)
test("returns 'Hello stranger!' if called greet()", () => {
  const result = greet();
  expect(result).toBe("Hello stranger!");
});

test("returns 'Hello coach!' if called greet('Niklas')", () => {
  const result = greet("Niklas");
  expect(result).toBe("Hello coach!");
});
