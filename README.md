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