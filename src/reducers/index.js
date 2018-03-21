import {combineReducers} from "redux";
import labels from "./labels";
import imageProps from "./imageProps";

const main=combineReducers({
    labels:labels,
    imageProps: imageProps,
})

export default main;