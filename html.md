	
                        HTML  HTML  HTML  HTML
******************************************************************************************************************************************

1. What is the purpose of the alt attribute in an <img> tag?

        The alt attribute provides a text description of an image if the image cannot be displayed. It's also used for accessibility purposes, especially for screen readers, allowing visually impaired users to understand the content of an image. For example:

2. What are the differences between <div> and <span> tags?

        <div> is a block-level element used to group other HTML elements and structure content. It takes up the full width available (its default behavior).
        <span> is an inline element used to style or group parts of text or other inline elements. It doesn’t create a line break and takes up only as much width as its content.

3. What is the purpose of the DOCTYPE declaration in HTML?Answer:

        The DOCTYPE declaration tells the browser which version of HTML the page is written in. It helps the browser render the page correctly. For modern HTML5 documents, it is declared like this:

4. What is the difference between the <link> and <script> tags in HTML?

        <link> is used to link external resources like CSS stylesheets to the HTML document.
        <script> is used to include or link external JavaScript files in the document.

5. What is the difference between inline and block elements in HTML?

        Block-level elements (like <div>, <p>, <h1>, etc.) take up the full width available and begin on a new line. They create a “block” of content.
        Inline elements (like <span>, <a>, <strong>, etc.) only take up as much width as their content and do not cause line breaks.

6.What is the difference between the GET and POST methods in forms?

        GET sends data in the URL and is typically used for retrieving data. It is limited in size and not secure for sensitive information.
        POST sends data in the body of the HTTP request, allowing for larger amounts of data and more secure transmission. It is commonly used for submitting form data.

7.What is a viewport, and how do you set it in HTML?
    
        The viewport is the visible area of a web page on a device, especially on mobile devices. To make a webpage responsive, you can control the viewport's width and scale using the <meta> tag in the <head> section:

8.What is the use of the <iframe> tag in HTML?
    
         The <iframe> tag is used to embed another HTML page within the current page. It creates an inline frame that can display content from a different website or webpage.

9.What is the difference between the <b> and <strong> tags in HTML?

        The <b> tag is used to bold text, but it has no semantic meaning. It's purely for styling.
        <b>This is bold text</b>
        The <strong> tag is used to indicate that the enclosed text has strong emphasis. By default, most browsers display it as bold, but it also conveys meaning to both search engines and screen readers, indicating that the content is important.

10. What is web accessibility, and why is it important?

        Web accessibility refers to the practice of designing and developing websites that can be used by all people, including those with disabilities. This includes users who may have visual, auditory, motor, or cognitive impairments. Making websites accessible ensures that people can navigate, understand, and interact with the content regardless of their ability or disability.

        It is important because:

        It promotes inclusivity and equal access to information and services.
        It helps meet legal requirements, as many countries have regulations that mandate accessible web design (e.g., ADA in the U.S.).
        It improves SEO and user experience by adhering to best practices for structure and readability.

11. What are ARIA roles, and how do they improve web accessibility?

        ARIA (Accessible Rich Internet Applications) roles are attributes that can be added to HTML elements to provide additional information about the role or behavior of an element, 
        especially when it doesn’t have inherent semantic meaning. These roles help assistive technologies (like screen readers) interpret and announce the purpose of non-semantic elements to users.

        For example:
        role="button" can be added to a <div> to indicate it functions like a button.


                                                    CSS  CSS  CSS  CSS
******************************************************************************************************************************************
            
1. What is the difference between class and id selectors in CSS?

        Class selectors (.): A class selector is used to apply styles to multiple elements on the page. A single element can have multiple classes, and multiple elements can share the same class.

        css
        Copy
        .myClass {
        color: blue;
        }
        ID selectors (#): An ID selector is used to apply styles to a specific, unique element. An ID should be unique within a page, meaning only one element should have a given ID.

        css
        Copy
        #myId {
        color: red;
        }

2. What is the box model in CSS?

        The CSS box model describes the rectangular boxes generated for elements on a web page, and it consists of the following components:

        Content: The actual content of the element, like text or images.
        Padding: The space between the content and the border. It clears space inside the element.
        Border: A border around the padding (if any).
        Margin: The space outside the border. It separates the element from other elements.


4. What is Flexbox, and how does it work?

        Flexbox (Flexible Box) is a layout model in CSS designed to distribute space along a container and align items in one direction (either horizontally or vertically). It is much more efficient than traditional methods like floats for handling layouts, especially when the size of elements is dynamic.

        Key concepts:

        display: flex;: This makes a container a flex container.
        justify-content: Aligns items along the main axis (e.g., horizontally).
        align-items: Aligns items along the cross axis (e.g., vertically).
        flex-direction: Defines the direction of flex items (row, column, etc.).

