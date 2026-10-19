// Test fixture: intentionally contains a simple code-pattern finding.
function buildQuery(userInput) {
  // Potentially unsafe pattern for a basic static-analysis scanner to inspect.
  return "SELECT * FROM users WHERE name = '" + userInput + "'";
}

function greet(name) {
  if (name == null) {
    return "Hello, guest";
  }
  return "Hello, " + name;
}

console.log(greet("TestHub"));
console.log(buildQuery(process.argv[2] || "demo"));
