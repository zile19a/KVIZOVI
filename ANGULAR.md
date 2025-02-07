# Angular Workshop Quiz - Answers & Explanations

Section 1: Introduction to Angular
1. What is Angular?
A) A JavaScript library for building SPAs
B) A JavaScript framework for creating reactive Single Page Applications (SPAs)
C) A CSS framework for responsive design
D) A version control system
2. Which statement about Angular is TRUE?
A) Angular is used to create static web pages
B) Angular requires frequent page reloads
C) Angular dynamically updates the DOM at runtime
D) Angular does not support API calls
3. What was the original version of Angular called?
A) AngularX
B) AngularJS
C) Angular 2
D) Angular Core
4. How often is a new major version of Angular released?
A) Every year
B) Every 6 months
C) Every 3 years
D) Every 2 years
Section 2: Angular Setup & File Structure
5. What is required to install Angular CLI?
A) Only npm
B) NodeJS and npm
C) TypeScript and Babel
D) Only NodeJS
6. What is the command to create a new Angular project?
A) ng generate app my-app
B) ng create project my-app
C) ng new my-first-app
D) npm start
7. Which folder in an Angular project contains the application code?
A) node_modules
B) src
C) config
D) public
8. What is the role of index.html in an Angular app?
A) It is the main HTML page where Angular is bootstrapped
B) It contains all JavaScript logic
C) It stores backend APIs
D) It is used for routing configuration
Section 3: TypeScript & Angular Bootstrapping
9. What is TypeScript?
A) A language that compiles to Python
B) A superset of JavaScript with additional features like Types and Interfaces
C) A JavaScript framework
D) A runtime environment
10. Where is Angular bootstrapped?
A) index.html
B) main.ts
C) app.module.ts
D) app.component.ts
11. Which file is responsible for bootstrapping the root component?
A) app.module.ts
B) index.html
C) app.component.html
D) config.js
Section 4: Components and Data Binding
12. What are Angular components?
A) Small reusable UI parts
B) The backend services in Angular
C) Global CSS styles
D) External libraries for UI
13. How do you generate a new Angular component using CLI?
A) ng g c <name>
B) ng create component <name>
C) ng component <name>
D) npm component create <name>
14. What is the correct syntax for string interpolation in Angular?
A) { data }
B) {{ data }}
C) [data]
D) (( data ))
15. Which directive is used for event binding in Angular?
A) [event]
B) {{ event }}
C) (event)
D) *event
16. What is two-way data binding in Angular?
A) Binding from the template to the component
B) Synchronizing data between the component and template
C) Using inline CSS in components
D) Automatically updating external API data
Section 5: Directives & Dependency Injection
17. What are directives in Angular?
A) Commands for external services
B) Instructions in the DOM that modify elements
C) A way to manage CSS styles
D) A feature only available in AngularJS
18. Which of the following is a structural directive?
A) ngFor
B) ngClass
C) ngModel
D) ngBind
19. How do you create a service in Angular using CLI?
A) ng new service <name>
B) ng g s <name>
C) npm service create <name>
D) ng create <name>Service
20. What is Dependency Injection in Angular?
A) A method to manage Angular lifecycle hooks
B) A way to manually create instances of services
C) A mechanism to automatically provide services to components
D) A feature used only in HTTP requests
Section 6: Routing & Observables
21. What is the purpose of routing in Angular?
A) To manage backend API calls
B) To handle navigation between different views in an SPA
C) To import TypeScript modules
D) To compile HTML files
22. What is the placeholder for displaying routed views?
A) <ng-outlet>
B) <component-root>
C) <router-outlet>
D) <view-container>
23. What is an Observable in Angular?
A) A function that executes only once
B) A data source that emits multiple values over time
C) A JavaScript object storing API responses
D) A synchronous event handler
24. What are the three types of values an Observable can emit?
A) Data, Errors, Completion
B) Events, Props, State
C) Variables, Methods, Functions
D) Numbers, Strings, Booleans
Section 7: HTTP Requests & Forms
25. Which module is required for making HTTP requests in Angular?
A) HttpModule
B) HttpClientModule
C) FetchModule
D) RequestModule
26. Which approach does Angular use for forms?
A) Only Template-driven forms
B) Only Reactive forms
C) Both Template-driven and Reactive forms
D) JSON-based form handling
27. Which directive is used to bind form data in Angular?
A) ngSubmit
B) ngModel
C) ngControl
D) ngForm

## Section 1: Introduction to Angular

### 1. What is Angular?
✅ **B) A JavaScript framework for creating reactive Single Page Applications (SPAs)**  
**Explanation:** Angular is a front-end framework developed by Google for building dynamic SPAs.

---

### 2. Which statement about Angular is TRUE?
✅ **C) Angular dynamically updates the DOM at runtime**  
**Explanation:** Angular uses a two-way data binding mechanism to dynamically update the DOM without reloading the page.

---

### 3. What was the original version of Angular called?
✅ **B) AngularJS**  
**Explanation:** The first version of Angular was called **AngularJS**, followed by Angular 2+ (a complete rewrite).

---

### 4. How often is a new major version of Angular released?
✅ **B) Every 6 months**  
**Explanation:** Angular follows a **biannual release cycle** for new major versions.

---

## Section 2: Angular Setup & File Structure

### 5. What is required to install Angular CLI?
✅ **B) NodeJS and npm**  
**Explanation:** Angular CLI requires **Node.js** and **npm** to install dependencies and run Angular applications.

---

