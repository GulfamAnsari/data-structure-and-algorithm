## 1. What is React.Js?
React Js is a library that is used to building user interface. It is not responsible for HTTP request or routing.

## 2. What is JXS?
Extension to JavaScript language syntax. You can write the code without use of JSX.
JSX makes code simple and easy to understand.

## 3. What  is key in React and why it is important?
<ul>
<li>Bruce</li>
<li>Clark</li>
</ul>
-------------------
<ul>
<li>Diana</li>
<li>Bruce</li>
<li>Clark</li>
</ul>
If you are not passing a key and adding an element at the starting of the list then the
React saw the first element of new DOM and old DOM is different so React will start mutating
all the element irrespective only single element is different.

But on the other hand, if you provided the key prop then React will compare each list element with the
help of key and it will add the new element and intact other tree elements.

## 4. How can we style the React Component
You can style the react component by using below methods.
1. Inline style
2. CSS stylesheet
3. CSS module
- CSS stylesheet can be used in child component wheres CSS module can not be used in child components.

## 4. Lifecycle methods in Class component
 1. Mounting -
    1. Constructor
    2. static getDerivedStateFromProps: <p>This method is used to set the component state by use of props. You have to just return the updated state or null</p>
    3. render
    4. ComponentDidMount
 2. Updating -
    1. static getDerivedStateFromProps
    2. shouldComponentupdate: <code>Return false if you dont want to rerender the component</code>
    3. render
    4. getSnapshotBeforeUpdate
    5. ComponentDidUpdate(prevProps, prevState, snapShot <code>{ this is we get from return of getSnapshotBeforeUpdate}</code>)
3. Unmouting -
    1. ComponentWillUnmount
4. Error handling
    1. static getDerivedFromError
    2. componentDidCatch
## 5. What is Pure component and How to create Pure component in class as well as in functional component?
### Pure component are react component that only rerender if shallow comparision of new props changes.
- In class component, we can extent PureComponent class to create pure component.
- In functiona compoennt, we can wrap the component in React.memo(Component).

## 6. What is ref in ReactJs
ref is basically used to access the DOM elements in react.

## 7, What are portals?
Portals are used to create parralled HTML DOM to "root". We can use portals to create Modals. There is an React function to create portals.

## 8. Error Boundary in class component?
Error boundary are react components that catch the JS errors in child components tree, log those error, and display the fall-back UI.
A component becomes Error boundary by implements the static getDerivedFromError or componentDidCatch or both.

## 9. What is Higher order component and why we need HOC?
HOC is pattern that take component as an input and provide the new component as an output.
- The HOCs are used to provide addition feature to passed component.
- It also used to reuse the code. like we have to create similiar kind of functionality for each component that we can create an HOC and add the same logic here and pass component that we need to share this login.
```
const IronMan = WithSuite(TonyStart);
const CaptainMarvel = WithSuite(Steave);
```
Here Withsuite is a HOC that add the additional features to provided component.
You can create HOC by using two ways
1.
```JSX
function MovieHOC(props) {
  return <div>Movie is: {props.children}</div>;
}

export default MovieHOC;

- USAGE
<MovieHOC>
    <Movies name="Hum" />
</MovieHOC>

```
2.
```JSX
function HOC(Component) {
  return function abc(props) {
    return (
      <div>
        <h4>Game name is </h4>
        <Component {...props} />
      </div>
    );
  };
}

export default HOC;

'USAGE'
import HOC from "./HOC";

function Game({ name }) {
  return <div>{name}</div>;
}

export default HOC(Game);

```

## 10. What is render props
Render props are a powerful pattern in React that allows you to share code between components using a prop whose value is a function.
- It’s important to remember that just because the pattern is called “render props” you don’t have to use a prop named render to use this pattern. In fact, any prop that is a function that a component uses to know what to render is technically a “render prop”.

```JSX
function Game({ name, render }) {
  return (
    <div>
      {name}
      {render("ReactJS")}
    </div>
  );
}
<Game name="Game 1" render={(name) => { return <Movies name={name} /> }} />
```

## 11. What is context?
Context provides a way to pass data through the component tree without having to pass props down manually(called props drilling) at every level.
```JSX
import { createContext } from "react";
export const UserContext = createContext();
--------------------------------------------------------------------------------
 <UserContext.Provider value={{ name: "Gulfam" }}>
    <Game name="Game 1" render={(name) => <Movies name={name} />} />
</UserContext.Provider>
--------------------------------------------------------------------------------
function Game({ render }) {
  const context = useContext(UserContext);
  return (
    <div>
      {context.name}
      {render("ReactJS")}
    </div>
  );
}
```

## 12. What are Hooks?
Hooks are the fature to use the state and other React features in functional component. There are several react hooks.
1. useEffect - The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.
2. useState - It is used to create local state in the component
3. useRef - ref is basically used to access the DOM elements in react.
4. useContext - It is used to create parent level state that can be passed in to nested component without drilling down props.
5. useReducer - useReducer is very similar to useState , but it lets you move the state update logic from event handlers into a single function outside of your component. 
6. useCallback - It gives us the memorize callback function that changes when dependency changes. It is not related to React.memo(used for create pure component).
7. useMemo - React useMemo() hook is a function that caches the value produced from an expensive function used inside a React component. It accepts the expensive function and works by storing the value produced from the function when that is passed the same arguments repeatedly.
Here calculateSum will only calculated if count is changes
```JSX
const calculateSum = useMemo(() => {
    return 2 + 12 + count;
}, [count]);
return {calculateSum};
```


