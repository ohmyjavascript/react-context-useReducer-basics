## Notes:

- Syntax difference between JSX and HTML - Single closing tags should always end with a closing tag.
- `htmlFor` and `className` are used instead of `for` and `class`
- Styles need to be within an object and written in camelCase `style={{ backgroundColor: 'red' }} `
- The function starts with caps.

```
functional component

function Header() {
  return <h1> test </h1>
} 

es6 version

const Header = (props) => {
  return <h1> {props.userName} </h1>
}

and call as <Header userName="Test"/>, here we instantiate the component 
```
- We cannot mutate `props`. Props are read only
- we can pass other elements as props
- We can pass `props.children`
- Ternary, && for conditional, Fragment need
- For looping, we use `map`
- Each child needs a unique `key`
- prefix handlers with "handle" is a convention
- event is synthetic event.

## React hooks deep dive

- Think in terms of state
- We change state, react updates the DOM
- `import {useState} from 'react'` can keep track of value within component
- `const [name, setName] = useState('')` is the syntax
- used within functional components only
- inline functions as arrow functions `onClick={() => setLang('new value')}`
- `useState` can hold object too. But make sure, we spread the rest of the property
- Make sure, we use the function syntax instead of object if we need to make sure that we always work with the latest of the previous state.
- state updates are async
```
useState({
  ...developer, 
  years: '10
})

// recommended 

useState((prevState) => {
  return {
    ...prevState,
    years: '22'
  }
})
```
- For side effects, we use `useEffect`
- 3 variations of it.

```
useEffect(() => {
 // runs whenever any state is updated
})

useEffect(() => {
  // runs only once 
}, [])

useEffect(() => {
  // runs when the dependency changes + first time 
  return () => {
    // clean up
  } 
}, [dependency])
```
- create an async function within useEffect & invoke it immediately if we need to use the async await syntax.

```
useEffect(() => {
   async function getUser() {
     const res = await fetch('url');
   }
   getUser();
}, [])
```
- To reference elements, we use `useRef`
```
const inputRef = useRef();
<input ref={inputRef}/>

inputRef.current.value = '';
inputRef.current.focus();
```

- The advantage of using useReducer is that, the dispatch method that it gives, can replace 
- the custom callback handlers that we otherwise pass down, which needs to be wrapped with useCallback to avoid duplication of handlers on each new render.

### App Description
- Very simple application that explores React basics along with Context & useReducer to simulate redux based state management techniques.

### Hosted demo


[Here](https://react-context-use-reducer-basics-eqjq.vercel.app/)