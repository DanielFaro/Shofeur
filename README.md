# Project Summary

Thanks for taking a look at my project. My goal was to create a straightforward luxury vehicle rental site for Los Angeles.
For UI design I went with simple boxes in a grid format. I used colors and buttons more easily identifyable by the color blind.
Being 'red-green' colorblind myself, I belive every section and button are appropriate. In addition I added drop shadow and
increased scale on hover for better clarity and interactivity. I decided to have a fixed navbar at the page top, which contains
section links. This way a user knows what the page contains on first entry, and I also added autoscrolling so a user can navigate
anywhere on the page through the navbar. I put a footer at the page bottom, only visible when fully scrolled down. This was to
prevent clutter as we already have a fixed navbar. I added social network icons and common section links which would need to be 
added in the future. I am happy with the simple filtering I provided in the rental section. Data is first retrieved from port:5000
which is running an express server, and fetching data from mondodb. This data is then set to component state and filtered in the 
VehicleList component. 

I did not have enough time to do everything I wanted because of the 4th of July Holiday. There are a few additions I would make 
if given the chance. For one I would add typescript to ensure proper data structures. Instead of styled components, I could have used
tailwind, but did not as I am only slightly familiar with TailwindCSS and would not have guaranteed finishing application functionality.
I would have liked to add resizing/breakpoints for different screen sizes. In addition, upon adding more pages, Next.js could be used
for navigation using Link components. For a fully loaded render more quickly, a static page could be served from the backend. 
Thank you.

## Available Scripts

In a terminal, navigate to /backend and 

### `node index.js` to connect to mongodb
If you wish to make more fake data, simply uncomment the code in backend/index.js and rerun `node index.js`

In a terminal, navigate to testapp/master folder

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
