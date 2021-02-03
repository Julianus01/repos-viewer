# Repos Viewer

React project created with [Create React App](https://github.com/facebook/create-react-app). Search a github user by its username and view its profile picture, name and repositories ( number of stars and forks )

## Demo

Project is deployed with the help of [Vercel](https://vercel.com) ( Creators of [Next Js](https://nextjs.org/) ).
Deployment task took about 10 minutes, connecting my personal github account to them and then Vercel taking care of the rest.

- [Demo Link](https://repos-viewer.vercel.app/)

## How to run

Run the following commands

- npm install
- npm start

## Tests

In order to see and execute written tests, execute the following command

- npm run cypress

## Packages used

- [Redux](https://github.com/reduxjs/redux) for global state management, design pattern being that of [Ducks](https://github.com/erikras/ducks-modular-redux) ( redux ducks -> reducks ). Picked ducks because of readability, low cognitive stress because of dealing with a single file instead of 100 and the overall boilerplate that evertbody cries about, is 'reduced' or the developer perceives it reduced, which is a great improvement.
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) for global state side effects. Compared to [Redux Saga's](https://redux-saga.js.org/) complex and high learning curve, Thunks offer 80% of use with 20% of the effort and complexity.
- [Axios](https://www.npmjs.com/package/axios) for http calls, middlewares, mapped responses and networking in general.
- [Styled Components](https://github.com/styled-components/styled-components) for styling and css, a component based library which complents the base nature of React. Conditional rendering, theming and custom style guides can be implemented with ease of use and readability. One of my favorites.
- [React Use](https://github.com/streamich/react-use) is a collection of day to day hooks that make life better. From simple things like useClickAway and useWindowSize, to more edge case hooks like useIsomorphicLayoutEffect and useCustomCompareEffect.
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom), your basic routing library which does the job beautifully
- [Cypress](https://github.com/cypress-io/cypress) for End to End testing. Very nice tool.
