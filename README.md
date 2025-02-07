# KVIZOVI


# React Workshop Quiz - Answers & Explanations

1. Which of the following companies does NOT use React?
    A) Meta
    B) Netflix
    C) Airbnb
    D) Microsoft
2. What is NOT an advantage of React according to the workshop?
    A) Easy to learn and use
    B) Poor documentation
    C) Reusable components
    D) SEO-friendly
3. What is JSX in React?
    A) A new programming language
    B) A syntax extension for JavaScript
    C) A library for rendering HTML
    D) A React component
4. How do you pass data to a React component?
    A) Using the state property
    B) Using a function
    C) Using props
    D) Using render()
5. What is the correct way to initialize a state variable in React?
    A) const age = 42;
    B) const [age, setAge] = useState(42);
    C) let age = this.state.age;
    D) this.age = 42;
6. Which of these HTTP methods is idempotent?
    A) GET
    B) POST
    C) PATCH
    D) None of the above
7. When does a React component re-render?
    A) When it receives new props
    B) When its state changes
    C) When forceUpdate() is called
    D) All of the above
8. What does the useEffect hook do in React?
    A) It runs a function when a component is first rendered
    B) It manages side effects in a component
    C) It only runs once when the page loads
    D) It replaces the need for useState
9. Which statement about useRef is true?
    A) useRef creates a new state variable
    B) Changing the .current property of a useRef object triggers a re-render
    C) useRef allows access to DOM elements without causing re-renders
    D) useRef is used to declare lifecycle methods
10. What is the purpose of the dependency array in useEffect?
    A) It tells React when to re-run the effect
    B) It prevents the effect from running
    C) It forces the effect to always run
    D) It disables re-renders can you give me the correct answers and explanations for this part ?

## 1. Which of the following companies does NOT use React?
✅ **D) Microsoft**  
**Explanation:** Microsoft mainly uses its own frameworks, such as Blazor and ASP.NET, rather than React. Meanwhile, **Meta, Netflix, and Airbnb** actively use React in their applications.

---

## 2. What is NOT an advantage of React according to the workshop?
✅ **B) Poor documentation**  
**Explanation:** While React has many advantages (**easy to learn, reusable components, SEO-friendly**), one of its known drawbacks is **poor documentation**, as it evolves quickly and lacks detailed official documentation at times.

---

## 3. What is JSX in React?
✅ **B) A syntax extension for JavaScript**  
**Explanation:** JSX (JavaScript XML) **allows developers to write HTML-like code within JavaScript**. It is not a new programming language but rather a syntax extension that simplifies UI development in React.

Example:
```jsx
const element = <h1>Hello, World!</h1>;
```
JSX compiles to:
```js
const element = React.createElement('h1', {}, 'Hello, World!');
```

---

## 4. How do you pass data to a React component?
✅ **C) Using props**  
**Explanation:** Props (**short for properties**) are used to pass data **from a parent component to a child component** in React.

Example:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
const element = <Welcome name="Sara" />;
```
Here, `"Sara"` is passed as a prop to the `Welcome` component.

---

## 5. What is the correct way to initialize a state variable in React?
✅ **B) `const [age, setAge] = useState(42);`**  
**Explanation:** In React, the `useState` hook is used to **declare state variables** in functional components.

Example:
```jsx
const [age, setAge] = useState(42);
setAge(28); // Updates state
```
- **A) Incorrect:** `const age = 42;` → This does not create a state variable.  
- **C & D) Incorrect:** These are class-based React approaches (before hooks were introduced).  

---

## 6. Which of these HTTP methods is idempotent?
✅ **A) GET**  
**Explanation:** **Idempotent methods** produce the **same result** regardless of how many times they are called.

- **GET** ✅ → Fetches data without modifying it (safe & idempotent).  
- **PUT & DELETE** ✅ → Idempotent but not safe (they modify data).  
- **POST & PATCH** ❌ → **Not idempotent**, as they modify data every time they are called.

---

## 7. When does a React component re-render?
✅ **D) All of the above**  
**Explanation:** A React component re-renders when:  
1. **Props change** (new data is passed).  
2. **State changes** (via `setState` or `useState`).  
3. **`forceUpdate()` is called** (manually forces a re-render).  

Example:
```jsx
const [count, setCount] = useState(0);
setCount(count + 1); // Causes re-render
```

---

## 8. What does the `useEffect` hook do in React?
✅ **B) It manages side effects in a component**  
**Explanation:** `useEffect` is used to perform **side effects** such as **fetching data, updating the DOM, or setting up event listeners**.  

Example:
```jsx
useEffect(() => {
  console.log("Component mounted!");
}, []);
```
- **A) Incorrect:** It **runs after** the component renders, not before.  
- **C) Incorrect:** It can run multiple times, not just once.  
- **D) Incorrect:** It **does not replace** `useState`.  

---

## 9. Which statement about `useRef` is true?
✅ **C) `useRef` allows access to DOM elements without causing re-renders**  
**Explanation:**  
- `useRef` is used to store **references to DOM elements or mutable values** without triggering a re-render.  
- The `.current` property can be updated **without affecting the component's state**.  

Example:
```jsx
const inputRef = useRef(null);

