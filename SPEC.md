#### Clone: 

```
git clone https://github.com/mdmahmudurrahman/react-redux-demo-ps.git

```

#### Than run the command

```
npm install

npm start -s

``` 


#### Suppose we have the component “App” from layout, it will contain the component for Header, footer and a region for container/dynamic components(this.props.children), it will get it’s dynamic components/children from the  route configuration file, so we have to import the “App”  component in the route file and use it as a parent route  in the routes.js file.

```
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Courses from './components/course/CoursesPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={Courses} />
    <Route path="about" component={AboutPage} />
  </Route>
);

```


    2. Here the components “HomePage” and “AboutPage” will be rendered as a children of the “App” component.


    3. <IndexRoute  /> will render the default child component inside the Layout/App component.
      
    4.  The final step to use the route configuration in the application is to import the routes.js in the application’s  entry point, that is src/index.js(or some what you use in the package.json file like as following I used)


```
entry: [
  'eventsource-polyfill', // necessary for hot reloading with IE
  'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
  path.resolve(__dirname, 'src/index')
]
```

#### ** In the src/index.js, use the following codes,

```
import 'babel-polyfill'; //there are a set of features in es6
// that babel can't transpile, so for those you do need to use 
// 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import css file too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


render(
  <Router history={browserHistory} routes={routes} />,
    document.getElementById('app');
);
```



#### ** Here the id “app” is in the index.html

#### Header.js

```
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about">About</Link>
      {" | "}
      <Link to="/courses">Courses</Link>
    </nav>
  );
};

export default Header;
```
