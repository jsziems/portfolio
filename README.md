# Setting Up the App
## Terminal:

```
$ npx create-react-app portfolio
$ cd portfolio
$ npm install --save bootstrap reactstrap react-router-dom
```

## VSC:
### Edit App.js and modify the imports:
```
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
```
### Edit App.js and modify the parent `<div>` tag 
```
<div className="App">
      New App
    </div>
```
## Test in Terminal
```
$ npm start
```

# Build app's structure
## Create Components
### Create a 'components' folder under src
### Create a js file for each component (for example, Footer.js, Header.js, etc.). Note that React components start with a capitol letter.
### In the js file:
#### import components from reactstrap
#### Create a function, giving it your React component name (name must start with an uppercase letter). This app uses functional components (vs. class components)
#### Inside the function, have a return() that includes a single parent element (often a div tag). Note:  The code inside the return is JSX, which is a feature of React that allows writing JavaScript code that looks like HTML.
#### After the return, export the function.
### In the App.js file:
#### import the component from the file in the components folder.
#### Add the component to the JSX in the main function.

## Example
### Footer component (from src/components/Footer)
```
import { Row } from 'reactstrap'

const Footer = () => {
    return(
        <footer>
            <Row>
                <p>Janet Ziems</p>
            </Row>
        </footer>
    )
}

export default Footer
```
### App.js
```
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      test
      <Footer />
    </div>
  );
}

export default App;
```

# REACT STRAP STANDARD README FILE:




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