function focusInput() {
  inputRef.current.focus();
}

return (
  <input ref={inputRef} />
  <button onClick={focusInput}>Focus Input</button>
);
```

- **A) Incorrect:** `useRef` does **not create state variables**.  
- **B) Incorrect:** Updating `.current` does **not trigger re-renders**.  
- **D) Incorrect:** `useRef` is **not used for lifecycle methods**.  

---

## 10. What is the purpose of the dependency array in `useEffect`?
✅ **A) It tells React when to re-run the effect**  
**Explanation:**  
- The **dependency array** determines **when the effect runs**.  
  ```jsx
  useEffect(() => {
    console.log("Runs only when count changes");
  }, [count]); 
  ```
- **`[]` (empty array) → Runs once (on mount only).**  
- **`[state]` → Runs when `state` changes.**  
- **`undefined` → Runs on every render (not recommended).**  

- **B) Incorrect:** It does **not prevent the effect from running** entirely.  
- **C) Incorrect:** It does **not force it to always run** (that happens when there’s no array).  
- **D) Incorrect:** It **does not disable re-renders**.  

---

## **Final Answer Key**

| **Question** | **Correct Answer** |
|-------------|------------------|
| 1 | D) Microsoft |
| 2 | B) Poor documentation |
| 3 | B) A syntax extension for JavaScript |
| 4 | C) Using props |
| 5 | B) `const [age, setAge] = useState(42);` |
| 6 | A) GET |
| 7 | D) All of the above |
| 8 | B) It manages side effects in a component |
| 9 | C) `useRef` allows access to DOM elements without causing re-renders |
| 10 | A) It tells React when to re-run the effect |

---

This **detailed answer guide** provides **clear explanations** for each question. Let me know if you need further clarification! 🚀



# React Workshop Quiz - Markdown Format

## Section 1: React Basics

### 2. Which of the following companies use React?
✅ **D) Both A and C**  
**Explanation:** React is used by major companies such as **Netflix, Uber, Yahoo!, Airbnb, Dropbox, and The New York Times**.

---

### 3. Which of the following is NOT an advantage of React?
✅ **B) Poor documentation**  
**Explanation:** While React has several advantages (**easy to learn, reusable components, performance enhancement, and SEO-friendly nature**), **poor documentation** is often cited as a drawback due to its rapidly evolving nature.

---

### 4. Which of the following is considered a disadvantage of React?
✅ **A) High pace of development**  
**Explanation:** React evolves quickly, making it difficult for developers to keep up with the latest features and updates.

---

## Section 2: JSX and Components

### 5. What does JSX stand for?
✅ **B) JavaScript XML**  
**Explanation:** JSX allows developers to write HTML-like syntax within JavaScript. It is then transpiled into JavaScript by Babel.

---

### 6. What is the equivalent of the following JSX code?
```jsx
const myelement = <h1>I Love JSX!</h1>;
```
✅ **B) `const myelement = React.createElement('h1', {}, 'I Love JSX!');`**  
**Explanation:** JSX is syntactic sugar for `React.createElement`.

---

### 7. What is a key rule about React components?
✅ **A) They must return a single DOM element**  
**Explanation:** React components **must return a single parent element**. Multiple sibling elements should be wrapped in a fragment (`<>...</>`).

---

### 8. What is the correct syntax for a functional component in React?
✅ **D) Both A and C**  
**Explanation:** Both answers A and C are correct ways to define a functional component in React.

---

## Section 3: Props and State

### 9. How are props passed to a React component?
✅ **A) As function arguments**  
**Explanation:** Props are passed to components as function arguments and accessed via `props`.

---

### 10. What is a key difference between props and state?
✅ **B) Props are immutable, state is mutable**  
**Explanation:** Props cannot be changed inside the component, while state can be updated using `useState` or `setState`.

---

### 11. What will happen when `setState()` is called in a class component?
✅ **A) The component will re-render**  
**Explanation:** Calling `setState()` updates the component state and triggers a re-render.

---

### 12. Which of the following correctly initializes a state variable using hooks?
✅ **C) `const [count, setCount] = useState(0);`**  
**Explanation:** `useState` is the correct way to define a state variable in a functional component.

---

## Section 4: Lifecycle and Hooks

### 13. When does a React component re-render?
✅ **D) All of the above**  
**Explanation:** A React component re-renders when:
- Its **state changes**
- Its **props change**
- The **`forceUpdate()` method is called**

---

### 14. What is the main purpose of the `useEffect` hook?
✅ **A) To manage side effects in a component**  
**Explanation:** `useEffect` is used to handle side effects like data fetching, event listeners, and DOM manipulations.

---

### 15. Which dependency array in `useEffect` will make it run only once?
✅ **B) `[ ]`**  
**Explanation:** Providing an **empty dependency array** ensures that the effect runs only once (on mount).

---

### 16. Which of the following is NOT a valid use of `useEffect`?
✅ **C) Modifying a component's state directly**  
**Explanation:** State should be updated via `setState` and not modified directly.

---

## Section 5: Refs and Side Effects

### 17. What does `useRef` do?
✅ **A) Creates a reference to an element without causing re-renders**  
**Explanation:** `useRef` is commonly used to store a reference to a DOM element without triggering re-renders.

---

### 18. What happens when `.current` is updated in `useRef`?
✅ **B) Nothing, unless manually handled**  
**Explanation:** Updating `.current` does not trigger a re-render unless used within an effect.

---

### 19. What does the following function do?
```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```
✅ **B) Uses `useRef` to focus an input field when clicking a button**  
**Explanation:** The `useRef` hook is used here to reference the `<input>` field and focus it when the button is clicked.

---

## Section 6: React Workshop Summary

### 20. What was the main goal of the workshop?
✅ **B) Create a simple Todo application**  
**Explanation:** The React workshop focused on building a simple Todo app using React concepts.

---

### 21. What is required to install the dependencies for the workshop?
✅ **A) `npm install`**  
**Explanation:** Running `npm install` installs the dependencies specified in `package.json`.

---

### 22. What tool is recommended for debugging React applications?
✅ **B) React Developer Tools extension**  
**Explanation:** React Developer Tools is an extension that allows developers to inspect React component trees and states.

---

### 23. How can you start the development server in the workshop project?
✅ **C) `npm start`**  
**Explanation:** `npm start` runs the local development server in a React project.

---

## **Final Answer Key**

| **Question** | **Correct Answer** |
|-------------|------------------|
| 2 | D) Both A and C |
| 3 | B) Poor documentation |
| 4 | A) High pace of development |
| 5 | B) JavaScript XML |
| 6 | B) `React.createElement('h1', {}, 'I Love JSX!')` |
| 7 | A) They must return a single DOM element |
| 8 | D) Both A and C |
| 9 | A) As function arguments |
| 10 | B) Props are immutable, state is mutable |
| 11 | A) The component will re-render |
| 12 | C) `useState(0);` |
| 13 | D) All of the above |
| 14 | A) To manage side effects in a component |
| 15 | B) `[ ]` |
| 16 | C) Modifying a component's state directly |
| 17 | A) Creates a reference to an element without causing re-renders |
| 18 | B) Nothing, unless manually handled |
| 19 | B) Uses `useRef` to focus an input field |
| 20 | B) Create a simple Todo application |
| 21 | A) `npm install` |
| 22 | B) React Developer Tools extension |
| 23 | C) `npm start` |

---

