# Github repo serch

check the live version [here](http://rohit-github-search.surge.sh/)

### Setup and Run

- `$ git clone https://github.com/rohitdaryanani/github-search.git && cd github-search` will download the app and cd to the folder once done.

- `yarn` - to install dependencies.
- `yarn start` - Runs the app in development mode.
- `yarn build` - Builds the app for production to the build folder.

### Tech stack and libraries

- **React** - frontend/view library
- **Create React App** - react project generator facebook
- **Styled components** - for css in js
- **Axios** - HTTP client

### file structure

- Top Level

```
├── README.md
├── build
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.js
    ├── App.test.js
    ├── assets
    │   ├── eye.svg
    │   └── star.svg
    ├── components
    │   ├── Card.js
    │   ├── Layout.js
    │   ├── Pages.js
    │   ├── Search.js
    │   └── Spinner.js
    ├── hooks
    │   └── use-search.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js

```

### Problem

- React application to view a list of GitHub repositories with search functionality
  - Display repository’s Id, name, watchers_count
  - Sort the results by the number of stars
  - Have a search input that will show results (from all possible repositories) to those that have its name matches the search field.
- Add on
  - Pagination

### Solution

- Components - All the components are designed with the thought of being reusable and state independent.
  - Card - Displaying data info
  - Layout - Managing the content structure
  - Pages - Manage pagination
  - Search - Search input bat
  - Spinner - Pre loader for async actions
- Hooks
  - use-search - manage the data fetching and state for the App

### Issues

Githubs search API limits to the first 1000 search results available,
