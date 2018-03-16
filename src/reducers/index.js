import undoable, {distinctState} from 'redux-undo';
import React from 'react';
const boxes = (state = {}, action) => {
    switch (action.type) {
        case "ADD_BOX":
            let newId = action.id;
            return [
                ...state,
                {
                    id: action.id,
                    position: action.position
                }
            ]
        default:
            return state
    }
}
const undoableBoxes = undoable(boxes, {
    filter: distinctState()
});

export default undoableBoxes