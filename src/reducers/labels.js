import undoable, {distinctState} from 'redux-undo';
const labels = (state = {}, action) => {
    switch (action.type) {
        case "ADD_LABEL":
            return [
                ...state,
                {
                    id: action.id,
                    shape: action.shape,
                    points: action.points
                }
            ]
        default:
            return state
    }
}
const undoableLabels = undoable(labels, {
    filter: distinctState()
});

export default undoableLabels