# learning-react

This is an effort to learn react from the backend point of view. This document is more concerned about React's fundamentals conceps and behaviours and assume you already have basic knowledge about HTML, CSS and javascript.

## Components

Components are one of the core concepts of React.

```javascript
function MyComponent(){
    return <h1>I am a component!<h1/>
}
```
## Props

React components use props to communicate with each other. Think in this like HTML tag attributes

Defining a component that receives properties

```javascript
function MyComponent2({param}) {
  return <h1 style={{color: param}}>I am a component!</h1>
  
}
```

Passing a parameter as a property
```javascript
<MyComponent2 param="blue"/>
```

## Events

We will now extend our component MyComponent2 adding an event handler to it.

```javascript
function MyComponent3({param}) {
  return <h1 onClick={() => alert("You clicked me!")} style={{color: param}}>I am a component!</h1>
  
}
```