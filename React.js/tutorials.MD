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
    2. static getDerivedStateFromProps: <p style="color: blue">This method is used to set the component state by use of props. You have to just return the updated state or null</p>
    3. render
    4. ComponentDidMount
 2. Updating - 
    1. static getDerivedStateFromProps
    2. shouldComponentupdate: <font color="blue">Return false if you dont want to rerender the component</font>
    3. render
    4. getSnapshotBeforeUpdate
    5. ComponentDidUpdate(prevProps, prevState, snapShot <span style="color: red">{ this is we get from return of getSnapshotBeforeUpdate}</span>)
3. Unmouting -
    1. ComponentWillUnmount
4. Error handling
    1. static getDerivedFromError
    2. componentDidCatch
