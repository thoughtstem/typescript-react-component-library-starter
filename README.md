# Typescript React Component Library Starter

We couldn't find a component library starter with all the things we wanted, so we made one.  Features:

* Rollup for building the library (`npm run build`)
* Webpack for hot reloading and live dev (`npm run start`)
* React, typescript, and material ui are all installed

# Getting started

```
git clone git@github.com:thoughtstem/typescript-react-component-library-starter.git my-library
cd my-library
npm i
npm run start
```

# Developing components

Develop your components as you wish in `my-library/src`.  You can configure the page that Webpack is serving by editing `dev-server/index.html` and `dev-server/index.js`. Get all the nice benefits of a hot-swapping dev server during development.

# Using components as a library

When you're ready to try using `my-library` in `some-other-app` and want to test it locally:

```
cd my-library
npm run build
yarn link
cd ../some-other-app
yarn link my-library
```

Then simply `import {CoolComponent} from "my-library"`.  Note that to see change to `CoolComponent` in `some-other-app`, you'll need to run another `npm run build` in `my-library` (outputs the built library to `dist/`).  If you find yourself making many changes to `CoolComponent`, you should probably go back to using `npm run start` in `my-lib` -- a much faster workflow.

