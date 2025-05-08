

# Understanding `keyof` Operator and Difference Between `any`, `unknown`, and `never`

## Introduction:
TypeScript is a powerful superset of JavaScript that enhances our code by defining types, which significantly reduces our bugs. In this blog, we'll talk about two important topics of TypeScript:

- The `keyof` keyword
- The `any`, `unknown`, and `never` types

Understanding these concepts will give us better confidence in TypeScript.

---

## Part 1: Understanding `keyof` Operator

The `keyof` operator is an object type operator in TypeScript. We use it to make a union type of string and numerical literal types from the keys of an existing object type.

### Use of `keyof` operator

TypeScript's `keyof` operator takes a previous object type and creates a union from its keys. This is an example of the `keyof` operator:

```ts
type Family = {
  father: string;
  mother: string;
  son: string;
  daughter: string;
};

type FamilyPerson = keyof Family;
// Equivalent to: 'father' | 'mother' | 'son' | 'daughter'
```

Here in this example, we use all the keys of the `Family` type to create a union type for `FamilyPerson` by the `keyof` operator.

---

## Part 2: The `any`, `unknown`, and `never` Types

There are many types in TypeScript. But we have only three special types in TypeScript: `any`, `unknown`, and `never`. As they are special, now we talk about them specially in this blog.

### 1. `any` type

We use the `any` type when we want to tell TypeScript,  
**"Hey! don't mind about this. Accept all possible types on this earth for this variable."**  
That means TypeScript never checks which types are used for this variable.

#### Example:
```ts
let anything: any = "Hello";
anything = 5;
anything = true;
```

### 2. `unknown` type

`Unknown` type is much better than `any` type. We use it when we want to tell TypeScript,  
**"Hey! As a human, we currently don't know the type of this variable. When we know the type of this variable, we will tell you."**  
After defining `unknown` type, we can't do any operation before narrowing the type.

#### Example:
```ts
let input: unknown = "Hello";

if (typeof input === "string") {
  console.log(input.toUpperCase()); // ✅ Safe to use
}
```

### 3. `never` type

We use the `never` type when we want to tell TypeScript,  
**"This will never occur."**  
We use it in functions that never return and cases like that.

#### Example:
```ts
function throwError(message: string): never {
  throw new Error(message);
}
```
