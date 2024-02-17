## 1. What is React.Js?
React Js is a library that is used to building user interface. It is not responsible for HTTP requiest to routing.

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
### Pure component are react component that only rerender of shalow comparision of new props changes.
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

