# ReactJs

## assignment
- library vs framework
- cdn
- crossorigin
- dom
- what is async & defer
- create element practice
- react.development vs react.production
- emmet
- window - who give us this keyword
- in react when we pass attributes in {this} so this called props in react
- minimayer file
- bundler( example: webpack, vit, parcel )/package/module
- how create react app works??!
- npm vs yarn what is npm and yarn.
- ~ - tilde and ^ - caret in reactjs
- what is this package.lock
- work on my local and not on production part
- node module memes
- npx what is this?
- why we need sever?
- what is live server?
- file watcher algorithm(len - C++) 
- http and https difference
- why react is fast ?
- what is transitive dependencies ?
- read parcel documentation
- polyfill
- react reconciliation key read this in documentation of react
- what is JSX in react(html inside javascript this statement is wrong)
- bebal is compiler for next js language
- jsx read and compile by babel
- in backend jsx is use react.createElement
- jsx is inhence readability
- babel is along with parcel
- what is react component, functional(new) and class based components(old)
- function component is normal function
- component compositiion
- react fragment
- jsx has only one perent
- join in array in js
- cofing driven ui
- ?. in optional chainning in js
- diff algorithm in react

## some statement

- react element is nothing but object.

### framwork vs library
1. library
- A library is a collection of reusable code modules or functions that can be incorporated into your own software projects.
- Libraries typically provide specific functionalities or utilities that you can use in your code.
- When you use a library, you typically call its functions or methods directly from your code.
- Examples of libraries include standard libraries like those in Python, Java, or Rust, as well as third-party libraries like NumPy for Python or Serde for Rust.

2. framework
- A framework is a more comprehensive software platform that provides a structure or architecture for building applications.
- Frameworks often dictate the overall design and flow of an application by providing guidelines, conventions, and sometimes even enforcing patterns.
- Unlike libraries, frameworks often control the flow of the program and call your code instead of the other way around.
- Frameworks can include libraries, but they also include additional tools, design patterns, and sometimes even pre-built components.
- Examples of frameworks include Django and Flask for web development in Python, Ruby on Rails for Ruby, and Spring for Java.

### cdn
- In web development, the crossorigin attribute is used in HTML to specify how the browser should handle loading of cross-origin resources, such as images, fonts, scripts, or stylesheets, from another domain. Cross-origin resources are those that are hosted on a different domain, protocol, or port from the current webpage.

### dom
- DOM stands for Document Object Model. The DOM is a programming interface for web documents, which represents the structure of HTML or XML documents as a tree-like structure. Each node in the tree represents an element, attribute, or piece of text in the document.
- the DOM is a fundamental concept in web development, providing a standardized way to represent and manipulate the structure and content of web documents, enabling the creation of dynamic and interactive web applications.

### async & defer
- async and defer are attributes used with the <script> tag to control how JavaScript files are downloaded and executed in an HTML document.

1. async
- The async attribute specifies that the script should be executed asynchronously as soon as it's available, without blocking the HTML parsing.
- When a script with the async attribute is encountered, the browser will continue to parse and render the HTML content, and the script will be fetched asynchronously. Once the script is downloaded, it will be executed without waiting for other scripts or resources to finish downloading or for the HTML parsing to complete.
- It's important to note that scripts with the async attribute may not execute in the order they appear in the HTML document, as they will execute as soon as they're available.
- This attribute is commonly used for scripts that are not dependent on other scripts or need to be loaded and executed quickly, such as analytics scripts or scripts for loading third-party libraries.

2. defer
- The defer attribute specifies that the script should be executed after the HTML parsing is complete, but before the DOMContentLoaded event is fired.
- When a script with the defer attribute is encountered, the browser will continue to parse and render the HTML content, and the script will be fetched asynchronously. However, it will be executed only after the HTML parsing is finished but before the DOMContentLoaded event is triggered.
- Unlike async, scripts with the defer attribute will be executed in the order they appear in the HTML document.
- This attribute is commonly used for scripts that need to manipulate the DOM or interact with other elements on the page but can be deferred until after the page structure is fully parsed.
- **HTML parsing** : HTML parsing is the process by which a web browser or HTML parser reads and interprets HTML code to create the Document Object Model (DOM) tree, which represents the structure of the web page.
- **DOM tree** : The DOM tree is a hierarchical representation of the web page's content, including elements, attributes, and text nodes.

