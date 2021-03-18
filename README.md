# A React based Task app - users can create or delete tasks. They can add and remove reminders for each.

### Run `npm install` to install dependencies in package.json file

### Run `npm start` to run the app in development mode

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\

### Run `npm run server` to run the JSON server to act as a makeshift backend

### Run `npm run build` to build the app for production.

Creates a `build` folder.\
It bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\

This task app was built alongside working with a Brad Traversy React course

### Fundamental Learnings:

- React is a component based library:
  - You can build a dynamic application/site made up of individual components
  - Components are imported into one another. We have parent and child components
  - We have one root component file (app.js) where all components end up to render the page
  - Index.js is used to render the app into the index.html
- Heavily dependent on the flow and use of props and/or state between components
  - Props are declared where the components are imported to and are caught & acted on in the individual components file
  - We have component state and global/app state
  - We can use Redux for state management
- Usefull Hooks:
  - BrowserRouter and Route from react-router-dom: allowing us to work with Routing
  - useState from react: allows us to use state in functional components
  - useEffect from react: allows us to do something after the page is rendered
  - Link from react-router-dom: instead of using the <a> tag for links
  - PropTypes from prop-types: checks the types in the props object against conditions we set to warn us if they don't match.
  - useLocation from react-router-dom: gets the current URL
- Using JSON server
  - allows for testing for API calls and workign with pulling from a database
