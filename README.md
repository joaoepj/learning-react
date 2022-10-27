# learning-react

This is an effort to learn react from the backend point of view. This document is more concerned about React's fundamentals conceps and behaviours and assume you already have basic knowledge about HTML, CSS and javascript.

## Components

Components are one of the core concepts of React.

Here is how to define a component:
```javascript
function MyComponent(){
    return <h1>I am a component!<h1/>
}
```
## Props

React components use props to communicate with each other. Think in this like HTML tag attributes

Extending component to accept props as a parameter:
```javascript
function MyComponent2({param}) {
  return <h1 style={{color: param}}>I am a component!</h1>
  
}
```

Here is how we call the component and pass a parameter to it:
```javascript
<MyComponent2 param="blue"/>
```

## Events

Extending component to react to an event by adding an event handler to it:
```javascript
function MyComponent3({param}) {
  return <h1 onClick={() => alert("You clicked me!")} style={{color: param}}>I am a component!</h1>
  
}
```