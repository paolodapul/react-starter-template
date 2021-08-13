# React Starter Template

---

I started this project to learn the ins and outs of configuring a React application from the ground up. This is an opinionated approach to creating a React app.

I created this to also give myself and others a starting point for React development that will provide the following features:

- Super minimal configuration
- Resource-friendly local serving (everyone should be able to develop React apps with no friction even with minimal machine specs)
- Standard formatting and linting. This is to make code uniform for the whole dev team.
- Ready to use components for a simple CRUD app including routing, state management and data fetching.
- Support for automated testing.
- Extra safety with pre-commit and pre-push hooks.
- Apollo Client/GraphQL support.

## How to use

---

As of 08/13/2021, I setup the project to be built first before serving locally.

1. Run `npm run build` to create a Webpack bundle file in `dist/` folder.
2. Run `npm start` to start a local development server. Changes in your `src` folder will be detected on save and will trigger a hot reload.

## Changelog

---

08/13/2021

- Created initial package.json file
- Added Webpack and loaders, Babel, React, React DOM
- Configured Webpack for module import resolution
- Created starter React components