### 6. What is the command to create a new Angular project?
✅ **C) `ng new my-first-app`**  
**Explanation:** The correct Angular CLI command for creating a new project is `ng new <project-name>`.

---

### 7. Which folder in an Angular project contains the application code?
✅ **B) `src`**  
**Explanation:** The `src` folder contains all application files, including components, modules, and services.

---

### 8. What is the role of `index.html` in an Angular app?
✅ **A) It is the main HTML page where Angular is bootstrapped**  
**Explanation:** The `index.html` file contains the root element where Angular mounts the application.

---

## Section 3: TypeScript & Angular Bootstrapping

### 9. What is TypeScript?
✅ **B) A superset of JavaScript with additional features like Types and Interfaces**  
**Explanation:** TypeScript extends JavaScript by adding static typing, interfaces, and other features.

---

### 10. Where is Angular bootstrapped?
✅ **B) `main.ts`**  
**Explanation:** Angular starts execution in the `main.ts` file, which bootstraps the root module.

---

### 11. Which file is responsible for bootstrapping the root component?
✅ **A) `app.module.ts`**  
**Explanation:** The `app.module.ts` file declares and bootstraps the root Angular component.

---

## Section 4: Components and Data Binding

### 12. What are Angular components?
✅ **A) Small reusable UI parts**  
**Explanation:** Components are the building blocks of an Angular application.

---

### 13. How do you generate a new Angular component using CLI?
✅ **A) `ng g c <name>`**  
**Explanation:** The command `ng g c` (short for `ng generate component`) creates a new Angular component.

---

### 14. What is the correct syntax for string interpolation in Angular?
✅ **B) `{{ data }}`**  
**Explanation:** String interpolation in Angular is done using **double curly braces**.

---

### 15. Which directive is used for event binding in Angular?
✅ **C) `(event)`**  
**Explanation:** Event binding uses parentheses around the event name, e.g., `(click)="onClick()"`.

---

### 16. What is two-way data binding in Angular?
✅ **B) Synchronizing data between the component and template**  
**Explanation:** Two-way data binding ensures changes in the model update the UI and vice versa.

---

## Section 5: Directives & Dependency Injection

### 17. What are directives in Angular?
✅ **B) Instructions in the DOM that modify elements**  
**Explanation:** Directives add behavior to elements by modifying their properties or structure.

---

### 18. Which of the following is a structural directive?
✅ **A) `ngFor`**  
**Explanation:** Structural directives (`*ngIf`, `*ngFor`, etc.) modify the DOM structure dynamically.

---

### 19. How do you create a service in Angular using CLI?
✅ **B) `ng g s <name>`**  
**Explanation:** The correct command to generate a new service is `ng generate service <name>` or `ng g s <name>`.

---

### 20. What is Dependency Injection in Angular?
✅ **C) A mechanism to automatically provide services to components**  
**Explanation:** Dependency Injection allows Angular to manage dependencies automatically.

---

## Section 6: Routing & Observables

### 21. What is the purpose of routing in Angular?
✅ **B) To handle navigation between different views in an SPA**  
**Explanation:** Angular’s Router Module manages navigation between different application views.

---

### 22. What is the placeholder for displaying routed views?
✅ **C) `<router-outlet>`**  
**Explanation:** The `<router-outlet>` directive is a placeholder where Angular renders routed components.

---

### 23. What is an Observable in Angular?
✅ **B) A data source that emits multiple values over time**  
**Explanation:** Observables allow handling asynchronous operations like HTTP requests.

---

### 24. What are the three types of values an Observable can emit?
✅ **A) Data, Errors, Completion**  
**Explanation:** Observables emit **data**, **error messages**, and **completion signals**.

---

## Section 7: HTTP Requests & Forms

### 25. Which module is required for making HTTP requests in Angular?
✅ **B) `HttpClientModule`**  
**Explanation:** `HttpClientModule` allows Angular to make HTTP requests to APIs.

---

### 26. Which approach does Angular use for forms?
✅ **C) Both Template-driven and Reactive forms**  
**Explanation:** Angular supports **both Template-driven forms and Reactive forms**.

---

### 27. Which directive is used to bind form data in Angular?
✅ **B) `ngModel`**  
**Explanation:** The `ngModel` directive is used for two-way data binding in template-driven forms.

---

## **Final Answer Key**

| **Question** | **Correct Answer** |
|-------------|------------------|
| 1 | B) A JavaScript framework for creating SPAs |
| 2 | C) Angular dynamically updates the DOM at runtime |
| 3 | B) AngularJS |
| 4 | B) Every 6 months |
| 5 | B) NodeJS and npm |
| 6 | C) `ng new my-first-app` |
| 7 | B) `src` |
| 8 | A) It is the main HTML page where Angular is bootstrapped |
| 9 | B) A superset of JavaScript |
| 10 | B) `main.ts` |
| 11 | A) `app.module.ts` |
| 12 | A) Small reusable UI parts |
| 13 | A) `ng g c <name>` |
| 14 | B) `{{ data }}` |
| 15 | C) `(event)` |
| 16 | B) Synchronizing data between the component and template |
| 17 | B) Instructions in the DOM that modify elements |
| 18 | A) `ngFor` |
| 19 | B) `ng g s <name>` |
| 20 | C) Automatically provide services to components |
| 21 | B) Handle navigation in SPA |
| 22 | C) `<router-outlet>` |
| 23 | B) A data source emitting values |
| 24 | A) Data, Errors, Completion |

---
