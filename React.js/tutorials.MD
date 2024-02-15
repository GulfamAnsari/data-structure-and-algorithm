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

## 4. What  is key in React and why it is important?