### react.development vs react.production
- react.development.js and react.production.min.js are two versions of the React library optimized for different environments: development and production.

1. react.development.js:
- This version of React is intended for development purposes.
- It includes additional warnings and debugging information to help developers identify and fix issues during development.
- The code is not minified or optimized for size, which means it's larger and may have slower performance compared to the production version.
- It's typically used during development to take advantage of the additional debugging features and to facilitate easier troubleshooting.

2. react.production.min.js:
- This version of React is optimized for production use.
- It has been minified and stripped of unnecessary code to reduce its size and improve performance.
- It does not include the additional warnings and debugging information present in the development version, making it smaller and more suitable for deployment in production environments.
- It's used in production environments to ensure faster load times and better performance for end-users.

### emmet
-Emmet is a powerful toolkit for web developers that helps streamline and speed up the process of writing HTML and CSS code. It's essentially a set of abbreviations and shortcuts that expand into HTML or CSS code snippets. Emmet allows developers to write code faster and more efficiently by typing shorthand expressions and then expanding them into full HTML or CSS markup.

### window - who give us this keyword
- In web development, the window object represents the global window in a browser environment. It is the top-level browsing context that contains the Document Object Model (DOM), which represents the structure of the currently loaded web page. The window object provides access to various properties and methods related to the browser window and the browsing context.
- the window object represents the global window in a browser environment and provides access to various properties and methods related to the browser window, the browsing context, and the DOM. The this keyword in JavaScript refers to the current execution context, which in many cases, especially in the global scope of a browser environment, is the window object.

### in react when we pass attributes in {this} so this called props in react
- In React, when we pass attributes using {} syntax, it's not the this keyword that we're passing, but rather data or values that we want to pass to a component. These values are typically referred to as "props" (short for properties) in React.
- So, in React, when we use {} to pass attributes to components, we're passing props, not the this keyword. The this keyword in React is typically used inside class components to refer to the current instance of the component, while props are used to pass data from parent components to child components.

### minimayer file
- Minification is commonly used in web development to improve website performance by reducing file sizes, which leads to faster load times for users. Smaller file sizes also result in reduced bandwidth usage and improved overall efficiency.
- These minifiers typically have options to customize the level of minification and other settings according to your specific needs. They are often integrated into build tools and workflows, such as Webpack, Gulp, or Grunt, to automate the minification process during development and deployment.

