import { connect } from "react-redux";
import SubmitButton from "../components/SubmitButton.js";
import { setNextImage, removeLabels } from "../actions";
import { ActionCreators as UndoActionCreators } from 'redux-undo';

const mapDispathToProps = (dispatch) => {
    return {
        setNextImage: (imageId, imageUrl) => {
            dispatch(setNextImage(imageId, imageUrl));

        },
        deleteLabels: () => {
            dispatch(removeLabels());
            dispatch(UndoActionCreators.clearHistory());
        }
    }
}
const mapStateToProps = (state) => {
    const labels = state.labels.present;
    return {
        imageId: state.imageProps.imageId,
        imageUrl: state.imageProps.imageUrl,
        hasLabels: Object.keys(labels).length > 0,
        labels: labels,
    };
};

const SubmitButtonContainer = connect(mapStateToProps, mapDispathToProps)(SubmitButton);

export default SubmitButtonContainer;