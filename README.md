# Ong Client
### Project created as a team in the aceleration of React.JS on Alkemy, working with agile methodologies like JIRA.

[![Home](https://i.ibb.co/r6Z6fR5/alkmy.png "Home")](https://i.ibb.co/r6Z6fR5/alkmy.png "Home")
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