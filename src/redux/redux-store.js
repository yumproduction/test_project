import thunkMiddleWare from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import mealReducer from './meal-reducer';



let reducers = combineReducers({
    meal: mealReducer,
}
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.__store__ = store;

export default store;