5. What is the z-index in CSS?

        The z-index property controls the stacking order of elements along the z-axis (the depth axis). Elements with a higher z-index are stacked on top of elements with a lower z-index.
	
        Only positioned elements (those with position: relative, absolute, fixed, or sticky) can have a z-index.

6. What are CSS Grid and how does it differ from Flexbox?

        CSS Grid is a two-dimensional layout system, meaning it can handle both rows and columns at the same time, while Flexbox is a one-dimensional system (either rows or columns).

        Grid allows you to define both rows and columns and place items in a grid-like structure.
        Flexbox is best used for simple, linear layouts (either row or column).





                                        JS JS JS JS JS JS JS JS JS JS JS JS JS JS 

******************************************************************************************************************************************


1. What is the difference between let, const, and var in JavaScript?

        var: It is function-scoped or globally-scoped (if declared outside a function) and can be re-declared and updated. It is hoisted to the top of its scope with an undefined value.

        javascript
        Copy
        var x = 10;
        let: It is block-scoped, meaning it is only accessible within the block (enclosed by {}). It can be updated, but not re-declared in the same scope.

        javascript
        Copy
        let y = 20;
        const: It is also block-scoped, but it cannot be re-assigned or re-declared in the same scope. Once assigned, its value is constant (immutable for primitive values, but the contents of objects or arrays can still be modified).

        javascript
        Copy
        const z = 30;
        Key Difference:

        var is function-scoped and can be re-declared, while let and const are block-scoped.
        const ensures the variable is immutable (primitive types).

2. What is hoisting in JavaScript?

        Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase before the code is executed.

3. What is the difference between null and undefined in JavaScript?

        undefined: It is the default value of a variable that has been declared but not assigned any value. It also represents the absence of a value in uninitialized variables, function arguments that are not passed, and missing properties in objects.

        null: It is an assignment value that represents the intentional absence of any object value. It is explicitly set to indicate "no value."

4. What is a closure in JavaScript?
        A closure is a function that "remembers" its lexical scope, even when the function is executed outside that scope. In simpler terms, a closure allows a function to access variables from its outer (enclosing) function after that function has finished execution.

        Example:

        javascript
        Copy
        function outer() {
        let count = 0;
        return function inner() {
            count++;
            console.log(count);
        };
        }
5. What are arrow functions, and how do they differ from regular functions?
        
        Arrow functions provide a shorter syntax for writing functions in JavaScript. They also have different behavior for the this keyword compared to regular functions.

6. What is the difference between == and === in JavaScript?

        == (Loose Equality): It compares values for equality, but performs type coercion if the values are of different types. This means it converts the operands to the same type before comparison.

        5 == '5'; // true (type coercion occurs)
        === (Strict Equality): It compares both the value and the type, and does not perform type coercion. Both operands must be of the same type and value.

7.  What are promises in JavaScript?

        A Promise is an object representing the eventual completion or failure of an asynchronous operation. It is a way to handle asynchronous code and avoid callback hell.

        A promise can be in one of three states:

        Pending: The initial state, before the promise is resolved or rejected.
        Resolved (Fulfilled): The operation completed successfully.
        Rejected: The operation failed.

8. What is async/await in JavaScript?
            
        async and await are syntactic sugar built on top of Promises that make asynchronous code look and behave like synchronous code, improving readability and handling of asynchronous operations.

        async: A function declared with async always returns a promise.
        await: Can only be used inside an async function and pauses the execution of the function until the promise is resolved or rejected.
9. What is the this keyword in JavaScript?
        
        The this keyword in JavaScript refers to the context in which a function is executed. It is a reference to the object that is currently invoking the function.

10. What is the spread operator (...) in JavaScript?
        
        The spread operator (...) is used to expand an iterable (like an array or object) into individual elements or properties.
11. What are setTimeout() and setInterval() in JavaScript?

    setTimeout(): It is used to execute a function after a specified delay (in milliseconds). It only runs once after the given time.

    setInterval(): It is used to execute a function repeatedly with a fixed time interval (in milliseconds).

12.  What is the bind() method in JavaScript?
        
        The bind() method creates a new function that, when invoked, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided arguments.

13.  What is the difference between forEach(), map(), and filter() in JavaScript?

        forEach(): It is used to execute a provided function once for each element in an array. It does not return a new array and does not modify the original array.

        const arr = [1, 2, 3];
        arr.forEach(item => console.log(item));  // Logs 1, 2, 3
        map(): It creates a new array populated with the results of calling a provided function on every element in the array.

        const arr = [1, 2, 3];
        const doubled = arr.map(item => item * 2);  // [2, 4, 6]
        filter(): It creates a new array with all elements that pass the test implemented by the provided function.

        const arr = [1, 2, 3, 4];



                                        REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT 

******************************************************************************************************************************************


