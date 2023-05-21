// Decorator plain javascript

function makeLoggingFunction(fn: any) {
  return (...args: any) => {
    try {
      console.log(`Function ${fn.name} with args ${args} invoked.`);
      return fn(...args);
    } finally {
      console.log(`Function ${fn.name} returned.`);
    }
  };
}

function helloWorld(a: string, b: string) {
  return `${a} ${b}`;
}

const l = makeLoggingFunction(helloWorld);
const ret = l("hello", "world");
console.log("RET", ret);

// Decorators API

function log(value: any, context: DecoratorContext) {
  console.log(typeof value, context.kind, context.name);
}

function traceWithLevel(level: "warn" | "info" | "debug") {
  return function traceDecorator(value: Function, ctx: ClassMethodDecoratorContext) {
    return (...args: any) => {
      try {
        console[level](`Method ${String(ctx.name)} with args ${args} invoked.`);
        return value(...args);
      } finally {
        console[level](`Method ${String(ctx.name)} returned.`);
      }
    };
  };
}

function trace(value: Function, ctx: ClassMethodDecoratorContext) {
  return (...args: any) => {
    try {
      console.log(`Method ${String(ctx.name)} with args ${args} invoked.`);
      return value(...args);
    } finally {
      console.log(`Method ${String(ctx.name)} returned.`);
    }
  };
}

function increase(value: undefined, ctx: ClassFieldDecoratorContext) {
  return (initialValue: any) =>
    typeof initialValue === "number" ? initialValue + 1 : initialValue;
}

function uppercaseOnly(setter: Function, ctx: ClassSetterDecoratorContext) {
  return function uppercaseSetter(this: any, args: any) {
    if (typeof args === "string") {
      return setter.call(this, args.toUpperCase());
    }
    return setter.call(this, args);
  };
}

@log
class Person {
  @log
  name = "Klaus";

  @increase
  x = 3;

  @increase
  n = "7";

  @log
  get age() {
    return 32;
  }

  #greeting = "";

  @uppercaseOnly
  set greeting(x: string) {
    this.#greeting = x;
  }

  get greeting() {
    return this.#greeting;
  }

  @log
  @trace
  sayHello(x: string) {
    return "Hallo";
  }

  @traceWithLevel("warn")
  greet(n: string) {
    console.log("Hello, ", n);
  }
}

const p: Person = new Person();
p.sayHello("huhu");
p.greet("Klaus"); // Loglevel warn
p.greeting = "hallo";
console.log(p.greeting);
console.log(p.n);
console.log(p.x);
