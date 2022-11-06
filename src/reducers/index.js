import changeTheNumber from "./numController";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumber
    }
);

export default reducers;