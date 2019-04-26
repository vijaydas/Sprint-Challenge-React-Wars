# Answers

1.  What is React JS and what problems does it try and solve?

The tradition multipage paradigm of web development has some inherent problems involving the time and resources needed to refresh data states from remote servers and the clunkiness and inefficiency of full page reload and rendering. React JS solves these probles by using a single-page component model in which the component's data and views are rendered "reactively". This means that only the data and views that change are rendered through a process of reconsiliation. React accomplishes this through a Virtual DOM. React accompishes this dynamic rendering of data in views using special methods called "setState" and "render(). 


2.  What does it mean to _think_ in react?

Thinking in React is to look at a web development task and think of from the point of view of a collection of view components.  This component breakdown can then be used to build React functional and class components and the attendent data flows. The object is to build a single page app comprised of smaller components.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The najor difference are the methods available to Class components as they extend the React.Component class and are able to manage state. These are "render()", "this.state" and "setState". These methods are in fact critical to React's component model.  Functional components are be used when statefulness is not needed.


4.  Describe state.

State is an object inside a component that represents the current value of dynamic data that is rendered in the current view. 


5.  Describe props.

Props are the properties passed in a heirachical tree and used in React components to update state and view. "props" are usually subsets of the data on state that a given component requires for the the data object or view it controls.
