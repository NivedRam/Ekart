import { combineReducers } from "redux";

// Slices
import productReducer from"./Slices/Product"
// ----------------------------------------------------------------------

const rootReducer = combineReducers({
product:productReducer
});

export default rootReducer;
