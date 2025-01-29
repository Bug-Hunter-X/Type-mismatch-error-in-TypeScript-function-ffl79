function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, "+ person + "!";
  } else {
    return "Hello, " + person.join(', ') + "!";
  }
}

let user = ["Alice", "Bob"];
console.log(greeter(user)); //Output: Hello, Alice, Bob!

let user2 = "Alice";
console.log(greeter(user2)); //Output: Hello, Alice!