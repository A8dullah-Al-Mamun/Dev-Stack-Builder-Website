# 🚀 Dev Stack — Build Your Ideal Tech Stack

Dev Stack is a modern and responsive web application built with **React, TypeScript, Tailwind CSS, and DaisyUI**. It allows developers to explore different technologies, create their own custom tech stack, and manage selected technologies easily.

The project also includes async data loading from a local JSON file, duplicate prevention, responsive design, and toast notifications for better user interaction.

## 🛠️ Technologies Used

- **React.js + Vite** — Used for building the frontend and development environment
- **TypeScript** — Used for type safety and better code maintainability
- **Tailwind CSS** — Used for utility-based and responsive styling
- **DaisyUI** — Used for ready-made UI components
- **React-Toastify** — Used for showing toast notifications

## ✨ Key Features

### 1. Interactive Technology Explorer

- Browse different technologies in a responsive 3-column grid
- See technology details such as category, difficulty level, and badges
- Explore the available technologies through a clean and simple interface

### 2. Custom Tech Stack Management

- Add technologies to your personal stack
- Prevent duplicate technologies from being added
- Remove individual technologies from the stack
- Clear the complete stack with one click
- Keep track of the selected technologies

### 3. Responsive & Interactive UI

- Fully responsive for mobile, tablet, and desktop devices
- Toast notifications for add, remove, and clear actions
- Clean light-themed user interface
- Responsive navigation and footer
- Simple and user-friendly interactions

---

## 📝 React Concept Answers

### 1. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. It makes React code easier to read and understand by combining the UI structure and JavaScript logic in one place.

JSX is used in React because it makes creating and managing user interfaces simpler and more readable. It also allows us to use JavaScript expressions directly inside the UI using curly braces `{}`.


### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component, and they are read-only. On the other hand, **state** is data managed inside a component that can change based on user actions. When the state changes, React updates the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a functional component. In this project, I used it to store the technology data, manage the selected stack items, and update the UI when the stack changes.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to handle side effects in React, such as fetching data or working with external operations. I used it to load the `technologies.json` file when the component starts so that the technology data can be fetched and displayed.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify each item in a list. It helps React understand which items are changed, added, or removed, so it can update the UI more efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a certain condition. In this project, I used it to check whether the custom stack is empty or contains selected technologies.

```tsx
{stack.length === 0 ? <EmptyState /> : <StackList />}