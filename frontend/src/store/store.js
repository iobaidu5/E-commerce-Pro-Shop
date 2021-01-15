import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './reducers/productListReducer.js';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});

const initiaState = {};
const middleware = [thunk];

const store = createStore(reducer , initiaState, composeWithDevTools(applyMiddleware(middleware)));


export default store;