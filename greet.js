export function greet(name) {
  if (name === "Niklas") {
    return "Hello coach!";
  } else if (name) {
    return `Hello ${name}!`;
  } else {
    return "Hello stranger!";
  }
}
