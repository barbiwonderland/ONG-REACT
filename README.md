# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<br />

# Documentation

## ProgressBar

Provide up-to-date feedback on the progress of a workflow or action

## Example

Default progress bar.

![Default ProgresBar](https://i.ibb.co/6vbncyM/Pregress-Bar-Indeterminate.png)

```javascript
<ProgressBar now={25} />
```

## Indeterminate

![indeterminate ProgresBar](https://i.ibb.co/WsxnKWg/Progress-Bar-Indeterminate.png)

```javascript
<ProgressBar variant:indeterminate />
```

| Parameter | Type              | Description                                                 |
| :-------- | :---------------- | :---------------------------------------------------------- |
| `now`     | `number`          | Current value of progress                                   |
| `variant` | `'indeterminate'` | Use indeterminate or query when there is no progress value. |

## LoaderSpinner 

Reusable Spinner component to visualize the information load.

Using: https://www.npmjs.com/package/react-loader-spinner