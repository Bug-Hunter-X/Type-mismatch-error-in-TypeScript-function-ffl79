# Type Mismatch Error in TypeScript Function
This example demonstrates a common type mismatch error in TypeScript where a function expects a specific data type but receives a different type. The function `greeter` expects a string argument, but we are passing an array of strings. This will result in a compilation error. The solution involves modifying the function signature or the input data to match the expected type.

## Bug
The bug lies in the function call `greeter(user)`. The `greeter` function expects a string argument, while `user` is an array of strings. TypeScript's type checker will correctly identify this mismatch, resulting in a compilation error.