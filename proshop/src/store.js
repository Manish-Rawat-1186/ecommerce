import {  combineReducers, applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import {productDetailsReducer, productListReducer} from "./reducers/productReducer";


const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
        }
    );


const middlewave = [thunk]

const initialState = {}

const store = createStore(reducer,
     initialState,
     composeWithDevTools(applyMiddleware(...middlewave))
)

export default store;