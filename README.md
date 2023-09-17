# Project Features

## Select Course
- Display a catalog of available courses.
- Catalog includes details such as course names, course details, credit, and price.
- Users can select courses based on criteria like course name, course details, credit, and price.
- Courses can be added to the user's enrollment by clicking a "Select" button associated with each course listing.
- Selected courses are displayed in the course cart.

## Fixed Credit
- Credit is fixed with a maximum limit of twenty.
- Users can enroll in courses with less than twenty credits or exactly twenty credits but not more than twenty.

## Duplicate Course Selections Not Allowed
- Users are prevented from choosing the same course more than once.
- Once a course is selected, it cannot be chosen again.




# State Management

## useState
`useState` is used for managing component state in functional components. It is used for:
- State management: Storing and updating component-specific data.
- Conditional rendering: Controlling what gets displayed based on state.
- Toggle flags: Managing boolean values like showing/hiding elements.
- Counter: Keeping track of counts or quantities.
- Storing API data in state for use in the component.

## useEffect
`useEffect` is used for managing side effects in functional components. It is used for:
- Fetching data from APIs.
- Subscribing to events or external data sources.
- Setting up timers and intervals.
- Manually manipulating the DOM when needed.
- Synchronizing a component with an external system.
- Performing asynchronous tasks without affecting rendering.

In the Assignment project, i used `useState` for [specific use case] and `useEffect` for [specific use case]. These hooks helped to manage the state and side effects efficiently within the React components.




