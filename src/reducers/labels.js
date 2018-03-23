import undoable from 'redux-undo';
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
        case "DELETE_LABELS":
            return []
        default:
            return state
    }
}
const undoableLabels = undoable(labels);

export default undoableLabels