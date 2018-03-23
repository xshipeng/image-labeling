import { connect } from "react-redux";
import SubmitButton from "../components/SubmitButton.js";
// import {setImageUrl} from "../actions";

// const mapDispathToProps = (dispatch) => {
//     return {
//         setImageUrl: (imageUrl) => {
//             dispatch(setImageUrl(imageUrl));
//         }
//     }
// }

const mapStateToProps = (state) => {
    const labels = state.labels.present;
    return {
        hasLabels: Object.keys(labels).length > 0,
        labels: labels,
    };
};

const SubmitButtonContainer = connect(mapStateToProps)(SubmitButton);

export default SubmitButtonContainer;