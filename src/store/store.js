import {
  createStore,
  combineReducers,
  applyMiddleware
}                              from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk                   from 'redux-thunk';
import * as reducers           from './reducers';


const data=combineReducers({ ...reducers });

const middleware=applyMiddleware(thunk);
const devToolsMiddleware=composeWithDevTools(middleware);
const enhancer={
  development: devToolsMiddleware,
  production: middleware,
};
const { NODE_ENV }=process.env;
export const store=createStore(
  data,
  enhancer[NODE_ENV]
);