1. What are the key differences between React components and JavaScript functions?

        React components: They are the building blocks of a React application. A React component can be a function or a class, but it always returns JSX that gets rendered to the UI. Components can manage state, handle side effects, and can be reused.

        Functional components return JSX and can use hooks like useState, useEffect, etc.
        Class components use lifecycle methods like componentDidMount, componentDidUpdate, etc.
        JavaScript functions: These are regular functions in JavaScript that do not return JSX and cannot have state or lifecycle methods unless explicitly extended by React (like in class components).

2. What is JSX in React?
        
        JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript. It is not required in React, but it is commonly used to define components' UI structure. JSX gets compiled to React.createElement() calls which return JavaScript objects representing UI elements.

        Example:
        const element = <h1>Hello, world!</h1>;

3. What are React hooks, and how do they work?

        React hooks are functions that allow functional components to "hook into" React's state and lifecycle features. Hooks were introduced in React 16.8 to make it possible to use state and other React features without writing class components.

        useState(): Manages state in functional components.
        const [count, setCount] = useState(0);
        useEffect(): Performs side effects in functional components (like fetching data, setting up subscriptions, etc.).

        useEffect(() => {
        document.title = `You clicked ${count} times`;
        }, [count]);
        useContext(): Accesses values from a context provider.

        useReducer(): A more advanced hook that works like useState but is suitable for managing complex state logic.

4. What is state in React, and how do you manage it?
 
        In React, state refers to a component’s local data or variables that can change over time and affect the component’s rendering. State is typically managed using the useState hook in functional components or this.state in class components.

        In functional components, useState is used to initialize and update state.

5. What is the virtual DOM in React?

        The virtual DOM is an in-memory representation of the real DOM elements. When the state of a React component changes, React first updates the virtual DOM. It then compares the virtual DOM with the previous version (using a process called reconciliation) and calculates the minimal number of changes needed to update the real DOM. This process helps React update the UI efficiently.

        Advantages:

        Efficiency: The virtual DOM allows React to only update the parts of the DOM that need to be changed, reducing the performance overhead.
        Faster updates: By minimizing direct DOM manipulations, React improves rendering speed, making it more suitable for dynamic web applications.

6. What is the purpose of key prop in React lists?

        In React, the key prop is used to uniquely identify each element in a list of elements. This helps React optimize rendering by knowing which items changed, added, or removed. It is especially important when rendering dynamic lists, like those created using .map().

        Example:

        jsx
        Copy
        const list = ['apple', 'banana', 'cherry'];

        const List = () => (
        <ul>
            {list.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        );
        By using a key, React can efficiently update and re-render only the necessary parts of the list when the state changes.

7. What is the Context API in React?
         
         Context API is a way to pass data through the component tree without having to manually pass props down at every level. It is useful for managing global state, such as user authentication, themes, or language settings, across the application.

        To use Context, you need to:

        Create a context using React.createContext().
        Provide a value to the context at a higher level in your component tree using a <Provider> component.
        Consume the value using useContext() or the <Context.Consumer> component.

8. What is the difference between componentDidMount() and useEffect() in React?

        componentDidMount(): This is a lifecycle method in class components that is called after the component has been rendered to the screen. It's commonly used for fetching data or setting up subscriptions.

        jsx
        Copy
        class MyComponent extends React.Component {
        componentDidMount() {
            console.log('Component mounted');
        }
        
        render() {
            return <div>Hello</div>;
        }
        }
        useEffect(): This is the hook equivalent in functional components. It runs after the first render and can be used to manage side effects like data fetching, timers, or DOM manipulation. You can control when useEffect runs by passing an array of dependencies

9. What is React Router, and why do we use it?

        React Router is a library used for handling navigation and routing in React applications. It enables the creation of single-page applications (SPAs) where navigation between different components does not require a page reload. React Router allows us to map components to URLs, enabling dynamic routing.

        <Route>: Maps a URL to a component.
        <Link>: Used to navigate between pages without refreshing the page.

10. What is prop drilling in React, and how can you avoid it?
        
        Prop drilling refers to the process of passing data from a parent component to a deeply nested child component through multiple layers of intermediate components. This can become cumbersome if you have deeply nested components and need to pass props through many levels.

        To avoid prop drilling, you can use:

        React Context API: Allows you to pass data through the component tree without manually passing props.
        State management libraries like Redux, MobX, or Zustand, which provide global stores that can be accessed anywhere in the component tree.

11. What is the purpose of useCallback() in React?
        
        The useCallback() hook is used to memoize functions in React. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is useful when you pass functions to child components, especially when they are used as props in highly re-rendered components, to avoid unnecessary re-renders.

12. What is the useEffect() hook and what are its use cases?
       
        The useEffect() hook is used to handle side effects in functional components. Side effects include tasks like data fetching, subscriptions, manually updating the DOM, etc. useEffect runs after the component renders, and you can control when it runs by providing a dependency array.

13. What is Redux, and why do we use it in React applications?
        
        Redux is a state management library for JavaScript applications, commonly used with React. It provides a predictable state container that helps manage the state of an application in a consistent way across all components. Redux is based on three fundamental principles:

        Single Source of Truth: The entire application state is stored in a single object (store).
        State is Read-Only: The state cannot be directly modified. To change the state, you must dispatch an action.
        Changes are Made with Pure Functions: The state is changed by reducers, which are pure functions that describe how the state should change based on actions.

14. What is an Action in Redux?

        An Action is a plain JavaScript object that describes an event or a change that should happen in the application. Each action must have a type property (which is a string) to describe the action and can optionally include additional data as the payload.

15. What is a Reducer in Redux?

        A Reducer is a pure function in Redux that takes the current state and an action as arguments, processes the action, and returns a new state. The reducer function must not mutate the existing state but return a new object/state.

16. What is the Redux store, and how do you create it?

        The Redux store is the central hub that holds the application's state. It provides methods to:

        getState(): Retrieve the current state.
        dispatch(action): Dispatch actions to trigger state updates.
        subscribe(listener): Subscribe to changes in the store.
        To create the Redux store, you use the createStore() function, passing in a reducer function.

17. What is put() in Redux-Saga?

        The put() effect is used to dispatch an action in Redux from within a saga. It is similar to the dispatch() function but is used inside a generator function to dispatch actions.



                                        GRAPHQL GRAPHQL GRAPHQL GRAPHQL GRAPHQL GRAPHQL GRAPHQL GRAPHQL GRAPHQL GRAPHQL 
                ******************************************************************************************************************************************


1. What is GraphQL and how is it different from REST?
       
        GraphQL is a query language for your API and a runtime for executing those queries by using a type system you define for your data. It was developed by Facebook and provides an alternative to traditional REST APIs.

        Key differences between GraphQL and REST:

        Single Endpoint: GraphQL uses a single endpoint for all operations (queries, mutations, subscriptions), whereas REST uses multiple endpoints (one for each resource).
        Client-Specified Data: In GraphQL, the client specifies exactly what data it needs in the query. In REST, the server defines the structure of the response, and the client receives a fixed set of data.
        Efficient Data Fetching: GraphQL avoids over-fetching or under-fetching data. The client can fetch only the data it needs, while REST often returns unnecessary data or requires multiple requests for related data.
        Versioning: With REST, API versioning may be required when changes happen. In GraphQL, there is no need for versioning because the client queries only the data it needs based on the schema.

2. What is a GraphQL Schema?
      
        A GraphQL Schema is a central component of GraphQL that defines the structure of your API. It specifies the types of data available, the fields on each type, and the operations that can be performed (queries, mutations, and subscriptions).

        A schema defines:

        Types: Objects that describe your data.
        Queries: Operations to fetch data.
        Mutations: Operations to modify data.
        Subscriptions: Real-time updates from the server.

3. What is a Query in GraphQL?
       
        A Query in GraphQL is used to fetch data from the server. It allows clients to request exactly the data they need by specifying fields within the query. A query can request one or multiple fields from the server, and each field in the query corresponds to a resolver function on the server.

4.  What is a Mutation in GraphQL?

        A Mutation in GraphQL is used to modify or write data to the server. It is similar to a POST, PUT, or DELETE request in REST, but with the flexibility of GraphQL’s query language. Mutations can create, update, or delete data.

        Mutations are defined in the GraphQL schema and can return the modified data after the operation is performed.

5. What is the difference between Queries and Mutations in GraphQL?

    Queries are used to fetch data from the server (read-only operations). They are similar to GET requests in REST.
    Mutations are used to modify data on the server (create, update, or delete operations). They are similar to POST, PUT, or DELETE requests in REST.

6. What are GraphQL Subscriptions?

    GraphQL Subscriptions are used to maintain real-time connections between the client and the server. Subscriptions allow the server to send updates to the client when certain events occur, like when data changes or when an action is performed.



https://share.cleanshot.com/Q148M4z4



Coding



1: create a countdown timer in react, which will take the start time in millisecond, and display the countdown time accordingly
the background color of bar is grey color and the decrement line color will be blue.
take one warning threshold value, on reaching of which the color of timer line will change to red.
The timer will be on second.

2: Digital clock with timezone, which changes wrt to timezone

3: Build a Dropdown Menu, the dropdown must be searchable, if search item is not available  we should be able to add in the list


4: Build a Button component and test case for the same

5: Create a chatbot with hard coding data and communicate from 2 end
	


Reference: https://css-tricks.com/timer-bars-in-css-with-custom-properties/
