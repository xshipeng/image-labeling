import { connect } from 'react-redux';
import AddPolygon from '../components/AddPolygon.js';
import { addLabel } from '../actions'

const convertStatetoArray = (labellist) => {
  return Object.keys(labellist).reduce((labels, key) => {
    labels.push(labellist[key]);
    return labels;
  }, []);
};

const mapStateToProps = (state) => {
  const labelsArray = convertStatetoArray(state.labels.present)
  return {
    labels: labelsArray,
    imageProps:state.imageProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCurrentLabel: (id, shape, points) => {
      dispatch(addLabel(id, shape, points));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPolygon);
