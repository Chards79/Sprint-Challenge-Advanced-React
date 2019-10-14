- [ ] Why would you use class component over function components (removing hooks from the question)?

You might use class components if you want to take advantage of them having their own internal state. With class components you can use the property of this.state and the method this.setState. You can also get some performance increases through implementing a shouldComponentUpdate method.

- [ ] Name three lifecycle methods and their purposes.

constructor() - initializes local state by assigning an object to this.state and binds event handler methods to an instance
render() - when called, it examines this.props and this.state and returns react elements, arrays and fragments, portals, strings and numbers, or booleans or null.
componentDidMount() - initialization that requires DOM nodes go here

- [ ] What is the purpose of a custom hook?

A custom hook is a javascript function whose name starts with 'use' and that may call other hooks. They enable you to extract a component's logic into externalized reusable functions. 

- [ ] Why is it important to test our apps?

Testing gives you confidence in your code. It allows you to be sure that your code is doing what you want it to do. It also gives you rapid feedback on failures.