This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

After `npm install`, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.

## Assumtions and notes

- Product list and pricing rules are fetched by calling mock backend APIs.
- For the simplicity, authentication and authorization are not implemented but you can 'log in' as a certain customer and get a token by selecting a customer in dropdown. The token is sent when calling fetchPricingRules API.
- Cart is emptied when changing users.
- A fetching error state exists in the store but the error flows haven't been implemented in UI yet.