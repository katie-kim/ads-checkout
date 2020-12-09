import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './redux/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function render(
  ui,
  {
    initialState,
    store = createStore(
      reducer,
      composeEnhancers(
        applyMiddleware(thunk),
      ),
    ),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }

