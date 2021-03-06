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

- [Redux](https://github.com/reduxjs/redux) for global state management, design pattern being that of [Ducks](https://github.com/erikras/ducks-modular-redux) ( redux ducks -> reducks ). Picked ducks because of readability and low cognitive stress when dealing with a single file instead of 100. The overall boilerplate that everybody cries about is 'reduced', or the developer perceives it reduced, which is a great improvement.
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) for global state side effects. Compared to [Redux Saga's](https://redux-saga.js.org/) complexity and high learning curve, Thunks offer 80% of use with 20% of the effort and complexity.
- [Axios](https://github.com/axios/axios) for http calls, middlewares, mapped responses and networking in general.
- [Styled Components](https://github.com/styled-components/styled-components) for styling and css, a component based library which compliments the base nature of React. Conditional rendering, theming and custom style guides can be implemented with ease of use and readability. One of my favorites.
- [React Use](https://github.com/streamich/react-use) is a collection of day to day hooks that make life better. From simple things like useClickAway and useWindowSize, to more edge case hooks like useIsomorphicLayoutEffect and useCustomCompareEffect.
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom), your basic routing library which does the job beautifully
- [Cypress](https://github.com/cypress-io/cypress) for End to End testing. Very nice tool.

## Rate limit

Project is using [github's api](https://developer.github.com/v3/repos/#list-user-repositories) in order to function. Github is imposing rate limits, meaning the project cannot run as many http requests towards github as it wants. Currently the rate limit for an unauthorized ip is **60 tries** per hour. If for any reason while running the project or cruising around on the demo, you get the **Not Found** page of a user which was previously working, it is because the rate limit has been hit and untill the hour resets itself, there are no more free tries.