### bundler( example: webpack, vit, parcel )/package/module
1. bundler
- A bundler is a tool used in web development to take multiple separate files (such as JavaScript modules, CSS files, images, etc.) and combine them into a single, optimized bundle.
- Bundlers are commonly used to improve web application performance by reducing the number of HTTP requests needed to load a webpage and by optimizing the size of the assets being delivered.
- Bundlers can also perform additional tasks such as transpilation (converting modern JavaScript syntax to older versions for wider browser compatibility), code splitting (breaking code into smaller chunks to load only what's needed), and minification (reducing the size of files by removing unnecessary characters).
- Examples of popular bundlers include Webpack, Parcel, Rollup, and Vite.

- Combining these concepts, when you use a bundler like Webpack, Vite, or Parcel in your web development workflow, you're typically dealing with multiple packages/modules of code that you've installed via a package manager. The bundler's job is to gather all of these separate files, optimize them as needed, and bundle them together into a single output file or files that can be efficiently delivered to the browser. This process helps manage dependencies, improve performance, and streamline the development and deployment of web applications.

### how create react app works??!
- Client-Server Architecture:
A React app follows a client-server architecture, where the client (the React app running in the browser) communicates with a server (backend) to fetch data, perform operations, and handle user requests.

- API Requests:
The React app makes HTTP requests to the backend server to interact with the server-side resources. These requests typically include operations such as retrieving data, submitting forms, updating records, or performing authentication.

- RESTful APIs or GraphQL:
The backend server exposes APIs (Application Programming Interfaces) that define endpoints for handling various operations.
These APIs can be implemented using RESTful principles (e.g., GET, POST, PUT, DELETE HTTP methods) or GraphQL for more flexible data fetching.

- Routing and Controllers:
Incoming API requests are routed to specific controllers or handler functions on the backend server.
Controllers handle the logic for processing the requests, interacting with the database (if needed), and returning appropriate responses to the client.

- Data Persistence:
The backend server typically interacts with a database (e.g., SQL, NoSQL) to store and retrieve data.
Data persistence involves operations such as querying data, inserting new records, updating existing records, and deleting records.

- Business Logic:
The backend server contains the business logic that governs the behavior of the application, including data validation, authorization, authentication, and any other - - application-specific rules.
Business logic ensures that the application operates correctly and securely according to the defined requirements.

- Authentication and Authorization:
The backend server handles user authentication and authorization to ensure that only authenticated users can access certain resources or perform specific actions.
Authentication mechanisms may include sessions, JSON Web Tokens (JWT), OAuth, or other authentication protocols.

- Middleware:
Middleware functions may be used to intercept and modify incoming requests or outgoing responses, perform additional processing, or add functionality such as logging, error handling, or request validation.

- Error Handling:
The backend server handles errors gracefully by providing appropriate error responses to the client, logging errors for debugging purposes, and preventing potential security vulnerabilities.

- Deployment and Scalability:
The backend server is deployed to a hosting environment (e.g., cloud infrastructure) where it can handle incoming requests from multiple clients.
The server architecture may be designed for scalability and resilience to handle varying levels of traffic and ensure high availability.

### npm vs yarn what is npm and yarn.
1. npm (Node Package Manager)
- npm is the default package manager for Node.js, a runtime environment for executing JavaScript code outside of a web browser.
- It is bundled with Node.js installation, so whenever you install Node.js, you also get npm.
- npm is used to install, manage, and distribute JavaScript packages and dependencies for Node.js projects.
- It provides a command-line interface (CLI) for various package management tasks, such as installing packages, updating dependencies, and running scripts defined in the project's package.json file.
- npm maintains a registry of publicly available packages called the npm Registry, where developers can publish and share their packages.

2. Yarn
- Yarn is a modern package manager for JavaScript projects developed by Facebook, Google, Exponent, and Tilde.
- It was created as an alternative to npm with the goal of addressing some of the shortcomings and performance issues of npm.
- Yarn is fully compatible with the npm ecosystem, meaning it can install npm packages and work with package.json files generated by npm.
- Yarn provides faster and more reliable dependency resolution and installation compared to npm, thanks to its deterministic dependency resolution algorithm and parallel package downloads.
- It offers features such as offline installation, caching, and workspace support, making it suitable for large-scale projects and continuous integration (CI) environments.
- Yarn also has a centralized package registry called the Yarn Registry, which mirrors the npm Registry and provides an alternative source for installing packages.

### ~ - tilde and ^ - caret in reactjs
1. ~ - tilde
- When you prefix a version number with a tilde (~), npm or Yarn will install the specified package version and allow patch updates (bug fixes) within the same minor version range.
- For example, if you specify "react": "~17.0.1", npm or Yarn will install version 17.0.1 of the react package and allow updates to any version within the 17.x.x range (e.g., 17.0.2, 17.1.0, etc.).
- The tilde restricts updates to the same minor version but allows for patch updates within that minor version.

2. ^ - caret
- When you prefix a version number with a caret (^), npm or Yarn will install the specified package version and allow both minor updates (new features) and patch updates (bug fixes) within the same major version range.
- For example, if you specify "react": "^17.0.1", npm or Yarn will install version 17.0.1 of the react package and allow updates to any version within the 17.x.x range (e.g., 17.1.0, 17.2.0, etc.).
- The caret restricts updates to the same major version but allows for both minor and patch updates within that major version.

### what is this package.lock
- The package-lock.json file is created by npm (Node Package Manager) and serves as a record of the exact versions of dependencies installed in a project. Here's a basic overview of what the package-lock.json file is and its purpose:

### npx what is this?
- npx is a command-line utility that comes bundled with npm (Node Package Manager). It stands for "Node Package Runner" and is used to execute npm packages without having to install them globally or locally. Here's a basic overview of what npx is and how it works: